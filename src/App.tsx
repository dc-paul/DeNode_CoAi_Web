import { initSatellite } from "@junobuild/core";
import { useEffect, useState, type ReactNode } from "react";

const ACCENT = "#c0392b";
const ACCENT_HOVER = "#a93226";
const LOGO =
  "https://www.denode.be/web/image/website/1/logo/DeNode%20Foundation?unique=b9ce900";

const NAV = [
  { label: "program", href: "https://www.denode.be/en/blog/expos-11" },
  { label: "artists", href: "https://www.denode.be/en/artists" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#ececec] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <a href="https://www.denode.be/en" aria-label="DeNode Foundation home">
          <img src={LOGO} alt="DeNode Foundation" className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 text-[15px] text-black md:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="transition-colors hover:text-[#c0392b]"
            >
              {n.label}
            </a>
          ))}
          <div className="group relative">
            <button className="transition-colors hover:text-[#c0392b]">
              foundation ▾
            </button>
            <div className="absolute right-0 hidden min-w-[160px] flex-col rounded-md border border-[#ececec] bg-white py-2 shadow-lg group-hover:flex">
              <a
                href="https://www.denode.be/en/about"
                className="px-4 py-2 hover:bg-[#f7f7f5]"
              >
                team
              </a>
              <a
                href="https://www.denode.be/en/about-us"
                className="px-4 py-2 hover:bg-[#f7f7f5]"
              >
                mission
              </a>
            </div>
          </div>
          <span className="rounded-full border border-[#dcdcdc] px-4 py-1.5 text-sm">
            English (US)
          </span>
        </nav>

        <button
          className="text-black md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-black"></span>
          <span className="mt-1.5 block h-0.5 w-6 bg-black"></span>
          <span className="mt-1.5 block h-0.5 w-6 bg-black"></span>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[#ececec] px-6 py-4 text-[15px] md:hidden">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="py-2">
              {n.label}
            </a>
          ))}
          <a href="https://www.denode.be/en/about" className="py-2">
            team
          </a>
          <a href="https://www.denode.be/en/about-us" className="py-2">
            mission
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
      <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
        <img
          src="https://www.denode.be/web/image/7025-e31fe066/nico_image%20affinity.webp"
          alt="Kashi Rupé - unfolded, Nicolas Van Parys"
          className="w-full rounded-sm object-cover shadow-sm"
          loading="eager"
        />

        <div className="text-black">
          <p className="text-2xl font-semibold md:text-3xl">
            DeNode Foundation presents:
          </p>
          <h1 className="mt-2 text-5xl font-extrabold leading-[1.05] md:text-6xl">
            KASHI RUPÉ - unfolded
          </h1>
          <p className="mt-4 text-xl">a solo exhibition by</p>
          <p className="mt-1 text-3xl font-bold md:text-4xl">Nicolas Van Parys</p>

          <div className="mt-8 space-y-4 text-[17px] leading-relaxed text-[#222]">
            <p className="font-semibold">
              DeNode Foundation proudly presents Kashi Rupé - unfolded, a new
              exhibition by Belgian artist Nicolas Van Parys. The work originates
              in the spiritual heat of Varanasi, a city that breathes at the
              intersection of life and death, during a residency in November
              2025.
            </p>
            <p>
              In this series, Van Parys' artistic practice underwent a
              fundamental shift. Although collage remains the starting point for
              deconstructing reality, recognizable fragments now merge into
              lyrical, painted forms. The result is a universe where color and
              structure guide the way to a deeply personal perception of reality.
            </p>
            <p>
              The exhibition also highlights the human connection that emerged
              during the residency. In close collaboration with Sofie Bos and
              local students from the Faculty of Visual Arts at Banaras Hindu
              University, the artist explored the ritual foundations of their
              respective visual cultures.
            </p>
            <p className="italic">
              Kashi Rupé-unfolded is more than an exhibition; it is a dialogue
              between cultures and a celebration of the transformative nature of
              art.
            </p>
            <p className="font-semibold">
              Open for visits from May 15 to July 26, 2026
            </p>
            <p>
              Thu, Fri, Sat from 2 PM to 6 PM / Sun from 11 AM to 5 PM or by
              appointment via{" "}
              <a
                href="mailto:info@denode.be"
                className="font-semibold underline"
                style={{ color: ACCENT }}
              >
                info@denode.be
              </a>
            </p>
            <p>
              Read the{" "}
              <a
                href="https://www.denode.be/en/blog/kunstenaars-7/nicolas-van-parys-325"
                className="font-semibold underline"
                style={{ color: ACCENT }}
              >
                text about the exhibition here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  image: string;
  title: string;
  children: ReactNode;
}

function Card({ image, title, children }: CardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-md border border-[#ececec] bg-white shadow-sm">
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <div className="mt-3 text-[15px] leading-relaxed text-[#333]">
          {children}
        </div>
      </div>
    </article>
  );
}

function Highlights() {
  return (
    <section className="bg-[#f7f7f5] py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3 md:px-10">
        <Card
          image="https://www.denode.be/web/image/7854-56254baa/Foto%209-06-2026%20om%2013.38.webp"
          title="Workshop 'Cutting Reality'"
        >
          <p>by Nicolas Van Parys and Sofie Bos</p>
          <a
            href="https://www.denode.be/en/event/cutting-reality-workshop-1-19"
            className="mt-2 block font-medium"
            style={{ color: ACCENT }}
          >
            Workshop 1 - July 15 to 17, 2026
          </a>
          <a
            href="https://www.denode.be/en/event/cutting-reality-workshop-2-20"
            className="block font-medium"
            style={{ color: ACCENT }}
          >
            Workshop 2 - July 22 to 24, 2026
          </a>
          <a
            href="https://www.denode.be/en/event/cutting-reality-workshop-1-19/register"
            className="mt-1 block font-medium"
            style={{ color: ACCENT }}
          >
            Read more
          </a>
        </Card>

        <Card
          image="https://www.denode.be/web/image/6122-0d276fe1/ANNOUNCEMENT-KRISTOF-WEBPUBLICATION2.webp"
          title="Kat Bové - Book for sale"
        >
          <p>Reserve a copy of Kat Bové's new book</p>
          <a
            href="https://www.denode.be/en/shop/kat-bove-give-me-a-sketchbook-to-live-in-132"
            className="mt-4 inline-block rounded-sm px-5 py-2.5 font-semibold text-white"
            style={{ backgroundColor: ACCENT }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = ACCENT_HOVER)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = ACCENT)
            }
          >
            Buy the book
          </a>
        </Card>

        <Card
          image="https://www.denode.be/web/image/6121-75e1ec83/modelstudie.webp"
          title="Drawing sessions @ DeNode"
        >
          <p>Every 2 weeks on Thursday we organize a drawing workshop</p>
          <p className="mt-3">Welcome!</p>
        </Card>
      </div>
    </section>
  );
}

const POSTS = [
  {
    title: "About the hermit deep within us",
    href: "https://www.denode.be/en/blog/artists-7/about-the-hermit-deep-within-us-329",
    tint: "#6b6358",
  },
  {
    title: "Bodies Eros and Thanatos",
    href: "https://www.denode.be/en/blog/artists-7/bodies-eros-and-thanatos-330",
    tint: "#c0397f",
  },
  {
    title: "Nicolas Van Parys",
    href: "https://www.denode.be/en/blog/artists-7/nicolas-van-parys-325",
    tint: "#3f5135",
  },
];

function Blog() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
      <div className="flex items-end justify-between border-b border-[#ececec] pb-3">
        <h2 className="text-lg font-bold tracking-wide text-black">
          articles - news - expo
        </h2>
        <a
          href="https://www.denode.be/en/blog"
          className="text-[15px] font-medium"
          style={{ color: ACCENT }}
        >
          View everything →
        </a>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {POSTS.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className="group relative flex h-72 items-center justify-center overflow-hidden rounded-md p-6 text-center"
            style={{ backgroundColor: p.tint }}
          >
            <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35"></span>
            <span className="relative text-2xl font-extrabold leading-tight text-white">
              {p.title}
            </span>
          </a>
        ))}
      </div>

      <p className="mt-4 text-xs text-[#999]">
        (Dynamische blogfeed — voorlopig gelinkt naar de live posts; later te
        koppelen aan de echte databron met thumbnails.)
      </p>
    </section>
  );
}

function About() {
  return (
    <section className="border-t border-[#ececec] bg-white py-14">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:px-10">
        <div className="text-black">
          <h2 className="text-lg font-bold">Welcome to DeNode Foundation</h2>
          <p className="mt-5 text-[16px] leading-relaxed text-[#333]">
            The DeNode Foundation supports contemporary artistic practices that
            originate from research, process, and transfer.
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-[#333]">
            Through exhibitions, research programs, and international
            collaborations, the foundation provides a platform for artists whose
            work engages in dialogue with materiality, space, the body,
            narrative, and time.
          </p>
          <p className="mt-6 text-[16px] leading-relaxed text-[#333]">
            You can find us in the center of Ghent.
            <br />
            nodenaysteen - Predikherenlei 4 - 9000 Ghent
          </p>
        </div>

        <div className="text-black">
          <p className="font-bold">
            during exhibitions, the nodenaysteen gallery is open:
          </p>
          <p className="mt-4 text-[16px] text-[#333]">
            • from Thursday to Saturday: 2 PM - 6 PM
          </p>
          <p className="mt-2 text-[16px] text-[#333]">• Sunday: 11 AM - 5 PM</p>
          <p className="mt-4 text-[16px] text-[#333]">
            or by appointment:{" "}
            <a
              href="mailto:kristof@denode.be"
              className="font-medium underline"
              style={{ color: ACCENT }}
            >
              kristof@denode.be
            </a>
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="https://www.denode.be/en/website/social/facebook"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full font-bold text-white"
              style={{ backgroundColor: ACCENT }}
            >
              f
            </a>
            <a
              href="https://www.denode.be/en/website/social/instagram"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full font-bold text-white"
              style={{ backgroundColor: ACCENT }}
            >
              ◉
            </a>
          </div>

          <p className="mt-6 text-[15px] text-[#333]">
            Sign up for our newsletter or social media and stay updated on future
            events and exhibitions!
          </p>
          <form
            className="mt-3 flex max-w-md overflow-hidden rounded-sm border border-[#dcdcdc]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="flex-1 px-4 py-2.5 text-[15px] outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2.5 font-semibold text-white"
              style={{ backgroundColor: ACCENT }}
            >
              Register
            </button>
          </form>
          <p className="mt-2 text-xs text-[#999]">
            (Nieuwsbrief-formulier nog te koppelen aan je e-maildienst.)
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#ececec] bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-[#666] md:flex-row md:px-10">
        <p>© 2025 Stichting DeNode</p>
        <div className="flex gap-4">
          <a href="https://www.denode.be/" className="hover:text-black">
            Nederlands
          </a>
          <a href="https://www.denode.be/en" className="hover:text-black">
            English (US)
          </a>
          <a href="https://www.denode.be/fr" className="hover:text-black">
            Français
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    (async () =>
      await initSatellite({
        workers: {
          auth: true,
        },
      }))();
  }, []);

  return (
    <div className="min-h-[100dvh] bg-white text-black">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Blog />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
