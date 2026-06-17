import Image from "next/image";
import type { BeforeAfterItem } from "@/lib/site-data";

export function BeforeAfterGrid({ items }: { items: BeforeAfterItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.slug}
          className="overflow-hidden rounded-[28px] border border-[color:var(--border-soft)] bg-white shadow-[0_18px_50px_rgba(95,68,58,0.05)]"
        >
          <div className="grid grid-cols-2">
            <div className="relative aspect-[0.88/1] overflow-hidden">
              <Image src={item.beforeImage} alt={`Ảnh trước của ${item.title}`} fill className="object-cover" sizes="50vw" />
              <span className="absolute left-3 top-3 rounded-full bg-white/84 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--earth)]">
                Before
              </span>
            </div>
            <div className="relative aspect-[0.88/1] overflow-hidden">
              <Image src={item.afterImage} alt={`Ảnh sau của ${item.title}`} fill className="object-cover" sizes="50vw" />
              <span className="absolute left-3 top-3 rounded-full bg-white/84 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--earth)]">
                After
              </span>
            </div>
          </div>
          <div className="p-5">
            <p className="text-sm text-[color:var(--earth)]">{item.service}</p>
            <h3 className="mt-2 text-xl font-semibold text-[color:var(--foreground)]">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.description}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">{item.note}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
