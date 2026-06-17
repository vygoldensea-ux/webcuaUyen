"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { blogPosts } from "@/lib/site-data";
import { Reveal } from "./reveal";

gsap.registerPlugin(ScrollTrigger);

export function BlogPreview() {
  const gridRef = useRef<HTMLDivElement>(null);
  const posts = blogPosts.slice(0, 3);

  useGSAP(
    () => {
      gsap.from(".blog-card", {
        opacity: 0,
        y: 40,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: gridRef.current, start: "top 82%" },
      });
    },
    { scope: gridRef },
  );

  return (
    <section id="blog" className="section-frame px-4 py-20 lg:px-6 lg:py-28">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-[11px] text-[color:var(--earth)]">Kiến thức làm đẹp</p>
          <h2 className="editorial-title mt-4 text-4xl text-[color:var(--foreground)] sm:text-5xl">
            Bài viết mới nhất
          </h2>
        </Reveal>
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-white px-5 py-3 text-sm font-semibold text-[color:var(--foreground)] hover:border-[color:var(--earth)]/40"
          >
            Xem tất cả
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <div ref={gridRef} className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="blog-card flex flex-col overflow-hidden rounded-[28px] border border-[color:var(--border-soft)] bg-white shadow-[0_18px_50px_rgba(95,68,58,0.05)]"
          >
            <div className="relative aspect-[1.35/1] overflow-hidden bg-[color:var(--surface-soft)]">
              <Image
                src={post.image ?? "/images/placeholder-blog-soft.svg"}
                alt={post.metaDescription ?? post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="inline-flex w-fit rounded-full bg-[color:var(--surface-rose)] px-3 py-1 text-xs font-semibold text-[color:var(--earth)]">
                {post.category}
              </span>
              <h3 className="mt-4 flex-1 text-xl font-semibold leading-7 text-[color:var(--foreground)]">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)] line-clamp-2">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--earth)]"
              >
                Đọc bài viết
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
