import type { Lang } from "./lang";

// Authentic EN + FR copy captured from denode.be. NL is a first-pass
// translation (the live site's NL switcher is broken, so it could not be
// scraped) — Paul to verify/replace with the authentic Dutch.

// Local assets served from the Juno satellite — no dependency on the old Odoo site.
export const IMG = {
  hero: "/images/nicolas-van-parys-kashi-rupe.webp",
  workshop: "/images/workshop-cutting-reality.webp",
  katbove: "/images/kat-bove-book.webp",
  drawing: "/images/drawing-sessions.webp",
  paul: "/images/team-paul-de-canniere.webp",
  kristof: "/images/team-kristof-vander-cruyssen.webp",
  hanna: "/images/team-hanna-ouaziz.webp",
  katboveSolo: "/images/kat-bove-solo-assenede.webp",
};

interface Nav {
  program: string;
  artists: string;
  foundation: string;
  team: string;
  mission: string;
}

interface Footer {
  welcomeHeading: string;
  welcomeBody: string[];
  findUs: string;
  address: string;
  openHeading: string;
  openLines: string[];
  byAppointment: string;
  newsletter: string;
  emailPlaceholder: string;
  register: string;
  newsletterNote: string;
  copyright: string;
}

interface HomeContent {
  presents: string;
  exhibitionTitle: string;
  soloBy: string;
  artist: string;
  paragraphs: string[];
  italic: string;
  openDates: string;
  hours: string;
  readText: string;
  cards: { title: string; lines: string[]; cta?: string; ctaHref?: string }[];
  blogHeading: string;
  viewEverything: string;
  posts: { title: string; slug: string; tint: string }[];
}

interface LangContent {
  nav: Nav;
  footer: Footer;
  home: HomeContent;
}

const POSTS = [
  {
    title: "About the hermit deep within us",
    slug: "about-the-hermit",
    tint: "#6b6358",
  },
  {
    title: "Bodies Eros and Thanatos",
    slug: "bodies-eros-and-thanatos",
    tint: "#c0397f",
  },
  {
    title: "Nicolas Van Parys",
    slug: "nicolas-van-parys",
    tint: "#3f5135",
  },
];

export const CONTENT: Record<Lang, LangContent> = {
  en: {
    nav: {
      program: "program",
      artists: "artists",
      foundation: "foundation",
      team: "team",
      mission: "mission",
    },
    footer: {
      welcomeHeading: "Welcome to DeNode Foundation",
      welcomeBody: [
        "The DeNode Foundation supports contemporary artistic practices that originate from research, process, and transfer.",
        "Through exhibitions, research programs, and international collaborations, the foundation provides a platform for artists whose work engages in dialogue with materiality, space, the body, narrative, and time.",
      ],
      findUs: "You can find us in the center of Ghent.",
      address: "nodenaysteen - Predikherenlei 4 - 9000 Ghent",
      openHeading: "during exhibitions, the nodenaysteen gallery is open:",
      openLines: [
        "from Thursday to Saturday: 2 PM - 6 PM",
        "Sunday: 11 AM - 5 PM",
      ],
      byAppointment: "or by appointment: kristof@denode.be",
      newsletter:
        "Sign up for our newsletter or social media and stay updated on future events and exhibitions!",
      emailPlaceholder: "Email address",
      register: "Register",
      newsletterNote: "(Newsletter form still to be connected to your email service.)",
      copyright: "© 2025 Stichting DeNode",
    },
    home: {
      presents: "DeNode Foundation presents:",
      exhibitionTitle: "KASHI RUPÉ - unfolded",
      soloBy: "a solo exhibition by",
      artist: "Nicolas Van Parys",
      paragraphs: [
        "DeNode Foundation proudly presents Kashi Rupé - unfolded, a new exhibition by Belgian artist Nicolas Van Parys. The work originates in the spiritual heat of Varanasi, a city that breathes at the intersection of life and death, during a residency in November 2025.",
        "In this series, Van Parys' artistic practice underwent a fundamental shift. Although collage remains the starting point for deconstructing reality, recognizable fragments now merge into lyrical, painted forms. The result is a universe where color and structure guide the way to a deeply personal perception of reality.",
        "The exhibition also highlights the human connection that emerged during the residency. In close collaboration with Sofie Bos and local students from the Faculty of Visual Arts at Banaras Hindu University, the artist explored the ritual foundations of their respective visual cultures.",
      ],
      italic:
        "Kashi Rupé-unfolded is more than an exhibition; it is a dialogue between cultures and a celebration of the transformative nature of art.",
      openDates: "Open for visits from May 15 to July 26, 2026",
      hours:
        "Thu, Fri, Sat from 2 PM to 6 PM / Sun from 11 AM to 5 PM or by appointment via info@denode.be",
      readText: "Read the text about the exhibition here",
      cards: [
        {
          title: "Workshop 'Cutting Reality'",
          lines: [
            "by Nicolas Van Parys and Sofie Bos",
            "Workshop 1 - July 15 to 17, 2026",
            "Workshop 2 - July 22 to 24, 2026",
            "Read more",
          ],
        },
        {
          title: "Kat Bové - Book for sale",
          lines: ["Reserve a copy of Kat Bové's new book"],
          cta: "Buy the book",
          ctaHref: "#/en/shop",
        },
        {
          title: "Drawing sessions @ DeNode",
          lines: [
            "Every 2 weeks on Thursday we organize a drawing workshop",
            "Welcome!",
          ],
        },
      ],
      blogHeading: "articles - news - expo",
      viewEverything: "View everything",
      posts: POSTS,
    },
  },

  fr: {
    nav: {
      program: "programme",
      artists: "artistes",
      foundation: "fondation",
      team: "team",
      mission: "mission",
    },
    footer: {
      welcomeHeading: "Bienvenue à Stichting DeNode",
      welcomeBody: [
        "Stichting DeNode soutient des pratiques artistiques contemporaines qui trouvent leur origine dans la recherche, le processus et le transfert.",
        "À travers des expositions, des programmes de recherche et des collaborations internationales, la fondation offre une scène à des artistes dont le travail engage le dialogue avec la matérialité, l'espace, le corps, le narratif et le temps.",
      ],
      findUs: "Vous pouvez nous trouver dans le centre de Gand",
      address: "nodenaysteen - Predikherenlei 4 - 9000 Gand",
      openHeading: "pendant les expositions, la galerie nodenaysteen est ouverte :",
      openLines: ["du jeudi au samedi : 14h - 18h", "dimanche : 11h - 17h"],
      byAppointment: "ou sur rendez-vous : kristof@denode.be",
      newsletter:
        "Inscrivez-vous à notre newsletter ou sur les réseaux sociaux et restez ainsi informé des futurs événements et expositions !",
      emailPlaceholder: "Adresse e-mail",
      register: "S'inscrire",
      newsletterNote:
        "(Formulaire newsletter encore à connecter à votre service e-mail.)",
      copyright: "© 2025 Stichting DeNode",
    },
    home: {
      presents: "La Fondation DeNode présente :",
      exhibitionTitle: "KASHI RUPÉ - déplié",
      soloBy: "une exposition personnelle par",
      artist: "Nicolas Van Parys",
      paragraphs: [
        "La DeNode Foundation présente fièrement Kashi Rupé - déplié, une nouvelle exposition de l'artiste belge Nicolas Van Parys. L'œuvre prend naissance dans la chaleur spirituelle de Varanasi, une ville qui respire à l'intersection de la vie et de la mort, lors d'une résidence en novembre 2025.",
        "Dans cette série, la pratique artistique de Van Parys a subi un changement fondamental. Bien que le collage reste le point de départ pour déconstruire la réalité, des fragments reconnaissables se fondent désormais dans des formes lyriques et peintes. Le résultat est un univers où la couleur et la structure guident vers une perception de la réalité profondément personnelle.",
        "L'exposition met également en lumière la connexion humaine qui a émergé pendant la résidence. En étroite collaboration avec Sofie Bos et des étudiants locaux de la Faculté des Arts Visuels de l'Université Hindoue de Banaras, l'artiste a exploré les fondements rituels de leurs cultures visuelles respectives.",
      ],
      italic:
        "Kashi Rupé-déplié est plus qu'une exposition ; c'est un dialogue entre les cultures et une célébration de la nature transformative de l'art.",
      openDates: "Ouvert aux visites du 15 mai au 26 juillet 2026",
      hours:
        "Jeu, Ven, Sam de 14h à 18h / Dim de 11h à 17h ou sur rendez-vous à info@denode.be",
      readText: "Lire le texte sur l'exposition ici",
      cards: [
        {
          title: "Atelier 'Cutting Reality'",
          lines: [
            "par Nicolas Van Parys et Sofie Bos",
            "Atelier 1 - 15 au 17 juillet 2026",
            "Atelier 2 - 22 au 24 juillet 2026",
            "En savoir plus",
          ],
        },
        {
          title: "Kat Bové - Livre à vendre",
          lines: ["Réservez une copie du nouveau livre de Kat Bové"],
          cta: "Achetez le livre",
          ctaHref: "#/fr/shop",
        },
        {
          title: "Séances de dessin @ DeNode",
          lines: [
            "Nous organisons un atelier de dessin tous les 2 semaines le jeudi",
            "Bienvenue !",
          ],
        },
      ],
      blogHeading: "expositions actuelles et récentes",
      viewEverything: "Voir tout",
      posts: POSTS,
    },
  },

  nl: {
    nav: {
      program: "programma",
      artists: "kunstenaars",
      foundation: "stichting",
      team: "team",
      mission: "missie",
    },
    footer: {
      welcomeHeading: "Welkom bij Stichting DeNode",
      welcomeBody: [
        "Stichting DeNode ondersteunt actuele artistieke praktijken die hun oorsprong vinden in onderzoek, proces en overdracht.",
        "Via tentoonstellingen, onderzoeksprogramma's en internationale samenwerkingen biedt de stichting een podium aan kunstenaars van wie het werk de dialoog aangaat met materialiteit, ruimte, het lichaam, het narratief en de tijd.",
      ],
      findUs: "Je kan ons vinden in het centrum van Gent",
      address: "nodenaysteen - Predikherenlei 4 - 9000 Gent",
      openHeading: "tijdens tentoonstellingen is galerie nodenaysteen open:",
      openLines: [
        "van donderdag t.e.m. zaterdag: 14u - 18u",
        "zondag: 11u - 17u",
      ],
      byAppointment: "of na afspraak: kristof@denode.be",
      newsletter:
        "Schrijf je in voor onze nieuwsbrief of sociale media en blijf zo de hoogte van toekomstige evenementen en tentoonstellingen!",
      emailPlaceholder: "E-mailadres",
      register: "Inschrijven",
      newsletterNote: "(Nieuwsbriefformulier nog te koppelen aan je e-maildienst.)",
      copyright: "© 2025 Stichting DeNode",
    },
    home: {
      presents: "Stichting DeNode presenteert:",
      exhibitionTitle: "KASHI RUPÉ - unfolded",
      soloBy: "een solo tentoonstelling van",
      artist: "Nicolas Van Parys",
      paragraphs: [
        "DeNode Foundation presenteert met trots Kashi Rupé - unfolded, een nieuwe tentoonstelling van de Belgische kunstenaar Nicolas Van Parys. Het werk vindt zijn oorsprong in de spirituele hitte van Varanasi, een stad die ademt op het snijvlak van leven en dood, tijdens een residentie in november 2025.",
        "In deze serie onderging Van Parys' artistieke praktijk een fundamentele verschuiving. Hoewel de collage het vertrekpunt blijft om de werkelijkheid te deconstrueren, vloeien herkenbare fragmenten nu over in lyrische, geschilderde vormen. Het resultaat is een universum waarin kleur en structuur de weg wijzen naar een diep persoonlijke perceptie van de realiteit.",
        "De expositie belicht ook de menselijke connectie die tijdens de residentie ontstond. In nauwe samenwerking met Sofie Bos en lokale studenten van de faculteit Beeldende Kunsten van de Banaras Hindu University, onderzocht de kunstenaar de rituele fundamenten van hun respectievelijke beeldculturen.",
      ],
      italic:
        "Kashi Rupé - unfolded is daarmee meer dan een tentoonstelling; het is een dialoog tussen culturen en een viering van het transformerende karakter van kunst.",
      openDates: "Te bezoeken van 15 mei tot en met 26 juli 2026",
      hours:
        "do, vr, za van 14u tot 18u / zo van 11u tot 17u of op afspraak via info@denode.be",
      readText: "Lees de tekst over de tentoonstelling hier",
      cards: [
        {
          title: "Workshop 'Cutting Reality'",
          lines: [
            "door Nicolas Van Parys en Sofie Bos",
            "Workshop 1 - 15 tot 17/07/2026",
            "Workshop 2 - 22 tot 24/07/2026",
            "Lees meer",
          ],
        },
        {
          title: "Kat Bové - Boek te koop",
          lines: ["Reserveer alvast een exemplaar van het nieuw boek van Kat Bové"],
          cta: "Koop het boek",
          ctaHref: "#/nl/shop",
        },
        {
          title: "Tekensessies @ DeNode",
          lines: [
            "Om de 2 weken op donderdag organiseren we een teken atelier",
            "Welkom!",
          ],
        },
      ],
      blogHeading: "artikels - nieuws - expo",
      viewEverything: "Alles bekijken",
      posts: POSTS,
    },
  },
};
