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
      "Stichting DeNode presenteert met trots een selectie van kunstenaars met wie wij een langdurige en waardevolle samenwerking onderhouden. Of het nu via groeps- of soloprojecten was, elke kunstenaar heeft op unieke wijze bijgedragen aan het artistieke fundament van onze stichting.",
      "Deze lijst is een eerbetoon in wording; wij streven ernaar om op termijn een volledig overzicht te bieden van alle creatieve partners die onze gemeenschap hebben verrijkt. Onze dank gaat uit naar hen die met hun passie en toewijding de essentie van Stichting DeNode hebben gevormd.",
    ],
    devHeading: "De website is in volle ontwikkeling.",
    devBody: "Kom eerstdaags terug voor meer...",
  },
};

// ---- Events ---------------------------------------------------------------

interface EventItem {
  title: string;
  image: string;
  lines: string[];
  href: string;
  slug?: string; // set when a local event detail page exists
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
        slug: "cutting-reality",
      },
      {
        title: "Life drawing sessions",
        image: IMG.drawing,
        lines: [
          "Every two weeks on Thursday, a life drawing session from a live model.",
          "Resuming from October 2026. Welcome!",
        ],
        href: "#/en",
        slug: "drawing-sessions",
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
        slug: "cutting-reality",
      },
      {
        title: "Séances de dessin d'après modèle",
        image: IMG.drawing,
        lines: [
          "Toutes les deux semaines le jeudi, une séance de dessin d'après un modèle vivant.",
          "Reprise à partir d'octobre 2026. Bienvenue !",
        ],
        href: "#/fr",
        slug: "drawing-sessions",
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
        slug: "cutting-reality",
      },
      {
        title: "Tekensessies op model",
        image: IMG.drawing,
        lines: [
          "Om de twee weken op donderdag een tekensessie naar levend model.",
          "Hervatten vanaf oktober 2026. Welkom!",
        ],
        href: "#/nl",
        slug: "drawing-sessions",
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
  mailTo: string;
  mailSubject: string;
  mailBody: string;
}

// Prijs + rekeningnummer nog te bevestigen door Paul → nu als [placeholder].
const BOOK_PRICE = "[boekprijs]";
const IBAN = "[IBAN Stichting DeNode]";

export const SHOP: Record<Lang, ShopContent> = {
  en: {
    title: "Shop",
    productTitle: "Kat Bové — Give me a sketchbook to live in",
    productDesc:
      "Reserve a copy of Kat Bové's new book. Limited print run.",
    reserveCta: "Order by email",
    note: "Orders are handled by email for now — we'll confirm as soon as we receive your message.",
    mailTo: "info@denode.be",
    mailSubject: "Book order — Kat Bové: Give me a sketchbook to live in",
    mailBody: [
      "Dear DeNode team,",
      "",
      "I would like to order the book by Kat Bové, \"Give me a sketchbook to live in\".",
      "",
      "My details:",
      "- Name: [first name and surname]",
      "- Email: [your email]",
      "- Phone: [your phone number]",
      "",
      "Delivery:",
      "- [ ] I will pick it up at DeNode (Predikherenlei 4, 9000 Ghent)",
      "- [ ] Please ship it to: [street and number], [postal code and town], [country]",
      "",
      "Payment:",
      `I have transferred € ${BOOK_PRICE} (+ € 7 shipping if posted) to ${IBAN}.`,
      "",
      "Thank you very much!",
      "",
      "Kind regards,",
      "[your name]",
    ].join("\n"),
  },
  fr: {
    title: "Boutique",
    productTitle: "Kat Bové — Give me a sketchbook to live in",
    productDesc:
      "Réservez une copie du nouveau livre de Kat Bové. Tirage limité.",
    reserveCta: "Commander par e-mail",
    note: "Les commandes se font par e-mail pour le moment — nous confirmons dès réception de votre message.",
    mailTo: "info@denode.be",
    mailSubject: "Commande du livre — Kat Bové : Give me a sketchbook to live in",
    mailBody: [
      "Bonjour l'équipe DeNode,",
      "",
      "Je souhaite commander le livre de Kat Bové, « Give me a sketchbook to live in ».",
      "",
      "Mes coordonnées :",
      "- Nom : [prénom et nom]",
      "- E-mail : [votre e-mail]",
      "- Téléphone : [votre numéro de téléphone]",
      "",
      "Livraison :",
      "- [ ] Je viens le chercher chez DeNode (Predikherenlei 4, 9000 Gand)",
      "- [ ] Merci de l'envoyer à : [rue et numéro], [code postal et commune], [pays]",
      "",
      "Paiement :",
      `J'ai viré € ${BOOK_PRICE} (+ € 7 de frais d'envoi le cas échéant) sur ${IBAN}.`,
      "",
      "Merci beaucoup !",
      "",
      "Cordialement,",
      "[votre nom]",
    ].join("\n"),
  },
  nl: {
    title: "Shop",
    productTitle: "Kat Bové — Give me a sketchbook to live in",
    productDesc:
      "Reserveer een exemplaar van het nieuwe boek van Kat Bové. Beperkte oplage.",
    reserveCta: "Bestel via e-mail",
    note: "Bestellingen verlopen voorlopig via e-mail — we bevestigen zodra we je bericht ontvangen.",
    mailTo: "info@denode.be",
    mailSubject: "Bestelling boek — Kat Bové: Give me a sketchbook to live in",
    mailBody: [
      "Beste DeNode-team,",
      "",
      "Graag bestel ik het boek van Kat Bové, \"Give me a sketchbook to live in\".",
      "",
      "Mijn gegevens:",
      "- Naam: [voornaam en naam]",
      "- E-mail: [je e-mailadres]",
      "- Telefoon: [je telefoonnummer]",
      "",
      "Levering:",
      "- [ ] Ik haal het boek af bij DeNode (Predikherenlei 4, 9000 Gent)",
      "- [ ] Graag opsturen naar: [straat en nummer], [postcode en gemeente], [land]",
      "",
      "Betaling:",
      `Ik heb € ${BOOK_PRICE} (+ € 7 verzendingskosten indien opsturen) overgeschreven op ${IBAN}.`,
      "",
      "Alvast heel erg bedankt!",
      "",
      "Met vriendelijke groeten,",
      "[je naam]",
    ].join("\n"),
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
    slug: "vestiges",
  },
  {
    title: "Björn Wandels",
    category: "artists",
    date: "Sep 7, 2025",
    teaser: "A hybrid practice that ironically questions analog and digital media.",
    href: "https://www.denode.be/en/blog/artists-7/bjorn-wandels-301",
    tint: "#3d3a44",
    slug: "bjorn-wandels",
  },
  {
    title: "Robrecht Kessels",
    category: "artists",
    date: "Sep 2, 2025",
    teaser: "Master in music (cello) at the Ghent conservatory, deepening the classical repertoire.",
    href: "https://www.denode.be/en/blog/artists-7/robrecht-kessels-317",
    tint: "#5a3a3a",
    slug: "robrecht-kessels",
  },
  {
    title: "Ines Claus",
    category: "artists",
    date: "Feb 2, 2024",
    teaser: "Drawing, painting and collage immersed in a colourful universe.",
    href: "https://www.denode.be/en/blog/artists-7/ines-claus-302",
    tint: "#8a6d3b",
    slug: "ines-claus",
  },
  {
    title: "Bij De Meesters — Gipi & Bezverkhni",
    category: "news",
    date: "Jan 25, 2025",
    teaser: "Two artists born in 1947, in Ghent and Leningrad — fine drawings and explosive paintings.",
    href: "https://www.denode.be/en/blog/news-8/nodenaysteen-stelt-voor-bij-de-meesters-304",
    tint: "#4a5a6a",
    slug: "bij-de-meesters",
  },
  {
    title: "Opening of Nodenaysteen — an art space",
    category: "news",
    date: "Dec 31, 2023",
    teaser: "The opening of nodenaysteen, an art space on the Leie in the heart of Ghent.",
    href: "https://www.denode.be/en/blog/news-8/opening-of-nodenaysteen-an-art-space-310",
    tint: "#3f5646",
    slug: "opening-nodenaysteen",
  },
  {
    title: "The church of Kat Bové",
    category: "papers",
    date: "Apr 20, 2025",
    teaser: "Jacob de Smaele on Kat Bové, femininity and the waves of feminism.",
    href: "https://www.denode.be/en/blog/papers-9/the-church-of-kat-bove-313",
    tint: "#6b4a5a",
    slug: "the-church-of-kat-bove",
  },
  {
    title: "Between mask and identity — Kat Bové",
    category: "papers",
    date: "Apr 20, 2025",
    teaser: "Liesbet Depauw in conversation with Kat Bové on loneliness, masks and the search for the light.",
    href: "https://www.denode.be/en/blog/papers-9/between-mask-and-identity-the-duality-of-kat-bove-312",
    tint: "#7a4a4a",
    slug: "between-mask-and-identity",
  },
  {
    title: "Okan-is-me",
    category: "papers",
    date: "Jul 11, 2025",
    teaser: "Jakob Desmaele on the young Okan Mentes, who finds beauty even in the ugliest of places.",
    href: "https://www.denode.be/en/blog/papers-9/okan-is-me-315",
    tint: "#4a4a5a",
    slug: "okan-is-me",
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
