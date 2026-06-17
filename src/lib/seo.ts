import type { Metadata } from "next";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `https://choicuauyn.vn${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Chòi của Uyn – Mini Spa & Aesthetics",
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function estimateReadingTime(paragraphs: string[]) {
  const words = paragraphs.join(" ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(4, Math.ceil(words / 220));
}

export function buildServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    areaServed: "Vũng Tàu",
    provider: {
      "@type": "BeautySalon",
      name: "Chòi của Uyn – Mini Spa & Aesthetics",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vũng Tàu",
        addressCountry: "VN",
      },
    },
    url,
  };
}

export function buildArticleSchema({
  title,
  description,
  url,
  image,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    author: {
      "@type": "Organization",
      name: "Chòi của Uyn",
    },
    publisher: {
      "@type": "Organization",
      name: "Chòi của Uyn – Mini Spa & Aesthetics",
    },
    mainEntityOfPage: url,
  };
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
