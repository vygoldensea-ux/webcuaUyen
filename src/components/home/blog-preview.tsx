import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/site-data";
import { Reveal } from "./reveal";

export function BlogPreview() {
  const featuredPost = blogPosts[0];
  const secondaryPosts = blogPosts.slice(1, 4);

  return (
    <section id="blog" className="section-frame px-4 py-20 lg:px-6 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-[11px] text-[color:var(--earth)]">Blog</p>
          <h2 className="editorial-title mt-4 text-4xl text-[color:var(--foreground)] sm:text-5xl">
            Bài viết mới nhất
          </h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
            Cách trình bày được chuyển sang kiểu editorial để đọc dễ hơn: ít cảm giác card bán
            hàng, nhiều cảm giác bài viết thật, rõ vấn đề và rõ điều khách đang lo.
          </p>
        </Reveal>

        <Reveal className="lg:justify-self-end">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-white px-5 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:border-[color:var(--earth)]/40"
          >
            Xem tất cả bài viết
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <article className="overflow-hidden rounded-[32px] border border-[color:var(--border-soft)] bg-white shadow-[0_20px_60px_rgba(95,68,58,0.06)]">
            <div className="relative aspect-[1.45/1] overflow-hidden bg-[color:var(--surface-soft)]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="p-7">
              <span className="inline-flex rounded-full bg-[color:var(--surface-rose)] px-3 py-1 text-xs font-semibold text-[color:var(--earth)]">
                {featuredPost.category}
              </span>
              <h3 className="mt-5 text-3xl font-semibold leading-tight text-[color:var(--foreground)] sm:text-4xl">
                {featuredPost.title}
              </h3>
              <p className="mt-4 max-w-2xl text-[16px] leading-8 text-[color:var(--muted)]">
                {featuredPost.excerpt}
              </p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--earth)]"
              >
                Đọc bài viết
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-5">
          {secondaryPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.04}>
              <article className="grid gap-5 rounded-[28px] border border-[color:var(--border-soft)] bg-white p-5 shadow-[0_18px_50px_rgba(95,68,58,0.05)] sm:grid-cols-[200px_1fr]">
                <div className="relative aspect-[1.05/1] overflow-hidden rounded-[22px] bg-[color:var(--surface-soft)]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 200px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="inline-flex w-fit rounded-full bg-[color:var(--surface-rose)] px-3 py-1 text-xs font-semibold text-[color:var(--earth)]">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold leading-8 text-[color:var(--foreground)]">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[color:var(--muted)]">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--earth)]"
                  >
                    Đọc bài viết
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
