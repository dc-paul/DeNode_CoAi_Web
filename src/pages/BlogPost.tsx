import { getPost, type Localized } from "../blogPosts";
import { expoForArticle } from "../expos";
import { getArtist, authorForArticle } from "../artistDetails";
import { RefCard } from "../components/RefCard";
import { Breadcrumb } from "../components/Breadcrumb";
import { href, type Lang } from "../lang";

const CTX: Record<Lang, { expo: string; artist: string; author: string }> = {
  nl: { expo: "Tentoonstelling", artist: "Kunstenaar", author: "Auteur" },
  en: { expo: "Exhibition", artist: "Artist", author: "Author" },
  fr: { expo: "Exposition", artist: "Artiste", author: "Auteur" },
};

const ACCENT = "#a23b2d";
const ROOT: Record<Lang, string> = {
  nl: "Publicaties",
  en: "Publications",
  fr: "Publications",
};
const NOT_FOUND: Record<Lang, string> = {
  nl: "Artikel niet gevonden",
  en: "Article not found",
  fr: "Article introuvable",
};
const AI_NOTE: Record<Lang, string> = {
  nl: "Deze vertaling is automatisch (AI) gegenereerd.",
  en: "This translation was automatically (AI) generated.",
  fr: "Cette traduction a été générée automatiquement (IA).",
};

export function BlogPost({ lang, slug }: { lang: Lang; slug: string }) {
  const post = getPost(slug);

  if (!post) {
    return (
      <section className="dn-section">
        <div className="dn-wrap text-center">
          <h1 className="dn-h2">{NOT_FOUND[lang]}</h1>
          <a className="dn-btn mx-auto mt-6" href={href(lang, "publicaties")}>
            {ROOT[lang]}
          </a>
        </div>
      </section>
    );
  }

  const loc: Localized =
    lang === "nl" && post.nl
      ? post.nl
      : lang === "en" && post.en
        ? post.en
        : lang === "fr" && post.fr
          ? post.fr
          : { title: post.title, subtitle: post.subtitle, body: post.body };

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:px-8">
      <Breadcrumb
        lang={lang}
        trail={[{ label: ROOT[lang], page: "publicaties" }, { label: loc.title }]}
      />

      {loc.ai && (
        <p className="mt-4 text-xs italic text-[#999]">{AI_NOTE[lang]}</p>
      )}

      <h1 className="dn-h1 mt-4">{loc.title}</h1>
      {loc.subtitle && <p className="dn-lead mt-3">{loc.subtitle}</p>}
      <p className="mt-3 text-sm text-[#999]">
        {post.date} · {post.author}
      </p>

      {(() => {
        const expo = expoForArticle(slug);
        const subjects = (expo?.artists ?? []).filter((a) => a.slug);
        const author = authorForArticle(slug);
        if (!expo && subjects.length === 0 && !author) return null;
        return (
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {expo && (
              <RefCard
                href={href(lang, `expo/${expo.slug}`)}
                title={expo.title}
                subtitle={`${CTX[lang].expo} · ${expo.period}`}
                image={expo.image}
                tint={expo.tint}
              />
            )}
            {subjects.map((a) => (
              <RefCard
                key={a.slug}
                href={href(lang, `artist/${a.slug}`)}
                title={a.name}
                subtitle={CTX[lang].artist}
                image={getArtist(a.slug!)?.image}
              />
            ))}
            {author && (
              <RefCard
                href={href(lang, `artist/${author.slug}`)}
                title={author.name}
                subtitle={CTX[lang].author}
                image={author.image}
              />
            )}
          </div>
        );
      })()}

      {post.image && (
        <img
          src={post.image}
          alt={loc.title}
          className="mt-8 w-full rounded-md object-cover shadow-sm"
        />
      )}

      <div className="mt-10 space-y-5">
        {loc.body.map((b, i) => {
          if (b.k === "h") {
            return (
              <h2 key={i} className="pt-4 text-2xl font-bold text-black">
                {b.t}
              </h2>
            );
          }
          if (b.k === "q") {
            return (
              <blockquote
                key={i}
                className="border-l-4 pl-5 text-xl italic text-[#444]"
                style={{ borderColor: ACCENT }}
              >
                {b.t}
              </blockquote>
            );
          }
          return (
            <p key={i} className="text-[17px] leading-relaxed text-[#222]">
              {b.t}
            </p>
          );
        })}
      </div>
    </article>
  );
}
