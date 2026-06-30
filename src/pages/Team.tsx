import { TEAM } from "../pagesContent";
import type { Lang } from "../lang";

export function Team({ lang }: { lang: Lang }) {
  const t = TEAM[lang];
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
      <h1 className="text-3xl font-extrabold text-black md:text-4xl">
        {t.aboutHeading}
      </h1>
      <p className="mt-4 text-xl font-semibold text-black">{t.tagline}</p>
      <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-[#333]">
        {t.aboutParas.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-bold text-black">{t.teamHeading}</h2>
      <p className="mt-2 text-[#666]">{t.teamSub}</p>

      <div className="mt-8 grid gap-10 md:grid-cols-3">
        {t.members.map((m) => (
          <div key={m.name}>
            <img
              src={m.img}
              alt={m.name}
              className="aspect-[3/4] w-full rounded-md object-cover"
            />
            <h3 className="mt-4 text-lg font-bold text-black">{m.name}</h3>
            <p className="text-sm italic text-[#888]">{m.role}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#333]">{m.bio}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 border-t border-[#ececec] pt-8">
        <h2 className="text-xl font-bold text-black">{t.volunteersHeading}</h2>
        <p className="mt-3 max-w-3xl text-[16px] leading-relaxed text-[#333]">
          {t.volunteersBody}
        </p>
      </div>
    </section>
  );
}
