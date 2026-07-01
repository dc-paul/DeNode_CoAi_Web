import {
  MISSION_TITLE,
  MISSION_SECTIONS,
  MISSION_LOCALES,
  MISSION_NL,
} from "../pagesContent";
import type { Lang } from "../lang";

const AI_NOTE: Record<Lang, string> = {
  nl: "Deze vertaling is automatisch (AI) gegenereerd.",
  en: "This translation was automatically (AI) generated.",
  fr: "Cette traduction a été générée automatiquement (IA).",
};

export function Mission({ lang }: { lang: Lang }) {
  let title = MISSION_TITLE;
  let sections = MISSION_SECTIONS;
  let ai = false;

  if (lang === "nl") {
    title = MISSION_NL.title;
    sections = MISSION_NL.sections;
  } else if (lang === "fr" && MISSION_LOCALES.fr) {
    title = MISSION_LOCALES.fr.title;
    sections = MISSION_LOCALES.fr.sections;
    ai = true;
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:px-8">
      {ai && <p className="text-xs italic text-[#999]">{AI_NOTE[lang]}</p>}
      <h1 className="mt-2 text-4xl font-extrabold text-black md:text-5xl">
        {title}
      </h1>
      <div className="mt-10 space-y-10">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="border-b border-[#ececec] pb-2 text-xl font-bold text-black">
              {s.heading}
            </h2>
            <div className="mt-4 space-y-3 text-[16px] leading-relaxed text-[#333]">
              {s.paras.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
