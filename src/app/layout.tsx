import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { PageTransition } from "@/components/layout/page-transition";
import { SiteAnnouncementBar } from "@/components/layout/site-announcement-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/site/json-ld";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://choicuauyn.vn"),
  title: "Chòi của Uyn – Mini Spa & Aesthetics tại Vũng Tàu",
  description:
    "Chòi của Uyn cung cấp phun xăm chân mày, phun môi, filler, botox, meso và chăm sóc da tại Vũng Tàu. Tư vấn kỹ, làm đẹp tự nhiên, rõ quy trình.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${manrope.variable} ${playfairDisplay.variable} h-full`}
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
