import { getArtist } from "../artistDetails";
import { exposForArtist } from "../expos";
import { getPost } from "../blogPosts";
import { RefCard } from "../components/RefCard";
import { Breadcrumb } from "../components/Breadcrumb";
import { href, type Lang } from "../lang";

const T: Record<
  Lang,
  {
    root: string;
    notFound: string;
    role: string;
    about: string;
    atDenode: string;
    written: string;
    shop: string;
    links: string;
  }
> = {
  nl: {
    root: "Kunstenaars",
    notFound: "Kunstenaar niet gevonden",
    role: "Kunstenaar",
    about: "Over",
    atDenode: "Bij DeNode",
    written: "Geschreven voor DeNode",
    shop: "Bekijk het boek in de shop →",
    links: "Elders",
  },
  en: {
    root: "Artists",
    notFound: "Artist not found",
    role: "Artist",
    about: "About",
    atDenode: "At DeNode",
    written: "Written for DeNode",
    shop: "View the book in the shop →",
    links: "Elsewhere",
  },
  fr: {
    root: "Artistes",
    notFound: "Artiste introuvable",
    role: "Artiste",
    about: "À propos",
    atDenode: "Chez DeNode",
    written: "Écrit pour DeNode",
    shop: "Voir le livre dans la boutique →",
    links: "Ailleurs",
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
      <section className="dn-section">
        <div className="dn-wrap text-center">
          <h1 className="dn-h2">{t.notFound}</h1>
          <a className="dn-btn mx-auto mt-6" href={href(lang, "artists")}>
            {t.root}
          </a>
        </div>
      </section>
    );
  }

  const expos = exposForArtist(slug);
  const bio = artist.bio?.[lang];
  const extra = artist.extraExhibitions?.[lang];

  return (
    <>
      <div className="dn-wrap">
        <Breadcrumb
          lang={lang}
          trail={[{ label: t.root, page: "artists" }, { label: artist.name }]}
        />
      </div>

      {/* Split hero */}
      <section className="dn-hero mt-4">
        <div className="dn-hero__txt">
          <p className="dn-eyebrow">{t.role}</p>
          <h1 className="dn-h1 mt-2">{artist.name}</h1>
          {artist.role && (
            <p className="dn-serif-it mt-2 text-2xl text-[#45433a]">
              {artist.role[lang]}
            </p>
          )}
          {bio && bio[0]?.k === "p" && (
            <p className="dn-lead mt-5">{bio[0].t}</p>
          )}
        </div>
        <div className="dn-hero__img">
          {artist.image && <img src={artist.image} alt={artist.name} />}
        </div>
      </section>

      {/* About + aside */}
      {(bio || artist.external) && (
        <section className="dn-section">
          <div className="dn-wrap grid gap-12 md:grid-cols-[1fr_300px]">
            <div>
              {bio && (
                <>
                  <h2 className="dn-h2 mb-5">{t.about}</h2>
                  <div className="space-y-4 text-[17px] leading-relaxed text-[#26251f]">
                    {bio.map((b, i) =>
                      b.k === "h" ? (
                        <h3 key={i} className="dn-h3 pt-3">
                          {b.t}
                        </h3>
                      ) : (
                        <p key={i}>{b.t}</p>
                      ),
                    )}
                  </div>
                </>
              )}
              {artist.shop && (
                <a
                  className="mt-6 inline-block font-medium"
                  style={{ color: "var(--accent)" }}
                  href={href(lang, "shop")}
                >
                  {t.shop}
                </a>
              )}
            </div>

            {artist.external && artist.external.length > 0 && (
              <aside>
                <dl className="dn-dl" style={{ gridTemplateColumns: "1fr" }}>
                  <dt>{t.links}</dt>
                  {artist.external.map((x) => (
                    <dd key={x.url}>
                      <a href={x.url} target="_blank" rel="noopener noreferrer">
                        {x.label} ↗
                      </a>
                    </dd>
                  ))}
                </dl>
              </aside>
            )}
          </div>
        </section>
      )}

      {/* At DeNode — dark band with exhibition rows */}
      {expos.length > 0 && (
        <section className="dn-band">
          <div className="dn-wrap">
            <h2 className="dn-h2" style={{ color: "#fff" }}>
              {t.atDenode}
            </h2>
            <ul className="mt-6">
              {expos.map((e) => (
                <li key={e.slug}>
                  <a
                    href={href(lang, `expo/${e.slug}`)}
                    className="flex items-baseline justify-between gap-6 border-t border-white/15 py-4"
                  >
                    <span className="dn-kicker shrink-0 text-white/60">
                      {e.period}
                    </span>
                    <span className="flex-1 text-xl text-white">{e.title}</span>
                    <span style={{ color: "var(--accent)" }}>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Non-DeNode exhibitions */}
      {extra && extra.length > 0 && (
        <section className="dn-section">
          <div className="dn-wrap">
            <h2 className="dn-h2 mb-6">{t.atDenode === "Bij DeNode" ? "Andere tentoonstellingen" : t.atDenode === "At DeNode" ? "Other exhibitions" : "Autres expositions"}</h2>
            <ul className="space-y-4">
              {extra.map((ex, i) => (
                <li key={i} className="grid gap-1 sm:grid-cols-[160px_1fr] sm:gap-6">
                  <span className="dn-kicker">{ex.date}</span>
                  <p className="text-[16px] leading-relaxed text-[#26251f]">
                    {ex.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Authored texts */}
      {artist.articles && artist.articles.length > 0 && (
        <section className="dn-section">
          <div className="dn-wrap">
            <h2 className="dn-h2 mb-6">{t.written}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
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
        </section>
      )}
    </>
  );
}
