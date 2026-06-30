import { COOKIE } from "../pagesContent";
import type { Lang } from "../lang";

export function Cookie({ lang }: { lang: Lang }) {
  const c = COOKIE[lang];
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:px-8">
      <h1 className="text-4xl font-extrabold text-black">{c.title}</h1>
      <div className="mt-8 space-y-4 text-[16px] leading-relaxed text-[#333]">
        {c.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
