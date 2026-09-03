#!/usr/bin/env node
/* bounce-sync.mjs — haalt bounces en spamklachten bij Brevo op en zet die adressen
 * op Odoo's uitgesloten-lijst (model mail.blacklist).
 *
 * WAAROM DIT BESTAAT
 * Odoo verstuurt via de Brevo SMTP-relay. Brevo vervangt daarbij het envelope-retouradres
 * door zijn eigen bouncedomein (gw.d.sender-sib.com), dus Odoo's bounce@denode.be krijgt
 * de foutmeldingen nooit te zien en Odoo's bounceteller blijft op nul staan. Dit script is
 * de ontbrekende terugkoppeling: het vraagt Brevo wat er misging en vertelt het aan Odoo.
 *
 * GEEN AFHANKELIJKHEDEN. Node 18+ (fetch is ingebouwd). Draait vanaf elke map.
 *
 * EENMALIGE SETUP
 *   1) Brevo-API-sleutel: app.brevo.com -> tandwiel -> SMTP & API -> API keys -> nieuwe sleutel.
 *   2) Odoo-API-sleutel: denode.odoo.com -> je avatar -> My Profile -> Account Security
 *      -> New API Key. (Een API-sleutel, niet je paswoord.)
 *   3) Maak ~/.denode-bounce.json met onderstaande inhoud en zet de rechten dicht:
 *
 *        {
 *          "brevoApiKey": "xkeysib-...",
 *          "odoo": {
 *            "url":    "https://denode.odoo.com",
 *            "db":     "denode",
 *            "login":  "paul@denode.be",
 *            "apiKey": "..."
 *          }
 *        }
 *
 *      chmod 600 ~/.denode-bounce.json
 *
 * GEBRUIK
 *   node bounce-sync.mjs                 # laatste 3 dagen, schrijft naar Odoo
 *   node bounce-sync.mjs --dry-run       # toont alleen wat het zou doen
 *   node bounce-sync.mjs --days=30       # ruimer venster (Brevo bewaart ~30 dagen)
 *   node bounce-sync.mjs --quiet         # geen macOS-notificatie
 *
 * De eerste keer: draai hem met --days=30 --dry-run en kijk of de lijst klopt.
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFile } from "node:child_process";

const CONFIG = path.join(os.homedir(), ".denode-bounce.json");
const STAND  = path.join(os.homedir(), ".denode-bounce-stand.json");
const LOG    = path.join(os.homedir(), ".denode-bounce.log");

const arg  = (n, d) => { const m = process.argv.find(a => a.startsWith("--" + n + "=")); return m ? m.split("=")[1] : d; };
const flag = (n) => process.argv.includes("--" + n);
const DAGEN   = Number(arg("days", 3));
const DRYRUN  = flag("dry-run");
const QUIET   = flag("quiet");

/* Brevo-gebeurtenissen die een adres definitief onbruikbaar maken.
   softBounces en deferred bewust NIET: die zijn tijdelijk.
   unsubscribed ook niet: Odoo verwerkt zijn eigen uitschrijflink al. */
const SOORTEN = ["hardBounces", "blocked", "invalid", "spam"];

function stop(bericht) { console.error("\n✗ " + bericht + "\n"); process.exit(1); }

function config() {
  if (!fs.existsSync(CONFIG)) stop("Geen " + CONFIG + ". Zie de setup bovenaan dit bestand.");
  const st = fs.statSync(CONFIG);
  if (st.mode & 0o077) console.warn("! Let op: " + CONFIG + " is leesbaar voor anderen. Doe: chmod 600 " + CONFIG);
  let c; try { c = JSON.parse(fs.readFileSync(CONFIG, "utf8")); }
  catch (e) { stop("Kan " + CONFIG + " niet lezen als JSON: " + e.message); }
  for (const k of ["brevoApiKey"]) if (!c[k]) stop("Veld '" + k + "' ontbreekt in " + CONFIG);
  for (const k of ["url", "db", "login", "apiKey"]) if (!c.odoo || !c.odoo[k]) stop("Veld 'odoo." + k + "' ontbreekt in " + CONFIG);
  return c;
}

/* ---------- status wegschrijven in de vault ----------
 * Twee bestanden in <projectmap>/_status/ :
 *   bounce-sync.json          de laatste run, overschreven (is het nu gezond?)
 *   bounce-sync-history.tsv   één regel per run, aangevuld (liep het de laatste weken?)
 * Die map zit in de Memex-vault en is dus leesbaar voor een agent, ook als Paul
 * niet aan deze Mac zit. Bestaat de map niet (vault verhuisd), dan waarschuwt
 * het script maar faalt het niet — de kerntaak is belangrijker dan de rapportage.
 */
const STATUSDIR_STANDAARD = "/Users/paul/Library/Mobile Documents/iCloud~md~obsidian/Documents/PDC Memex Consolidation/Outputs/Projects/DeNode New Collaborative AI Website/_status";
function schrijfStatus(cfg, data) {
  const dir = (cfg && cfg.statusDir) || STATUSDIR_STANDAARD;
  try {
    fs.mkdirSync(dir, { recursive: true });
    const nu = new Date().toISOString();
    fs.writeFileSync(path.join(dir, "bounce-sync.json"), JSON.stringify({ tijdstip: nu, ...data }, null, 1));
    const kolommen = [nu, data.status, data.venster_dagen, data.brevo_gebeurtenissen, data.toegevoegd, data.odoo_uitgesloten, (data.melding || "").replace(/\s+/g, " ")].join("\t");
    fs.appendFileSync(path.join(dir, "bounce-sync-history.tsv"), kolommen + "\n");
  } catch (e) {
    console.warn("  ! kon status niet wegschrijven in " + dir + " (" + e.message.slice(0, 80) + ")");
  }
}

/* ---------- Brevo ---------- */
async function brevoEvents(key, soort, dagen) {
  const uit = [];
  for (let offset = 0; ; offset += 500) {
    const u = new URL("https://api.brevo.com/v3/smtp/statistics/events");
    u.searchParams.set("limit", "500");
    u.searchParams.set("offset", String(offset));
    u.searchParams.set("days", String(dagen));
    u.searchParams.set("event", soort);
    const r = await fetch(u, { headers: { "api-key": key, accept: "application/json" } });
    if (r.status === 404) return uit;                      // Brevo geeft 404 bij nul resultaten
    if (!r.ok) {
      const body = await r.text().catch(() => "");
      console.warn("  ! Brevo weigerde '" + soort + "' (HTTP " + r.status + ")");
      if (body) console.warn("    " + body.slice(0, 200));
      uit.mislukt = true;
      return uit;
    }
    const j = await r.json();
    const rij = j.events || [];
    for (const e of rij) if (e.email) uit.push({ email: String(e.email).trim().toLowerCase(), soort, datum: e.date || "" });
    if (rij.length < 500) return uit;
  }
}

/* ---------- Odoo JSON-RPC ---------- */
function odooFactory({ url, db, login, apiKey }) {
  const call = async (service, method, args) => {
    const r = await fetch(url.replace(/\/$/, "") + "/jsonrpc", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", method: "call", params: { service, method, args } }),
    });
    if (!r.ok) throw new Error("Odoo HTTP " + r.status);
    const j = await r.json();
    if (j.error) {
      const m = (j.error.data && j.error.data.message) || j.error.message || JSON.stringify(j.error);
      throw new Error(String(m).slice(0, 300));
    }
    return j.result;
  };
  let uid = null;
  return {
    async login() {
      uid = await call("common", "authenticate", [db, login, apiKey, {}]);
      if (!uid) stop("Odoo weigert de aanmelding. Controleer db, login en API-sleutel in " + CONFIG + ".");
      return uid;
    },
    kw: (model, method, args, kwargs = {}) => call("object", "execute_kw", [db, uid, apiKey, model, method, args, kwargs]),
  };
}

/* ---------- hoofdprogramma ---------- */
const c = config();
console.log("\nbounce-sync — venster: laatste " + DAGEN + " dag(en)" + (DRYRUN ? "  [DRY RUN, niets wordt geschreven]" : ""));

console.log("\nBrevo bevragen…");
let gebeurtenissen = [];
let brevoFouten = 0;
for (const s of SOORTEN) {
  const rij = await brevoEvents(c.brevoApiKey, s, DAGEN);
  if (rij.mislukt) brevoFouten++;
  else console.log("  " + s.padEnd(12) + " " + rij.length);
  gebeurtenissen = gebeurtenissen.concat(rij);
}

/* Als Brevo alles weigert, is dit geen "nul bounces" maar een storing.
   Luid falen: notificatie + exitcode 1, zodat een stille dagelijkse taak
   niet maanden lijkt te werken terwijl ze niets ophaalt. */
if (brevoFouten === SOORTEN.length) {
  const uitleg = "Brevo weigert alle aanvragen (" + brevoFouten + "/" + SOORTEN.length + "). Meestal een niet-toegelaten IP-adres: " +
                 "app.brevo.com -> Security -> Authorized IPs. Zie de melding hierboven voor het adres.";
  console.error("\n✗ " + uitleg + "\n");
  fs.appendFileSync(LOG, new Date().toISOString() + "  FOUT: Brevo weigert alle aanvragen\n");
  schrijfStatus(c, { status: "FOUT", venster_dagen: DAGEN, brevo_gebeurtenissen: null, toegevoegd: null, odoo_uitgesloten: null, melding: uitleg });
  if (!QUIET && process.platform === "darwin") {
    execFile("osascript", ["-e",
      'display notification "Brevo weigert de API-sleutel — vermoedelijk een nieuw IP-adres. Zie ~/Library/Logs/denode-bounce-sync.log" ' +
      'with title "DeNode bounce-sync FAALT" sound name "Basso"'], () => {});
    await new Promise(r => setTimeout(r, 1500));
  }
  process.exit(1);
}

const perAdres = new Map();
for (const g of gebeurtenissen) if (!perAdres.has(g.email)) perAdres.set(g.email, g);
const adressen = [...perAdres.keys()];
console.log("  → " + adressen.length + " uniek(e) adres(sen)");

/* Odoo altijd aanspreken, ook bij nul adressen: dan bewijst elke run dat
   beide kanten leven in plaats van alleen de Brevo-kant. */
const odoo = odooFactory(c.odoo);
const uid = await odoo.login();
const beginstand = await odoo.kw("mail.blacklist", "search_count", [[["active", "=", true]]]);
console.log("\nOdoo bereikbaar (uid " + uid + ") — uitgesloten adressen nu: " + beginstand);

if (!adressen.length) {
  console.log("\nNiets te doen.\n");
  fs.appendFileSync(LOG, new Date().toISOString() + "  0 adressen (venster " + DAGEN + "d), Odoo ok, lijst " + beginstand + "\n");
  schrijfStatus(c, { status: DRYRUN ? "OK-dryrun" : "OK", venster_dagen: DAGEN, brevo_gebeurtenissen: 0, toegevoegd: 0, odoo_uitgesloten: beginstand, melding: "geen bounces in het venster" });
  process.exit(0);
}

const stand = fs.existsSync(STAND) ? JSON.parse(fs.readFileSync(STAND, "utf8")) : { gedaan: [] };
const alGedaan = new Set(stand.gedaan || []);

const nieuw = [], heractiveerd = [], bestond = [], mislukt = [];
for (const e of adressen) {
  try {
    const gevonden = await odoo.kw("mail.blacklist", "search_read", [[["email", "=", e]], ["id", "active"]], { limit: 1, context: { active_test: false } });
    if (gevonden.length && gevonden[0].active) { bestond.push(e); continue; }
    if (DRYRUN) { (gevonden.length ? heractiveerd : nieuw).push(e); continue; }
    if (gevonden.length) { await odoo.kw("mail.blacklist", "write", [[gevonden[0].id], { active: true }]); heractiveerd.push(e); }
    else { await odoo.kw("mail.blacklist", "create", [{ email: e }]); nieuw.push(e); }
    alGedaan.add(e);
  } catch (err) { mislukt.push(e + " — " + err.message); }
}

/* ---------- rapport ---------- */
const regel = (t, a) => a.length ? "\n" + t + " (" + a.length + ")\n" + a.map(x => "  " + x + "  [" + (perAdres.get(x) ? perAdres.get(x).soort : "?") + "]").join("\n") : "";
console.log(regel("Toegevoegd aan de uitgesloten-lijst", nieuw));
console.log(regel("Opnieuw geactiveerd", heractiveerd));
if (bestond.length) console.log("\nStond er al op: " + bestond.length);
if (mislukt.length) console.log("\n! Mislukt (" + mislukt.length + ")\n" + mislukt.map(x => "  " + x).join("\n"));

if (!DRYRUN) {
  stand.gedaan = [...alGedaan].slice(-5000);
  stand.laatsteRun = new Date().toISOString();
  fs.writeFileSync(STAND, JSON.stringify(stand, null, 1));
  fs.appendFileSync(LOG, new Date().toISOString() + "  +" + nieuw.length + " nieuw, " + heractiveerd.length + " heractiveerd, " + bestond.length + " bestond al, " + mislukt.length + " mislukt\n");
}

const totaal = await odoo.kw("mail.blacklist", "search_count", [[["active", "=", true]]]);
console.log("\nUitgesloten adressen in Odoo: " + totaal + "\n");
schrijfStatus(c, {
  status: mislukt.length ? "DEELS" : (DRYRUN ? "OK-dryrun" : "OK"),
  venster_dagen: DAGEN,
  brevo_gebeurtenissen: adressen.length,
  toegevoegd: nieuw.length + heractiveerd.length,
  odoo_uitgesloten: totaal,
  melding: (nieuw.length + heractiveerd.length) + " uitgesloten, " + bestond.length + " stond er al" + (mislukt.length ? ", " + mislukt.length + " MISLUKT" : ""),
  adressen: nieuw.concat(heractiveerd).slice(0, 50),
});

const veranderd = nieuw.length + heractiveerd.length;
if (veranderd && !QUIET && !DRYRUN && process.platform === "darwin") {
  execFile("osascript", ["-e",
    'display notification ' + JSON.stringify(nieuw.concat(heractiveerd).slice(0, 5).join(", ").slice(0, 200)) +
    ' with title "DeNode bounces" subtitle ' + JSON.stringify(veranderd + " adres(sen) uitgesloten — totaal " + totaal) +
    ' sound name "Glass"'], () => {});
}
