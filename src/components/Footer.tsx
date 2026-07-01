import { CONTENT } from "../content";
import type { Lang } from "../lang";

const ACCENT = "#c0392b";

export function Footer({ lang }: { lang: Lang }) {
  const f = CONTENT[lang].footer;
  return (
    <>
      <section className="border-t border-[#ececec] bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:px-10">
          <div className="text-black">
            <h2 className="text-lg font-bold">{f.welcomeHeading}</h2>
            {f.welcomeBody.map((p, i) => (
              <p key={i} className="mt-4 text-[16px] leading-relaxed text-[#333]">
                {p}
              </p>
            ))}
            <p className="mt-6 text-[16px] leading-relaxed text-[#333]">
              {f.findUs}
              <br />
              {f.address}
            </p>
          </div>

          <div className="text-black">
            <p className="font-bold">{f.openHeading}</p>
            {f.openLines.map((l, i) => (
              <p key={i} className="mt-3 text-[16px] text-[#333]">
                • {l}
              </p>
            ))}
            <p className="mt-4 text-[16px] text-[#333]">{f.byAppointment}</p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61574359620834"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full font-bold text-white"
                style={{ backgroundColor: ACCENT }}
              >
                f
              </a>
              <a
                href="https://www.instagram.com/denode_foundation/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full font-bold text-white"
                style={{ backgroundColor: ACCENT }}
              >
                ◉
              </a>
            </div>

            <p className="mt-6 text-[15px] text-[#333]">{f.newsletter}</p>
            <form
              className="mt-3 flex max-w-md overflow-hidden rounded-sm border border-[#dcdcdc]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder={f.emailPlaceholder}
                className="flex-1 px-4 py-2.5 text-[15px] outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2.5 font-semibold text-white"
                style={{ backgroundColor: ACCENT }}
              >
                {f.register}
              </button>
            </form>
            <p className="mt-2 text-xs text-[#999]">{f.newsletterNote}</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#ececec] bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-[#666] md:px-10">
          <p>{f.copyright}</p>
        </div>
      </footer>
    </>
  );
}
