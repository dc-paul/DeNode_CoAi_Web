import { CONTENT } from "../content";
import { href, type Lang } from "../lang";

const T: Record<
  Lang,
  {
    discover: string;
    involved: string;
    friends: string;
    contact: string;
    exhibitions: string;
    artists: string;
    publications: string;
    visit: string;
    about: string;
    team: string;
    refrain: string;
  }
> = {
  nl: {
    discover: "Ontdek",
    involved: "Betrokken",
    friends: "Vrienden van DeNode",
    contact: "Contact",
    exhibitions: "Tentoonstellingen",
    artists: "Kunstenaars",
    publications: "Publicaties",
    visit: "Bezoek",
    about: "Over",
    team: "Team",
    refrain: "Kunst en technologie — zonder dwang naar timing.",
  },
  en: {
    discover: "Discover",
    involved: "Get involved",
    friends: "Friends of DeNode",
    contact: "Contact",
    exhibitions: "Exhibitions",
    artists: "Artists",
    publications: "Publications",
    visit: "Visit",
    about: "About",
    team: "Team",
    refrain: "Art and technology — without the pressure of timing.",
  },
  fr: {
    discover: "Découvrir",
    involved: "S'impliquer",
    friends: "Amis de DeNode",
    contact: "Contact",
    exhibitions: "Expositions",
    artists: "Artistes",
    publications: "Publications",
    visit: "Visite",
    about: "À propos",
    team: "Équipe",
    refrain: "Art et technologie — sans contrainte de calendrier.",
  },
};

export function Footer({ lang }: { lang: Lang }) {
  const f = CONTENT[lang].footer;
  const t = T[lang];
  return (
    <footer className="dn-footer">
      <div className="dn-wrap">
        <div className="cols">
          <div>
            <img src="/images/denode-logo-white.png" alt="DeNode Foundation" />
            <p className="text-[14px] leading-relaxed text-[#cfc8b8]">
              {f.address}
            </p>
            <p className="mt-3 text-[14px]">
              <a href="mailto:info@denode.be">info@denode.be</a>
              <br />
              <a href="tel:+32488880889">+32 488 88 08 89</a>
            </p>
            <div className="mt-4 flex gap-4 text-[14px]">
              <a
                href="https://www.instagram.com/denode_foundation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574359620834"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h4>{t.discover}</h4>
            <ul className="fnav">
              <li>
                <a href={href(lang, "expo")}>{t.exhibitions}</a>
              </li>
              <li>
                <a href={href(lang, "artists")}>{t.artists}</a>
              </li>
              <li>
                <a href={href(lang, "publicaties")}>{t.publications}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>{t.involved}</h4>
            <ul className="fnav">
              <li>
                <a href={href(lang, "visit")}>{t.visit}</a>
              </li>
              <li>
                <a href={href(lang, "mission")}>{t.about}</a>
              </li>
              <li>
                <a href={href(lang, "team")}>{t.team}</a>
              </li>
              <li>
                <a href="mailto:info@denode.be">{t.contact}</a>
              </li>
              <li>
                <span className="text-[#7c7566]">{t.friends}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="fine">
          <span>{f.copyright} · Predikherenlei 4, 9000 Gent</span>
          <span className="dn-serif-it text-[#98917f]">{t.refrain}</span>
        </div>
      </div>
    </footer>
  );
}
