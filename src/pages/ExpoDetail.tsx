import { getExpo } from "../expos";
import { getPost } from "../blogPosts";
import { getEvent } from "../eventDetails";
import { getArtist } from "../artistDetails";
import { RefCard } from "../components/RefCard";
import { Band } from "../components/Band";
import { Breadcrumb } from "../components/Breadcrumb";
import { href, type Lang } from "../lang";

const ACCENT = "#a23b2d";
const ROOT: Record<Lang, string> = {
  nl: "Tentoonstellingen",
  en: "Exhibitions",
  fr: "Expositions",
};
const ABOUT_ARTIST: Record<Lang, string> = {
  nl: "Over de kunstenaar",
  en: "About the artist",
  fr: "À propos de l'artiste",
};
const VIEW_ARTIST: Record<Lang, string> = {
  nl: "Bekijk kunstenaar →",
  en: "View artist →",
  fr: "Voir l'artiste →",
};
const T: Record<
  Lang,
  {
    back: string;
    notFound: string;
    curator: string;
    artists: string;
    participants: string;
    texts: string;
    events: string;
  }
> = {
  nl: {
    back: "← Terug naar tentoonstellingen",
    notFound: "Tentoonstelling niet gevonden",
    curator: "Curator",
    artists: "Kunstenaar(s)",
    participants: "Deelnemende kunstenaars",
    texts: "Teksten bij deze tentoonstelling",
    events: "Events",
  },
  en: {
    back: "← Back to exhibitions",
    notFound: "Exhibition not found",
    curator: "Curator",
    artists: "Artist(s)",
    participants: "Participating artists",
    texts: "Texts for this exhibition",
    events: "Events",
  },
  fr: {
    back: "← Retour aux expositions",
    notFound: "Exposition introuvable",
    curator: "Commissaire",
    artists: "Artiste(s)",
    participants: "Artistes participants",
    texts: "Textes de cette exposition",
    events: "Événements",
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

function eventTitle(slug: string, lang: Lang): string {
  const ev = getEvent(slug);
  if (!ev) return slug;
  return (lang === "en" && ev.en ? ev.en : lang === "fr" && ev.fr ? ev.fr : ev.nl)
    .title;
}

export function ExpoDetail({ lang, slug }: { lang: Lang; slug: string }) {
  const expo = getExpo(slug);
  const t = T[lang];

  if (!expo) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-extrabold">{t.notFound}</h1>
        <a
          href={href(lang, "expo")}
          className="mt-6 inline-block font-medium"
          style={{ color: ACCENT }}
        >
          {t.back}
        </a>
      </section>
    );
  }

  return (
    <>
    <article className="mx-auto max-w-3xl px-6 py-12 md:px-8">
      <Breadcrumb
        lang={lang}
        trail={[{ label: ROOT[lang], page: "expo" }, { label: expo.title }]}
      />

      <p className="mt-2 text-sm font-semibold tabular-nums" style={{ color: ACCENT }}>
        {expo.period}
      </p>
      <h1 className="mt-1 text-4xl font-extrabold leading-tight text-black md:text-5xl">
        {expo.title}
      </h1>

      {expo.image && (
        <img
          src={expo.image}
          alt={expo.title}
          className="mt-8 w-full rounded-md object-cover shadow-sm"
        />
      )}

      <div className="mt-8 grid gap-4 rounded-md border border-[#ececec] bg-[#fafafa] p-5 text-[15px] text-[#333] sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#999]">
            {t.artists}
          </p>
          <p className="mt-1">
            {expo.artists.map((a, i) => (
              <span key={a.name}>
                {i > 0 && ", "}
                {a.slug ? (
                  <a
                    href={href(lang, `artist/${a.slug}`)}
                    className="font-medium"
                    style={{ color: ACCENT }}
                  >
                    {a.name}
                  </a>
                ) : (
                  a.name
                )}
              </span>
            ))}
          </p>
        </div>
        {expo.curator && expo.curator !== "—" && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#999]">
              {t.curator}
            </p>
            <p className="mt-1">{expo.curator}</p>
          </div>
        )}
      </div>

      {expo.participants && expo.participants.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-black">
            {t.participants}{" "}
            <span className="text-base font-normal text-[#999]">
              ({expo.participants.length})
            </span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#333]">
            {expo.participants.map((a, i) => (
              <span key={a.name}>
                {i > 0 && " · "}
                {a.slug ? (
                  <a
                    href={href(lang, `artist/${a.slug}`)}
                    className="font-medium"
                    style={{ color: ACCENT }}
                  >
                    {a.name}
                  </a>
                ) : (
                  a.name
                )}
              </span>
            ))}
          </p>
        </div>
      )}

      {expo.articleSlugs && expo.articleSlugs.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-black">{t.texts}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {expo.articleSlugs.map((s) => {
              const bp = getPost(s);
              return (
                <RefCard
                  key={s}
                  href={href(lang, `blog/${s}`)}
                  title={postTitle(s, lang)}
                  subtitle={bp?.author}
                  image={bp?.image}
                  tint={expo.tint}
                />
              );
            })}
          </div>
        </div>
      )}

      {expo.eventSlugs && expo.eventSlugs.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-black">{t.events}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {expo.eventSlugs.map((s) => {
              const ev = getEvent(s);
              return (
                <RefCard
                  key={s}
                  href={href(lang, `event/${s}`)}
                  title={eventTitle(s, lang)}
                  subtitle={ev?.dateLabel}
                  image={ev?.image}
                  tint={expo.tint}
                />
              );
            })}
          </div>
        </div>
      )}
    </article>

      <Band lang={lang} />

      {(() => {
        const primary = expo.artists.find((a) => a.slug);
        if (!primary?.slug) return null;
        const ar = getArtist(primary.slug);
        return (
          <section className="bg-[#eae5da]">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-14 md:flex-row md:items-center md:px-8">
              {ar?.image && (
                <img
                  src={ar.image}
                  alt={primary.name}
                  className="h-40 w-40 shrink-0 object-cover shadow-sm"
                />
              )}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a8477]">
                  {ABOUT_ARTIST[lang]}
                </p>
                <p className="dn-name mt-1 text-3xl text-black">{primary.name}</p>
                <a
                  href={href(lang, `artist/${primary.slug}`)}
                  className="mt-3 inline-block font-medium"
                  style={{ color: ACCENT }}
                >
                  {VIEW_ARTIST[lang]}
                </a>
              </div>
            </div>
          </section>
        );
      })()}
    </>
  );
}
