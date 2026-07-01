import { EXPOS } from "../expos";
import { href, type Lang } from "../lang";

const T: Record<Lang, { title: string; intro: string; curator: string }> = {
  nl: {
    title: "Tentoonstellingen",
    intro: "Alle tentoonstellingen bij nodenaysteen / DeNode, van de recentste tot de eerste.",
    curator: "curator",
  },
  en: {
    title: "Exhibitions",
    intro: "Every exhibition at nodenaysteen / DeNode, from the most recent to the first.",
    curator: "curator",
  },
  fr: {
    title: "Expositions",
    intro: "Toutes les expositions à nodenaysteen / DeNode, de la plus récente à la première.",
    curator: "commissaire",
  },
};

export function Expos({ lang }: { lang: Lang }) {
  const t = T[lang];
  const list = [...EXPOS].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <h1 className="text-4xl font-extrabold text-black md:text-5xl">{t.title}</h1>
      <p className="mt-3 text-[17px] text-[#555]">{t.intro}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {list.map((e) => (
          <a
            key={e.slug}
            href={href(lang, `expo/${e.slug}`)}
            className="group flex flex-col overflow-hidden rounded-md border border-[#ececec] bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div
              className="relative flex h-40 items-end p-4"
              style={{ backgroundColor: e.tint }}
            >
              {e.image && (
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <span className="relative rounded-sm bg-white/90 px-2 py-0.5 text-xs font-medium text-[#333]">
                {e.period}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold leading-snug text-black">
                {e.title}
              </h3>
              <p className="mt-2 text-[14px] text-[#444]">
                {e.artists.map((a) => a.name).join(", ")}
              </p>
              {e.curator && e.curator !== "—" && (
                <p className="mt-1 text-xs text-[#999]">
                  {t.curator}: {e.curator}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
