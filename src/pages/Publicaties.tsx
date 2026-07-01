import { SHOP } from "../pagesContent2";
import { IMG } from "../content";
import { POSTS } from "../blogPosts";
import { RefCard } from "../components/RefCard";
import { href, type Lang } from "../lang";

const ACCENT = "#a23b2d";
const T: Record<
  Lang,
  { title: string; intro: string; forSale: string; order: string; papers: string }
> = {
  nl: {
    title: "Publicaties",
    intro: "Boeken, edities en teksten uitgegeven door DeNode.",
    forSale: "Te koop",
    order: "Bestel het boek →",
    papers: "Papers & essays",
  },
  en: {
    title: "Publications",
    intro: "Books, editions and texts published by DeNode.",
    forSale: "For sale",
    order: "Order the book →",
    papers: "Papers & essays",
  },
  fr: {
    title: "Publications",
    intro: "Livres, éditions et textes publiés par DeNode.",
    forSale: "À vendre",
    order: "Commander le livre →",
    papers: "Papers & essais",
  },
};

function postTitle(
  p: (typeof POSTS)[number],
  lang: Lang,
): string {
  if (lang === "nl" && p.nl) return p.nl.title;
  if (lang === "en" && p.en) return p.en.title;
  if (lang === "fr" && p.fr) return p.fr.title;
  return p.title;
}

export function Publicaties({ lang }: { lang: Lang }) {
  const t = T[lang];
  const s = SHOP[lang];
  const papers = POSTS.filter((p) => p.category === "papers");

  return (
    <section className="dn-section">
      <div className="dn-wrap">
        <h1 className="dn-h1">{t.title}</h1>
        <p className="dn-lead mt-4 max-w-[60ch]">{t.intro}</p>

        {/* For sale — the book */}
        <div className="mt-12">
          <div className="dn-head">
            <h2 className="dn-h2">{t.forSale}</h2>
          </div>
          <div className="grid items-start gap-8 md:grid-cols-[240px_1fr]">
            <div className="thumb-fixed">
              <img src={IMG.katbove} alt={s.productTitle} className="w-full object-cover" />
            </div>
            <div>
              <h3 className="dn-h3">{s.productTitle}</h3>
              <p className="mt-2 text-xl font-bold" style={{ color: ACCENT }}>
                {s.price}
              </p>
              <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-[#2a2925]">
                {s.productDesc}
              </p>
              <a className="dn-btn mt-5" href={href(lang, "shop")}>
                {t.order}
              </a>
            </div>
          </div>
        </div>

        {/* Papers & essays */}
        {papers.length > 0 && (
          <div className="mt-16">
            <div className="dn-head">
              <h2 className="dn-h2">{t.papers}</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {papers.map((p) => (
                <RefCard
                  key={p.slug}
                  href={href(lang, `blog/${p.slug}`)}
                  title={postTitle(p, lang)}
                  subtitle={p.author}
                  image={p.image}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
