// Full blog posts migrated from denode.be (Paul confirmed DeNode holds the rights).
// Rendered in their source language; authentic NL/FR per-post translations can be
// layered in later. Cover images are local (/images/blog-*).

export interface Block {
  k: "p" | "h" | "q";
  t: string;
}

export interface Post {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  author: string;
  image: string;
  body: Block[];
}

export const POSTS: Post[] = [
  {
    slug: "nicolas-van-parys",
    title: "Nicolas Van Parys",
    subtitle: "KASHI RUPÉ - unfolded",
    category: "artists",
    date: "June 5, 2026",
    author: "Stichting DeNode, Kristof Vander Cruyssen",
    image: "/images/blog-nicolas-van-parys.jpg",
    body: [
      {
        k: "p",
        t: "In the spiritual heat of Varanasi (Kashi), a city that breathes at the intersection of life and death, Nicolas Van Parys found the seed for his latest work. On the banks of the Ganges, where tradition and transformation (Rupé) constantly touch each other, his artistic practice underwent a fundamental shift.",
      },
      {
        k: "p",
        t: "Varanasi is a place of continuous transmutation. It is a location where matter decays and meaning is constantly reshaped in the ashes and the flow of the river. This layered, transcendent atmosphere forms the heartbeat of the works in this exhibition.",
      },
      { k: "h", t: "Unfold" },
      {
        k: "p",
        t: "The oeuvre of Van Parys is never static; it is a continuous process of unfolding. Although collage still forms the foundation — as a technique to deconstruct and rearrange reality — these new images go beyond mere reconstruction. Fragments of familiarity flow into lyrical, painted forms, creating a magical, almost dreamlike world.",
      },
      {
        k: "q",
        t: "The canvas acts as a threshold, a gateway to a world that feels both completely strange and yet recognizable.",
      },
      { k: "h", t: "Between Worlds" },
      {
        k: "p",
        t: "In the 'in-between world' of Van Parys, solid forms dissolve. The layering here is both visual and mental: beneath the surface of the painting lies a yearning for essence and reconciliation. He brings together fragments from our collective image culture to then transform them with paint and daring.",
      },
      {
        k: "p",
        t: "The result is a fluid universe in which color and structure point the way to a deeply personal perception of reality. What remains hidden behind the façade of daily perception finds a voice here.",
      },
      {
        k: "p",
        t: "Kashi Rupé - Unfolded nodigt u uit om stil te staan bij de vluchtige momenten van transformatie. Het is een plek waar het verleden het heden ontmoet en waar het beeld zichzelf, laag per laag, aan de toeschouwer openbaart.",
      },
    ],
  },
  {
    slug: "about-the-hermit",
    title: "About the hermit deep within us",
    subtitle: "Prof. Em. Freddy Decreus",
    category: "artists",
    date: "June 6, 2026",
    author: "Stichting DeNode, Kristof Vander Cruyssen",
    image: "/images/blog-about-the-hermit.webp",
    body: [
      {
        k: "p",
        t: "With John Robinson, no new myth arises in the classical sense of the word. No hero stands up to overcome chaos, no divine order is restored, and no story heals the fractures of time once and for all.",
      },
      {
        k: "p",
        t: "What appears instead is something much more fragile: a timid re-enchantment of a disenchanted world. It is as if the myth can no longer exist as a closed and sovereign system, but only as a flickering trace, an echo wandering through a hollow landscape of signs.",
      },
      {
        k: "p",
        t: "Within this transitional world, old figures return: Death, the Star, the Moon, the Hermit. But they no longer carry the certainties that once surrounded them. They appear as spectral remnants of cultural memory, detached from their original context, drifting through spaces of emptiness and silence. Their presence does not create clarity; it disrupts. The myth is not reconstructed but broken open, stripped of its ideological harness until only a vulnerable core of existential experience remains.",
      },
      {
        k: "p",
        t: "At the center of this renewed mythological space stands the figure of the Hermit. Not as a wise master who knows the way, but as a liminal being, hovering between disappearance and appearance, between culture and interiority, between life and death.",
      },
      {
        k: "p",
        t: "The Hermit withdraws from the oversaturated world of images and slogans, from the exhausted language of progress and identity. His solitude is not an escape, but a necessary gesture of resistance. In an era where collective meanings crumble, withdrawal becomes a spiritual act: an attempt to listen again to what still breathes beneath the ruins of culture.",
      },
      { k: "p", t: "And yet a disturbing question continues to echo through Robinson's universe:" },
      { k: "q", t: "Is this all we can do?" },
      {
        k: "p",
        t: "Hermits become tragic figures wandering through a world 'Ohne People', stripped of common certainty and abandoned by the stories that once held us up. \"Never trust the images of the world,\" the works seem to whisper, \"for every image is temporary, every representation is entangled in power.\" The stage transforms into a field of broken mirrors in which consciousness itself wavers, where we all discover that we cannot keep our story coherent. Identity shatters. Continuity dissolves. Humanity loses its grip on the stories that once ordered reality.",
      },
      {
        k: "p",
        t: "In that sense, Robinson's figures seem trapped in a state of existential backtracking. A movement that does not move forward, but is simultaneously directed inward and backward: toward withdrawal, toward silence, toward the dismantling of certainty.",
      },
      {
        k: "p",
        t: "The Hermit becomes akin to the wandering outcast, to Herzog, to Thug, displaced souls moving through the ruins of exhausted meaning. One feels in these works impressions of a post-Covid consciousness: a world marked by isolation, interrupted rituals, mourning, and the sudden vulnerability of all human structures. Death no longer appears as abstract symbolism, but as an intimate and collective wound that is silently carried beneath the surface of daily life.",
      },
      {
        k: "p",
        t: "Therefore, Robinson's rituals carry a strange, trembling tension within them. They resemble spiritual séances, gestures without firm belief, movements that are simultaneously empty and charged. And yet, despite everything, they bring people together; there is a sense of unity in the air, but is it sincere and reliable? It is as if the performers are slowly peeling away the hollow symbols of Western culture to rediscover a deeper inner resonance. What matters is not the restoration of a shared truth, but the experience of uncertainty itself, dwelling in a liminal state where old certainties die before new forms are even born.",
      },
      {
        k: "p",
        t: "Sometimes, Robinson's work suggests an iconoclastic impulse: should paintings themselves be ruined because they are merely representations of a world we must leave behind? Should images collapse so that perception itself can begin anew? The destruction of representation here is not merely nihilistic; it is preparatory, almost ritualistic, a clearing away of exhausted symbolic systems to reopen the possibility of another beginning.",
      },
      {
        k: "p",
        t: "This liminality reaches a particular intensity in Thangka, where a new in-between space emerges. A place where the old \"Leviathan\" dies: the rigid structures of power, identity, and cultural self-evidence. What remains is not a triumphant rebirth, but an open field of possible transformations. A fragile terrain where beliefs become fluid again and the individual must reinvent themselves in the face of the vastness of life and death.",
      },
      {
        k: "p",
        t: "Robinson's new metaphors – the mosquito, the tense head – function in the same way. They are not stable symbols within a new mythology of the ego, but symptoms of a world that has lost its fixed meanings. Yet therein lies their strength. For by refusing to conceal the emptiness and instead making it visible, they open a space of humility. Not a heroic mythology of the self, but a vulnerable existence that learns how to dwell in uncertainty.",
      },
      {
        k: "p",
        t: "And so the Hermit ultimately becomes the central figure of this transitional time. Not because he possesses answers, but because he has the courage to retreat into the silence between old and new worlds. He guards an inner space in which humanity, stripped of its cultural masks, is once again confronted with the elemental questions of mortality, loss, and transformation.",
      },
      {
        k: "p",
        t: "Perhaps this retreat is not the end of the journey. Perhaps it marks what the Tarot calls the Zero Position, the place that the Fool occupies, the archetype of potential. The figure standing at the edge of the abyss with almost nothing with him, stripped of certainty, identity, and destination. Not that triumphant hero of the classical myth, but the fragile traveler of a shattered era. The Fool steps forward without guarantees, and begins anew precisely because all previous worlds have fallen apart.",
      },
      {
        k: "p",
        t: "In Robinson's universe, retreat is therefore not an end, but a necessary threshold: a darkened place where meaning and existential orientation can arise in a completely different way, where the soul, after the collapse of exhausted representations, dares to begin again.",
      },
    ],
  },
  {
    slug: "bodies-eros-and-thanatos",
    title: "Bodies Eros and Thanatos",
    subtitle: "the unspeakable in the art of Kat Bové, by Em. Prof. Freddy Decreus",
    category: "artists",
    date: "June 6, 2026",
    author: "Stichting DeNode, Paul De Cannière",
    image: "/images/blog-bodies-eros-thanatos.jpg",
    body: [
      {
        k: "p",
        t: "The British researcher Caroline Criado Perez published 'Invisible Women' in 2019, a work that has since been translated into many languages. In it, she shows how our knowledge of bodies and minds is still predominantly shaped by male perspectives. To this day, the man is considered the standard patient in the pharmaceutical industry, more stable, it is said, less subject to hormonal fluctuations. This results in structural underfunding of research. One might think: if endometriosis affected men, the problem would have been solved long ago.",
      },
      {
        k: "p",
        t: "In this field of forces, I want to situate the work of Kat Bové (°1984): a field of framing, of visible and invisible frameworks that guide our thoughts and actions. A Western, patriarchal, and economic worldview that disciplines bodies and minds (Foucault). And thus, the woman was thought to be the absolutely Other, complex, dark, elusive. In the language itself, she found it difficult to take shape, as many professions still lack a female equivalent. In the Judeo-Christian religion, she was neatly sidelined, undervalued, held guilty. \"If God is male, then man is God,\" wrote Mary Daly. Thus, the woman was assigned to ambiguity, sin, and permanently received second place.",
      },
      {
        k: "p",
        t: "Here begins the story of Kat Bové, here her action and reaction start. It begins well, as you read her works: 'Get all the color, fall for my part all red', or also 'Fük yü, I'm doing my güsting anyway'.",
      },
      {
        k: "p",
        t: "Like a mythical Salome, she proudly presents the severed head of John the Baptist. An iconic image of a woman who refuses passivity, who no longer wants to be merely a mirror of male projections. In her work, Salome embodies the fear and desire that female sexuality evokes: a figure of transgression that reveals that the existing order is not a natural law, but a construct. In the central triptych of 'Minsterwood', Wayn Traub's grand exhibition at the River City Gallery in Bangkok (January-March 2026), she appears at the top of the altarpiece, triumphant, her head bathed in a golden halo, her hand resting on the sword.",
      },
      {
        k: "p",
        t: "From a liberated body, she goes on the counterattack. Her practice is both autobiographical and art historical. Humor and melancholy constantly intersect and outline a nameless path where vulnerability and intimacy, pain and healing collide and merge. Therefore, she invites us into her very own liminal space, a shifting threshold where taboo, prohibition, and desire touch each other.",
      },
      {
        k: "p",
        t: "Her tone is unforgettable: irreverent, rebellious, hot. A new mythology emerges before our eyes, with old frameworks bursting open and new ones that fascinate and send shivers down the spine. It becomes urgent to think differently, to dream again of worlds that have remained closed for too long.",
      },
      {
        k: "p",
        t: "Since 2022, through a daily gaze at herself, the masks have fallen. On Instagram, the layers of social varnish dissolved, exposed to the astonished gaze of the world. Since then, Kat exists artistically 'live', in a continuous self-exhibition: an intimate performance she calls 'Kat-alogus', not a diary, but a place of revelation, an inner space in which she resides.",
      },
      {
        k: "p",
        t: "'Give me a sketchbook to live in': this is how the art book published in 2026 by the DeNode Foundation in Ghent opens and closes, nearly 300 pages thick, a gem to cherish. More than twenty years of inner struggle are depicted within, populated by angels and demons. It begins with the warning, DON'T READ A WORD IN THIS DIARY, OTHERWISE KARMA WILL FIND YOU and ends with a curse, FUCK THE PEOPLE. In between: the desire and at the same time the refusal to speak and be present in a world that often feels absurd, empty, and grotesque.",
      },
      {
        k: "p",
        t: "Like with Bracha Ettinger, whose figures appear and disappear on the edge of shadow, Kats' bodies are never fully present or absent. They float in a space permeated with archaic images, traveling archetypes. We encounter primal mothers, ancestral goddesses, drawn in rough, almost wild gestures. A painting of the essential, searching for the elusive. Desire, passion, aching loneliness — everything comes to the surface. The bodies, as if in a trance, appear in worlds that one could call, with Rudolf Otto, fascinans and tremendum: simultaneously seductive and unsettling, attractive and frightening.",
      },
      {
        k: "p",
        t: "The skin seems close, almost tangible, a provocative invitation for everyone's gaze. The repetition of identical bodies works hypnotically, always charged with intimacy and sensuality, also laden with disruption and stubbornness. Bodies desire, suffer, exhaust themselves, often fail, for a dark energy resides within them. Bodies catch something, radiate it, open up, and then repel again. Perhaps they implode. Perhaps they explode.",
      },
      {
        k: "p",
        t: "Kat's women are shamanistic princesses. They seem to be in conversation with other worlds and live in transition zones that transcend the human. In these In-Between Worlds, emotions contradict each other: wanting to feel, not being able to feel, a recurring longing for the wound amidst happiness. And in the heart of this space appears The First Scream, a powerful homage to Munch, his naked Madonna also comes into view, a once-lost sacredness in times that are sometimes already thought to be lost. Why do Scream and Madonna inhabit her inner world? Out of social anxiety? Existential unrest? Broken relationships? Or from cosmic dizziness? One thing remains: something transcends, escapes, repeats itself, multiplies. Female bodies move between fullness and emptiness, between attraction and repulsion, amidst fields of tension and transgression.",
      },
      {
        k: "p",
        t: "Where Irigaray saw the woman still trapped in a masculine language, Kat creates a new relationship between word and body. The bodies speak. They respond, speak against, question the image they themselves inhabit. They become 'Speaking Portraits', a new artistic genre? Not illustrations, but inner monologues that open themselves to dialogue. Bodies play a sophisticated game, transform, question themselves. Nothing is stable. Meaning slips.",
      },
      {
        k: "p",
        t: "No instability, however, without many forms of hilarious joy. Kat creates an imagination where laughter feels at home, irreverent, relaxing. 'YOU WANT MEUR?' asks a liberated armpit. 'REBEL WITHOUT A KOUS', complains a left leg.",
      },
      {
        k: "p",
        t: "Unstable portraits blow up the old mythology, patriarchal fictions from Church and State wobble. In Kat's mythology, the woman claims the golden halo on her own terms. The body, the heart of this exhibition, is no longer an instrument. It became a sovereign territory. In the moving space between fascinans and tremendum, it becomes a symbolic battlefield between old and new regimes of light.",
      },
      { k: "q", t: "Her motto remains: I own me. And no one should interfere with it. Because: I will always rise in wild fires." },
      {
        k: "p",
        t: "Kat claims the mythical sanctity of fire and light, not as a gift from above, but as an inner source. Therefore, she is no longer a muse, nor a victim. Neither Eurydice, nor Persephone.",
      },
      { k: "p", t: "She becomes origin. And with her, each of us can become that. It suffices to open the eyes." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
