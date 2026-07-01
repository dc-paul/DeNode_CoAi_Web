// Lightweight hash-based i18n router state — no external dependency, works on
// static Juno hosting without SPA-fallback config. URLs look like:
//   #/nl  #/en  #/fr  #/nl/mission  #/en/team  ...
// Default (empty hash) → Dutch home.

export const LANGS = ["nl", "en", "fr"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "nl";

export const LANG_LABELS: Record<Lang, string> = {
  nl: "Nederlands",
  en: "English (US)",
  fr: "Français",
};

export interface Route {
  lang: Lang;
  page: string; // "" = home, else "mission" | "team" | "artists" | "cookie-policy" ...
}

export function parseHash(hash: string): Route {
  const clean = hash.replace(/^#\/?/, "").replace(/\/$/, "");
  const parts = clean.split("/").filter(Boolean);
  const maybeLang = parts[0] as Lang | undefined;
  if (maybeLang && (LANGS as readonly string[]).includes(maybeLang)) {
    return { lang: maybeLang, page: parts.slice(1).join("/") };
  }
  return { lang: DEFAULT_LANG, page: parts.join("/") };
}

export function href(lang: Lang, page = ""): string {
  return page ? `#/${lang}/${page}` : `#/${lang}`;
}
