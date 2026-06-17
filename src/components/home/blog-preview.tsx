import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/site-data";
import { Reveal } from "./reveal";

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);
  if (!posts.length) return null;

  return (
    <section id="blog" className="bg-white py-16 lg:py-24">
      <div className="section-frame px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <Reveal>
            <p className="eyebrow">Kiến thức làm đẹp</p>
            <h2 className="editorial-title mt-3 text-3xl sm:text-4xl">Bài viết mới nhất</h2>
          </Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--earth)] hover:underline shrink-0"
          >
            Xem tất cả
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 3-column equal card grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.07} className="flex">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex w-full flex-col overflow-hidden rounded-[20px] border border-[color:var(--border-soft)] bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Image — fixed 16/9 aspect */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[color:var(--surface-soft)] shrink-0">
                  <Image
                    src={post.image ?? "/images/placeholder-blog-soft.svg"}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <span className="inline-flex self-start rounded-full bg-[color:var(--surface-rose)] px-3 py-1 text-[11px] font-semibold text-[color:var(--earth)]">
                    {post.category}
                  </span>
                  <h3 className="mt-3 flex-1 text-[15px] font-bold leading-snug text-[color:var(--foreground)] group-hover:text-[color:var(--earth)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-[color:var(--muted)] line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[color:var(--earth)]">
                    Đọc tiếp <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
