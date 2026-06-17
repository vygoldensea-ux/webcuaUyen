import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/site-data";
import { Reveal } from "./reveal";

export function BlogPreview() {
  const [featured, ...rest] = blogPosts.slice(0, 4);
  const secondary = rest.slice(0, 3);

  if (!featured) return null;

  return (
    <section id="blog" className="section-white py-16 lg:py-24">
      <div className="section-frame px-4 lg:px-6">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between gap-6 border-b border-[color:var(--border-soft)] pb-5">
          <Reveal>
            <p className="eyebrow mb-2">Kiến thức làm đẹp</p>
            <h2 className="editorial-title text-3xl sm:text-4xl">Bài viết mới nhất</h2>
          </Reveal>
          <Link
            href="/blog"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--earth)] hover:underline"
          >
            Xem tất cả
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Editorial grid: featured left + list right */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Featured article */}
          <Reveal>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[color:var(--surface-soft)]">
                <Image
                  src={featured.image ?? "/images/placeholder-blog-soft.svg"}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="mt-4">
                <span className="inline-flex rounded-full bg-[color:var(--surface-rose)] px-3 py-1 text-xs font-semibold text-[color:var(--earth)]">
                  {featured.category}
                </span>
                <h3 className="mt-3 text-2xl font-bold leading-snug text-[color:var(--foreground)] group-hover:text-[color:var(--earth)] transition-colors">
                  {featured.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)] line-clamp-2">
                  {featured.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--earth)]">
                  Đọc bài viết <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Secondary article list — like a newspaper sidebar */}
          <div className="flex flex-col divide-y divide-[color:var(--border-soft)]">
            {secondary.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08} className="py-5 first:pt-0 last:pb-0">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[color:var(--earth)]">
                    {post.category}
                  </span>
                  <h3 className="mt-1.5 text-[15px] font-bold leading-snug text-[color:var(--foreground)] group-hover:text-[color:var(--earth)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-[color:var(--muted)] line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--earth)]">
                    Đọc tiếp <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </Reveal>
            ))}

            {/* Bottom CTA */}
            <div className="pt-5">
              <Link
                href="/blog"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[14px] border border-[color:var(--border-soft)] bg-[color:var(--surface-alt)] py-3 text-sm font-semibold text-[color:var(--foreground)] hover:border-[color:var(--earth)] hover:text-[color:var(--earth)] transition-colors"
              >
                Xem tất cả bài viết
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
