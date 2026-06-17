import { BeforeAfter } from "@/components/home/before-after";
import { BlogPreview } from "@/components/home/blog-preview";
import { BrandStory } from "@/components/home/brand-story";
import { FAQ } from "@/components/home/faq";
import { FeaturedService } from "@/components/home/featured-service";
import { FinalCTA } from "@/components/home/final-cta";
import { HeroPromoSlider } from "@/components/home/hero-promo-slider";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { PromotionStrip } from "@/components/home/promotion-strip";
import { ServiceGrid } from "@/components/home/service-grid";
import { JsonLd } from "@/components/site/json-ld";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Chòi của Uyn – Mini Spa & Aesthetics",
  image: "/images/placeholder-hero-editorial.svg",
  description:
    "Mini spa tại Vũng Tàu chuyên phun môi, phun mày, filler, botox, meso và chăm sóc da theo hướng tự nhiên, tư vấn kỹ trước khi làm.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vũng Tàu",
    addressCountry: "VN",
  },
  areaServed: "Vũng Tàu",
  telephone: "0900000000",
  priceRange: "$$",
};

export default function Home() {
  return (
    <>
      <HeroPromoSlider />
      <ServiceGrid />
      <BrandStory />
      <PromotionStrip />
      <BeforeAfter />
      <FeaturedService />
      <ProcessTimeline />
      <BlogPreview />
      <FAQ />
      <FinalCTA />
      <JsonLd data={structuredData} />
    </>
  );
}
