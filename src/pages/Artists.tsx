import { ARTISTS } from "../pagesContent2";
import type { Lang } from "../lang";

export function Artists({ lang }: { lang: Lang }) {
  const a = ARTISTS[lang];
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:px-8">
      <h1 className="text-4xl font-extrabold text-black md:text-5xl">{a.title}</h1>
      <div className="mt-8 space-y-4 text-[16px] leading-relaxed text-[#333]">
        {a.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="mt-16 border-t border-[#ececec] pt-12 text-center">
        <h2 className="text-2xl font-bold text-black">{a.devHeading}</h2>
        <p className="mt-2 text-[#888]">{a.devBody}</p>
      </div>
    </section>
  );
}
