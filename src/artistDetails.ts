// Local artist profile pages. Editorial content synthesised from authentic
// denode.be material (the Kat Bové interview + the two essays + her art book).
// Base = Dutch; en/fr are AI translations flagged with `ai: true`.
import type { Lang } from "./lang";
import type { Localized } from "./blogPosts";

export interface Exhibition {
  date: string; // display date, e.g. "2026/05/03 – 2026/05/31"
  text: string;
  link?: string; // path fragment (e.g. "blog/the-church-of-kat-bove"); rendered as #/<lang>/<link>
  linkLabel?: string; // localized "read the text" label
}

export interface ArtistDetail {
  slug: string;
  name: string;
  image: string;
  related: string[]; // blog-post slugs about this artist
  // Exhibitions / history, listed newest-first, rendered as a dated timeline.
  exhibitions?: Record<Lang, Exhibition[]>;
  // When true, show a "view the book in the shop" link (for artists with a book).
  shop?: boolean;
  nl: Localized;
  en?: Localized;
  fr?: Localized;
}

export const ARTIST_DETAILS: ArtistDetail[] = [
  {
    slug: "kat-bove",
    name: "Kat Bové",
    image: "/images/kat-bove-solo-assenede.webp",
    related: [
      "between-mask-and-identity",
      "the-church-of-kat-bove",
      "bodies-eros-and-thanatos",
    ],
    exhibitions: {
      nl: [
        { date: "2026/05/03 – 2026/05/31", text: "Kat Bové solo — Pim De Rudder Stichting, Assenede. Presentatie van nieuwe werken." },
        { date: "2026/01 – 2026/03", text: "'Minsterwood' (Wayn Traub) — River City Gallery, Bangkok. Kat Bové verschijnt in de centrale triptiek." },
        { date: "2025", text: "WHO IS YOUR GOD, WHERE IS SHE — solotentoonstelling bij nodenaysteen / DeNode, Gent. Een zoektocht in zelfportretten naar dualiteit.", link: "blog/the-church-of-kat-bove", linkLabel: "Lees de expotekst" },
        { date: "—", text: "Eerste solotentoonstelling — Zeepziederij, Bree. De half-industriële ruimte waarin ze haar werk voor het eerst publiek toonde." },
      ],
      en: [
        { date: "2026/05/03 – 2026/05/31", text: "Kat Bové solo — Pim De Rudder Foundation, Assenede. A presentation of new works." },
        { date: "2026/01 – 2026/03", text: "'Minsterwood' (Wayn Traub) — River City Gallery, Bangkok. Kat Bové appears in the central triptych." },
        { date: "2025", text: "WHO IS YOUR GOD, WHERE IS SHE — solo exhibition at nodenaysteen / DeNode, Ghent. A search in self-portraits for duality.", link: "blog/the-church-of-kat-bove", linkLabel: "Read the exhibition text" },
        { date: "—", text: "First solo exhibition — Zeepziederij, Bree. The semi-industrial space where she first showed her work publicly." },
      ],
      fr: [
        { date: "2026/05/03 – 2026/05/31", text: "Kat Bové solo — Fondation Pim De Rudder, Assenede. Présentation de nouvelles œuvres." },
        { date: "2026/01 – 2026/03", text: "« Minsterwood » (Wayn Traub) — River City Gallery, Bangkok. Kat Bové apparaît dans le triptyque central." },
        { date: "2025", text: "WHO IS YOUR GOD, WHERE IS SHE — exposition personnelle à nodenaysteen / DeNode, Gand. Une quête de la dualité à travers des autoportraits.", link: "blog/the-church-of-kat-bove", linkLabel: "Lire le texte de l'exposition" },
        { date: "—", text: "Première exposition personnelle — Zeepziederij, Bree. L'espace semi-industriel où elle a montré son travail au public pour la première fois." },
      ],
    },
    shop: true,
    nl: {
      title: "Kat Bové",
      subtitle: "°1984 · beeldend kunstenaar",
      body: [
        { k: "h", t: "Biografie" },
        { k: "p", t: "Kat Bové (°1984) is een Belgische kunstenares die in felle kleuren en luipaardprints door het leven lijkt te dansen. Achter die vrolijke façade schuilt een introverte maker die haar demonen, twijfels en vragen al jarenlang op papier uitwerkt. Jarenlang schilderde ze uitsluitend voor zichzelf; pas de voorbije jaren deelt ze haar werk met een breder publiek." },
        { k: "p", t: "Naast haar kunstenaarschap werkt Kat als airhostess. Onderweg — in het vliegtuig, aan het zoveelste hotelzwembad — reizen haar pen en papier altijd mee; ze portretteert er haar collega's en bouwt zo aan een intiem beeldarchief. In haar werk keren dualiteit, maskers en de zoektocht naar een geïdealiseerde, krachtige versie van zichzelf voortdurend terug, vaak met een gezonde dosis (zelf)humor." },
        { k: "h", t: "Kunstboek" },
        { k: "p", t: "'Give me a sketchbook to live in' (Stichting DeNode, 2026, bijna 300 pagina's) bundelt meer dan twintig jaar innerlijke strijd, bevolkt door engelen en demonen. Het opent met de waarschuwing 'DON'T READ A WORD IN THIS DIARY, OTHERWISE KARMA WILL FIND YOU' en eindigt met 'FUCK DE MENSEN'." },
      ],
    },
    en: {
      title: "Kat Bové",
      subtitle: "°1984 · visual artist",
      ai: true,
      body: [
        { k: "h", t: "Biography" },
        { k: "p", t: "Kat Bové (°1984) is a Belgian artist who seems to dance through life in bright colours and leopard prints. Behind that cheerful façade hides an introverted maker who has worked through her demons, doubts and questions on paper for years. For a long time she painted only for herself; only in recent years has she shared her work with a wider public." },
        { k: "p", t: "Alongside her artistic practice, Kat works as a flight attendant. On the road — on the plane, at yet another hotel pool — her pen and paper always travel with her; she portrays her colleagues and thus builds an intimate visual archive. In her work, duality, masks and the search for an idealised, powerful version of herself return again and again, often with a healthy dose of (self-)humour." },
        { k: "h", t: "Art book" },
        { k: "p", t: "'Give me a sketchbook to live in' (Stichting DeNode, 2026, almost 300 pages) gathers more than twenty years of inner struggle, peopled by angels and demons. It opens with the warning 'DON'T READ A WORD IN THIS DIARY, OTHERWISE KARMA WILL FIND YOU' and ends with 'FUCK DE MENSEN'." },
      ],
    },
    fr: {
      title: "Kat Bové",
      subtitle: "°1984 · artiste plasticienne",
      ai: true,
      body: [
        { k: "h", t: "Biographie" },
        { k: "p", t: "Kat Bové (°1984) est une artiste belge qui semble danser à travers la vie en couleurs vives et imprimés léopard. Derrière cette façade joyeuse se cache une créatrice introvertie qui, depuis des années, met ses démons, ses doutes et ses questions sur le papier. Longtemps, elle a peint uniquement pour elle-même ; ce n'est que ces dernières années qu'elle partage son travail avec un public plus large." },
        { k: "p", t: "En parallèle de sa pratique artistique, Kat travaille comme hôtesse de l'air. En déplacement — dans l'avion, au énième bord de piscine d'hôtel — son stylo et son papier voyagent toujours avec elle ; elle y portraiture ses collègues et constitue ainsi une archive visuelle intime. Dans son travail, la dualité, les masques et la quête d'une version idéalisée et puissante d'elle-même reviennent sans cesse, souvent avec une bonne dose d'(auto)dérision." },
        { k: "h", t: "Livre d'art" },
        { k: "p", t: "'Give me a sketchbook to live in' (Stichting DeNode, 2026, près de 300 pages) rassemble plus de vingt ans de luttes intérieures, peuplées d'anges et de démons. Il s'ouvre sur l'avertissement 'DON'T READ A WORD IN THIS DIARY, OTHERWISE KARMA WILL FIND YOU' et se termine par 'FUCK DE MENSEN'." },
      ],
    },
  },
];

export function getArtist(slug: string): ArtistDetail | undefined {
  return ARTIST_DETAILS.find((a) => a.slug === slug);
}
