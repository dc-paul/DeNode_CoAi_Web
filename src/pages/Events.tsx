import { EVENTS } from "../pagesContent2";
import type { Lang } from "../lang";

export function Events({ lang }: { lang: Lang }) {
  const e = EVENTS[lang];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <h1 className="text-4xl font-extrabold text-black md:text-5xl">{e.title}</h1>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {e.events.map((ev) => (
          <a
            key={ev.title}
            href={ev.href}
            className="flex flex-col overflow-hidden rounded-md border border-[#ececec] bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <img src={ev.image} alt={ev.title} className="h-56 w-full object-cover" />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold text-black">{ev.title}</h3>
              <div className="mt-3 space-y-1 text-[15px] leading-relaxed text-[#333]">
                {ev.lines.map((l, i) => (
                  <p key={i}>{l}</p>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
