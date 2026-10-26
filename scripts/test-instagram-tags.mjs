// TEST (alleen lezen): kan IG_ACCESS_TOKEN getagde media lezen?
// Logt nooit de token of volledige URL's met token. Wijzigt/ververst de token niet.
const TOKEN = process.env.IG_ACCESS_TOKEN;
const GRAPH = "https://graph.instagram.com";
if (!TOKEN) { console.log("TEST tags: geen IG_ACCESS_TOKEN beschikbaar."); process.exit(0); }
const mask = (s) => String(s).split(TOKEN).join("***");
async function call(label, path, params) {
  const qs = new URLSearchParams({ ...params, access_token: TOKEN });
  try {
    const r = await fetch(`${GRAPH}${path}?${qs}`);
    let j = {}; try { j = await r.json(); } catch {}
    console.log(`${label}: HTTP ${r.status}`);
    if (j.error) console.log(`  fout: code ${j.error.code}${j.error.error_subcode ? "/" + j.error.error_subcode : ""} (${j.error.type || ""}) ${mask(j.error.message || "")}`);
    return { ok: r.ok && !j.error, j };
  } catch (e) { console.log(`${label}: netwerkfout ${mask(e.message)}`); return { ok: false, j: {} }; }
}
function list(j) {
  const d = Array.isArray(j.data) ? j.data : [];
  console.log(`  aantal resultaten: ${d.length}`);
  for (const p of d) console.log(`  - @${p.username || "?"} · ${p.timestamp || "?"} · ${p.permalink || "?"}`);
}
const fields = "id,username,timestamp,permalink,caption";
const me = await call("GET /me", "/me", { fields: "user_id,username" });
if (me.ok) console.log(`  account: @${me.j.username || "?"}`);
let done = false;
if (me.ok && me.j.user_id) {
  const t = await call("GET /{user_id}/tags", `/${me.j.user_id}/tags`, { fields, limit: "25" });
  if (t.ok) { list(t.j); done = true; }
}
if (!done) {
  const t2 = await call("GET /me/tags (fallback)", "/me/tags", { fields, limit: "25" });
  if (t2.ok) list(t2.j);
}
process.exit(0);
