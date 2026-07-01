import { getArtist } from "../artistDetails";
import { getPost, type Localized } from "../blogPosts";
import { href, type Lang } from "../lang";

const ACCENT = "#c0392b";
const BACK: Record<Lang, string> = {
  nl: "← Terug naar kunstenaars",
  en: "← Back to artists",
  fr: "← Retour aux artistes",
};
const NOT_FOUND: Record<Lang, string> = {
  nl: "Kunstenaar niet gevonden",
  en: "Artist not found",
  fr: "Artiste introuvable",
};
const AI_NOTE: Record<Lang, string> = {
  nl: "Deze vertaling is automatisch (AI) gegenereerd.",
  en: "This translation was automatically (AI) generated.",
  fr: "Cette traduction a été générée automatiquement (IA).",
};
const READ: Record<Lang, string> = {
  nl: "Lees over Kat Bové",
  en: "Read about Kat Bové",
  fr: "Lire à propos de Kat Bové",
};

export function ArtistDetail({ lang, slug }: { lang: Lang; slug: string }) {
  const artist = getArtist(slug);

  if (!artist) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-extrabold">{NOT_FOUND[lang]}</h1>
        <a
          href={href(lang, "artists")}
          className="mt-6 inline-block font-medium"
          style={{ color: ACCENT }}
        >
          {BACK[lang]}
        </a>
      </section>
    );
  }

  const loc: Localized =
    lang === "en" && artist.en
      ? artist.en
      : lang === "fr" && artist.fr
        ? artist.fr
        : artist.nl;

  const related = artist.related
    .map((s) => {
      const bp = getPost(s);
      if (!bp) return null;
      const rloc =
        lang === "nl" && bp.nl
          ? bp.nl
          : lang === "en" && bp.en
            ? bp.en
            : lang === "fr" && bp.fr
              ? bp.fr
              : { title: bp.title };
      return { slug: s, title: rloc.title };
    })
    .filter((x): x is { slug: string; title: string } => x !== null);

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:px-8">
      <a
        href={href(lang, "artists")}
        className="text-sm font-medium"
        style={{ color: ACCENT }}
      >
        {BACK[lang]}
      </a>

      {loc.ai && (
        <p className="mt-4 text-xs italic text-[#999]">{AI_NOTE[lang]}</p>
      )}

      <h1 className="mt-6 text-4xl font-extrabold leading-tight text-black md:text-5xl">
        {loc.title}
      </h1>
      {loc.subtitle && <p className="mt-3 text-xl text-[#555]">{loc.subtitle}</p>}

      {artist.image && (
        <img
          src={artist.image}
          alt={loc.title}
          className="mt-8 w-full rounded-md object-cover shadow-sm"
        />
      )}

      <div className="mt-10 space-y-5">
        {loc.body.map((b, i) =>
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

      {related.length > 0 && (
        <div className="mt-12 border-t border-[#ececec] pt-8">
          <h2 className="text-2xl font-bold text-black">{READ[lang]}</h2>
          <ul className="mt-4 space-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <a
                  href={`#/${lang}/blog/${r.slug}`}
                  className="font-medium"
                  style={{ color: ACCENT }}
                >
                  {r.title} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
