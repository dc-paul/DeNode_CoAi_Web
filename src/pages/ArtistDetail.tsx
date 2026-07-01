import { getArtist } from "../artistDetails";
import { exposForArtist } from "../expos";
import { getPost } from "../blogPosts";
import { RefCard } from "../components/RefCard";
import { href, type Lang } from "../lang";

const ACCENT = "#a23b2d";
const T: Record<
  Lang,
  {
    back: string;
    notFound: string;
    shop: string;
    denode: string;
    other: string;
    written: string;
    external: string;
  }
> = {
  nl: {
    back: "← Terug naar kunstenaars",
    notFound: "Kunstenaar niet gevonden",
    shop: "Bekijk het boek in de shop →",
    denode: "Tentoonstelling(en) bij DeNode",
    other: "Andere tentoonstellingen",
    written: "Geschreven voor DeNode",
    external: "Elders",
  },
  en: {
    back: "← Back to artists",
    notFound: "Artist not found",
    shop: "View the book in the shop →",
    denode: "Exhibition(s) at DeNode",
    other: "Other exhibitions",
    written: "Written for DeNode",
    external: "Elsewhere",
  },
  fr: {
    back: "← Retour aux artistes",
    notFound: "Artiste introuvable",
    shop: "Voir le livre dans la boutique →",
    denode: "Exposition(s) chez DeNode",
    other: "Autres expositions",
    written: "Écrit pour DeNode",
    external: "Ailleurs",
  },
};

function postTitle(slug: string, lang: Lang): string {
  const bp = getPost(slug);
  if (!bp) return slug;
  if (lang === "nl" && bp.nl) return bp.nl.title;
  if (lang === "en" && bp.en) return bp.en.title;
  if (lang === "fr" && bp.fr) return bp.fr.title;
  return bp.title;
}

export function ArtistDetail({ lang, slug }: { lang: Lang; slug: string }) {
  const artist = getArtist(slug);
  const t = T[lang];

  if (!artist) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-extrabold">{t.notFound}</h1>
        <a href={href(lang, "artists")} className="mt-6 inline-block font-medium" style={{ color: ACCENT }}>
          {t.back}
        </a>
      </section>
    );
  }

  const expos = exposForArtist(slug);
  const bio = artist.bio?.[lang];
  const extra = artist.extraExhibitions?.[lang];

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:px-8">
      <a href={href(lang, "artists")} className="text-sm font-medium" style={{ color: ACCENT }}>
        {t.back}
      </a>

      <h1 className="mt-6 text-4xl font-extrabold leading-tight text-black md:text-5xl">
        {artist.name}
      </h1>
      {artist.role && <p className="mt-3 text-xl text-[#555]">{artist.role[lang]}</p>}

      {artist.image && (
        <img
          src={artist.image}
          alt={artist.name}
          className="mt-8 w-full rounded-md object-cover shadow-sm"
        />
      )}

      {bio && (
        <div className="mt-10 space-y-5">
          {bio.map((b, i) =>
            b.k === "h" ? (
              <h2 key={i} className="pt-4 text-2xl font-bold text-black">
                {b.t}
              </h2>
            ) : (
              <p key={i} className="text-[17px] leading-relaxed text-[#222]">
                {b.t}
              </p>
            ),
          )}
        </div>
      )}

      {artist.shop && (
        <a href={href(lang, "shop")} className="mt-4 inline-block font-medium" style={{ color: ACCENT }}>
          {t.shop}
        </a>
      )}

      {/* DeNode exhibitions — derived automatically from expos.ts */}
      {expos.length > 0 && (
        <div className="mt-12 border-t border-[#ececec] pt-8">
          <h2 className="text-2xl font-bold text-black">{t.denode}</h2>
          <div className="mt-6 space-y-8">
            {expos.map((e) => (
              <div key={e.slug}>
                <p className="text-sm font-semibold tabular-nums" style={{ color: ACCENT }}>
                  {e.period}
                </p>
                <a
                  href={href(lang, `expo/${e.slug}`)}
                  className="text-lg font-bold text-black hover:text-[#a23b2d]"
                >
                  {e.title} →
                </a>
                {e.articleSlugs && e.articleSlugs.length > 0 && (
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {e.articleSlugs.map((s) => {
                      const bp = getPost(s);
                      return (
                        <RefCard
                          key={s}
                          href={href(lang, `blog/${s}`)}
                          title={postTitle(s, lang)}
                          subtitle={bp?.author}
                          image={bp?.image}
                          tint={e.tint}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Non-DeNode exhibitions (manual) */}
      {extra && extra.length > 0 && (
        <div className="mt-12 border-t border-[#ececec] pt-8">
          <h2 className="text-2xl font-bold text-black">{t.other}</h2>
          <ul className="mt-6 space-y-4">
            {extra.map((ex, i) => (
              <li key={i} className="grid gap-1 sm:grid-cols-[150px_1fr] sm:gap-5">
                <span className="text-sm font-semibold tabular-nums" style={{ color: ACCENT }}>
                  {ex.date}
                </span>
                <p className="text-[16px] leading-relaxed text-[#222]">{ex.text}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Authored texts (for critics/authors) */}
      {artist.articles && artist.articles.length > 0 && (
        <div className="mt-12 border-t border-[#ececec] pt-8">
          <h2 className="text-2xl font-bold text-black">{t.written}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {artist.articles.map((s) => {
              const bp = getPost(s);
              return (
                <RefCard
                  key={s}
                  href={href(lang, `blog/${s}`)}
                  title={postTitle(s, lang)}
                  subtitle={bp?.subtitle}
                  image={bp?.image}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* External links */}
      {artist.external && artist.external.length > 0 && (
        <div className="mt-12 border-t border-[#ececec] pt-8">
          <h2 className="text-2xl font-bold text-black">{t.external}</h2>
          <ul className="mt-4 space-y-2">
            {artist.external.map((x) => (
              <li key={x.url}>
                <a
                  href={x.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                  style={{ color: ACCENT }}
                >
                  {x.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
