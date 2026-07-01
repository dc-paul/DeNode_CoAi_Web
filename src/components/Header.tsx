import { useState } from "react";
import { CONTENT } from "../content";
import { href, LANGS, LANG_LABELS, type Lang } from "../lang";

const LOGO = "/images/logo-denode.png";

const EXTRA: Record<Lang, { expo: string; events: string; shop: string }> = {
  nl: { expo: "tentoonstellingen", events: "evenementen", shop: "shop" },
  en: { expo: "exhibitions", events: "events", shop: "shop" },
  fr: { expo: "expositions", events: "événements", shop: "boutique" },
};

export function Header({ lang, page }: { lang: Lang; page: string }) {
  const [menu, setMenu] = useState(false);
  const t = CONTENT[lang].nav;
  const x = EXTRA[lang];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#ececec] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <a href={href(lang)} aria-label="DeNode Foundation home">
          <img src={LOGO} alt="DeNode Foundation" className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 text-[15px] text-black md:flex">
          <a href={href(lang, "program")} className="hover:text-[#a23b2d]">
            {t.program}
          </a>
          <a href={href(lang, "expo")} className="hover:text-[#a23b2d]">
            {x.expo}
          </a>
          <a href={href(lang, "artists")} className="hover:text-[#a23b2d]">
            {t.artists}
          </a>
          <a href={href(lang, "events")} className="hover:text-[#a23b2d]">
            {x.events}
          </a>
          <div className="group relative">
            <button className="hover:text-[#a23b2d]">{t.foundation} ▾</button>
            <div className="absolute right-0 hidden min-w-[160px] flex-col rounded-md border border-[#ececec] bg-white py-2 shadow-lg group-hover:flex">
              <a href={href(lang, "team")} className="px-4 py-2 hover:bg-[#f7f7f5]">
                {t.team}
              </a>
              <a
                href={href(lang, "mission")}
                className="px-4 py-2 hover:bg-[#f7f7f5]"
              >
                {t.mission}
              </a>
            </div>
          </div>
          <a href={href(lang, "shop")} className="hover:text-[#a23b2d]">
            {x.shop}
          </a>
          <div className="flex items-center gap-2 text-sm">
            {LANGS.map((l) => (
              <a
                key={l}
                href={href(l, page)}
                className={
                  l === lang
                    ? "rounded-full border border-[#dcdcdc] px-3 py-1.5"
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
        <nav className="flex flex-col gap-1 border-t border-[#ececec] px-6 py-4 text-[15px] md:hidden">
          <a href={href(lang, "program")} className="py-2">
            {t.program}
          </a>
          <a href={href(lang, "expo")} className="py-2">
            {x.expo}
          </a>
          <a href={href(lang, "artists")} className="py-2">
            {t.artists}
          </a>
          <a href={href(lang, "events")} className="py-2">
            {x.events}
          </a>
          <a href={href(lang, "team")} className="py-2">
            {t.team}
          </a>
          <a href={href(lang, "mission")} className="py-2">
            {t.mission}
          </a>
          <a href={href(lang, "shop")} className="py-2">
            {x.shop}
          </a>
          <div className="mt-2 flex gap-3 border-t border-[#ececec] pt-3">
            {LANGS.map((l) => (
              <a
                key={l}
                href={href(l, page)}
                className={l === lang ? "font-semibold" : "text-[#888]"}
              >
                {LANG_LABELS[l]}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
