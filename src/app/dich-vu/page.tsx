import type { Metadata } from "next";
import { CtaPanel } from "@/components/site/cta-panel";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { buildFaqSchema, buildMetadata } from "@/lib/seo";
import { servicesGroupedForMenu, serviceHubFaqs } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Dịch vụ tại Chòi của Uyn | Mini Spa & Aesthetics Vũng Tàu",
  description:
    "Khám phá toàn bộ dịch vụ tại Chòi của Uyn: phun xăm, filler, botox, meso, chăm sóc da và làm gọn vùng nhỏ tại Vũng Tàu.",
  path: "/dich-vu",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Service hub"
        title="Dịch vụ tại Chòi của Uyn"
        description="Từ phun xăm, chăm sóc da đến filler, botox và làm gọn vùng nhỏ — mỗi dịch vụ đều được tư vấn theo tình trạng thật, không làm đại trà."
        image="/images/placeholder-clinic-soft.svg"
        imageAlt="Hình ảnh khách nữ trong không gian sáng sạch cho trang dịch vụ tổng"
        primaryCta={{ label: "Đặt lịch tư vấn", href: "/lien-he" }}
        secondaryCta={{ label: "Xem bảng giá", href: "/bang-gia" }}
      />

      <section className="section-frame px-4 py-16 lg:px-6 lg:py-20">
        <SectionHeading
          eyebrow="Service groups"
          title="5 nhóm dịch vụ lớn"
          description="Mình rút gọn phần này về dạng card dễ bấm hơn để khách nhìn nhanh nhóm dịch vụ rồi chọn landing page chi tiết."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {servicesGroupedForMenu.map((group) => (
            <article key={group.slug} className="rounded-[30px] border border-[color:var(--border-soft)] bg-white px-6 py-6 shadow-[0_18px_50px_rgba(95,68,58,0.05)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow text-[11px] text-[color:var(--earth)]">{group.menuTitle}</p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-[color:var(--foreground)]">
                    {group.menuTitle}
                  </h2>
                  <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[color:var(--muted)]">
                    {group.description}
                  </p>
                </div>
                <a
                  href={`/dich-vu/${group.slug}`}
                  className="hidden rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-rose)]/55 px-4 py-2 text-sm font-medium text-[color:var(--foreground)] lg:inline-flex"
                >
                  Xem nhóm
                </a>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {group.services.map((service) => (
                  <a
                    key={service.slug}
                    href={`/dich-vu/${service.slug}`}
                    className="rounded-[20px] border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)]/55 px-4 py-4 text-[15px] text-[color:var(--foreground)] transition hover:border-[color:var(--earth)]/28 hover:bg-white"
                  >
                    <span className="font-semibold">{service.title}</span>
                  </a>
                ))}
              </div>

              <a
                href={`/dich-vu/${group.slug}`}
                className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[color:var(--cta)] px-5 text-sm font-semibold text-white hover:bg-[color:var(--cta-hover)] lg:hidden"
              >
                Xem nhóm dịch vụ
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame px-4 py-16 lg:px-6 lg:py-20">
        <SectionHeading
          eyebrow="Cách chọn"
          title="Nên đọc trang dịch vụ này như thế nào để chọn đúng hơn?"
          description="Nếu bạn đang thấy có quá nhiều lựa chọn, hãy bắt đầu từ nhóm vấn đề thật của mình thay vì bắt đầu từ tên dịch vụ nghe quen tai nhất."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <article className="rounded-[28px] border border-[color:var(--border-soft)] bg-white px-6 py-6 text-[16px] leading-8 text-[color:var(--muted)] shadow-[0_18px_40px_rgba(95,68,58,0.05)]">
            <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">1. Bắt đầu từ tình trạng thật</h2>
            <p className="mt-4">
              Nếu môi đang nhợt, bạn có thể bắt đầu từ nhóm phun xăm. Nếu gương mặt đang khiến
              bạn thấy thiếu cân đối ở một điểm nhỏ, nhóm filler hoặc botox có thể là nơi nên đọc
              trước. Nếu da xỉn, thiếu ẩm hoặc hay lên mụn, nhóm chăm sóc da và meso sẽ dễ sát với
              nhu cầu hơn. Cách đi từ tình trạng thật giúp bạn không bị hút vào những dịch vụ nổi
              trên mạng nhưng lại không liên quan nhiều đến điều mình đang cần nhất.
            </p>
          </article>
          <article className="rounded-[28px] border border-[color:var(--border-soft)] bg-[color:var(--surface-rose)]/45 px-6 py-6 text-[16px] leading-8 text-[color:var(--muted)] shadow-[0_18px_40px_rgba(95,68,58,0.04)]">
            <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">2. Đọc kỹ phần “ai cần tư vấn trước”</h2>
            <p className="mt-4">
              Đây là phần rất quan trọng trên website này. Nhiều khách thường chỉ đọc đoạn mô tả
              đẹp và bảng giá, nhưng lại bỏ qua chuyện dịch vụ đó có thật sự phù hợp với nền hiện
              tại hay không. Uyn cố tình viết rõ phần cần tư vấn trước để khách hiểu rằng làm đẹp
              không nên là quyết định vội. Khi biết mình đang ở trường hợp nào, bạn sẽ bớt lo hơn
              và cũng đỡ rơi vào cảm giác làm xong mới thấy mình chưa hiểu hết dịch vụ.
            </p>
          </article>
          <article className="rounded-[28px] border border-[color:var(--border-soft)] bg-white px-6 py-6 text-[16px] leading-8 text-[color:var(--muted)] shadow-[0_18px_40px_rgba(95,68,58,0.05)]">
            <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">3. Dùng landing page con để đọc sâu hơn</h2>
            <p className="mt-4">
              Mỗi dịch vụ con đều có landing page SEO riêng với quy trình, aftercare, FAQ và phần
              before / after liên quan. Nếu bạn đã nhìn ra nhu cầu gần đúng của mình, hãy bấm vào
              service page cụ thể để đọc sâu hơn. Cấu trúc này được làm ra để khách tại Vũng Tàu có
              thể tìm hiểu đủ kỹ trước khi nhắn tư vấn, từ đó buổi trao đổi thật sẽ dễ đi thẳng vào
              tình trạng của bạn hơn thay vì mất thời gian đoán xem nên bắt đầu từ đâu.
            </p>
          </article>
        </div>
      </section>

      <CtaPanel
        title="Không biết chọn dịch vụ nào?"
        body="Bạn không cần tự đoán mình nên làm gì. Có thể gửi hình môi, mày, da hoặc vùng muốn cải thiện để Uyn tư vấn trước, giải thích điều gì nên làm trước, điều gì chưa nên làm và đâu là hướng vừa đủ hơn cho bạn."
        primaryLabel="Nhắn Zalo tư vấn"
        primaryHref="/lien-he"
        secondaryLabel="Xem trước gallery"
        secondaryHref="/before-after"
      />

      <section className="section-frame px-4 py-16 lg:px-6 lg:py-20">
        <SectionHeading
          eyebrow="FAQ dịch vụ"
          title="Những câu hỏi khách thường hỏi trước khi đặt lịch"
          description="Những thắc mắc này xuất hiện ở gần như mọi nhóm dịch vụ, nên Chòi của Uyn muốn trả lời trước để bạn đỡ phải đoán một mình."
        />
        <div className="mt-10">
          <FaqAccordion items={serviceHubFaqs} />
        </div>
      </section>

      <JsonLd data={buildFaqSchema(serviceHubFaqs)} />
    </>
  );
}
