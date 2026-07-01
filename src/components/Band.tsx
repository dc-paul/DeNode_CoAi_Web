import type { Lang } from "../lang";

// Ink band (.dn-band): white-out-of-black, carries the mission refrain.
const REFRAIN: Record<Lang, string> = {
  nl: "Een plek van ontmoeting — kunst en technologie. Zonder dwang naar timing.",
  en: "A place of encounter — art and technology. Without the pressure of timing.",
  fr: "Un lieu de rencontre — art et technologie. Sans contrainte de calendrier.",
};
const LABEL: Record<Lang, string> = {
  nl: "De Foundation",
  en: "The Foundation",
  fr: "La Fondation",
};

export function Band({ lang }: { lang: Lang }) {
  return (
    <section className="dn-band">
      <div className="dn-wrap flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
        <div className="flex shrink-0 items-center gap-4">
          <img
            src="/images/denode-logo-white.png"
            alt="DeNode Foundation"
            className="h-12 w-auto"
          />
          <span className="dn-kicker text-white/50">{LABEL[lang]}</span>
        </div>
        <p className="dn-band__q">{REFRAIN[lang]}</p>
      </div>
    </section>
  );
}
