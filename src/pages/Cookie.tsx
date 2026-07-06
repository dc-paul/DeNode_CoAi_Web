import { COOKIE } from "../pagesContent";
import type { Lang } from "../lang";

export function Cookie({ lang }: { lang: Lang }) {
  const c = COOKIE[lang];
  return (
    <section className="dn-section">
      <div className="mx-auto max-w-3xl px-[34px]">
        <h1 className="dn-h1">{c.title}</h1>
        <div className="mt-8 space-y-4 text-[16px] leading-relaxed text-[#2a2925]">
          {c.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
