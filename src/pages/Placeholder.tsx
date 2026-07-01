import { href, type Lang } from "../lang";

const COMING: Record<Lang, string> = {
  nl: "Binnenkort beschikbaar",
  en: "Coming soon",
  fr: "Bientôt disponible",
};
const BACK: Record<Lang, string> = {
  nl: "Terug naar home",
  en: "Back to home",
  fr: "Retour à l'accueil",
};

export function Placeholder({ lang, page }: { lang: Lang; page: string }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="text-sm uppercase tracking-wide text-[#999]">{page}</p>
      <h1 className="mt-3 text-4xl font-extrabold">{COMING[lang]}</h1>
      <a
        href={href(lang)}
        className="mt-6 inline-block font-medium"
        style={{ color: "#a23b2d" }}
      >
        {BACK[lang]}
      </a>
    </section>
  );
}
