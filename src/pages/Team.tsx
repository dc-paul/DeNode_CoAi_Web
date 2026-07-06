import { TEAM } from "../pagesContent";
import type { Lang } from "../lang";

export function Team({ lang }: { lang: Lang }) {
  const t = TEAM[lang];
  return (
    <section className="dn-section">
      <div className="dn-wrap">
        <h1 className="dn-h1">{t.aboutHeading}</h1>
        <p className="dn-lead mt-4 max-w-[60ch]">{t.tagline}</p>
        <div className="mt-6 max-w-[68ch] space-y-4 text-[16px] leading-relaxed text-[#2a2925]">
          {t.aboutParas.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="dn-head mt-16">
          <h2 className="dn-h2">{t.teamHeading}</h2>
        </div>
        <p className="-mt-8 mb-8 text-[#8a8477]">{t.teamSub}</p>

        <div className="dn-grid">
          {t.members.map((m) => (
            <div key={m.name} className="dn-card">
              <div className="thumb" style={{ aspectRatio: "3/4" }}>
                <img src={m.img} alt={m.name} />
              </div>
              <h3 className="dn-name" style={{ textTransform: "none" }}>
                {m.name}
              </h3>
              <p className="dates">{m.role}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-[#2a2925]">
                {m.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-[#d8d2c6] pt-8">
          <h2 className="dn-h3">{t.volunteersHeading}</h2>
          <p className="mt-3 max-w-[68ch] text-[16px] leading-relaxed text-[#2a2925]">
            {t.volunteersBody}
          </p>
        </div>
      </div>
    </section>
  );
}
