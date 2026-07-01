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
    <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
      <h1 className="text-4xl font-extrabold text-black md:text-5xl">{s.title}</h1>
      <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
        <img
          src={IMG.katbove}
          alt={s.productTitle}
          className="w-full rounded-md object-cover shadow-sm"
        />
        <div>
          <h2 className="text-2xl font-bold text-black">{s.productTitle}</h2>
          <p className="mt-2 text-xl font-bold" style={{ color: ACCENT }}>
            {s.price}
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-[#333]">
            {s.productDesc}
          </p>
          <a
            href={mailto}
            className="mt-6 inline-block rounded-sm px-6 py-3 font-semibold text-white"
            style={{ backgroundColor: ACCENT }}
          >
            {s.reserveCta}
          </a>
          <p className="mt-4 text-sm text-[#888]">{s.note}</p>
        </div>
      </div>
    </section>
  );
}
