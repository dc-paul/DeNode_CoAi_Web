import { useState } from "react";
import { href, LANGS, type Lang } from "../lang";

const LOGO = "/images/denode-logo-black.png";

const NAV: Record<Lang, [string, string][]> = {
  nl: [
    ["Tentoonstellingen", "expo"],
    ["Kunstenaars", "artists"],
    ["Publicaties", "publicaties"],
    ["Bezoek", "visit"],
    ["Over", "mission"],
  ],
  en: [
    ["Exhibitions", "expo"],
    ["Artists", "artists"],
    ["Publications", "publicaties"],
    ["Visit", "visit"],
    ["About", "mission"],
  ],
  fr: [
    ["Expositions", "expo"],
    ["Artistes", "artists"],
    ["Publications", "publicaties"],
    ["Visite", "visit"],
    ["À propos", "mission"],
  ],
};

export function Header({ lang, page }: { lang: Lang; page: string }) {
  const [menu, setMenu] = useState(false);
  const items = NAV[lang];

  return (
    <header className="dn-header">
      <div className="dn-wrap">
        <div className="dn-navrow">
          <a className="dn-brand" href={href(lang)} aria-label="DeNode Foundation home">
            <img src={LOGO} alt="DeNode Foundation" />
          </a>

          <nav className="dn-nav">
            <ul>
              {items.map(([label, route]) => (
                <li key={route}>
                  <a href={href(lang, route)}>{label}</a>
                </li>
              ))}
            </ul>
            <div className="dn-lang">
              {LANGS.map((l) => (
                <a
                  key={l}
                  href={href(l, page)}
                  className={l === lang ? "lg active" : "lg"}
                >
                  {l.toUpperCase()}
                </a>
              ))}
            </div>
          </nav>

          <button
            className="dn-burger"
            aria-label="Menu"
            onClick={() => setMenu((v) => !v)}
          >
            <span className="block h-0.5 w-6 bg-black"></span>
            <span className="mt-1.5 block h-0.5 w-6 bg-black"></span>
            <span className="mt-1.5 block h-0.5 w-6 bg-black"></span>
          </button>
        </div>
      </div>

      {menu && (
        <div className="dn-mobnav">
          {items.map(([label, route]) => (
            <a key={route} href={href(lang, route)} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
