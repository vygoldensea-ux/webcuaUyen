import type { Metadata } from "next";
import { CtaPanel } from "@/components/site/cta-panel";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { buildMetadata } from "@/lib/seo";
import { pricingItems } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Bảng giá dịch vụ | Chòi của Uyn",
  description:
    "Bảng giá tham khảo cho phun xăm, filler, botox, meso, chăm sóc da và làm gọn vùng nhỏ tại Chòi của Uyn.",
  path: "/bang-gia",
});

const categories = ["Phun xăm thẩm mỹ", "Filler / Botox", "Meso / Chăm sóc da", "Body / Làm gọn vùng nhỏ", "Combo"];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Bảng giá dịch vụ"
        description="Giá có thể thay đổi theo tình trạng nền, lượng sản phẩm sử dụng hoặc liệu trình phù hợp. Bạn có thể gửi hình để được tư vấn trước."
        image="/images/placeholder-service-soft.svg"
        imageAlt="Ảnh beauty cho trang bảng giá"
        primaryCta={{ label: "Nhắn tư vấn", href: "/lien-he" }}
        secondaryCta={{ label: "Xem dịch vụ", href: "/dich-vu" }}
      />

      {categories.map((category) => (
        <section key={category} className="section-frame px-4 py-10 lg:px-6 lg:py-14">
          <SectionHeading title={category} />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pricingItems
              .filter((item) => item.category === category)
              .map((item) => (
                <article key={item.serviceName} className="rounded-[26px] border border-[color:var(--border-soft)] bg-white px-5 py-5 shadow-[0_18px_40px_rgba(95,68,58,0.05)]">
                  <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">{item.serviceName}</h2>
                  <p className="editorial-title mt-3 text-3xl text-[color:var(--earth)]">{item.priceFrom}</p>
                  <p className="mt-3 text-[15px] leading-7 text-[color:var(--muted)]">{item.description}</p>
                  <a
                    href={item.slug ? `/dich-vu/${item.slug}` : "/lien-he"}
                    className="mt-5 inline-flex text-sm font-semibold text-[color:var(--earth)]"
                  >
                    Tư vấn
                  </a>
                </article>
              ))}
          </div>
        </section>
      ))}

      <section className="section-frame px-4 py-10 lg:px-6 lg:py-14">
        <div className="rounded-[28px] border border-[color:var(--border-soft)] bg-[color:var(--surface-rose)]/48 px-6 py-6 text-[15px] leading-7 text-[color:var(--muted)]">
          Bảng giá chỉ mang tính tham khảo. Giá chính xác phụ thuộc vào tình trạng thực tế và
          phương án được tư vấn.
        </div>
      </section>

      <CtaPanel
        title="Muốn biết giá sát với tình trạng thật?"
        body="Gửi hình hoặc mô tả nhanh điều bạn đang muốn cải thiện để Uyn tư vấn trước. Khi biết đúng nền thật, việc đọc bảng giá sẽ dễ và sát hơn rất nhiều."
        primaryLabel="Nhắn tư vấn"
        primaryHref="/lien-he"
        secondaryLabel="Xem before / after"
        secondaryHref="/before-after"
      />
    </>
  );
}
