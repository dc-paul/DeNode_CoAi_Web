import { CONTENT } from "../content";
import type { Lang } from "../lang";

const ACCENT = "#a23b2d";

export function Footer({ lang }: { lang: Lang }) {
  const f = CONTENT[lang].footer;
  return (
    <footer className="mt-8 bg-[#0e0e0c] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-10">
        <div>
          <img
            src="/images/denode-logo-white.png"
            alt="DeNode Foundation"
            className="h-12 w-auto"
          />
          <h2 className="mt-8 text-lg font-bold">{f.welcomeHeading}</h2>
          {f.welcomeBody.map((p, i) => (
            <p key={i} className="mt-4 text-[16px] leading-relaxed text-white/70">
              {p}
            </p>
          ))}
          <p className="mt-6 text-[16px] leading-relaxed text-white/70">
            {f.findUs}
            <br />
            {f.address}
          </p>
        </div>

        <div>
          <p className="font-bold">{f.openHeading}</p>
          {f.openLines.map((l, i) => (
            <p key={i} className="mt-3 text-[16px] text-white/70">
              • {l}
            </p>
          ))}
          <p className="mt-4 text-[16px] text-white/70">{f.byAppointment}</p>

          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61574359620834"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center font-bold text-white"
              style={{ backgroundColor: ACCENT }}
            >
              f
            </a>
            <a
              href="https://www.instagram.com/denode_foundation/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center font-bold text-white"
              style={{ backgroundColor: ACCENT }}
            >
              ◉
            </a>
          </div>

          <p className="mt-6 text-[15px] text-white/70">{f.newsletter}</p>
          <form
            className="mt-3 flex max-w-md overflow-hidden border border-white/25"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder={f.emailPlaceholder}
              className="flex-1 bg-transparent px-4 py-2.5 text-[15px] text-white placeholder:text-white/40 outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2.5 font-semibold text-white"
              style={{ backgroundColor: ACCENT }}
            >
              {f.register}
            </button>
          </form>
          <p className="mt-2 text-xs text-white/40">{f.newsletterNote}</p>
        </div>
      </div>

      <div className="border-t border-white/15 py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-white/50 md:px-10">
          <p>{f.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
