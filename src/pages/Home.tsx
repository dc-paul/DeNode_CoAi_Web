import { CONTENT, IMG } from "../content";
import type { Lang } from "../lang";

const ACCENT = "#c0392b";
const CARD_IMAGES = [IMG.workshop, IMG.katbove, IMG.drawing];

export function Home({ lang }: { lang: Lang }) {
  const h = CONTENT[lang].home;
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
          <img
            src={IMG.hero}
            alt={h.exhibitionTitle}
            className="w-full rounded-sm object-cover shadow-sm"
          />
          <div className="text-black">
            <p className="text-2xl font-semibold md:text-3xl">{h.presents}</p>
            <h1 className="mt-2 text-5xl font-extrabold leading-[1.05] md:text-6xl">
              {h.exhibitionTitle}
            </h1>
            <p className="mt-4 text-xl">{h.soloBy}</p>
            <p className="mt-1 text-3xl font-bold md:text-4xl">{h.artist}</p>
            <div className="mt-8 space-y-4 text-[17px] leading-relaxed text-[#222]">
              <p className="font-semibold">{h.paragraphs[0]}</p>
              {h.paragraphs.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="italic">{h.italic}</p>
              <p className="font-semibold">{h.openDates}</p>
              <p>{h.hours}</p>
              <p>
                <a
                  href={`#/${lang}/blog/nicolas-van-parys`}
                  className="font-semibold underline"
                  style={{ color: ACCENT }}
                >
                  {h.readText}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3 md:px-10">
          {h.cards.map((c, i) => (
            <article
              key={i}
              className="flex flex-col overflow-hidden rounded-md border border-[#ececec] bg-white shadow-sm"
            >
              <img
                src={CARD_IMAGES[i]}
                alt={c.title}
                className="h-56 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-black">{c.title}</h3>
                <div className="mt-3 text-[15px] leading-relaxed text-[#333]">
                  {c.lines.map((l, j) => (
                    <p key={j} className={j === 0 ? "" : "mt-1"}>
                      {l}
                    </p>
                  ))}
                  {c.cta && c.ctaHref && (
                    <a
                      href={c.ctaHref}
                      className="mt-4 inline-block rounded-sm px-5 py-2.5 font-semibold text-white"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {c.cta}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="flex items-end justify-between border-b border-[#ececec] pb-3">
          <h2 className="text-lg font-bold tracking-wide text-black">
            {h.blogHeading}
          </h2>
          <a
            href="https://www.denode.be/en/blog"
            className="text-[15px] font-medium"
            style={{ color: ACCENT }}
          >
            {h.viewEverything} →
          </a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {h.posts.map((p) => (
            <a
              key={p.title}
              href={`#/${lang}/blog/${p.slug}`}
              className="group relative flex h-72 items-center justify-center overflow-hidden rounded-md p-6 text-center"
              style={{ backgroundColor: p.tint }}
            >
              <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35"></span>
              <span className="relative text-2xl font-extrabold leading-tight text-white">
                {p.title}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
