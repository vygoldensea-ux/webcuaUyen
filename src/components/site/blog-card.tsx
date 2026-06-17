import Image from "next/image";
import Link from "next/link";
import type { BlogPostRecord } from "@/lib/site-data";

export function BlogCard({ post }: { post: BlogPostRecord }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[color:var(--border-soft)] bg-white shadow-[0_18px_50px_rgba(95,68,58,0.05)]">
      <div className="relative aspect-[1.08/1] overflow-hidden bg-[color:var(--surface-soft)]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-6">
        <span className="inline-flex rounded-full bg-[color:var(--surface-rose)] px-3 py-1 text-xs font-semibold text-[color:var(--earth)]">
          {post.category}
        </span>
        <h3 className="mt-4 text-2xl font-semibold leading-9 text-[color:var(--foreground)]">{post.title}</h3>
        <p className="mt-3 text-[15px] leading-7 text-[color:var(--muted)]">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex text-sm font-semibold text-[color:var(--earth)]">
          Đọc bài viết
        </Link>
      </div>
    </article>
  );
}
