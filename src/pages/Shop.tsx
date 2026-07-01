import { SHOP } from "../pagesContent2";
import { IMG } from "../content";
import type { Lang } from "../lang";

const ACCENT = "#a23b2d";

export function Shop({ lang }: { lang: Lang }) {
  const s = SHOP[lang];
  const mailto =
    `mailto:${s.mailTo}?subject=` +
    encodeURIComponent(s.mailSubject) +
    "&body=" +
    encodeURIComponent(s.mailBody);
  return (
    <section className="dn-section">
      <div className="dn-wrap">
        <h1 className="dn-h1">{s.title}</h1>
        <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
          <img src={IMG.katbove} alt={s.productTitle} className="w-full object-cover" />
          <div>
            <h2 className="dn-h3">{s.productTitle}</h2>
            <p className="mt-2 text-xl font-bold" style={{ color: ACCENT }}>
              {s.price}
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-[#2a2925]">
              {s.productDesc}
            </p>
            <a href={mailto} className="dn-btn mt-6">
              {s.reserveCta}
            </a>
            <p className="mt-4 text-sm text-[#8a8477]">{s.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
