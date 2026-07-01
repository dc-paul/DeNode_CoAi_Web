import { getPost } from "../blogPosts";
import { href, type Lang } from "../lang";

const ACCENT = "#c0392b";
const BACK: Record<Lang, string> = {
  nl: "← Terug naar programma",
  en: "← Back to program",
  fr: "← Retour au programme",
};
const NOT_FOUND: Record<Lang, string> = {
  nl: "Artikel niet gevonden",
  en: "Article not found",
  fr: "Article introuvable",
};

export function BlogPost({ lang, slug }: { lang: Lang; slug: string }) {
  const post = getPost(slug);

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-extrabold">{NOT_FOUND[lang]}</h1>
        <a
          href={href(lang, "program")}
          className="mt-6 inline-block font-medium"
          style={{ color: ACCENT }}
        >
          {BACK[lang]}
        </a>
      </section>
    );
  }

  const loc =
    lang === "nl" && post.nl
      ? post.nl
      : lang === "fr" && post.fr
        ? post.fr
        : { title: post.title, subtitle: post.subtitle, body: post.body };

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:px-8">
      <a
        href={href(lang, "program")}
        className="text-sm font-medium"
        style={{ color: ACCENT }}
      >
        {BACK[lang]}
      </a>

      <h1 className="mt-6 text-4xl font-extrabold leading-tight text-black md:text-5xl">
        {loc.title}
      </h1>
      {loc.subtitle && (
        <p className="mt-3 text-xl text-[#555]">{loc.subtitle}</p>
      )}
      <p className="mt-3 text-sm text-[#999]">
        {post.date} · {post.author}
      </p>

      <img
        src={post.image}
        alt={loc.title}
        className="mt-8 w-full rounded-md object-cover shadow-sm"
      />

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
