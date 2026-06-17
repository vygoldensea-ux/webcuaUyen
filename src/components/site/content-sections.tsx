import Link from "next/link";
import type { ArticleSection } from "@/lib/site-data";

export function ContentSections({
  sections,
  maxWidth = "max-w-4xl",
}: {
  sections: ArticleSection[];
  maxWidth?: string;
}) {
  return (
    <div className={`grid gap-8 ${maxWidth}`}>
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`rounded-[28px] border border-[color:var(--border-soft)] px-6 py-7 shadow-[0_18px_40px_rgba(95,68,58,0.04)] ${
            index % 2 === 0 ? "bg-white" : "bg-[color:var(--surface-rose)]/42"
          }`}
        >
          <h2 className="editorial-title text-3xl leading-tight text-[color:var(--foreground)] sm:text-4xl">
            {section.heading}
          </h2>
          <div className="mt-5 grid gap-4 text-[17px] leading-8 text-[color:var(--muted)]">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {section.checklist ? (
            <ul className="mt-6 grid gap-3 text-[16px] leading-7 text-[color:var(--foreground)]">
              {section.checklist.map((item) => (
                <li key={item} className="rounded-[20px] border border-[color:var(--border-soft)] bg-white px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          {section.note ? (
            <div className="mt-6 rounded-[22px] border border-[rgba(155,107,90,0.18)] bg-white/90 px-5 py-4 text-[15px] leading-7 text-[color:var(--earth)]">
              {section.note}
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
}

export function RelatedLinkGrid({
  items,
  basePath,
}: {
  items: { slug: string; title: string; shortDescription?: string }[];
  basePath: string;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`${basePath}/${item.slug}`}
          className="rounded-[24px] border border-[color:var(--border-soft)] bg-white px-5 py-5 shadow-[0_18px_40px_rgba(95,68,58,0.04)] hover:-translate-y-0.5"
        >
          <h3 className="text-xl font-semibold text-[color:var(--foreground)]">{item.title}</h3>
          {item.shortDescription ? (
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.shortDescription}</p>
          ) : null}
          <p className="mt-5 text-sm font-semibold text-[color:var(--earth)]">Xem chi tiết</p>
        </Link>
      ))}
    </div>
  );
}
