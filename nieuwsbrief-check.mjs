#!/usr/bin/env node
/* nieuwsbrief-check.mjs — meldt nieuwe nieuwsbrief-inschrijvingen op je Mac.
 *
 * Telt de documenten in de "nieuwsbrief"-collectie (met je Juno-admin-key, zelfde
 * mechanisme als nieuwsbrief-export.mjs), vergelijkt met de vorige stand
 * (~/.denode-nieuwsbrief-stand.json) en toont bij nieuwe inschrijvingen een
 * macOS-notificatie met de nieuwe adressen.
 *
 * Handmatig draaien:  node tools/nieuwsbrief-check.mjs [--staging]
 * Automatisch:        zie launchd-instructies in "NIEUWSBRIEF — Setup & Export-procedure.md"
 */
import { listDocs } from "@junobuild/core";
import { Ed25519KeyIdentity } from "@dfinity/identity";
import { execFileSync } from "child_process";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";

const STAGING = process.argv.includes("--staging");
const SATELLITE_ID = STAGING ? "uaw2u-wqaaa-aaaal-as2cq-cai" : "uhx4a-3iaaa-aaaal-as2ca-cai";
const STAND = path.join(os.homedir(), `.denode-nieuwsbrief-stand${STAGING ? "-staging" : ""}.json`);

function vindToken() {
  if (process.env.JUNO_TOKEN) return JSON.parse(process.env.JUNO_TOKEN); // fallback: token als env-var
  for (const p of [
    path.join(os.homedir(), "Library/Preferences/juno-nodejs/config.json"), // juno-CLI (conf-package, macOS-default)
    path.join(os.homedir(), "Library/Application Support/juno/juno.json"),
    path.join(os.homedir(), ".config/juno/juno.json"),
    path.join(os.homedir(), ".juno/juno.json"),
  ]) {
    if (!fs.existsSync(p)) continue;
    const cfg = JSON.parse(fs.readFileSync(p, "utf8"));
    const token = cfg.token ?? cfg.key ?? (Array.isArray(cfg.tokens) ? cfg.tokens[0]?.token : undefined);
    if (token) return token;
  }
  return null;
}
const token = vindToken();
if (!token) { console.error("Geen Juno-CLI-key gevonden — draai eerst `juno login`."); process.exit(1); }
const identity = Ed25519KeyIdentity.fromParsedJson(token);

const alles = [];
let startAfter;
for (;;) {
  const page = await listDocs({
    collection: "nieuwsbrief",
    filter: { paginate: { startAfter, limit: 200 } },
    satellite: { identity, satelliteId: SATELLITE_ID },
  });
  alles.push(...page.items);
  if (page.items.length < 200) break;
  startAfter = page.items[page.items.length - 1].key;
}

const vorige = fs.existsSync(STAND) ? JSON.parse(fs.readFileSync(STAND, "utf8")) : { keys: [] };
const nieuw = alles.filter((d) => !vorige.keys.includes(d.key));
fs.writeFileSync(STAND, JSON.stringify({ keys: alles.map((d) => d.key), laatsteCheck: new Date().toISOString() }));

if (!nieuw.length) { console.log(`Geen nieuwe inschrijvingen (totaal: ${alles.length}).`); process.exit(0); }

const lijst = nieuw.map((d) => d.key).join(", ");
console.log(`${nieuw.length} nieuwe inschrijving(en): ${lijst} (totaal: ${alles.length})`);
try {
  execFileSync("osascript", ["-e",
    `display notification ${JSON.stringify(lijst.slice(0, 120))} with title "DeNode nieuwsbrief" subtitle "${nieuw.length} nieuwe inschrijving(en) — totaal ${alles.length}" sound name "Glass"`]);
} catch { /* geen GUI-sessie (bv. SSH) — console-output volstaat */ }
