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
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
      {ai && <p className="text-xs italic text-[#999]">{AI_NOTE[lang]}</p>}
      <h1 className="mt-2 text-4xl font-extrabold leading-tight text-black md:text-5xl">
        {title}
      </h1>

      <div className="mt-12 grid gap-10 md:grid-cols-[240px_1fr]">
        <nav className="self-start md:sticky md:top-24">
          <ul className="border-l border-[#ececec]">
            {sections.map((s, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => jump(i)}
                  className="block w-full py-2 pl-4 text-left text-[15px] leading-snug transition-colors"
                  style={
                    active === i
                      ? {
                          color: "#000",
                          boxShadow: `inset 2px 0 0 0 ${ACCENT}`,
                        }
                      : { color: "#888" }
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
              <h2 className="border-b border-[#ececec] pb-2 text-2xl font-bold text-black">
                {s.heading}
              </h2>
              <div className="mt-4 space-y-3 text-[16px] leading-relaxed text-[#333]">
                {s.paras.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
