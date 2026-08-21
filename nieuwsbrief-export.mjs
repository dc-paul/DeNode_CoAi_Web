#!/usr/bin/env node
/* nieuwsbrief-export.mjs — haalt alle nieuwsbrief-inschrijvingen uit de satellite-Datastore
 * en schrijft een CSV die rechtstreeks in Odoo importeerbaar is (mailinglijst-import).
 *
 * De collectie "nieuwsbrief" staat op read=Restricted: alleen een identity die
 * administrator/editor van de satellite is kan dit script met succes draaien.
 * Bezoekers of willekeurige ICP-gebruikers kunnen de adressen dus NIET oplijsten.
 *
 * Gebruik (lokaal, vanuit de projectmap):
 *   1) eenmalig: npm install @junobuild/core @dfinity/identity   (of draai in ~/Sites/DeNode_CoAi_Web)
 *   2) node tools/nieuwsbrief-export.mjs [--staging]
 * Het script zoekt je Juno-CLI-key automatisch (dezelfde waarmee je `juno hosting deploy` doet).
 * Output: nieuwsbrief-export-YYYY-MM-DD.csv (kolommen: email,taal,bron,ingeschreven_op)
 */
import { listDocs } from "@junobuild/core";
import { Ed25519KeyIdentity } from "@dfinity/identity";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";

const STAGING = process.argv.includes("--staging");
const SATELLITE_ID = STAGING ? "uaw2u-wqaaa-aaaal-as2cq-cai" : "uhx4a-3iaaa-aaaal-as2ca-cai";

// Juno-CLI-credentials zoeken (token = Ed25519-key van je access key)
function vindToken() {
  if (process.env.JUNO_TOKEN) return { token: JSON.parse(process.env.JUNO_TOKEN), bron: "env JUNO_TOKEN" };
  const kandidaten = [
    path.join(os.homedir(), "Library/Preferences/juno-nodejs/config.json"), // juno-CLI (conf-package, macOS-default)
    path.join(os.homedir(), "Library/Application Support/juno/juno.json"), // macOS
    path.join(os.homedir(), ".config/juno/juno.json"),
    path.join(os.homedir(), ".juno/juno.json"),
  ];
  for (const p of kandidaten) {
    if (!fs.existsSync(p)) continue;
    const cfg = JSON.parse(fs.readFileSync(p, "utf8"));
    const token = cfg.token ?? cfg.key ?? (Array.isArray(cfg.tokens) ? cfg.tokens[0]?.token : undefined);
    if (token) return { token, bron: p };
  }
  return null;
}

const cred = vindToken();
if (!cred) {
  console.error("Geen Juno-CLI-key gevonden. Draai eerst `juno login` (zelfde login als voor deploys).");
  process.exit(1);
}
console.log("Access key gevonden in", cred.bron);
const identity = Ed25519KeyIdentity.fromParsedJson(Array.isArray(cred.token) ? cred.token : JSON.parse(JSON.stringify(cred.token)));

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

const csv = ["email,taal,bron,ingeschreven_op",
  ...alles.map((d) => {
    const x = d.data || {};
    const dt = x.ts || new Date(Number(d.created_at / 1000000n)).toISOString();
    return `${x.email || d.key},${x.taal || ""},${(x.bron || "").replaceAll(",", " ")},${dt}`;
  })].join("\n");

const uit = `nieuwsbrief-export-${new Date().toISOString().slice(0, 10)}.csv`;
fs.writeFileSync(uit, csv + "\n");
console.log(`${alles.length} inschrijvingen → ${uit}`);
console.log("Odoo-import: E-mailmarketing → Mailinglijsten → contacten importeren → deze CSV (kolom 'email').");
