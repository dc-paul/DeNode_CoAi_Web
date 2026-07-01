import { CONTENT } from "../content";
import type { Lang } from "../lang";

const ACCENT = "#a23b2d";
const ADDRESS = "Predikherenlei 4, 9000 Gent";
const MAPS = "https://maps.google.com/?q=Predikherenlei+4,+9000+Gent";

const T: Record<
  Lang,
  { title: string; intro: string; where: string; route: string; hours: string; contact: string }
> = {
  nl: {
    title: "Bezoek",
    intro: "nodenaysteen / DeNode ligt aan de Leie, in het hart van Gent.",
    where: "Adres",
    route: "Routebeschrijving →",
    hours: "Openingsuren",
    contact: "Contact",
  },
  en: {
    title: "Visit",
    intro: "nodenaysteen / DeNode sits on the river Leie, in the heart of Ghent.",
    where: "Address",
    route: "Directions →",
    hours: "Opening hours",
    contact: "Contact",
  },
  fr: {
    title: "Visite",
    intro: "nodenaysteen / DeNode se situe au bord de la Lys, au cœur de Gand.",
    where: "Adresse",
    route: "Itinéraire →",
    hours: "Heures d'ouverture",
    contact: "Contact",
  },
};

export function Visit({ lang }: { lang: Lang }) {
  const t = T[lang];
  const f = CONTENT[lang].footer;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
      <h1 className="text-4xl font-extrabold text-black md:text-5xl">{t.title}</h1>
      <p className="mt-3 text-[17px] text-[#555]">{t.intro}</p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-black">{t.where}</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-[#333]">
            Galerie DeNode — nodenaysteen
            <br />
            {ADDRESS}
          </p>
          <a
            href={MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block font-medium"
            style={{ color: ACCENT }}
          >
            {t.route}
          </a>

          <h2 className="mt-10 text-xl font-bold text-black">{t.contact}</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-[#333]">
            <a href="mailto:info@denode.be" className="font-medium" style={{ color: ACCENT }}>
              info@denode.be
            </a>
            <br />
            <a href="tel:+32488880889" className="font-medium" style={{ color: ACCENT }}>
              +32 488 88 08 89
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-black">{t.hours}</h2>
          <div className="mt-3 space-y-1 text-[16px] text-[#333]">
            {f.openLines.map((l, i) => (
              <p key={i}>• {l}</p>
            ))}
          </div>
          <p className="mt-4 text-[16px] text-[#333]">{f.byAppointment}</p>
        </div>
      </div>
    </section>
  );
}
