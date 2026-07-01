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
  {
    slug: "john-robinson",
    title: "John Robinson",
    subtitle: "People Ruin Paintings",
    category: "exhibitions",
    date: "January 29, 2026",
    author: "Stichting DeNode, Hanna Ouaziz",
    image: "/images/blog-john-robinson.webp",
    body: [
      { k: "h", t: "Curatorial text for the exhibition" },
      { k: "p", t: "He stands in the middle of a table, covered with a black cloth. He is also wrapped in it, fixed in his own staging. Every time he turns around, the fabric gets caught and threatens to pull the table with it. The gesture is awkward, almost comical. We laugh — a nervous laugh." },
      { k: "p", t: "John Robinson draws cards from the tarot deck and asks each of us to choose three — the past, the present, the future. He speaks incessantly, carried by that unstoppable, biting English humor. Everything seems improvised, even absurd — and yet every word falls into place with an almost ruthless precision. What he reveals cuts to the bone: love, betrayal, disillusionment, shame. The audience wavers between amusement and discomfort." },
      { k: "p", t: "He sweats, stumbles, loses his shape as whipped cream is thrown at him. The black cloth gets soiled, the scene slowly slides into chaos. And yet something holds firm. Something invisible. From the ridiculous, a truth rises: that rare moment when art stops being performance and simply becomes human. I felt at once the urge to laugh and a strange, gentle tenderness — the kind that only arises from clear despair." },
      { k: "p", t: "Then I understood: for him, painting begins where performance collapses. In the residue. In the chaos. From the impossibility of being anything other than a painter." },
      { k: "p", t: "John Robinson is not a painter of conviction or beauty. What matters to him is the act of painting itself — an action stripped of morality, faith, or comfort. He has sacrificed everything for it: temptation, logic, sometimes even his sanity. For him, painting is not redemption, but a vital lie that makes survival possible, a necessary deception to stay alive." },
      { k: "p", t: "His work is irreverent, but never ironic. It disarms rather than entertains. He makes a method out of his own contradictions and transforms weakness into clarity. Everything outside of painting — religion, morality, empathy, justice — is merely surrogate: a replacement, a ghostly residue that circles around the true act. He paints from that emptiness, from the place where truth is both impossible and necessary." },
      { k: "p", t: "The artist becomes both illusionist and prophet, a grotesque clown whose stage is his own downfall. Under the black cloth, sweating and covered in cream, he embodies the farce that the world is — and from that farce, the painting is born." },
      { k: "p", t: "In the series Hermits — Courbet, Basquiat, Blake, Smiley — the same figure returns, now silent, frontal, transformed. These are not tributes but incarnations. He paints himself through others, disguising himself to be able to speak. He becomes Courbet the worker, Basquiat the martyr, Blake the mystic, Smiley the fool of modernity. Each portrait is a confession: a self-portrait of the deceiver who declares: I am all who lie to survive." },
      { k: "p", t: "The tarot becomes painting. The laughter quiets. The awkward gesture becomes an icon. The Hermits form a choir of fragmented identities. Their standstill recalls the Flemish altarpieces, but stripped of faith — only fatigue, perseverance, endurance remain. They are saints of a reversed faith, witnesses to an art that promises nothing and yet refuses to disappear." },
      { k: "p", t: "In other cycles — Seance, Tarot, Leviathan, The Woman — the same struggle continues. The grotesque and the stain, sweat and residue, become the substance of painting itself. What drips and collapses on stage becomes a surface of quiet revelation on the canvas. But that calm is deceptive. Each work carries the chaos of its own becoming within it, the despair of the gesture that preceded it." },
      { k: "p", t: "This is the painting of the aftermath — after the laughter, after the shame, after the fall." },
      { k: "p", t: "The exhibition in Ghent unfolds along this fragile line between laughter and grace. We enter it through the performance — the awkward, comedic body — and move towards painting, towards silence, towards something that touches the sacred. Everything happens on that edge: neither comic, nor tragic, nor believing, nor cynical." },
      { k: "p", t: "The beauty of John Robinson lies precisely in that impossibility of choosing between the ridiculous and the divine. His canvases are modern relics: laden surfaces of endurance and exhaustion. He paints disaster as others paint light." },
      { k: "p", t: "And beneath the black canvas, beneath the laughter, beneath the layers of cream and dust, he stubbornly continues to search — not for truth, but for the possibility of still being alive." },
      { k: "q", t: "Curatorial text by Hanna Ouaziz — DeNode Foundation, Ghent, 2026" },
    ],
  },
  {
    slug: "merel",
    title: "Merel Jansen",
    subtitle: "Solo exhibition 'Merel' — 28/11/2025 to 11/01/2026 @ nodenaysteen",
    category: "exhibitions",
    date: "November 14, 2025",
    author: "Stichting DeNode, Kristof Vander Cruyssen",
    image: "/images/blog-merel.jpg",
    body: [
      { k: "p", t: "The world of Merel Jansen (°1990, NL) smells of turpentine and oil paint. She is filled with color, form, and movement." },
      { k: "p", t: "In her early years, Merel found stability in portraiture and realism: a way to understand the world through the faces and stories of others. But she soon discovered that the power of her painting did not lie in mimicking what she saw, but in showing what she felt. Sadness, anger, wonder, and vulnerability become not themes for her, but colors — a unique language of energy and emotion. What is heavy in life becomes something that lives and moves on the canvas." },
      { k: "p", t: "For Merel, color is more than a medium: it is reality itself. In her synesthetic experience, numbers, people, and memories all carry their own color. These colors meet each other — sometimes in collision, sometimes in harmony. A form determines what a color can be; a color reveals what a form means. Thus, a painting emerges that does not depict a world, but creates a new one: a space full of intensity and resonance." },
      { k: "p", t: "Merel refuses to limit herself to one style. Abstract and figurative paintings stand side by side, as two ways to show the same existence — the outer and the inner, the mask and the heart. The viewer is invited to move between these worlds and thus create their own meaning." },
      { k: "p", t: "In a time when truth often fades into opinion or pose, Merel seeks what is real: the directness of feeling, the intensity of color, the freedom of gesture." },
      { k: "p", t: "Her paintings do not aim to explain, but to invite. They ask us to pause, to look, and to discover what authenticity means for each of us." },
      { k: "q", t: "Welcome to the opening on Friday, 28/11/2025 at 6 PM. The exhibition runs until Sunday, 11/01/2026." },
    ],
  },
  {
    slug: "lee-ranaldo",
    title: "Lee Ranaldo",
    subtitle: "(again) across the river — 11/10 to 11/11/2025",
    category: "exhibitions",
    date: "October 6, 2025",
    author: "Lee Ranaldo",
    image: "/images/blog-lee-ranaldo.jpg",
    body: [
      { k: "p", t: "The works on view are recent creations, many the result of a 5-week August/September 2025 residency in the city of Krems, Austria, situated in the Wachau white wine region. I have created a new group of Lost Highway drawings, in a larger format than previously attempted. They are notations, improvisations, spontaneous impressions, most often done while sitting in the passenger seat of a moving vehicle. This series has its origins in the endless city-to-city travels that are part of a musician's life. The activity – sketching from the passenger seat of a moving vehicle – has now become something of a habit. In my Krems studio I began making larger (A3) size images, using my smaller drawings as templates. I was trying to keep the initial spontaneous impressions alive, while growing the works to a larger format." },
      { k: "p", t: "I also began experimenting with a new sequence of abstractions, pairing them with the Lost Highway images, as a way to open these works up to new meanings. The abstractions are still nascent, without parameters or pre-determination at this early stage. Experiments with shape and form. My goal at this early stage of development is to produce them without judgment, almost unconsciously, and see where they lead me." },
      { k: "p", t: "Many of my Lost Highway drawings I create these days are done in quite small formats – often the pocket notebooks I always carry with me. These small books also hold written notes, ideas, lyrics, poems, and thoughts. When I flip through the books, the Lost Highway images intermingle with the written words, and other scratches and sketches. I wanted to include some of these notebook texts as companions to the road images in this new, larger format – alongside the abstractions as another way to expand the scope of the works." },
      { k: "p", t: "Some of these new text works stem from research I've done in the last 2 years into the work of an artist I've long had many affinities with, Canadian Greg Curnoe (1936-1992). One of his important series was the text-based, rubber stamped works he created starting in the mid-60s, personal texts stamped on canvas or paper. In addition to enlarging some of my own handwritten notebook entries, I used Curnoe's technique for some of the works on display, dedicated to him." },
      { k: "p", t: "I spoke recently about one textwork of Curnoe's in particular – The Backyard Remembered (1967) – with curator Cassandra Getty at Museum London, Ontario, Canada, where it has just gone on display for the first time in many years. An audio sample of our conversation is now on their website as part of their most recent exhibition. This work inspired my own 2-panel piece with the same title." },
      { k: "p", t: "This past year I have been working on a series of graphic music scores utilizing the environmental sounds at specific locations for inspiration. I would map the sounds I heard – car horns, voices, birds, leaves rustling, jets overhead, etc. – for a 30-minute interval and use these events to create a score for musicians. In June 2025 I presented a sextet version of one of these scores on New York City's High Line, in a concert that also featured the Sun Ra Arkestra. I am showing enlargements of these scores, which have been reworked with colored pencil. The small originals will also be on display." },
      { k: "p", t: "I am an avid cyclist (another affinity with Curnoe) and during my Krems residency began recording a collection of 114 bicycle bells towards a piece dedicated to John Cage (his next birthday, in 2026, will be 114). This piece comes at the inspiration of long-time Cage scholar, Viennese artist Sabine Groschup. During the process of recording these many bells I came to understand the particular character and sound of each one individually. Some were fairly new, others quite vintage – and each had its own personality. I display a group of these cycling relics here on small Belgian pavé stones. During the course of making these recordings, I found that certain particular bells – 3 or 4 out of the entire group – were the best sounding bicycle bells I've ever heard. I've chosen one of this select group and made an edition of 5 copies, The Best Bicycle Bell in the World, mounted on pavé stones." },
    ],
  },
  {
    slug: "vestiges",
    title: "Vestiges",
    subtitle: "A duo exhibition by Chantal Pollier and Guillaume Van Moerkercke — essay by Damien Degrave",
    category: "exhibitions",
    date: "September 28, 2025",
    author: "Stichting DeNode, Kristof Vander Cruyssen",
    image: "/images/blog-vestiges.webp",
    body: [
      { k: "p", t: "In Vestiges time becomes tangible. Two artists approach matter as if it were an ancient manuscript: every scratch, every grain, every trace a sentence from a story on the verge of disappearing. What remains is preserved. What threatens to fade is brought back to life." },
      { k: "p", t: "Drawings whisper against sculptures, shadow speaks to stone." },
      { k: "p", t: "In Vestiges, Chantal Pollier and Guillaume Van Moerkercke delve into matter as one would uncover a buried memory. It is an exhibition about time, and about what defies oblivion. Remnants and traces point the way." },
      { k: "p", t: "A silent dialogue unfolds between their practices: slowness, embodied gestures, matter shaped by hand and breath." },
      { k: "h", t: "The organic corpus of Chantal Pollier" },
      { k: "p", t: "Chantal Pollier works stone as if it were alive. Her sculptures breathe an archaeology of sensitivity: landscapes of flesh, skin as topography, scars as relief. She seeks the place where hardness and vulnerability meet, where body and landscape merge." },
      { k: "p", t: "With marble, she forms shapes that balance between emergence and disappearance: a soft heart carved from stone, a skin engraved with memories. Her works evoke associations with a distant antiquity, or perhaps archaeological finds from the future." },
      { k: "p", t: "In her art, transience is not a loss but a revelation. She shows that what passes away, precisely because of its vulnerability, becomes unspeakably precious." },
      { k: "h", t: "Traces in Black of Guillaume Van Moerkercke" },
      { k: "p", t: "Guillaume Van Moerkercke works with charcoal — raw, black, dusty — at once a trace and an erasure. His drawings are slow excavations from sketchbooks, memories, and visions. Every gesture is a ritual, a sacred remembrance etched into the surface." },
      { k: "p", t: "The black in his work is not emptiness, but a source: layered and alive, imbued with nuances in which forgotten forms emerge like echoes in the silence. His images hover between appearing and disappearing – ghostly, as if born from dreams or nocturnal visions. In his hands, charcoal becomes flesh, smoke, bone… stone." },
      { k: "p", t: "His work calls for slowness, for an eye that adapts to what hides in the shadows. In that darkness, the softest traces of life become visible – fleeting, and thus all the more precious." },
    ],
  },
  {
    slug: "bjorn-wandels",
    title: "Björn Wandels",
    subtitle: "",
    category: "artists",
    date: "September 7, 2025",
    author: "Paul De Cannière",
    image: "/images/blog-bjorn-wandels.jpg",
    body: [
      { k: "h", t: "Bio Björn Wandels" },
      { k: "p", t: "Björn Wandels (1979, Ghent) employs a wide spectrum of media in a hybrid practice. His work ironically questions the premises of both analog and digital media by decoupling them from their traditional context or function." },
      { k: "p", t: "He paints photographs from the darkroom, photographs drawings, and gives sound a cinematic form. Through short videos and collage loops, he builds installations that also incorporate poetry and typography." },
      { k: "p", t: "Wandels does not aspire to scientific objectivity; his oeuvre is rather a personal translation dictated by the logic and boundaries of the artistic material. The result is inherently ambiguous: a body of work that constantly moves between the tragic and the absurd." },
    ],
  },
  {
    slug: "robrecht-kessels",
    title: "Robrecht Kessels",
    subtitle: "musician",
    category: "artists",
    date: "September 2, 2025",
    author: "Stichting DeNode, Kristof Vander Cruyssen",
    image: "/images/blog-robrecht-kessels.jpg",
    body: [
      { k: "h", t: "Bio Robrecht Kessels" },
      { k: "p", t: "Robrecht Kessels earned his Master's degree in music (cello) at the conservatory of Ghent, where he deepened his knowledge of the classical repertoire during his studies. He soon broadened his horizons and became active in various musical contexts. He played with bands such as Orange Pecco (Kinky Star records), Zjef Vanuytsel, Hooverphonic, and Room 13 (with among others Stijn Meuris)." },
      { k: "p", t: "With the group Askany i he sought the dialogue between traditional African vocal music and the Western string quartet. This special project was artist in residence at Espace Senghor in Brussels and received recognition at festivals such as the Festival of Flanders, the Cervantino Festival in Mexico, and SIMA in Benin." },
      { k: "p", t: "Additionally, Robrecht is a permanent cellist with Ishtar, the band that gained recognition with the Eurosong hit O Julissi in Belgrade." },
      { k: "p", t: "Besides his stage career, he is employed full-time at the KATZ Academy of Arts in Torhout, where he teaches cello, improvisation, and music lab. Over the years, his cello class has grown to more than 30 students." },
      { k: "p", t: "Also in the theatre and dance world, Robrecht left his mark as a composer. His music can be heard, among other places, on the CD Folies de Flandre." },
      { k: "p", t: "Today he works under the name Ononde on a new phase of his artistic trajectory, in which he gives full scope to his passion for composing. The name Ononde phonetically refers to the repetitive surge of sea waves, to sound waves, and to \"in the name of.\"" },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
