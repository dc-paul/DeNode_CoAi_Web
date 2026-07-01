import { getEvent } from "../eventDetails";
import type { Localized } from "../blogPosts";
import { href, type Lang } from "../lang";

const ACCENT = "#c0392b";
const BACK: Record<Lang, string> = {
  nl: "← Terug naar evenementen",
  en: "← Back to events",
  fr: "← Retour aux événements",
};
const NOT_FOUND: Record<Lang, string> = {
  nl: "Evenement niet gevonden",
  en: "Event not found",
  fr: "Événement introuvable",
};
const AI_NOTE: Record<Lang, string> = {
  nl: "Deze vertaling is automatisch (AI) gegenereerd.",
  en: "This translation was automatically (AI) generated.",
  fr: "Cette traduction a été générée automatiquement (IA).",
};
const REGISTER: Record<Lang, string> = {
  nl: "Inschrijven",
  en: "Register",
  fr: "S'inscrire",
};
const WHERE: Record<Lang, string> = { nl: "Locatie", en: "Location", fr: "Lieu" };
const WHEN: Record<Lang, string> = { nl: "Data", en: "Dates", fr: "Dates" };

export function EventDetail({ lang, slug }: { lang: Lang; slug: string }) {
  const ev = getEvent(slug);

  if (!ev) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-extrabold">{NOT_FOUND[lang]}</h1>
        <a
          href={href(lang, "events")}
          className="mt-6 inline-block font-medium"
          style={{ color: ACCENT }}
        >
          {BACK[lang]}
        </a>
      </section>
    );
  }

  const loc: Localized =
    lang === "en" && ev.en ? ev.en : lang === "fr" && ev.fr ? ev.fr : ev.nl;

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:px-8">
      <a
        href={href(lang, "events")}
        className="text-sm font-medium"
        style={{ color: ACCENT }}
      >
        {BACK[lang]}
      </a>

      {loc.ai && (
        <p className="mt-4 text-xs italic text-[#999]">{AI_NOTE[lang]}</p>
      )}

      <h1 className="mt-6 text-4xl font-extrabold leading-tight text-black md:text-5xl">
        {loc.title}
      </h1>
      {loc.subtitle && <p className="mt-3 text-xl text-[#555]">{loc.subtitle}</p>}

      {ev.image && (
        <img
          src={ev.image}
          alt={loc.title}
          className="mt-8 w-full rounded-md object-cover shadow-sm"
        />
      )}

      <div className="mt-8 grid gap-4 rounded-md border border-[#ececec] bg-[#fafafa] p-5 text-[15px] text-[#333] sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#999]">
            {WHEN[lang]}
          </p>
          <p className="mt-1">{ev.dateLabel}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#999]">
            {WHERE[lang]}
          </p>
          <p className="mt-1">{ev.location}</p>
        </div>
      </div>

      <div className="mt-10 space-y-5">
        {loc.body.map((b, i) =>
          b.k === "h" ? (
            <h2 key={i} className="pt-4 text-2xl font-bold text-black">
              {b.t}
            </h2>
          ) : (
            <p key={i} className="text-[17px] leading-relaxed text-[#222]">
              {b.t}
            </p>
          ),
        )}
      </div>

      {ev.register && (
        <a
          href={`mailto:${ev.register}`}
          className="mt-10 inline-block rounded-md px-6 py-3 text-[15px] font-semibold text-white"
          style={{ backgroundColor: ACCENT }}
        >
          {REGISTER[lang]} — {ev.register}
        </a>
      )}
    </article>
  );
}
