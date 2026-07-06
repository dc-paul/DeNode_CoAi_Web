import { EXPOS } from "../expos";
import { href, type Lang } from "../lang";

const T: Record<Lang, { title: string; intro: string; agenda: string }> = {
  nl: {
    title: "Tentoonstellingen",
    intro: "Alle tentoonstellingen bij nodenaysteen / DeNode, van de recentste tot de eerste.",
    agenda: "Workshops & events →",
  },
  en: {
    title: "Exhibitions",
    intro: "Every exhibition at nodenaysteen / DeNode, from the most recent to the first.",
    agenda: "Workshops & events →",
  },
  fr: {
    title: "Expositions",
    intro: "Toutes les expositions à nodenaysteen / DeNode, de la plus récente à la première.",
    agenda: "Ateliers & événements →",
  },
};

export function Expos({ lang }: { lang: Lang }) {
  const t = T[lang];
  const list = [...EXPOS].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

  return (
    <section className="dn-section">
      <div className="dn-wrap">
        <div className="dn-head">
          <h1 className="dn-h1">{t.title}</h1>
          <a href={href(lang, "events")}>{t.agenda}</a>
        </div>
        <p className="dn-lead mb-10 max-w-[60ch]">{t.intro}</p>

        <div className="dn-grid">
          {list.map((e) => (
            <a key={e.slug} className="dn-card" href={href(lang, `expo/${e.slug}`)}>
              <div className="thumb" style={{ backgroundColor: e.tint }}>
                {e.image && <img src={e.image} alt={e.title} />}
              </div>
              <p className="dates">
                {e.period}
                {e.curator && e.curator !== "—" ? ` · ${e.curator}` : ""}
              </p>
              <h3>{e.title}</h3>
              <p className="who">{e.artists.map((a) => a.name).join(", ")}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
