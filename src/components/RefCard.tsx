// Small horizontal reference card used for cross-links (article ↔ expo ↔ artist
// ↔ event): thumbnail + title + optional subtitle (author, role, or date).

export function RefCard({
  href,
  title,
  subtitle,
  image,
  tint = "#ececec",
}: {
  href: string;
  title: string;
  subtitle?: string;
  image?: string;
  tint?: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 border border-[#d8d2c6] bg-white p-3 transition-colors hover:border-[#a23b2d]"
    >
      <div
        className="h-16 w-16 flex-shrink-0 overflow-hidden"
        style={{ backgroundColor: tint }}
      >
        {image && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="min-w-0">
        <p className="font-semibold leading-snug text-black group-hover:text-[#a23b2d]">
          {title}
        </p>
        {subtitle && (
          <p className="mt-0.5 text-[13px] text-[#8a8477]">{subtitle}</p>
        )}
      </div>
    </a>
  );
}
