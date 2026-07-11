// fetch-instagram.mjs
// Haalt de laatste 6 posts van @denode_foundation op via de Instagram Graph API
// (Instagram API with Instagram Login — graph.instagram.com).
//
// Draait in GitHub Actions, NIET in de browser. De token zit in een GitHub Secret
// (IG_ACCESS_TOKEN) en komt dus nooit in de publieke HTML.
//
// Output (self-hosted op de Juno-site, same-origin — geen CORS, geen vervallende CDN-links):
//   static/assets/ig/1.jpg ... 6.jpg   — lokaal opgeslagen thumbnails
//   static/assets/ig/feed.json         — { updated, posts: [{ img, permalink, caption, type }] }
// De `img`-waarde is het SITE-pad (/assets/ig/N.jpg), niet het bestandspad, zodat
// de browser het correct laadt (static/ is de web-root van de Juno-satelliet).
//
// Node 20+ (global fetch). Geen npm-dependencies.

import { mkdir, writeFile } from "node:fs/promises";

const TOKEN = process.env.IG_ACCESS_TOKEN;
const LIMIT = 6;
const OUT_DIR = "static/assets/ig"; // filesystem-pad in de repo
const WEB_DIR = "/assets/ig";       // URL-pad op de gedeployde site
const GRAPH = "https://graph.instagram.com";

if (!TOKEN) {
  console.error("FOUT: IG_ACCESS_TOKEN ontbreekt (zet 'm als GitHub Secret).");
  process.exit(1);
}

function clip(s, n = 140) {
  if (!s) return "";
  s = s.replace(/\s+/g, " ").trim();
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}

async function main() {
  // 1) Probeer de long-lived token te verlengen (60 dagen vanaf nu).
  //    Mislukt dit, dan gaan we gewoon door met de bestaande token.
  let freshToken = TOKEN;
  try {
    const r = await fetch(
      `${GRAPH}/refresh_access_token?grant_type=ig_refresh_token&access_token=${encodeURIComponent(TOKEN)}`
    );
    if (r.ok) {
      const j = await r.json();
      if (j.access_token) {
        freshToken = j.access_token;
        await writeFile("ig_token.txt", freshToken, "utf8"); // door workflow opgepikt om de Secret te updaten
        console.log("Token ververst (geldig ~60 dagen).");
      }
    } else {
      console.log("Token-refresh overgeslagen (status " + r.status + ").");
    }
  } catch (e) {
    console.log("Token-refresh overgeslagen:", e.message);
  }

  // 2) Haal de laatste posts op.
  const fields = "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp";
  const url = `${GRAPH}/me/media?fields=${fields}&limit=${LIMIT}&access_token=${encodeURIComponent(freshToken)}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error("FOUT bij ophalen media:", res.status, await res.text());
    process.exit(1);
  }
  const data = await res.json();
  const items = (data.data || []).slice(0, LIMIT);
  if (!items.length) {
    console.error("Geen posts teruggekregen. Stop (bestaande feed blijft staan).");
    process.exit(1);
  }

  await mkdir(OUT_DIR, { recursive: true });

  const posts = [];
  let i = 0;
  for (const it of items) {
    i++;
    // Video/Reel → poster (thumbnail_url); Foto/Album → media_url.
    const imgUrl = it.thumbnail_url || it.media_url;
    const file = `${OUT_DIR}/${i}.jpg`;
    try {
      const img = await fetch(imgUrl);
      if (!img.ok) throw new Error("status " + img.status);
      const buf = Buffer.from(await img.arrayBuffer());
      await writeFile(file, buf);
    } catch (e) {
      console.error(`Thumbnail ${i} downloaden mislukt:`, e.message);
      continue;
    }
    posts.push({
      img: `${WEB_DIR}/${i}.jpg`, // SITE-pad, niet het bestandspad
      permalink: it.permalink,
      caption: clip(it.caption),
      type: it.media_type,
      timestamp: it.timestamp,
    });
  }

  if (!posts.length) {
    console.error("Geen enkele thumbnail kon gedownload worden. Stop.");
    process.exit(1);
  }

  await writeFile(
    `${OUT_DIR}/feed.json`,
    JSON.stringify({ updated: new Date().toISOString(), posts }, null, 2),
    "utf8"
  );
  console.log(`Klaar: ${posts.length} posts → ${OUT_DIR}/feed.json`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
