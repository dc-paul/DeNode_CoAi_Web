import { PROGRAM } from "../pagesContent2";
import { getPost, type Localized, type Block } from "../blogPosts";
import { type Lang } from "../lang";


const CAT: Record<Lang, Record<string, string>> = {
  nl: {
    artists: "kunstenaars",
    exhibitions: "tentoonstellingen",
    news: "nieuws",
    papers: "papers",
  },
  en: {
    artists: "artists",
    exhibitions: "exhibitions",
    news: "news",
    papers: "papers",
  },
  fr: {
    artists: "artistes",
    exhibitions: "expositions",
    news: "actualités",
    papers: "papers",
  },
};

function firstPara(body: Block[]): string {
  const p = body.find((b) => b.k === "p");
  if (!p) return "";
  return p.t.length > 150 ? p.t.slice(0, 150).trimEnd() + "…" : p.t;
}

export function Program({ lang }: { lang: Lang }) {
  const p = PROGRAM[lang];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <h1 className="text-4xl font-extrabold text-black md:text-5xl">{p.title}</h1>
      <p className="mt-3 text-[17px] text-[#555]">{p.intro}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {p.posts.map((post) => {
          const bp = post.slug ? getPost(post.slug) : undefined;
          const loc: Localized | undefined = bp
            ? lang === "nl" && bp.nl
              ? bp.nl
              : lang === "en" && bp.en
                ? bp.en
                : lang === "fr" && bp.fr
                  ? bp.fr
                  : { title: bp.title, subtitle: bp.subtitle, body: bp.body }
            : undefined;
          const title = loc ? loc.title : post.title;
          const teaser = loc ? firstPara(loc.body) : post.teaser;
          const url = post.slug
            ? `#/${lang}/blog/${post.slug}`
            : `#/${lang}/program`;
          const cat = CAT[lang][post.category] ?? post.category;
          return (
            <a
              key={post.title}
              href={url}
              className="group flex flex-col overflow-hidden rounded-md border border-[#ececec] bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className="relative flex h-40 items-end p-4"
                style={{ backgroundColor: post.tint }}
              >
                {bp?.image && (
                  <img
                    src={bp.image}
                    alt={title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <span className="relative rounded-sm bg-white/90 px-2 py-0.5 text-xs font-medium text-[#333]">
                  {cat}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold leading-snug text-black">
                  {title}
                </h3>
                <p className="mt-1 text-xs text-[#999]">{post.date}</p>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#444]">
                  {teaser}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
