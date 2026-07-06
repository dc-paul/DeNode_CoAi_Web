import { useMemo, useState } from "react";
import { ARTISTS } from "../pagesContent2";
import { ARTIST_DETAILS } from "../artistDetails";
import { href, type Lang } from "../lang";

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

function sortKey(name: string): string {
  const parts = name.trim().split(/\s+/);
  return (parts.length > 1 ? parts[parts.length - 1] : name).toLowerCase();
}

export function Artists({ lang }: { lang: Lang }) {
  const a = ARTISTS[lang];
  const [q, setQ] = useState("");

  const sorted = useMemo(
    () =>
      [...ARTIST_DETAILS].sort((x, y) =>
        sortKey(x.name).localeCompare(sortKey(y.name)),
      ),
    [],
  );
  const query = q.trim().toLowerCase();
  const list = query
    ? sorted.filter((x) => x.name.toLowerCase().includes(query))
    : sorted;

  return (
    <section className="dn-section">
      <div className="dn-wrap">
        <h1 className="dn-h1">{a.title}</h1>
        <p className="dn-lead mt-4 max-w-[60ch]">{a.intro[0]}</p>

        <div className="mt-8 max-w-md">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={SEARCH[lang]}
            className="w-full border border-[#d8d2c6] bg-white px-4 py-2.5 text-[15px] outline-none focus:border-[#a23b2d]"
          />
        </div>

        {list.length === 0 ? (
          <p className="mt-10 text-[#8a8477]">{NONE[lang]}</p>
        ) : (
          <div className="dn-grid mt-10">
            {list.map((artist) => (
              <a
                key={artist.slug}
                className="dn-card"
                href={href(lang, `artist/${artist.slug}`)}
              >
                <div className="thumb">
                  {artist.image && <img src={artist.image} alt={artist.name} />}
                </div>
                <h3 className="dn-name" style={{ textTransform: "none" }}>
                  {artist.name}
                </h3>
                {artist.role && <p className="dates">{artist.role[lang]}</p>}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
