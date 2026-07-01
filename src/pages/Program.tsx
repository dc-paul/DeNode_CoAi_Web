import { PROGRAM } from "../pagesContent2";
import { getPost } from "../blogPosts";
import { type Lang } from "../lang";

const ACCENT = "#c0392b";

export function Program({ lang }: { lang: Lang }) {
  const p = PROGRAM[lang];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <h1 className="text-4xl font-extrabold text-black md:text-5xl">{p.title}</h1>
      <p className="mt-3 text-[17px] text-[#555]">{p.intro}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {p.posts.map((post) => {
          const bp = post.slug ? getPost(post.slug) : undefined;
          const title = lang === "nl" && bp?.nl ? bp.nl.title : post.title;
          const url = post.slug && bp ? `#/${lang}/blog/${post.slug}` : post.href;
          return (
            <a
              key={post.title}
              href={url}
              className="group flex flex-col overflow-hidden rounded-md border border-[#ececec] bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className="flex h-40 items-end p-4"
                style={{ backgroundColor: post.tint }}
              >
                <span className="rounded-sm bg-white/90 px-2 py-0.5 text-xs font-medium text-[#333]">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold leading-snug text-black">
                  {title}
                </h3>
                <p className="mt-1 text-xs text-[#999]">{post.date}</p>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#444]">
                  {post.teaser}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col gap-2">
        <a
          href="https://www.denode.be/en/blog"
          className="font-medium"
          style={{ color: ACCENT }}
        >
          {p.viewAll} →
        </a>
        <p className="text-xs text-[#999]">{p.note}</p>
      </div>
    </section>
  );
}
