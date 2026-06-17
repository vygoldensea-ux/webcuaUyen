import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="section-frame px-4 pt-6 lg:px-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[color:var(--muted)]">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-[color:var(--foreground)]">
                {item.label}
              </Link>
            ) : (
              <span className="text-[color:var(--foreground)]">{item.label}</span>
            )}
            {index < items.length - 1 ? <span>/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
