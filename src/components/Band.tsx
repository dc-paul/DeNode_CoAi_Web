import type { Lang } from "../lang";

// Ink band (.dn-band): white-out-of-black, echoes the logo. Carries the
// mission refrain (Style System §8). Used on Home + detail pages.
const LABEL: Record<Lang, string> = {
  nl: "De Foundation",
  en: "The Foundation",
  fr: "La Fondation",
};
const REFRAIN: Record<Lang, string> = {
  nl: "Een plek van ontmoeting — kunst en technologie. Zonder dwang naar timing.",
  en: "A place of encounter — art and technology. Without the pressure of timing.",
  fr: "Un lieu de rencontre — art et technologie. Sans contrainte de calendrier.",
};

export function Band({ lang }: { lang: Lang }) {
  return (
    <section className="bg-[#0e0e0c] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:gap-12 md:px-10">
        <div className="flex shrink-0 items-center gap-4">
          <img
            src="/images/denode-logo-white.png"
            alt="DeNode Foundation"
            className="h-12 w-auto"
          />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            {LABEL[lang]}
          </span>
        </div>
        <p
          className="text-2xl leading-snug text-white md:text-3xl"
          style={{ fontFamily: '"EB Garamond", Georgia, serif', fontStyle: "italic" }}
        >
          {REFRAIN[lang]}
        </p>
      </div>
    </section>
  );
}
