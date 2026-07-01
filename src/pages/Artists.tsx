import { ARTISTS } from "../pagesContent2";
import { ARTIST_DETAILS } from "../artistDetails";
import type { Lang } from "../lang";

export function Artists({ lang }: { lang: Lang }) {
  const a = ARTISTS[lang];
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
      <h1 className="text-4xl font-extrabold text-black md:text-5xl">{a.title}</h1>
      <div className="mx-auto mt-8 max-w-3xl space-y-4 text-[16px] leading-relaxed text-[#333]">
        {a.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {ARTIST_DETAILS.map((artist) => {
          const loc =
            lang === "en" && artist.en
              ? artist.en
              : lang === "fr" && artist.fr
                ? artist.fr
                : artist.nl;
          return (
            <a
              key={artist.slug}
              href={`#/${lang}/artist/${artist.slug}`}
              className="group flex flex-col overflow-hidden rounded-md border border-[#ececec] bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={artist.image}
                alt={artist.name}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-black">{artist.name}</h3>
                {loc.subtitle && (
                  <p className="mt-1 text-sm text-[#888]">{loc.subtitle}</p>
                )}
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-16 border-t border-[#ececec] pt-12 text-center">
        <h2 className="text-2xl font-bold text-black">{a.devHeading}</h2>
        <p className="mt-2 text-[#888]">{a.devBody}</p>
      </div>
    </section>
  );
}
