import { MISSION_TITLE, MISSION_SECTIONS } from "../pagesContent";

// The statutes body is English across all locales on the live site; mirrored here.
export function Mission() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:px-8">
      <h1 className="text-4xl font-extrabold text-black md:text-5xl">
        {MISSION_TITLE}
      </h1>
      <div className="mt-10 space-y-10">
        {MISSION_SECTIONS.map((s) => (
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
