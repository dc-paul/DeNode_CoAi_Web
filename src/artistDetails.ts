// Artist & author pages. Kept deliberately lean: each artist's DeNode
// exhibitions and their texts are derived automatically from the central
// exhibition data (expos.ts) — declared once, no repetition. A page only
// carries what can't be derived: role, an optional synthesised bio,
// non-DeNode exhibitions, authored articles (for critics), external links.
import type { Lang } from "./lang";
import type { Block } from "./blogPosts";

export interface Exhibition {
  date: string;
  text: string;
  posts?: string[];
  expo?: string;
}

export interface ArtistDetail {
  slug: string;
  name: string;
  image?: string; // cover / portrait thumbnail
  role?: Record<Lang, string>;
  bio?: Record<Lang, Block[]>;
  extraExhibitions?: Record<Lang, Exhibition[]>; // non-DeNode shows
  articles?: string[]; // for authors/critics: the texts they wrote
  external?: { label: string; url: string }[]; // e.g. Hilde Van Canneyt interview
  shop?: boolean;
}

const VISUAL: Record<Lang, string> = {
  nl: "beeldend kunstenaar",
  en: "visual artist",
  fr: "artiste plasticien·ne",
};
const AUTHOR: Record<Lang, string> = {
  nl: "auteur & criticus",
  en: "author & critic",
  fr: "auteur & critique",
};

export const ARTIST_DETAILS: ArtistDetail[] = [
  {
    slug: "kat-bove",
    name: "Kat Bové",
    image: "/images/kat-bove-solo-assenede.webp",
    role: {
      nl: "°1984 · beeldend kunstenaar",
      en: "°1984 · visual artist",
      fr: "°1984 · artiste plasticienne",
    },
    shop: true,
    bio: {
      nl: [
        { k: "p", t: "Kat Bové (°1984) is een Belgische kunstenares die in felle kleuren en luipaardprints door het leven lijkt te dansen. Achter die vrolijke façade schuilt een introverte maker die haar demonen, twijfels en vragen al jarenlang op papier uitwerkt. Jarenlang schilderde ze uitsluitend voor zichzelf; pas de voorbije jaren deelt ze haar werk met een breder publiek." },
        { k: "p", t: "Naast haar kunstenaarschap werkt Kat als airhostess. Onderweg reizen haar pen en papier altijd mee; ze portretteert er haar collega's en bouwt zo aan een intiem beeldarchief. In haar werk keren dualiteit, maskers en de zoektocht naar een geïdealiseerde, krachtige versie van zichzelf voortdurend terug, vaak met een gezonde dosis (zelf)humor." },
        { k: "h", t: "Kunstboek" },
        { k: "p", t: "'Give me a sketchbook to live in' (Stichting DeNode, 2026, bijna 300 pagina's) bundelt meer dan twintig jaar innerlijke strijd, bevolkt door engelen en demonen. Het opent met de waarschuwing 'DON'T READ A WORD IN THIS DIARY, OTHERWISE KARMA WILL FIND YOU' en eindigt met 'FUCK DE MENSEN'." },
      ],
      en: [
        { k: "p", t: "Kat Bové (°1984) is a Belgian artist who seems to dance through life in bright colours and leopard prints. Behind that cheerful façade hides an introverted maker who has worked through her demons, doubts and questions on paper for years. For a long time she painted only for herself; only recently has she shared her work with a wider public." },
        { k: "p", t: "Alongside her artistic practice, Kat works as a flight attendant. On the road her pen and paper always travel with her; she portrays her colleagues and thus builds an intimate visual archive. In her work, duality, masks and the search for an idealised, powerful version of herself return again and again, often with a healthy dose of (self-)humour." },
        { k: "h", t: "Art book" },
        { k: "p", t: "'Give me a sketchbook to live in' (Stichting DeNode, 2026, almost 300 pages) gathers more than twenty years of inner struggle, peopled by angels and demons. It opens with the warning 'DON'T READ A WORD IN THIS DIARY, OTHERWISE KARMA WILL FIND YOU' and ends with 'FUCK DE MENSEN'." },
      ],
      fr: [
        { k: "p", t: "Kat Bové (°1984) est une artiste belge qui semble danser à travers la vie en couleurs vives et imprimés léopard. Derrière cette façade joyeuse se cache une créatrice introvertie qui, depuis des années, met ses démons, ses doutes et ses questions sur le papier. Longtemps elle a peint uniquement pour elle-même ; ce n'est que récemment qu'elle partage son travail avec un public plus large." },
        { k: "p", t: "En parallèle de sa pratique artistique, Kat travaille comme hôtesse de l'air. En déplacement, son stylo et son papier voyagent toujours avec elle ; elle y portraiture ses collègues et constitue ainsi une archive visuelle intime. Dans son travail, la dualité, les masques et la quête d'une version idéalisée et puissante d'elle-même reviennent sans cesse, souvent avec une bonne dose d'(auto)dérision." },
        { k: "h", t: "Livre d'art" },
        { k: "p", t: "'Give me a sketchbook to live in' (Stichting DeNode, 2026, près de 300 pages) rassemble plus de vingt ans de luttes intérieures, peuplées d'anges et de démons. Il s'ouvre sur l'avertissement 'DON'T READ A WORD IN THIS DIARY, OTHERWISE KARMA WILL FIND YOU' et se termine par 'FUCK DE MENSEN'." },
      ],
    },
    extraExhibitions: {
      nl: [
        { date: "2026/05/03 – 2026/05/31", text: "Kat Bové solo — Pim De Rudder Stichting, Assenede. Presentatie van nieuwe werken." },
        { date: "2026/01 – 2026/03", text: "'Minsterwood' (Wayn Traub) — River City Gallery, Bangkok. Kat Bové verschijnt in de centrale triptiek." },
        { date: "—", text: "Eerste solotentoonstelling — Zeepziederij, Bree. De half-industriële ruimte waarin ze haar werk voor het eerst publiek toonde." },
      ],
      en: [
        { date: "2026/05/03 – 2026/05/31", text: "Kat Bové solo — Pim De Rudder Foundation, Assenede. A presentation of new works." },
        { date: "2026/01 – 2026/03", text: "'Minsterwood' (Wayn Traub) — River City Gallery, Bangkok. Kat Bové appears in the central triptych." },
        { date: "—", text: "First solo exhibition — Zeepziederij, Bree. The semi-industrial space where she first showed her work publicly." },
      ],
      fr: [
        { date: "2026/05/03 – 2026/05/31", text: "Kat Bové solo — Fondation Pim De Rudder, Assenede. Présentation de nouvelles œuvres." },
        { date: "2026/01 – 2026/03", text: "« Minsterwood » (Wayn Traub) — River City Gallery, Bangkok. Kat Bové apparaît dans le triptyque central." },
        { date: "—", text: "Première exposition personnelle — Zeepziederij, Bree. L'espace semi-industriel où elle a montré son travail au public pour la première fois." },
      ],
    },
  },

  // ---- Exhibiting artists (bio lives in the linked article) -----------------
  { slug: "nicolas-van-parys", name: "Nicolas Van Parys", image: "/images/blog-nicolas-van-parys.jpg", role: VISUAL },
  { slug: "john-robinson", name: "John Robinson", image: "/images/blog-john-robinson.webp", role: VISUAL },
  { slug: "merel-jansen", name: "Merel Jansen", image: "/images/blog-merel.jpg", role: VISUAL },
  {
    slug: "lee-ranaldo",
    name: "Lee Ranaldo",
    image: "/images/blog-lee-ranaldo.jpg",
    role: { nl: "muzikant & beeldend kunstenaar", en: "musician & visual artist", fr: "musicien & artiste plasticien" },
    external: [
      { label: "Interview door Hilde Van Canneyt (2018)", url: "https://hildevancanneyt.blogspot.com/2018/11/interview-met-lee-ranaldo-2.html" },
    ],
  },
  { slug: "chantal-pollier", name: "Chantal Pollier", image: "/images/blog-vestiges.webp", role: VISUAL },
  { slug: "guillaume-van-moerkercke", name: "Guillaume Van Moerkercke", image: "/images/blog-vestiges.webp", role: VISUAL },
  { slug: "okan-mentens", name: "Okan Mentens", image: "/images/blog-okan-is-me.jpg", role: VISUAL },
  { slug: "bjorn-wandels", name: "Björn Wandels", image: "/images/blog-bjorn-wandels.jpg", role: VISUAL },
  { slug: "ines-claus", name: "Ines Claus", image: "/images/blog-ines-claus.jpg", role: VISUAL },
  {
    slug: "mikhail-bezverkhny",
    name: "Mikhail Bezverkhny",
    image: "/images/blog-bij-de-meesters.jpg",
    role: VISUAL,
    external: [
      { label: "Interview door Hilde Van Canneyt (2026)", url: "https://www.hildevancanneyt.be/2026/03/21/interview-met-bezverkhni-van-gent-mikhail-bezverkhni/" },
    ],
  },
  { slug: "gipi", name: "Gipi (Pierre Gillis)", image: "/images/blog-bij-de-meesters.jpg", role: VISUAL },
  {
    slug: "caroline-baek",
    name: "Caroline Baek",
    role: VISUAL,
    external: [
      { label: "Interview door Hilde Van Canneyt (2024)", url: "https://www.hildevancanneyt.be/2024/09/interview-met-caroline-baek/" },
    ],
  },
  {
    slug: "robrecht-kessels",
    name: "Robrecht Kessels",
    image: "/images/blog-robrecht-kessels.jpg",
    role: {
      nl: "muzikant (cello) & componist",
      en: "musician (cello) & composer",
      fr: "musicien (violoncelle) & compositeur",
    },
  },
  { slug: "simon-van-parys", name: "Simon Van Parys", role: VISUAL },
  { slug: "philippe-van-de-velde", name: "Philippe Van De Velde", role: VISUAL },

  // ---- Authors / critics (their "work" = the texts they wrote) --------------
  {
    slug: "freddy-decreus",
    name: "Em. Prof. Freddy Decreus",
    role: AUTHOR,
    articles: ["about-the-hermit", "bodies-eros-and-thanatos"],
  },
  {
    slug: "jacob-de-smaele",
    name: "Jacob de Smaele",
    role: AUTHOR,
    articles: ["the-church-of-kat-bove", "okan-is-me"],
  },
  {
    slug: "liesbet-depauw",
    name: "Liesbet Depauw",
    role: AUTHOR,
    articles: ["between-mask-and-identity"],
  },
];

export function getArtist(slug: string): ArtistDetail | undefined {
  return ARTIST_DETAILS.find((a) => a.slug === slug);
}

// Reverse lookup: which author wrote a given article (declared once via `articles`).
export function authorForArticle(articleSlug: string): ArtistDetail | undefined {
  return ARTIST_DETAILS.find((a) => a.articles?.includes(articleSlug));
}
