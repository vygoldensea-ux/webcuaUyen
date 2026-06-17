import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/site/blog-card";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaPanel } from "@/components/site/cta-panel";
import { ContentSections } from "@/components/site/content-sections";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { JsonLd } from "@/components/site/json-ld";
import { buildArticleSchema, buildFaqSchema, buildMetadata, estimateReadingTime } from "@/lib/seo";
import { blogPosts, blogPostsBySlug, getRelatedPosts } from "@/lib/site-data";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsBySlug.get(slug);
  if (!post) {
    return buildMetadata({
      title: "Blog | Chòi của Uyn",
      description: "Blog làm đẹp dễ hiểu",
      path: "/blog",
    });
  }
  return buildMetadata({
    title: `${post.title} | Chòi của Uyn`,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogPostsBySlug.get(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post.relatedPosts);
  const readingTime = estimateReadingTime([
    ...post.introParagraphs,
    ...post.sections.flatMap((section) => section.paragraphs),
    ...post.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ]);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <section className="section-frame px-4 pt-8 pb-8 lg:px-6 lg:pt-12">
        <div className="mx-auto max-w-[820px]">
          <span className="inline-flex rounded-full bg-[color:var(--surface-rose)] px-3 py-1 text-xs font-semibold text-[color:var(--earth)]">
            {post.category}
          </span>
          <h1 className="editorial-title mt-5 text-balance text-[2.7rem] leading-[1.02] text-[color:var(--foreground)] sm:text-[4rem]">
            {post.title}
          </h1>
          <p className="mt-5 text-xl leading-8 text-[color:var(--muted)]">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-[color:var(--muted)]">
            <span>Tác giả: Chòi của Uyn</span>
            <span>{readingTime} phút đọc</span>
          </div>
        </div>
      </section>

      <section className="section-frame px-4 pb-10 lg:px-6 lg:pb-14">
        <div className="mx-auto max-w-[820px] overflow-hidden rounded-[30px] border border-[color:var(--border-soft)] bg-white">
          <div className="relative aspect-[16/9] w-full">
            <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 820px) 100vw, 820px" />
          </div>
        </div>
      </section>

      <section className="section-frame px-4 py-6 lg:px-6">
        <div className="mx-auto max-w-[820px] rounded-[28px] border border-[color:var(--border-soft)] bg-white px-6 py-6 shadow-[0_18px_40px_rgba(95,68,58,0.05)]">
          <h2 className="text-lg font-semibold text-[color:var(--foreground)]">Mục lục</h2>
          <ol className="mt-4 grid gap-3 text-[15px] text-[color:var(--muted)]">
            {post.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="hover:text-[color:var(--foreground)]">
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-frame px-4 py-10 lg:px-6 lg:py-12">
        <div className="mx-auto max-w-[820px] rounded-[28px] border border-[color:var(--border-soft)] bg-white px-6 py-7 text-[17px] leading-8 text-[color:var(--muted)] shadow-[0_18px_40px_rgba(95,68,58,0.04)]">
          {post.introParagraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="section-frame px-4 py-10 lg:px-6 lg:py-12">
        <ContentSections sections={post.sections} maxWidth="max-w-[820px]" />
      </section>

      <CtaPanel
        title="Muốn được tư vấn theo tình trạng thật?"
        body="Bài viết giúp bạn hiểu vấn đề rõ hơn, nhưng tình trạng thực tế vẫn nên được nhìn trực tiếp hoặc qua hình ảnh rõ để tư vấn sát hơn. Nếu bạn muốn hỏi thêm, có thể nhắn trước để Uyn xem sơ bộ."
        primaryLabel="Nhắn tư vấn"
        primaryHref="/lien-he"
        secondaryLabel="Xem dịch vụ"
        secondaryHref="/dich-vu"
      />

      <section className="section-frame px-4 py-10 lg:px-6 lg:py-14">
        <div className="mx-auto max-w-[820px] rounded-[26px] border border-[rgba(155,107,90,0.18)] bg-[color:var(--surface-rose)]/42 px-6 py-5 text-[15px] leading-7 text-[color:var(--earth)]">
          Bài viết mang tính tham khảo, tình trạng thực tế nên được tư vấn trực tiếp trước khi quyết định làm dịch vụ.
        </div>
      </section>

      <section className="section-frame px-4 py-10 lg:px-6 lg:py-14">
        <div className="mx-auto max-w-[820px]">
          <h2 className="editorial-title text-4xl text-[color:var(--foreground)]">FAQ cuối bài</h2>
          <div className="mt-8">
            <FaqAccordion items={post.faqs} />
          </div>
        </div>
      </section>

      <section className="section-frame px-4 py-10 lg:px-6 lg:py-14">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="editorial-title text-4xl text-[color:var(--foreground)]">Bài viết liên quan</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <BlogCard key={related.slug} post={related} />
            ))}
          </div>
        </div>
      </section>

      <JsonLd
        data={buildArticleSchema({
          title: post.title,
          description: post.metaDescription,
          url: `https://choicuauyn.vn/blog/${post.slug}`,
          image: `https://choicuauyn.vn${post.image}`,
        })}
      />
      <JsonLd data={buildFaqSchema(post.faqs)} />
    </>
  );
}
