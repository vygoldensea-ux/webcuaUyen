import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { PageTransition } from "@/components/layout/page-transition";
import { SiteAnnouncementBar } from "@/components/layout/site-announcement-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/site/json-ld";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://choicuauyn.vn"),
  title: {
    default: "Chòi của Uyn – Phun môi, phun mày, filler & chăm sóc da tại Vũng Tàu",
    template: "%s | Chòi của Uyn – Mini Spa Vũng Tàu",
  },
  description:
    "Mini spa tại Vũng Tàu: phun xăm chân mày, phun môi, filler, botox, meso căng bóng và chăm sóc da mụn. Tư vấn kỹ trước khi làm, không ép dịch vụ, theo dõi sau làm.",
  keywords: [
    "phun môi Vũng Tàu",
    "phun mày Vũng Tàu",
    "filler Vũng Tàu",
    "botox Vũng Tàu",
    "meso Vũng Tàu",
    "chăm sóc da Vũng Tàu",
    "spa Vũng Tàu",
    "làm đẹp Vũng Tàu",
    "Chòi của Uyn",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Chòi của Uyn – Mini Spa & Aesthetics",
    images: [{ url: "/images/brand-story.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${dmSans.variable} ${playfairDisplay.variable} h-full`}
    >
      <body className="editorial-shell min-h-full flex flex-col">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            name: "Chòi của Uyn – Mini Spa & Aesthetics",
            description:
              "Mini Spa & Aesthetics tại Vũng Tàu theo hướng tư vấn kỹ, làm đẹp tự nhiên, rõ quy trình.",
            url: "https://choicuauyn.vn",
            image: "https://choicuauyn.vn/images/placeholder-hero-editorial.svg",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Vũng Tàu",
              addressCountry: "VN",
            },
            areaServed: "Vũng Tàu",
            sameAs: [
              "https://facebook.com/choicuauyn",
              "https://instagram.com/choicuauyn",
              "https://tiktok.com/@choicuauyn",
            ],
          }}
        />
        <SiteAnnouncementBar />
        <SiteHeader />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
