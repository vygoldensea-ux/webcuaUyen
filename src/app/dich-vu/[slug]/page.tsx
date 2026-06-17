import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeforeAfterGrid } from "@/components/site/before-after-grid";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { ContentSections, RelatedLinkGrid } from "@/components/site/content-sections";
import { CtaPanel } from "@/components/site/cta-panel";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import { buildFaqSchema, buildMetadata, buildServiceSchema } from "@/lib/seo";
import {
  beforeAfterItems,
  getGroupServices,
  getRelatedServices,
  serviceGroupsBySlug,
  servicesBySlug,
} from "@/lib/site-data";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return [
    ...Array.from(serviceGroupsBySlug.keys()).map((slug) => ({ slug })),
    ...Array.from(servicesBySlug.keys()).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesBySlug.get(slug);
  if (service) {
    return buildMetadata({
      title: service.seoTitle,
      description: service.metaDescription,
      path: `/dich-vu/${service.slug}`,
    });
  }

  const group = serviceGroupsBySlug.get(slug);
  if (group) {
    return buildMetadata({
      title: `${group.title} | Chòi của Uyn`,
      description: group.description,
      path: `/dich-vu/${group.slug}`,
    });
  }

  return buildMetadata({
    title: "Dịch vụ | Chòi của Uyn",
    description: "Dịch vụ tại Chòi của Uyn",
    path: "/dich-vu",
  });
}

export default async function ServiceOrGroupPage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = servicesBySlug.get(slug);
  if (service) {
    const relatedServices = getRelatedServices(service.relatedServiceSlugs);
    const relevantGallery = beforeAfterItems.filter(
      (item) =>
        item.service.toLowerCase().includes(service.title.split(" ")[0].toLowerCase()) ||
        service.slug.includes(item.category.toLowerCase().replaceAll(" / ", "-").replaceAll(" ", "-")),
    );
    const pageSections = [
      {
        id: "gioi-thieu",
        heading: "Giới thiệu dịch vụ",
        paragraphs: service.overviewParagraphs,
      },
      {
        id: "vi-sao-khach-tim",
        heading: "Vì sao khách thường tìm dịch vụ này?",
        paragraphs: service.reasonsParagraphs,
      },
      {
        id: "ai-phu-hop",
        heading: "Ai phù hợp?",
        paragraphs: service.suitableParagraphs,
        checklist: service.suitableFor.map((item) => `${item.title}: ${item.detail}`),
      },
      {
        id: "ai-can-tu-van",
        heading: "Ai cần tư vấn kỹ trước khi làm?",
        paragraphs: service.consultParagraphs,
        checklist: service.needConsult,
      },
      {
        id: "cach-tu-van",
        heading: "Cách Chòi của Uyn tư vấn dịch vụ này",
        paragraphs: service.advisoryParagraphs,
        checklist: service.advisoryPoints,
      },
      {
        id: "ket-qua",
        heading: "Kết quả mong đợi",
        paragraphs: service.expectedParagraphs,
      },
      {
        id: "cham-soc-sau-lam",
        heading: "Chăm sóc sau dịch vụ",
        paragraphs: service.aftercareParagraphs,
        checklist: service.aftercareChecklist,
      },
      {
        id: "gia-va-yeu-to-anh-huong",
        heading: "Bảng giá và yếu tố ảnh hưởng đến giá",
        paragraphs: service.pricingParagraphs,
        checklist: service.pricingFactors,
      },
      {
        id: "before-after-note",
        heading: "Kết quả thực tế dùng để tham khảo",
        paragraphs: service.beforeAfterParagraphs,
      },
    ] as const;

    return (
      <>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Dịch vụ", href: "/dich-vu" },
            { label: service.title },
          ]}
        />

        <PageHero
          eyebrow={service.groupSlug.replaceAll("-", " ")}
          title={service.heroTitle}
          description={service.heroSubtitle}
          image={service.heroImage}
          imageAlt={service.title}
          primaryCta={{ label: "Đặt lịch tư vấn", href: "/lien-he" }}
          secondaryCta={{ label: "Xem bảng giá", href: "/bang-gia" }}
        />

        <section className="section-frame px-4 py-16 lg:px-6 lg:py-20">
          <ContentSections sections={[...pageSections]} maxWidth="max-w-[820px]" />
        </section>

        <section className="section-frame px-4 py-16 lg:px-6 lg:py-20">
          <SectionHeading eyebrow="Quy trình" title="Quy trình thực hiện" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {service.processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[28px] border border-[color:var(--border-soft)] bg-white px-5 py-6 shadow-[0_18px_40px_rgba(95,68,58,0.05)]"
              >
                <p className="editorial-title text-5xl text-[color:var(--rose)]/90">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-xl font-semibold text-[color:var(--foreground)]">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[color:var(--muted)]">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-frame px-4 py-16 lg:px-6 lg:py-20">
          <SectionHeading
            eyebrow="Khách hàng thực tế"
            title="Kết quả thực tế liên quan"
            description="Ảnh dùng để tham khảo phong cách xử lý và mức độ tự nhiên. Kết quả mỗi người vẫn cần đọc theo cơ địa và nền thật."
          />
          <div className="mt-10">
            <BeforeAfterGrid items={relevantGallery.length > 0 ? relevantGallery : beforeAfterItems.slice(0, 3)} />
          </div>
        </section>

        <section className="section-frame px-4 py-16 lg:px-6 lg:py-20">
          <SectionHeading eyebrow="Bảng giá" title="Mức giá tham khảo" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="rounded-[28px] border border-[color:var(--border-soft)] bg-white px-6 py-6 shadow-[0_18px_40px_rgba(95,68,58,0.05)]">
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--earth)]">Giá từ</p>
              <p className="editorial-title mt-3 text-4xl text-[color:var(--foreground)]">{service.priceFrom}</p>
              <p className="mt-4 text-[15px] leading-7 text-[color:var(--muted)]">{service.priceNote}</p>
            </article>
            <article className="rounded-[28px] border border-[color:var(--border-soft)] bg-[color:var(--surface-rose)]/42 px-6 py-6 shadow-[0_18px_40px_rgba(95,68,58,0.04)]">
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--earth)]">Yếu tố ảnh hưởng</p>
              <ul className="mt-4 grid gap-3 text-[15px] leading-7 text-[color:var(--foreground)]">
                {service.pricingFactors.map((factor) => (
                  <li key={factor} className="rounded-[18px] bg-white/84 px-4 py-3">
                    {factor}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section-frame px-4 py-16 lg:px-6 lg:py-20">
          <SectionHeading eyebrow="FAQ riêng" title={`Giải đáp nhanh về ${service.title}`} />
          <div className="mt-10">
            <FaqAccordion items={service.faqs} />
          </div>
        </section>

        <section className="section-frame px-4 py-16 lg:px-6 lg:py-20">
          <SectionHeading eyebrow="Dịch vụ liên quan" title="Bạn có thể muốn xem thêm" />
          <div className="mt-10">
            <RelatedLinkGrid
              items={relatedServices.map((item) => ({
                slug: item.slug,
                title: item.title,
                shortDescription: item.shortDescription,
              }))}
              basePath="/dich-vu"
            />
          </div>
        </section>

        <CtaPanel
          title="Gửi hình để được tư vấn trước"
          body={service.ctaParagraphs[0]}
          primaryLabel="Nhắn Zalo tư vấn"
          primaryHref="/lien-he"
          secondaryLabel="Xem before / after"
          secondaryHref="/before-after"
        />

        <JsonLd
          data={buildServiceSchema({
            name: service.title,
            description: service.metaDescription,
            url: `https://choicuauyn.vn/dich-vu/${service.slug}`,
          })}
        />
        <JsonLd data={buildFaqSchema(service.faqs)} />
      </>
    );
  }

  const group = serviceGroupsBySlug.get(slug);
  if (group) {
    const servicesInGroup = getGroupServices(group.slug);
    const groupGallery = beforeAfterItems.slice(0, 3);
    const groupSections = [
      {
        id: "gioi-thieu-nhom",
        heading: "Giới thiệu nhóm dịch vụ",
        paragraphs: group.overviewParagraphs,
      },
      {
        id: "ai-phu-hop-nhom",
        heading: "Ai thường phù hợp với nhóm này?",
        paragraphs: group.suitableParagraphs,
        checklist: group.suitableFor.map((item) => `${item.title}: ${item.detail}`),
      },
      {
        id: "quy-trinh-chung",
        heading: "Quy trình chung của nhóm dịch vụ",
        paragraphs: group.processParagraphs,
      },
      {
        id: "gia-rut-gon",
        heading: "Bảng giá rút gọn và cách đọc giá",
        paragraphs: group.pricingParagraphs,
      },
    ] as const;

    return (
      <>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Dịch vụ", href: "/dich-vu" },
            { label: group.menuTitle },
          ]}
        />
        <PageHero
          eyebrow="Nhóm dịch vụ"
          title={group.heroTitle}
          description={group.heroSubtitle}
          image={group.image}
          imageAlt={group.title}
          primaryCta={{ label: "Đặt lịch tư vấn", href: "/lien-he" }}
          secondaryCta={{ label: "Xem bảng giá", href: "/bang-gia" }}
        />

        <section className="section-frame px-4 py-16 lg:px-6 lg:py-20">
          <ContentSections sections={[...groupSections]} maxWidth="max-w-[860px]" />
        </section>

        <section className="section-frame px-4 py-16 lg:px-6 lg:py-20">
          <SectionHeading
            eyebrow="Các dịch vụ con"
            title="Những service page nằm trong nhóm này"
            description="Mỗi dịch vụ con đều có landing page SEO riêng để khách đọc sâu hơn về mức độ phù hợp, quy trình, aftercare và FAQ."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {servicesInGroup.map((item) => (
              <ServiceCard
                key={item.slug}
                title={item.title}
                description={item.shortDescription}
                image={item.heroImage}
                alt={item.title}
                href={`/dich-vu/${item.slug}`}
              />
            ))}
          </div>
        </section>

        <section className="section-frame px-4 py-16 lg:px-6 lg:py-20">
          <SectionHeading eyebrow="Ai phù hợp" title="Nhóm khách thường tìm đến nhóm dịch vụ này" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {group.suitableFor.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-[color:var(--border-soft)] bg-white px-5 py-5 shadow-[0_18px_40px_rgba(95,68,58,0.05)]">
                <h3 className="text-xl font-semibold text-[color:var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[color:var(--muted)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-frame px-4 py-16 lg:px-6 lg:py-20">
          <SectionHeading eyebrow="Quy trình" title="Các bước chung tại Chòi của Uyn" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {group.processSteps.map((step, index) => (
              <article key={step.title} className="rounded-[28px] border border-[color:var(--border-soft)] bg-white px-5 py-6 shadow-[0_18px_40px_rgba(95,68,58,0.05)]">
                <p className="editorial-title text-5xl text-[color:var(--rose)]/90">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-xl font-semibold text-[color:var(--foreground)]">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[color:var(--muted)]">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-frame px-4 py-16 lg:px-6 lg:py-20">
          <SectionHeading eyebrow="Khách hàng thực tế" title="Preview kết quả liên quan" />
          <div className="mt-10">
            <BeforeAfterGrid items={groupGallery} />
          </div>
        </section>

        <section className="section-frame px-4 py-16 lg:px-6 lg:py-20">
          <SectionHeading eyebrow="FAQ" title={`Những câu hỏi thường gặp về ${group.menuTitle}`} />
          <div className="mt-10">
            <FaqAccordion items={group.faqs} />
          </div>
        </section>

        <CtaPanel
          title="Chưa chắc mình nên bắt đầu từ dịch vụ nào?"
          body="Bạn có thể gửi hình môi, mày, da hoặc vùng muốn cải thiện để Uyn nhìn sơ bộ và tư vấn trước. Mục tiêu là để bạn biết đâu là bước nên làm trước, đâu là bước có thể chờ và đâu là hướng vừa đủ hơn cho gương mặt hoặc làn da thật của mình."
          primaryLabel="Nhắn Zalo tư vấn"
          primaryHref="/lien-he"
          secondaryLabel="Xem bảng giá"
          secondaryHref="/bang-gia"
        />

        <JsonLd
          data={buildServiceSchema({
            name: group.title,
            description: group.description,
            url: `https://choicuauyn.vn/dich-vu/${group.slug}`,
          })}
        />
        <JsonLd data={buildFaqSchema(group.faqs)} />
      </>
    );
  }

  notFound();
}
