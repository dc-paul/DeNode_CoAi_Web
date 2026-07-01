import { useMemo, useState } from "react";
import { ARTISTS } from "../pagesContent2";
import { ARTIST_DETAILS } from "../artistDetails";
import type { Lang } from "../lang";

const SEARCH: Record<Lang, string> = {
  nl: "Zoek een kunstenaar…",
  en: "Search an artist…",
  fr: "Rechercher un·e artiste…",
};
const NONE: Record<Lang, string> = {
  nl: "Geen kunstenaar gevonden.",
  en: "No artist found.",
  fr: "Aucun·e artiste trouvé·e.",
};

// Sort by surname-ish: use the last word of the name as the key, fall back to full name.
function sortKey(name: string): string {
  const parts = name.trim().split(/\s+/);
  return (parts.length > 1 ? parts[parts.length - 1] : name).toLowerCase();
}

export function Artists({ lang }: { lang: Lang }) {
  const a = ARTISTS[lang];
  const [q, setQ] = useState("");

  const sorted = useMemo(
    () => [...ARTIST_DETAILS].sort((x, y) => sortKey(x.name).localeCompare(sortKey(y.name))),
    [],
  );
  const query = q.trim().toLowerCase();
  const list = query
    ? sorted.filter((x) => x.name.toLowerCase().includes(query))
    : sorted;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
      <h1 className="text-4xl font-extrabold text-black md:text-5xl">{a.title}</h1>
      <div className="mx-auto mt-8 max-w-3xl space-y-4 text-[16px] leading-relaxed text-[#333]">
        {a.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-10 max-w-md">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={SEARCH[lang]}
          className="w-full rounded-md border border-[#dcdcdc] px-4 py-2.5 text-[15px] outline-none focus:border-[#c0392b]"
        />
      </div>

      {list.length === 0 ? (
        <p className="mt-10 text-[#888]">{NONE[lang]}</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {list.map((artist) => (
            <a
              key={artist.slug}
              href={`#/${lang}/artist/${artist.slug}`}
              className="group flex flex-col overflow-hidden rounded-md border border-[#ececec] bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="h-56 w-full bg-[#ececec]">
                {artist.image && (
                  <img
                    src={artist.image}
                    alt={artist.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-black">{artist.name}</h3>
                {artist.role && (
                  <p className="mt-1 text-sm text-[#888]">{artist.role[lang]}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      )}

      <div className="mt-16 border-t border-[#ececec] pt-12 text-center">
        <h2 className="text-2xl font-bold text-black">{a.devHeading}</h2>
        <p className="mt-2 text-[#888]">{a.devBody}</p>
      </div>
    </section>
  );
}
