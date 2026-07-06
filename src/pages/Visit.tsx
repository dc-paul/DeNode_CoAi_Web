import { CONTENT } from "../content";
import type { Lang } from "../lang";

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
    <section className="dn-section">
      <div className="dn-wrap">
        <h1 className="dn-h1">{t.title}</h1>
        <p className="dn-lead mt-4 max-w-[60ch]">{t.intro}</p>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <dl className="dn-dl">
            <dt>{t.where}</dt>
            <dd>
              Galerie DeNode — nodenaysteen
              <br />
              {ADDRESS}
              <br />
              <a href={MAPS} target="_blank" rel="noopener noreferrer">
                {t.route}
              </a>
            </dd>
            <dt>{t.hours}</dt>
            <dd>
              {f.openLines.map((l, i) => (
                <div key={i}>{l}</div>
              ))}
              <div className="mt-2 text-[#8a8477]">{f.byAppointment}</div>
            </dd>
            <dt>{t.contact}</dt>
            <dd>
              <a href="mailto:info@denode.be">info@denode.be</a>
              <br />
              <a href="tel:+32488880889">+32 488 88 08 89</a>
            </dd>
          </dl>

          <div className="min-h-[320px] border border-[#d8d2c6]">
            <iframe
              title="kaart"
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=3.724%2C51.052%2C3.732%2C51.056&marker=51.054%2C3.728"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
