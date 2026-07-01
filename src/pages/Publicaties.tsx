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
    <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
      <h1 className="text-4xl font-extrabold text-black md:text-5xl">{t.title}</h1>
      <p className="mt-3 text-[17px] text-[#555]">{t.intro}</p>

      {/* For sale — the book */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-black">{t.forSale}</h2>
        <div className="mt-6 grid items-start gap-8 md:grid-cols-[220px_1fr]">
          <img
            src={IMG.katbove}
            alt={s.productTitle}
            className="w-full object-cover shadow-sm"
          />
          <div>
            <h3 className="text-xl font-bold text-black">{s.productTitle}</h3>
            <p className="mt-2 text-xl font-bold" style={{ color: ACCENT }}>
              {s.price}
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-[#333]">
              {s.productDesc}
            </p>
            <a
              href={href(lang, "shop")}
              className="mt-5 inline-block px-6 py-3 font-semibold text-white"
              style={{ backgroundColor: ACCENT }}
            >
              {t.order}
            </a>
          </div>
        </div>
      </div>

      {/* Papers & essays */}
      {papers.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-black">{t.papers}</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
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
    </section>
  );
}
