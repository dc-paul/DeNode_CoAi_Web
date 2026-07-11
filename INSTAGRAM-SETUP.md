# Instagram-feed (@denode_foundation) — self-contained op de Juno-site

De homepage-sectie "DeNode op Instagram" toont de laatste posts van
**@denode_foundation**. Een GitHub Action (`.github/workflows/instagram-feed.yml`)
haalt ze elke 8u op via de **Instagram Graph API**, slaat de thumbnails op in
`static/assets/ig/`, en deployt de site naar de **productie-satelliet** (Juno, OIDC).

Alles is same-origin op icp.denode.be — geen CORS, geen ethereum.be, geen third party.
De token zit in GitHub Secrets en komt **nooit** in de publieke HTML.

## Eenmalige setup (~15 min)

1. **Account professioneel maken.** In de Instagram-app van @denode_foundation:
   *Settings → Account type and tools → Switch to professional account* → Business of Creator.
   (Persoonlijke accounts hebben sinds dec 2024 geen API-toegang meer.)

2. **Meta-app maken.** <https://developers.facebook.com/apps/> → *Create App* → type **Business**.

3. **Instagram-product toevoegen.** *Add product → Instagram → "Instagram API setup with Instagram login"*.

4. **Token genereren.** Onder *Generate access tokens*: voeg @denode_foundation toe,
   **Generate token**, log in, geef toestemming, kopieer de token.

5. **Secrets in GitHub zetten.** Repo `dc-paul/DeNode_CoAi_Web` →
   *Settings → Secrets and variables → Actions → New repository secret*:
   - `IG_ACCESS_TOKEN` = de token uit stap 4 *(verplicht)*
   - `GH_PAT` = fine-grained PAT met **Secrets: Read and write** op deze repo
     *(optioneel — hiermee verlengt de token zichzelf eeuwig; zonder dit ~elke 55 dagen opnieuw plakken)*

6. **Eerste run.** GitHub → **Actions → "Refresh Instagram feed" → Run workflow.**
   Groen → `static/assets/ig/feed.json` + `1..6.jpg` bestaan en de site is gedeployed.
   De homepage-sectie verschijnt vanzelf (client-side, `/assets/ig/feed.json`).

## ⚠️ Belangrijk voor de handmatige deploy-flow

De feed wordt door de Action beheerd in `static/assets/ig/`. Jouw handmatige
`rsync ... --delete site-ink/ → static/` zou die map wissen (site-ink bevat geen
`assets/ig`). Voeg daarom **één exclude** toe aan de rsync:

```bash
rsync -a --delete \
  --exclude 'nl/_assets' --exclude 'en/_assets' --exclude 'fr/_assets' \
  --exclude 'assets/ig' \
  site-ink/ ~/Sites/DeNode_CoAi_Web/static/
```

Zo laat de handmatige deploy de Action-feed met rust. `git pull` vóór je zelf pusht,
want de Action commit periodiek naar `main`.

## Hoe de token vers blijft

De 8-uurlijkse run roept `refresh_access_token` aan (verlengt de long-lived token 60 dagen).
Met `GH_PAT` schrijft de workflow de verlengde token terug naar de Secret → hands-off.
Zonder `GH_PAT` plak je de token zelf opnieuw vóór de 60 dagen om zijn.

## Bestanden

- `scripts/fetch-instagram.mjs` — haalt 6 posts op + downloadt thumbnails → `static/assets/ig/`
- `.github/workflows/instagram-feed.yml` — 8-uurlijkse refresh + commit + Juno-deploy (prod)
- `static/assets/ig/feed.json` + `1..6.jpg` — door de Action aangemaakt
- Homepage-rendering: `tools/genereer-ink.mjs` in de PDC-Memex-vault (`IG_BASE=""`,
  client-side fetch van `/assets/ig/feed.json`)
