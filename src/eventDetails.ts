// Local event detail pages migrated from denode.be (Paul holds the rights).
// Base = authentic Dutch; en/fr are AI translations flagged with `ai: true`.
import type { Localized } from "./blogPosts";

export interface EventDetail {
  slug: string;
  image: string;
  dateLabel: string; // short date summary shown under the title
  location: string;
  register?: string; // registration email / link, shown as a call-to-action
  nl: Localized;
  en?: Localized;
  fr?: Localized;
}

export const EVENT_DETAILS: EventDetail[] = [
  {
    slug: "cutting-reality",
    image: "/images/workshop-cutting-reality.webp",
    dateLabel: "Workshop 1: 15–16–17 juli 2026 · Workshop 2: 22–23–24 juli 2026",
    location: "Galerie DeNode, Predikherenlei 4, 9000 Gent",
    register: "sofiebosstudio@gmail.com",
    nl: {
      title: "Cutting Reality — Workshop 1 & 2",
      subtitle: "Workshop met Nicolas Van Parys en Sofie Bos",
      body: [
        { k: "h", t: "Van tentoonstelling naar versneden werkelijkheid" },
        { k: "p", t: "Geïnspireerd door de tentoonstelling van Nicolas Van Parys vertrekken we vanuit ons eigen beeldarchief, opgebouwd in de stad met de smartphone. We snijden, herorganiseren en transformeren deze fragmenten analoog tot nieuwe collages waarin de werkelijkheid opnieuw vorm krijgt." },
        { k: "h", t: "Dag 1 – Kijken & Verzamelen" },
        { k: "p", t: "We starten met een rondleiding door de tentoonstelling van Nicolas Van Parys en duiken dieper in zijn unieke manier van werken. Daarna trekken we samen de stad in. Met enkel je smartphone verzamel je eigen beeldmateriaal: details, texturen, vormen, architectuur, toevallige ontmoetingen en verborgen verhalen. Deze foto's worden ontwikkeld en vormen het uitgangspunt voor de volgende sessies." },
        { k: "h", t: "Dag 2 – Versnijden & Transformeren" },
        { k: "p", t: "We gaan aan de slag met ons eigen fotomateriaal. Door te knippen, schuiven, combineren en herordenen ontstaan verrassende collages waarin nieuwe beelden en betekenissen zichtbaar worden." },
        { k: "h", t: "Dag 3 – Verfijnen & Presenteren" },
        { k: "p", t: "We werken onze collages verder af, maken een persoonlijke selectie en presenteren het resultaat aan elkaar. We nemen tijd om het proces en de verschillende benaderingen samen te bespreken." },
        { k: "h", t: "Praktische informatie" },
        { k: "p", t: "Doelgroep: voor volwassenen (16+). Niveau: alle niveaus welkom. Tijdstip: 3 dagen, van 13.30 u tot 17.00 u. Prijs: €220 (deelnameprijs). Inbegrepen: materiaal, begeleiding door Sofie en Nicolas, ontwikkeling van de foto's en een drankje. Wat meebrengen: je smartphone en lader. Een eigen laptop is handig om beelden te selecteren/uploaden." },
        { k: "p", t: "We verdiepen ons graag in het werkproces, daarom werken we met een beperkte groep van maximaal 8 personen." },
      ],
    },
    en: {
      title: "Cutting Reality — Workshop 1 & 2",
      subtitle: "A workshop with Nicolas Van Parys and Sofie Bos",
      ai: true,
      body: [
        { k: "h", t: "From exhibition to cut-up reality" },
        { k: "p", t: "Inspired by the exhibition of Nicolas Van Parys, we set out from our own image archive, built up in the city with a smartphone. We cut, reorganise and transform these fragments by hand into new collages in which reality takes shape anew." },
        { k: "h", t: "Day 1 – Looking & Collecting" },
        { k: "p", t: "We begin with a guided tour of Nicolas Van Parys's exhibition and delve deeper into his unique way of working. Then we head into the city together. With only your smartphone, you gather your own visual material: details, textures, shapes, architecture, chance encounters and hidden stories. These photographs are developed and form the starting point for the following sessions." },
        { k: "h", t: "Day 2 – Cutting & Transforming" },
        { k: "p", t: "We get to work with our own photographic material. By cutting, shifting, combining and rearranging, surprising collages emerge in which new images and meanings become visible." },
        { k: "h", t: "Day 3 – Refining & Presenting" },
        { k: "p", t: "We finish our collages, make a personal selection and present the result to one another. We take the time to discuss the process and the different approaches together." },
        { k: "h", t: "Practical information" },
        { k: "p", t: "Audience: for adults (16+). Level: all levels welcome. Time: 3 days, from 1.30 pm to 5.00 pm. Price: €220 (participation fee). Included: materials, guidance from Sofie and Nicolas, development of the photographs and a drink. What to bring: your smartphone and charger. Your own laptop is handy for selecting/uploading images." },
        { k: "p", t: "We like to immerse ourselves in the working process, which is why we work with a limited group of no more than 8 people." },
      ],
    },
    fr: {
      title: "Cutting Reality — Atelier 1 & 2",
      subtitle: "Un atelier avec Nicolas Van Parys et Sofie Bos",
      ai: true,
      body: [
        { k: "h", t: "De l'exposition à la réalité recomposée" },
        { k: "p", t: "Inspirés par l'exposition de Nicolas Van Parys, nous partons de notre propre archive d'images, constituée dans la ville avec le smartphone. Nous découpons, réorganisons et transformons ces fragments de manière analogique en de nouveaux collages où la réalité prend une nouvelle forme." },
        { k: "h", t: "Jour 1 – Regarder & Collecter" },
        { k: "p", t: "Nous commençons par une visite guidée de l'exposition de Nicolas Van Parys et plongeons plus profondément dans sa manière de travailler singulière. Ensuite, nous partons ensemble dans la ville. Avec votre seul smartphone, vous rassemblez votre propre matériel visuel : détails, textures, formes, architecture, rencontres fortuites et histoires cachées. Ces photos sont développées et constituent le point de départ des séances suivantes." },
        { k: "h", t: "Jour 2 – Découper & Transformer" },
        { k: "p", t: "Nous travaillons avec notre propre matériel photographique. En découpant, déplaçant, combinant et réorganisant, des collages surprenants apparaissent, où de nouvelles images et significations deviennent visibles." },
        { k: "h", t: "Jour 3 – Affiner & Présenter" },
        { k: "p", t: "Nous finalisons nos collages, faisons une sélection personnelle et présentons le résultat les uns aux autres. Nous prenons le temps de discuter ensemble du processus et des différentes approches." },
        { k: "h", t: "Informations pratiques" },
        { k: "p", t: "Public : pour adultes (16+). Niveau : tous niveaux bienvenus. Horaire : 3 jours, de 13 h 30 à 17 h 00. Prix : 220 € (frais de participation). Inclus : le matériel, l'encadrement par Sofie et Nicolas, le développement des photos et une boisson. À apporter : votre smartphone et son chargeur. Un ordinateur portable personnel est pratique pour sélectionner/téléverser les images." },
        { k: "p", t: "Nous aimons nous immerger dans le processus de travail, c'est pourquoi nous travaillons avec un groupe restreint de 8 personnes maximum." },
      ],
    },
  },
  {
    slug: "drawing-sessions",
    image: "/images/drawing-sessions.webp",
    dateLabel: "Hervatten vanaf oktober 2026 · om de twee weken op donderdag",
    location: "Galerie DeNode, Predikherenlei 4, 9000 Gent",
    register: "info@denode.be",
    nl: {
      title: "Tekensessies op model",
      subtitle: "Tweewekelijkse tekensessie bij DeNode",
      body: [
        { k: "h", t: "Samen tekenen naar levend model" },
        { k: "p", t: "Om de twee weken organiseren we op donderdag een tekensessie naar levend model. Of je nu ervaren bent of net begint: iedereen is welkom om in een ontspannen sfeer te werken en te schetsen." },
        { k: "p", t: "Na een onderbreking hervatten we de tekensessies op model vanaf oktober 2026." },
        { k: "p", t: "Welkom!" },
      ],
    },
    en: {
      title: "Life drawing sessions",
      subtitle: "A fortnightly drawing session at DeNode",
      ai: true,
      body: [
        { k: "h", t: "Drawing together from a live model" },
        { k: "p", t: "Every two weeks, on Thursday, we organise a drawing session from a live model. Whether you are experienced or just starting out: everyone is welcome to work and sketch in a relaxed atmosphere." },
        { k: "p", t: "After a break, the life drawing sessions resume from October 2026." },
        { k: "p", t: "Welcome!" },
      ],
    },
    fr: {
      title: "Séances de dessin d'après modèle",
      subtitle: "Une séance de dessin bimensuelle chez DeNode",
      ai: true,
      body: [
        { k: "h", t: "Dessiner ensemble d'après un modèle vivant" },
        { k: "p", t: "Toutes les deux semaines, le jeudi, nous organisons une séance de dessin d'après un modèle vivant. Que vous soyez expérimenté ou débutant : chacun est le bienvenu pour travailler et croquer dans une ambiance détendue." },
        { k: "p", t: "Après une interruption, les séances de dessin d'après modèle reprennent à partir d'octobre 2026." },
        { k: "p", t: "Bienvenue !" },
      ],
    },
  },
];

export function getEvent(slug: string): EventDetail | undefined {
  return EVENT_DETAILS.find((e) => e.slug === slug);
}
