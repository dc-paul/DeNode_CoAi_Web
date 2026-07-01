import { useState } from "react";
import { href, LANGS, type Lang } from "../lang";

const LOGO = "/images/denode-logo-black.png";

const NAV: Record<
  Lang,
  {
    expo: string;
    artists: string;
    pub: string;
    visit: string;
    about: string;
    mission: string;
    team: string;
  }
> = {
  nl: {
    expo: "tentoonstellingen",
    artists: "kunstenaars",
    pub: "publicaties",
    visit: "bezoek",
    about: "over",
    mission: "missie & statuten",
    team: "team",
  },
  en: {
    expo: "exhibitions",
    artists: "artists",
    pub: "publications",
    visit: "visit",
    about: "about",
    mission: "mission & statutes",
    team: "team",
  },
  fr: {
    expo: "expositions",
    artists: "artistes",
    pub: "publications",
    visit: "visite",
    about: "à propos",
    mission: "mission & statuts",
    team: "équipe",
  },
};

export function Header({ lang, page }: { lang: Lang; page: string }) {
  const [menu, setMenu] = useState(false);
  const t = NAV[lang];

  const main: [string, string][] = [
    [t.expo, "expo"],
    [t.artists, "artists"],
    [t.pub, "publicaties"],
    [t.visit, "visit"],
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d8d2c6] bg-[#f4f1ea]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <a href={href(lang)} aria-label="DeNode Foundation home">
          <img src={LOGO} alt="DeNode Foundation" className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 text-[15px] text-black md:flex">
          {main.map(([label, route]) => (
            <a key={route} href={href(lang, route)} className="hover:text-[#a23b2d]">
              {label}
            </a>
          ))}
          <div className="group relative">
            <button className="hover:text-[#a23b2d]">{t.about} ▾</button>
            <div className="absolute right-0 hidden min-w-[180px] flex-col border border-[#d8d2c6] bg-[#f4f1ea] py-2 shadow-lg group-hover:flex">
              <a href={href(lang, "mission")} className="px-4 py-2 hover:bg-[#eae5da]">
                {t.mission}
              </a>
              <a href={href(lang, "team")} className="px-4 py-2 hover:bg-[#eae5da]">
                {t.team}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            {LANGS.map((l) => (
              <a
                key={l}
                href={href(l, page)}
                className={
                  l === lang
                    ? "border border-[#a23b2d] px-3 py-1.5 text-[#a23b2d]"
                    : "px-3 py-1.5 text-[#888] hover:text-black"
                }
              >
                {l.toUpperCase()}
              </a>
            ))}
          </div>
        </nav>

        <button
          className="text-black md:hidden"
          aria-label="Menu"
          onClick={() => setMenu((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-black"></span>
          <span className="mt-1.5 block h-0.5 w-6 bg-black"></span>
          <span className="mt-1.5 block h-0.5 w-6 bg-black"></span>
        </button>
      </div>

      {menu && (
        <nav className="flex flex-col gap-1 border-t border-[#d8d2c6] px-6 py-4 text-[15px] md:hidden">
          {main.map(([label, route]) => (
            <a key={route} href={href(lang, route)} className="py-2">
              {label}
            </a>
          ))}
          <a href={href(lang, "mission")} className="py-2">
            {t.mission}
          </a>
          <a href={href(lang, "team")} className="py-2">
            {t.team}
          </a>
          <div className="mt-2 flex gap-3 border-t border-[#d8d2c6] pt-3">
            {LANGS.map((l) => (
              <a
                key={l}
                href={href(l, page)}
                className={l === lang ? "font-semibold" : "text-[#888]"}
              >
                {l.toUpperCase()}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
