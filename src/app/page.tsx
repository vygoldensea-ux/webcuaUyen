import { BeforeAfter } from "@/components/home/before-after";
import { BlogPreview } from "@/components/home/blog-preview";
import { BrandStory } from "@/components/home/brand-story";
import { FAQ } from "@/components/home/faq";
import { FinalCTA } from "@/components/home/final-cta";
import { HeroPromoSlider } from "@/components/home/hero-promo-slider";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { PromotionStrip } from "@/components/home/promotion-strip";
import { QuickBookBand } from "@/components/home/quick-book-band";
import { ServiceGrid } from "@/components/home/service-grid";
import { TrustStats } from "@/components/home/trust-stats";
import { JsonLd } from "@/components/site/json-ld";
import { faqs } from "@/data/home";
import { buildFaqSchema } from "@/lib/seo";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Chòi của Uyn – Mini Spa & Aesthetics",
  image: "https://choicuauyn.vn/images/brand-story.jpg",
  description:
    "Mini spa tại Vũng Tàu chuyên phun môi, phun mày, filler, botox, meso và chăm sóc da theo hướng tự nhiên. Tư vấn kỹ trước khi làm, không ép dịch vụ.",
  url: "https://choicuauyn.vn",
  telephone: "+840900000000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vũng Tàu",
    addressLocality: "Vũng Tàu",
    addressRegion: "Bà Rịa – Vũng Tàu",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.346,
    longitude: 107.0843,
  },
  areaServed: { "@type": "City", name: "Vũng Tàu" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
  sameAs: [
    "https://facebook.com/choicuauyn",
    "https://instagram.com/choicuauyn",
    "https://tiktok.com/@choicuauyn",
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={buildFaqSchema(faqs)} />

      <HeroPromoSlider />
      <QuickBookBand />
      <ServiceGrid />
      <PromotionStrip />
      <BrandStory />
      <TrustStats />
      <ProcessTimeline />
      <BeforeAfter />
      <BlogPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
