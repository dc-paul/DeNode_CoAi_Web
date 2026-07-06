// Central exhibition data — the spine of the site's cross-linking.
// Each relation is declared ONCE here (artists, articles, events, curator) and
// rendered automatically on the expo, artist and article pages.
import type { Lang } from "./lang";

export interface ExpoArtist {
  name: string;
  slug?: string; // artist detail slug, when a page exists
}

export interface Expo {
  slug: string;
  num: number; // DeNode show number
  sortDate: string; // ISO start date, for ordering (newest first)
  period: string; // display, numeric & language-neutral, e.g. "2025/03/15 – 2025/04/13"
  title: string; // proper exhibition name (same across languages)
  artists: ExpoArtist[];
  curator?: string;
  participants?: ExpoArtist[]; // full roster for large group shows
  articleSlugs?: string[]; // blog-post slugs written for this exhibition
  eventSlugs?: string[]; // event-detail slugs tied to this exhibition
  image?: string; // cover (falls back to tint)
  tint: string;
  blurb?: Record<Lang, string>;
}

// Listed newest-first (also enforced by sortDate in the index).
export const EXPOS: Expo[] = [
  {
    slug: "kashi-rupe-unfolded",
    num: 14,
    sortDate: "2026-05-15",
    period: "2026/05/15 – 2026/07/26",
    title: "Kashi Rupé — unfolded",
    artists: [{ name: "Nicolas Van Parys", slug: "nicolas-van-parys" }],
    curator: "Kristof Vander Cruyssen",
    articleSlugs: ["nicolas-van-parys"],
    eventSlugs: ["kashi-rupe-vernissage", "cutting-reality"],
    image: "/images/blog-nicolas-van-parys.jpg",
    tint: "#3f5135",
  },
  {
    slug: "people-ruin-paintings",
    num: 13,
    sortDate: "2026-02-14",
    period: "2026/02/14 – 2026/04/28",
    title: "People Ruin Paintings",
    artists: [{ name: "John Robinson", slug: "john-robinson" }],
    curator: "Hanna Ouaziz",
    articleSlugs: ["john-robinson", "about-the-hermit"],
    image: "/images/blog-john-robinson.webp",
    tint: "#4a4a4a",
  },
  {
    slug: "merel",
    num: 12,
    sortDate: "2025-11-28",
    period: "2025/11/28 – 2026/01/10",
    title: "Merel",
    artists: [{ name: "Merel Jansen", slug: "merel-jansen" }],
    curator: "Kristof Vander Cruyssen",
    articleSlugs: ["merel"],
    image: "/images/blog-merel.jpg",
    tint: "#7a5230",
  },
  {
    slug: "again-across-the-river",
    num: 11,
    sortDate: "2025-10-11",
    period: "2025/10/11 – 2025/11/11",
    title: "(again) across the river",
    artists: [{ name: "Lee Ranaldo", slug: "lee-ranaldo" }],
    curator: "Hilde Van Canneyt",
    articleSlugs: ["lee-ranaldo"],
    image: "/images/blog-lee-ranaldo.jpg",
    tint: "#2f4858",
  },
  {
    slug: "vestiges",
    num: 10,
    sortDate: "2025-09-05",
    period: "2025/09/05 – 2025/09/28",
    title: "Vestiges",
    artists: [
      { name: "Chantal Pollier", slug: "chantal-pollier" },
      { name: "Guillaume Van Moerkercke", slug: "guillaume-van-moerkercke" },
      { name: "Robrecht Kessels", slug: "robrecht-kessels" },
    ],
    curator: "—",
    articleSlugs: ["vestiges", "robrecht-kessels"],
    image: "/images/blog-vestiges.webp",
    tint: "#55603f",
  },
  {
    slug: "okan-is-me",
    num: 9,
    sortDate: "2025-07-10",
    period: "2025/07/10 – 2025/07/17",
    title: "Okan-is-me",
    artists: [{ name: "Okan Mentens", slug: "okan-mentens" }],
    curator: "Damien Degrave",
    articleSlugs: ["okan-is-me"],
    image: "/images/blog-okan-is-me.jpg",
    tint: "#4a4a5a",
  },
  {
    slug: "who-is-your-god",
    num: 8,
    sortDate: "2025-03-15",
    period: "2025/03/15 – 2025/04/13",
    title: "Who is your God, Where is She",
    artists: [{ name: "Kat Bové", slug: "kat-bove" }],
    curator: "—",
    articleSlugs: [
      "the-church-of-kat-bove",
      "bodies-eros-and-thanatos",
      "between-mask-and-identity",
    ],
    image: "/images/blog-church-kat-bove.webp",
    tint: "#6b4a5a",
  },
  {
    slug: "bij-de-meesters",
    num: 7,
    sortDate: "2025-01-25",
    period: "2025/01/25 – 2025/02/23",
    title: "Bij de Meesters",
    artists: [
      { name: "Gipi (Pierre Gillis)", slug: "gipi" },
      { name: "Mikhail Bezverkhny", slug: "mikhail-bezverkhny" },
    ],
    curator: "Damien Degrave",
    articleSlugs: ["bij-de-meesters"],
    image: "/images/blog-bij-de-meesters.jpg",
    tint: "#4a5a6a",
  },
  {
    slug: "exponentieel",
    num: 6,
    sortDate: "2024-12-07",
    period: "2024/12/07 – 2025/01/12",
    title: "(expo)nentieel",
    artists: [{ name: "Kettingbrief-netwerk — 49 kunstenaars" }],
    curator: "Hilde Van Canneyt",
    participants: [
      { name: "Julie Arphi" },
      { name: "Egon Beeckman" },
      { name: "Stien Bekaert" },
      { name: "Mikhail Bezverkhny", slug: "mikhail-bezverkhny" },
      { name: "Willem Boel" },
      { name: "Clara Borg Verbeke" },
      { name: "Kat Bové", slug: "kat-bove" },
      { name: "Jimena Chávez Delion" },
      { name: "Stijn Cole" },
      { name: "Bert De Geyter" },
      { name: "Maikel De Greve" },
      { name: "Johan De Wilde" },
      { name: "Damien Degrave" },
      { name: "Jonas Delaey" },
      { name: "Renee Delcourt" },
      { name: "Palatine Demoen" },
      { name: "Nikolaas Demoen" },
      { name: "Gilles Dusong" },
      { name: "François Genicot" },
      { name: "Ritsart Gobyn" },
      { name: "Hamer Kormeling" },
      { name: "Nancy La Rosa" },
      { name: "Jan Laroy" },
      { name: "Ralph Leeten" },
      { name: "Mirre Nimmegeers" },
      { name: "Tim Onderbeke" },
      { name: "Lisa Ottenburgh" },
      { name: "Joost Pauwaert" },
      { name: "Julie Poisquet" },
      { name: "Ingrid Raymaekers" },
      { name: "Shervin/e Sheikh Rezaei" },
      { name: "Jari Rijckaert" },
      { name: "Pàpoo Thibau" },
      { name: "Mariami Tsotadze" },
      { name: "Liselotte Van Daele" },
      { name: "Merel Van de Casteele" },
      { name: "Ruth van Haren Noman" },
      { name: "Liesbeth Van Heuverswijn" },
      { name: "Jana Van Ongevalle" },
      { name: "Wout Vandevenne" },
      { name: "Sofie Vandevoorde" },
      { name: "Wannes Vanwijnsberghe" },
      { name: "Robin Vermeersch" },
      { name: "Simon Verougstraete" },
      { name: "Maurits Verstraete" },
      { name: "Saidjah Vos" },
      { name: "Vadim Vosters" },
      { name: "Yi Zhang" },
      { name: "institute 54" },
    ],
    tint: "#3f5646",
  },
  {
    slug: "vier",
    num: 5,
    sortDate: "2024-10-19",
    period: "2024/10/19 – 2024/11/17",
    title: "VIER",
    artists: [{ name: "Caroline Baek", slug: "caroline-baek" }],
    curator: "Damien Degrave",
    tint: "#6b6358",
  },
  {
    slug: "bjorn-wandels-vitrine",
    num: 4,
    sortDate: "2024-06-01",
    period: "2024",
    title: "Björn Wandels — vitrineprojectie",
    artists: [{ name: "Björn Wandels", slug: "bjorn-wandels" }],
    articleSlugs: ["bjorn-wandels"],
    image: "/images/blog-bjorn-wandels.jpg",
    tint: "#3d3a44",
  },
  {
    slug: "triple-cintre",
    num: 3,
    sortDate: "2024-02-02",
    period: "2024/02/02 – 2024/03/03",
    title: "Triple Cintre",
    artists: [{ name: "Ines Claus", slug: "ines-claus" }],
    curator: "Paul De Cannière",
    articleSlugs: ["ines-claus"],
    image: "/images/blog-ines-claus.jpg",
    tint: "#8a6d3b",
  },
  {
    slug: "ai-universe",
    num: 2,
    sortDate: "2023-10-27",
    period: "2023/10/27 – 2024/01",
    title: "AI Universe",
    artists: [{ name: "Simon Van Parys", slug: "simon-van-parys" }],
    curator: "Paul De Cannière",
    tint: "#2f4858",
  },
  {
    slug: "exponential-1",
    num: 1,
    sortDate: "2023-01-01",
    period: "2023",
    title: "Expo-nential 1",
    artists: [{ name: "Philippe Van De Velde", slug: "philippe-van-de-velde" }],
    curator: "Paul De Cannière",
    tint: "#55603f",
  },
];

export function getExpo(slug: string): Expo | undefined {
  return EXPOS.find((e) => e.slug === slug);
}

// Reverse lookups used for automatic cross-linking (declared once, above).
export function expoForArticle(articleSlug: string): Expo | undefined {
  return EXPOS.find((e) => e.articleSlugs?.includes(articleSlug));
}

export function expoForEvent(eventSlug: string): Expo | undefined {
  return EXPOS.find((e) => e.eventSlugs?.includes(eventSlug));
}

export function exposForArtist(artistSlug: string): Expo[] {
  return EXPOS.filter((e) => e.artists.some((a) => a.slug === artistSlug));
}
