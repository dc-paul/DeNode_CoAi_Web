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
    <div className="dn-crumb">
      {trail.map((c, i) => (
        <span key={i}>
          {i > 0 && <span> / </span>}
          {c.page ? (
            <a href={href(lang, c.page)}>{c.label}</a>
          ) : (
            <span style={{ color: "var(--ink)" }}>{c.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}
