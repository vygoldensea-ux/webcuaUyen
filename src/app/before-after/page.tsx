import type { Metadata } from "next";
import Image from "next/image";
import { CtaPanel } from "@/components/site/cta-panel";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/seo";
import { beforeAfterItems } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Khách hàng thực tế | Chòi của Uyn",
  description:
    "Gallery kết quả thực tế tại Chòi của Uyn với các nhóm dịch vụ phun môi, chân mày, filler, botox và chăm sóc da.",
  path: "/before-after",
});

export default function BeforeAfterPage() {
  const categories = ["Tất cả", "Phun môi", "Chân mày", "Filler", "Botox", "Meso / Da", "Body"];

  return (
    <>
      <PageHero
        eyebrow="Khách hàng thực tế"
        title="Khách hàng thực tế"
        description="Chòi của Uyn ưu tiên sự tự nhiên, cân đối và phù hợp với từng gương mặt."
        image="/images/placeholder-after.svg"
        imageAlt="Ảnh before after cho gallery"
        primaryCta={{ label: "Gửi tình trạng để tư vấn", href: "/lien-he" }}
        secondaryCta={{ label: "Xem dịch vụ", href: "/dich-vu" }}
      />

      <section className="section-frame px-4 py-10 lg:px-6 lg:py-14">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-[color:var(--border-soft)] bg-white px-4 py-2 text-sm text-[color:var(--earth)]"
            >
              {category}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {beforeAfterItems.map((item) => (
            <article key={item.slug} className="overflow-hidden rounded-[28px] border border-[color:var(--border-soft)] bg-white shadow-[0_18px_50px_rgba(95,68,58,0.05)]">
              <div className="grid grid-cols-2">
                <div className="relative aspect-[4/5]">
                  <Image src={item.beforeImage} alt={`Ảnh trước ${item.title}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 20vw" />
                </div>
                <div className="relative aspect-[4/5]">
                  <Image src={item.afterImage} alt={`Ảnh sau ${item.title}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 20vw" />
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-[color:var(--earth)]">{item.service}</p>
                <h2 className="mt-2 text-xl font-semibold text-[color:var(--foreground)]">{item.title}</h2>
                <p className="mt-3 text-[15px] leading-7 text-[color:var(--muted)]">{item.description}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaPanel
        title="Gửi tình trạng của bạn để được tư vấn"
        body="Ảnh before / after giúp bạn hình dung phong cách xử lý, nhưng quyết định cuối vẫn nên dựa trên nền thật của chính bạn. Gửi hình để Uyn nhìn sơ bộ trước nếu bạn còn phân vân."
        primaryLabel="Nhắn tư vấn"
        primaryHref="/lien-he"
        secondaryLabel="Xem bảng giá"
        secondaryHref="/bang-gia"
      />
    </>
  );
}
