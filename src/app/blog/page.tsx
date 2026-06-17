import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { buildMetadata } from "@/lib/seo";
import { blogCategories, blogPosts } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Blog làm đẹp dễ hiểu | Chòi của Uyn",
  description:
    "Blog về phun môi, chân mày, filler, botox, meso và chăm sóc da với ngôn ngữ dễ hiểu và thực tế.",
  path: "/blog",
});

export default function BlogListingPage() {
  const featuredPost = blogPosts[0];
  const sidePosts = blogPosts.slice(1, 4);
  const archivePosts = blogPosts.slice(4);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Blog làm đẹp dễ hiểu"
        description="Kiến thức trước và sau khi làm đẹp, giúp bạn biết điều gì bình thường, điều gì nên kiểm tra và chăm sóc thế nào cho đúng."
        image="/images/placeholder-blog-soft.svg"
        imageAlt="Hình ảnh blog beauty cho trang listing"
      />

      <section className="section-frame px-4 py-10 lg:px-6 lg:py-14">
        <div className="flex flex-wrap gap-3">
          {blogCategories.map((category) => (
            <span key={category} className="rounded-full border border-[color:var(--border-soft)] bg-white px-4 py-2 text-sm text-[color:var(--earth)]">
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="section-frame px-4 py-10 lg:px-6 lg:py-14">
        <SectionHeading
          title="Bài viết nổi bật"
          description="Bố cục được chuyển sang dạng editorial: một bài nổi bật dẫn nhịp, bên cạnh là các bài mới hơn để người đọc quét nhanh và chọn đúng chủ đề mình đang cần."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="overflow-hidden rounded-[32px] border border-[color:var(--border-soft)] bg-white shadow-[0_20px_60px_rgba(95,68,58,0.06)]">
            <div className="relative aspect-[1.55/1] overflow-hidden bg-[color:var(--surface-soft)]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover"
              />
            </div>
            <div className="p-7">
              <span className="inline-flex rounded-full bg-[color:var(--surface-rose)] px-3 py-1 text-xs font-semibold text-[color:var(--earth)]">
                {featuredPost.category}
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-[color:var(--foreground)] sm:text-4xl">
                {featuredPost.title}
              </h2>
              <p className="mt-4 max-w-2xl text-[16px] leading-8 text-[color:var(--muted)]">
                {featuredPost.excerpt}
              </p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--earth)]"
              >
                Đọc bài viết
              </Link>
            </div>
          </article>

          <div className="grid gap-5">
            {sidePosts.map((post) => (
              <article key={post.slug} className="grid gap-5 rounded-[28px] border border-[color:var(--border-soft)] bg-white p-5 shadow-[0_18px_50px_rgba(95,68,58,0.05)] sm:grid-cols-[190px_1fr]">
                <div className="relative aspect-[1.04/1] overflow-hidden rounded-[22px] bg-[color:var(--surface-soft)]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 190px"
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
                  <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex text-sm font-semibold text-[color:var(--earth)]">
                    Đọc bài viết
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame px-4 py-10 lg:px-6 lg:py-14">
        <SectionHeading
          title="Thư viện bài viết"
          description="Những bài còn lại được trình bày theo dạng list-card để người đọc quét tiêu đề và trích đoạn nhanh hơn."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {archivePosts.map((post) => (
            <article key={post.slug} className="rounded-[28px] border border-[color:var(--border-soft)] bg-white p-6 shadow-[0_18px_50px_rgba(95,68,58,0.05)]">
              <span className="inline-flex rounded-full bg-[color:var(--surface-rose)] px-3 py-1 text-xs font-semibold text-[color:var(--earth)]">
                {post.category}
              </span>
              <h3 className="mt-4 text-2xl font-semibold leading-8 text-[color:var(--foreground)]">
                {post.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[color:var(--muted)]">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex text-sm font-semibold text-[color:var(--earth)]">
                Đọc bài viết
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
