import { CONTENT, IMG } from "../content";
import { EXPOS } from "../expos";
import { Band } from "../components/Band";
import { href, type Lang } from "../lang";

const T: Record<
  Lang,
  {
    now: string;
    visitBtn: string;
    exhibitions: string;
    archive: string;
    visit: string;
    routeHours: string;
    address: string;
    open: string;
    phone: string;
  }
> = {
  nl: {
    now: "Nu te zien",
    visitBtn: "Bezoek de tentoonstelling",
    exhibitions: "Tentoonstellingen",
    archive: "Volledig archief →",
    visit: "Bezoek",
    routeHours: "Route & uren →",
    address: "Adres",
    open: "Open",
    phone: "Telefoon",
  },
  en: {
    now: "Now on view",
    visitBtn: "Visit the exhibition",
    exhibitions: "Exhibitions",
    archive: "Full archive →",
    visit: "Visit",
    routeHours: "Route & hours →",
    address: "Address",
    open: "Open",
    phone: "Phone",
  },
  fr: {
    now: "À voir",
    visitBtn: "Visiter l'exposition",
    exhibitions: "Expositions",
    archive: "Archives complètes →",
    visit: "Visite",
    routeHours: "Itinéraire & horaires →",
    address: "Adresse",
    open: "Ouvert",
    phone: "Téléphone",
  },
};

export function Home({ lang }: { lang: Lang }) {
  const t = T[lang];
  const h = CONTENT[lang].home;
  const sorted = [...EXPOS].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
  const current = sorted[0];
  const recent = sorted.slice(1, 7);
  const artistsOf = (e: (typeof EXPOS)[number]) =>
    e.artists.map((a) => a.name).join(", ");

  return (
    <>
      {/* Hero — split, art-first */}
      <section className="dn-hero">
        <div className="dn-hero__txt">
          <p className="dn-eyebrow">
            {t.now} · {current.period}
          </p>
          <h1 className="dn-h1 mt-3">{current.title}</h1>
          <p className="dn-lead dn-serif-it mt-3">{artistsOf(current)}</p>
          <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-[#26251f]">
            {h.paragraphs[0]}
          </p>
          <a className="dn-btn mt-7" href={href(lang, `expo/${current.slug}`)}>
            {t.visitBtn} <span aria-hidden>→</span>
          </a>
        </div>
        <div className="dn-hero__img">
          <img src={current.image || IMG.hero} alt={current.title} />
        </div>
      </section>

      <Band lang={lang} />

      {/* Exhibitions */}
      <section className="dn-section">
        <div className="dn-wrap">
          <div className="dn-head">
            <h2 className="dn-h2">{t.exhibitions}</h2>
            <a href={href(lang, "expo")}>{t.archive}</a>
          </div>

          <div className="dn-grid">
            <a
              className="dn-card dn-card--now"
              href={href(lang, `expo/${current.slug}`)}
            >
              <div className="thumb" style={{ backgroundColor: current.tint }}>
                {current.image && <img src={current.image} alt={current.title} />}
              </div>
              <div className="meta">
                <span className="dn-tag">{t.now}</span>
                <p className="dates mt-3">
                  {current.period}
                  {current.curator && current.curator !== "—"
                    ? ` · ${current.curator}`
                    : ""}
                </p>
                <h3>{current.title}</h3>
                <p className="who">{artistsOf(current)}</p>
              </div>
            </a>

            {recent.map((e) => (
              <a key={e.slug} className="dn-card" href={href(lang, `expo/${e.slug}`)}>
                <div className="thumb" style={{ backgroundColor: e.tint }}>
                  {e.image && <img src={e.image} alt={e.title} />}
                </div>
                <p className="dates">{e.period}</p>
                <h3>{e.title}</h3>
                <p className="who">{artistsOf(e)}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="dn-section" style={{ background: "var(--paper2)" }}>
        <div className="dn-wrap">
          <div className="dn-head">
            <h2 className="dn-h2">{t.visit}</h2>
            <a href={href(lang, "visit")}>{t.routeHours}</a>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <dl className="dn-dl">
              <dt>{t.address}</dt>
              <dd>Predikherenlei 4, 9000 Gent</dd>
              <dt>{t.open}</dt>
              <dd>
                {CONTENT[lang].footer.openLines.map((l, i) => (
                  <div key={i}>{l}</div>
                ))}
              </dd>
              <dt>{t.phone}</dt>
              <dd>
                <a href="tel:+32488880889">+32 488 88 08 89</a>
              </dd>
            </dl>
            <div className="space-y-4 text-[16px] leading-relaxed text-[#2a2925]">
              {h.paragraphs.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
