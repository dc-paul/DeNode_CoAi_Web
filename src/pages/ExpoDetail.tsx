import { getExpo } from "../expos";
import { getPost } from "../blogPosts";
import { getEvent } from "../eventDetails";
import { getArtist } from "../artistDetails";
import { RefCard } from "../components/RefCard";
import { Band } from "../components/Band";
import { Breadcrumb } from "../components/Breadcrumb";
import { href, type Lang } from "../lang";

const T: Record<
  Lang,
  {
    root: string;
    notFound: string;
    curator: string;
    artists: string;
    location: string;
    participants: string;
    texts: string;
    events: string;
    aboutArtist: string;
    viewArtist: string;
  }
> = {
  nl: {
    root: "Tentoonstellingen",
    notFound: "Tentoonstelling niet gevonden",
    curator: "Curator",
    artists: "Kunstenaar(s)",
    location: "Locatie",
    participants: "Deelnemende kunstenaars",
    texts: "Teksten bij deze tentoonstelling",
    events: "Events",
    aboutArtist: "Over de kunstenaar",
    viewArtist: "Bekijk kunstenaar →",
  },
  en: {
    root: "Exhibitions",
    notFound: "Exhibition not found",
    curator: "Curator",
    artists: "Artist(s)",
    location: "Location",
    participants: "Participating artists",
    texts: "Texts for this exhibition",
    events: "Events",
    aboutArtist: "About the artist",
    viewArtist: "View artist →",
  },
  fr: {
    root: "Expositions",
    notFound: "Exposition introuvable",
    curator: "Commissaire",
    artists: "Artiste(s)",
    location: "Lieu",
    participants: "Artistes participants",
    texts: "Textes de cette exposition",
    events: "Événements",
    aboutArtist: "À propos de l'artiste",
    viewArtist: "Voir l'artiste →",
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
      <section className="dn-section">
        <div className="dn-wrap text-center">
          <h1 className="dn-h2">{t.notFound}</h1>
          <a className="dn-btn mx-auto mt-6" href={href(lang, "expo")}>
            {t.root}
          </a>
        </div>
      </section>
    );
  }

  const primary = expo.artists.find((a) => a.slug);
  const ar = primary?.slug ? getArtist(primary.slug) : undefined;

  return (
    <>
      <div className="dn-wrap">
        <Breadcrumb
          lang={lang}
          trail={[{ label: t.root, page: "expo" }, { label: expo.title }]}
        />
      </div>

      {/* Full-bleed hero */}
      <div className="dn-hero-full mt-4" style={{ background: expo.tint }}>
        {expo.image && <img src={expo.image} alt={expo.title} />}
        <div className="veil" />
        <div className="cap">
          <div className="in">
            <p className="dn-eyebrow">{expo.period}</p>
            <h1 className="dn-h1 mt-2">{expo.title}</h1>
            <p className="dn-serif-it mt-2 text-2xl">
              {expo.artists.map((a) => a.name).join(", ")}
            </p>
          </div>
        </div>
      </div>

      {/* Meta */}
      <section className="dn-section">
        <div className="dn-wrap">
          <dl className="dn-dl max-w-2xl">
            <dt>{t.artists}</dt>
            <dd>
              {expo.artists.map((a, i) => (
                <span key={a.name}>
                  {i > 0 && ", "}
                  {a.slug ? (
                    <a href={href(lang, `artist/${a.slug}`)}>{a.name}</a>
                  ) : (
                    a.name
                  )}
                </span>
              ))}
            </dd>
            {expo.curator && expo.curator !== "—" && (
              <>
                <dt>{t.curator}</dt>
                <dd>{expo.curator}</dd>
              </>
            )}
            <dt>{t.location}</dt>
            <dd>nodenaysteen · Predikherenlei 4, 9000 Gent</dd>
          </dl>

          {expo.participants && expo.participants.length > 0 && (
            <div className="mt-10">
              <h2 className="dn-h3">
                {t.participants}{" "}
                <span className="text-[#8a8477]">({expo.participants.length})</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#2a2925]">
                {expo.participants.map((a, i) => (
                  <span key={a.name}>
                    {i > 0 && " · "}
                    {a.slug ? (
                      <a
                        href={href(lang, `artist/${a.slug}`)}
                        style={{ color: "var(--accent)" }}
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
        </div>
      </section>

      <Band lang={lang} />

      {/* Texts + events */}
      {((expo.articleSlugs?.length ?? 0) > 0 ||
        (expo.eventSlugs?.length ?? 0) > 0) && (
        <section className="dn-section">
          <div className="dn-wrap space-y-10">
            {expo.articleSlugs && expo.articleSlugs.length > 0 && (
              <div>
                <h2 className="dn-h2 mb-6">{t.texts}</h2>
                <div className="grid gap-3 sm:grid-cols-2">
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
              <div>
                <h2 className="dn-h2 mb-6">{t.events}</h2>
                <div className="grid gap-3 sm:grid-cols-2">
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
          </div>
        </section>
      )}

      {/* Artist teaser */}
      {primary?.slug && (
        <section className="dn-section" style={{ background: "var(--paper2)" }}>
          <div className="dn-wrap flex flex-col gap-6 md:flex-row md:items-center">
            {ar?.image && (
              <img
                src={ar.image}
                alt={primary.name}
                className="h-40 w-40 shrink-0 object-cover"
              />
            )}
            <div>
              <p className="dn-eyebrow">{t.aboutArtist}</p>
              <p className="dn-name mt-1 text-4xl">{primary.name}</p>
              <a
                className="dn-btn mt-4"
                href={href(lang, `artist/${primary.slug}`)}
              >
                {t.viewArtist}
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
