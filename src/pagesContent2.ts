import { IMG } from "./content";
import type { Lang } from "./lang";

// ---- Artists (the live page is "under development") -----------------------

interface ArtistsContent {
  title: string;
  intro: string[];
  devHeading: string;
  devBody: string;
}

export const ARTISTS: Record<Lang, ArtistsContent> = {
  en: {
    title: "Artists",
    intro: [
      "The DeNode Foundation proudly presents a selection of artists with whom we maintain a long-term and valuable collaboration. Whether through group or solo projects, each artist has uniquely contributed to the artistic foundation of our foundation.",
      "This list is a work in progress; we aim to eventually provide a complete overview of all the creative partners who have enriched our community. Our thanks go to those who have shaped the essence of the DeNode Foundation with their passion and dedication.",
    ],
    devHeading: "The website is under full development.",
    devBody: "Come back soon for more...",
  },
  fr: {
    title: "Artistes",
    intro: [
      "La Fondation DeNode présente avec fierté une sélection d'artistes avec lesquels nous entretenons une collaboration durable et précieuse. Que ce soit à travers des projets collectifs ou personnels, chaque artiste a contribué de manière unique au socle artistique de notre fondation.",
      "Cette liste est un travail en cours ; nous souhaitons à terme offrir un aperçu complet de tous les partenaires créatifs qui ont enrichi notre communauté. Nos remerciements vont à celles et ceux qui ont façonné l'essence de la Fondation DeNode avec passion et dévouement.",
    ],
    devHeading: "Le site est en plein développement.",
    devBody: "Revenez bientôt pour en découvrir davantage...",
  },
  nl: {
    title: "Kunstenaars",
    intro: [
      "Stichting DeNode presenteert met trots een selectie van kunstenaars met wie we een langdurige en waardevolle samenwerking onderhouden. Of het nu via groeps- of soloprojecten is, elke kunstenaar heeft op een unieke manier bijgedragen aan de artistieke basis van onze stichting.",
      "Deze lijst is een work in progress; we willen uiteindelijk een volledig overzicht bieden van alle creatieve partners die onze gemeenschap hebben verrijkt. Onze dank gaat uit naar wie de essentie van Stichting DeNode met passie en toewijding heeft vormgegeven.",
    ],
    devHeading: "De website is volop in ontwikkeling.",
    devBody: "Kom binnenkort terug voor meer...",
  },
};

// ---- Events ---------------------------------------------------------------

interface EventItem {
  title: string;
  image: string;
  lines: string[];
  href: string;
}
interface EventsContent {
  title: string;
  events: EventItem[];
}

export const EVENTS: Record<Lang, EventsContent> = {
  en: {
    title: "Events",
    events: [
      {
        title: "Workshop 'Cutting Reality'",
        image: IMG.workshop,
        lines: [
          "by Nicolas Van Parys and Sofie Bos",
          "Workshop 1 — July 15 to 17, 2026",
          "Workshop 2 — July 22 to 24, 2026",
        ],
        href: "https://www.denode.be/en/event/cutting-reality-workshop-1-19",
      },
      {
        title: "Kat Bové solo in Assenede",
        image: IMG.katboveSolo,
        lines: [
          "From May 3 to May 31, new works by Kat Bové are exhibited at the Pim De Rudder Foundation.",
        ],
        href: "https://www.denode.be/en/event/kat-bove-solo-16",
      },
      {
        title: "Drawing sessions @ DeNode",
        image: IMG.drawing,
        lines: ["Every 2 weeks on Thursday we organize a drawing workshop.", "Welcome!"],
        href: "#/en",
      },
    ],
  },
  fr: {
    title: "Événements",
    events: [
      {
        title: "Atelier 'Cutting Reality'",
        image: IMG.workshop,
        lines: [
          "par Nicolas Van Parys et Sofie Bos",
          "Atelier 1 — 15 au 17 juillet 2026",
          "Atelier 2 — 22 au 24 juillet 2026",
        ],
        href: "https://www.denode.be/fr/event/cutting-reality-workshop-1-19",
      },
      {
        title: "Kat Bové solo à Assenede",
        image: IMG.katboveSolo,
        lines: [
          "Du 3 au 31 mai, de nouvelles œuvres de Kat Bové sont exposées à la Fondation Pim De Rudder.",
        ],
        href: "https://www.denode.be/fr/event/kat-bove-solo-16",
      },
      {
        title: "Séances de dessin @ DeNode",
        image: IMG.drawing,
        lines: [
          "Nous organisons un atelier de dessin tous les 2 semaines le jeudi.",
          "Bienvenue !",
        ],
        href: "#/fr",
      },
    ],
  },
  nl: {
    title: "Evenementen",
    events: [
      {
        title: "Workshop 'Cutting Reality'",
        image: IMG.workshop,
        lines: [
          "door Nicolas Van Parys en Sofie Bos",
          "Workshop 1 — 15 tot 17 juli 2026",
          "Workshop 2 — 22 tot 24 juli 2026",
        ],
        href: "https://www.denode.be/event/cutting-reality-workshop-1-19",
      },
      {
        title: "Kat Bové solo in Assenede",
        image: IMG.katboveSolo,
        lines: [
          "Van 3 tot 31 mei worden nieuwe werken van Kat Bové tentoongesteld bij de Pim De Rudder Stichting.",
        ],
        href: "https://www.denode.be/event/kat-bove-solo-16",
      },
      {
        title: "Tekensessies @ DeNode",
        image: IMG.drawing,
        lines: ["Om de 2 weken organiseren we op donderdag een tekenworkshop.", "Welkom!"],
        href: "#/nl",
      },
    ],
  },
};

// ---- Shop (simple reservation page — no e-commerce backend) ----------------

interface ShopContent {
  title: string;
  productTitle: string;
  productDesc: string;
  reserveCta: string;
  note: string;
}

export const SHOP: Record<Lang, ShopContent> = {
  en: {
    title: "Shop",
    productTitle: "Kat Bové — Give me a sketchbook to live in",
    productDesc:
      "Reserve a copy of Kat Bové's new book. Limited print run.",
    reserveCta: "Reserve by email",
    note: "Reservations are handled by email for now — we'll confirm availability and pickup or shipping.",
  },
  fr: {
    title: "Boutique",
    productTitle: "Kat Bové — Give me a sketchbook to live in",
    productDesc:
      "Réservez une copie du nouveau livre de Kat Bové. Tirage limité.",
    reserveCta: "Réserver par e-mail",
    note: "Les réservations se font par e-mail pour le moment — nous confirmerons la disponibilité et l'enlèvement ou l'envoi.",
  },
  nl: {
    title: "Shop",
    productTitle: "Kat Bové — Give me a sketchbook to live in",
    productDesc:
      "Reserveer een exemplaar van het nieuwe boek van Kat Bové. Beperkte oplage.",
    reserveCta: "Reserveer via e-mail",
    note: "Reservaties verlopen voorlopig via e-mail — we bevestigen beschikbaarheid en afhaling of verzending.",
  },
};

// ---- Program (exhibition / blog listing — links to live posts for now) -----

export interface ProgramPost {
  title: string;
  category: string;
  date: string;
  teaser: string;
  href: string;
  tint: string;
  slug?: string; // set when the full post has been migrated to an internal page
}

const PROGRAM_POSTS: ProgramPost[] = [
  {
    title: "Nicolas Van Parys — Kashi Rupé",
    category: "artists",
    date: "Jun 5, 2026",
    teaser:
      "In the spiritual heat of Varanasi, Nicolas Van Parys found the seed for his latest work.",
    href: "https://www.denode.be/en/blog/artists-7/nicolas-van-parys-325",
    tint: "#3f5135",
    slug: "nicolas-van-parys",
  },
  {
    title: "About the hermit deep within us",
    category: "artists",
    date: "Jun 6, 2026",
    teaser: "Prof. Em. Freddy Decreus on John Robinson and the absence of a new myth.",
    href: "https://www.denode.be/en/blog/artists-7/about-the-hermit-deep-within-us-329",
    tint: "#6b6358",
    slug: "about-the-hermit",
  },
  {
    title: "Bodies Eros and Thanatos",
    category: "artists",
    date: "Jun 6, 2026",
    teaser: "On the unspeakable in the art of Kat Bové, by Em. Prof. Freddy Decreus.",
    href: "https://www.denode.be/en/blog/artists-7/bodies-eros-and-thanatos-330",
    tint: "#c0397f",
    slug: "bodies-eros-and-thanatos",
  },
  {
    title: "John Robinson",
    category: "exhibitions",
    date: "Jan 29, 2026",
    teaser: "Curatorial text for the exhibition.",
    href: "https://www.denode.be/en/blog/exhibitions-11/john-robinson-323",
    tint: "#4a4a4a",
    slug: "john-robinson",
  },
  {
    title: "Merel",
    category: "exhibitions",
    date: "Nov 14, 2025",
    teaser: "The world of Merel Jansen smells of turpentine and oil paint.",
    href: "https://www.denode.be/en/blog/exhibitions-11/merel-321",
    tint: "#7a5230",
    slug: "merel",
  },
  {
    title: "Lee Ranaldo",
    category: "exhibitions",
    date: "Oct 6, 2025",
    teaser: "Recent works, many resulting from a 2025 residency in Krems, Austria.",
    href: "https://www.denode.be/en/blog/exhibitions-11/lee-ranaldo-319",
    tint: "#2f4858",
    slug: "lee-ranaldo",
  },
  {
    title: "Vestiges — Chantal Pollier & Guillaume Van Moerkercke",
    category: "exhibitions",
    date: "Sep 28, 2025",
    teaser: "In Vestiges, time becomes tangible — matter as an ancient manuscript.",
    href: "https://www.denode.be/en/blog/exhibitions-11/vestiges-a-duo-exhibition-by-chantal-pollier-and-guillaume-van-moerkercke-316",
    tint: "#55603f",
  },
  {
    title: "Björn Wandels",
    category: "artists",
    date: "Sep 7, 2025",
    teaser: "A hybrid practice that ironically questions analog and digital media.",
    href: "https://www.denode.be/en/blog/artists-7/bjorn-wandels-301",
    tint: "#3d3a44",
  },
  {
    title: "Robrecht Kessels",
    category: "artists",
    date: "Sep 2, 2025",
    teaser: "Master in music (cello) at the Ghent conservatory, deepening the classical repertoire.",
    href: "https://www.denode.be/en/blog/artists-7/robrecht-kessels-317",
    tint: "#5a3a3a",
  },
];

interface ProgramContent {
  title: string;
  intro: string;
  viewAll: string;
  note: string;
  posts: ProgramPost[];
}

export const PROGRAM: Record<Lang, ProgramContent> = {
  en: {
    title: "Program",
    intro: "Exhibitions, artists and editorial projects at nodenaysteen.",
    viewAll: "See all on the blog",
    note: "Full articles currently open on the existing site while we migrate the editorial content.",
    posts: PROGRAM_POSTS,
  },
  fr: {
    title: "Programme",
    intro: "Expositions, artistes et projets éditoriaux à nodenaysteen.",
    viewAll: "Voir tout sur le blog",
    note: "Les articles complets s'ouvrent pour l'instant sur le site existant pendant la migration du contenu éditorial.",
    posts: PROGRAM_POSTS,
  },
  nl: {
    title: "Programma",
    intro: "Tentoonstellingen, kunstenaars en redactionele projecten bij nodenaysteen.",
    viewAll: "Bekijk alles op de blog",
    note: "Volledige artikels openen voorlopig op de bestaande site terwijl we de redactionele content migreren.",
    posts: PROGRAM_POSTS,
  },
};
