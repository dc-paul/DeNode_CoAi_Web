import { href, type Lang } from "../lang";

// Detail-page breadcrumb (.dn-crumb): uppercase, muted. Last item = current.
export function Breadcrumb({
  lang,
  trail,
}: {
  lang: Lang;
  trail: { label: string; page?: string }[];
}) {
  return (
    <nav className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-[#8a8477]">
      {trail.map((c, i) => (
        <span key={i}>
          {i > 0 && <span className="mx-2">/</span>}
          {c.page ? (
            <a href={href(lang, c.page)} className="hover:text-[#a23b2d]">
              {c.label}
            </a>
          ) : (
            <span className="text-[#0e0e0c]">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
