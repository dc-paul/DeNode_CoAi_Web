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
    <section className="dn-section">
      <div className="dn-wrap text-center">
        <p className="dn-kicker">{page}</p>
        <h1 className="dn-h1 mt-3">{COMING[lang]}</h1>
        <a href={href(lang)} className="dn-btn mx-auto mt-6">
          {BACK[lang]}
        </a>
      </div>
    </section>
  );
}
