import { useState } from "react";
import {
  MISSION_TITLE,
  MISSION_SECTIONS,
  MISSION_LOCALES,
  MISSION_NL,
} from "../pagesContent";
import type { Lang } from "../lang";

const ACCENT = "#a23b2d";
const AI_NOTE: Record<Lang, string> = {
  nl: "Deze vertaling is automatisch (AI) gegenereerd.",
  en: "This translation was automatically (AI) generated.",
  fr: "Cette traduction a été générée automatiquement (IA).",
};

export function Mission({ lang }: { lang: Lang }) {
  const [active, setActive] = useState(0);

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

  const jump = (i: number) => {
    setActive(i);
    document
      .getElementById(`sec-${i}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="dn-section">
      <div className="dn-wrap">
        {ai && <p className="text-xs italic text-[#8a8477]">{AI_NOTE[lang]}</p>}
        <h1 className="dn-h1 mt-2">{title}</h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[240px_1fr]">
          <nav className="self-start md:sticky md:top-24">
            <ul className="border-l border-[#d8d2c6]">
              {sections.map((s, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => jump(i)}
                    className="dn-kicker block w-full py-2 pl-4 text-left leading-snug transition-colors"
                    style={
                      active === i
                        ? { color: ACCENT, boxShadow: `inset 2px 0 0 0 ${ACCENT}` }
                        : undefined
                    }
                  >
                    {s.heading}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={i} id={`sec-${i}`} className="scroll-mt-24">
                <h2 className="dn-h3 border-b border-[#d8d2c6] pb-2">
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-3 text-[16px] leading-relaxed text-[#2a2925]">
                  {s.paras.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
