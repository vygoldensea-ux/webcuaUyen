"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { heroSlides, trustHighlights } from "@/data/home";

export function HeroPromoSlider() {
  const autoplay = useMemo(
    () => Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false }),
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[#faf6f3] py-8 lg:py-14">
      <div className="section-frame px-4 lg:px-6">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {heroSlides.map((slide, index) => (
              <article
                key={slide.id}
                className="min-w-0 flex-[0_0_100%]"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} trên ${heroSlides.length}`}
              >
                <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
                  {/* Left — text content */}
                  <div
                    className="flex flex-col"
                    style={{
                      opacity: selectedIndex === index ? 1 : 0,
                      transform: `translateY(${selectedIndex === index ? 0 : 16}px)`,
                      transition: "opacity 0.6s ease, transform 0.6s ease",
                    }}
                  >
                    <p className="eyebrow">Pure Beauty Care · Vũng Tàu</p>

                    <h1 className="editorial-title mt-4 text-[2.6rem] leading-[1.05] text-[color:var(--foreground)] sm:text-[3.4rem] lg:text-[4.4rem]">
                      {slide.title}
                    </h1>

                    <p className="mt-5 max-w-md text-[15px] leading-7 text-[color:var(--muted)] sm:text-base sm:leading-8">
                      {slide.subtitle}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9">
                      <Link
                        href="#final-cta"
                        className="inline-flex h-12 items-center gap-2 rounded-full bg-[color:var(--cta)] px-7 text-sm font-bold text-white hover:bg-[color:var(--cta-hover)]"
                      >
                        {slide.primaryCta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      {slide.secondaryCta ? (
                        <Link
                          href="#dich-vu"
                          className="inline-flex h-12 items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-white px-7 text-sm font-semibold text-[color:var(--foreground)] hover:border-[color:var(--earth)]"
                        >
                          {slide.secondaryCta}
                        </Link>
                      ) : null}
                    </div>

                    {/* Trust checkmarks */}
                    <div className="mt-8 flex flex-col gap-2.5">
                      {["Tư vấn theo từng gương mặt thật", "Không ép dịch vụ — làm đủ là dừng", "Theo dõi sau liệu trình"].map((item) => (
                        <div key={item} className="flex items-center gap-2.5 text-sm text-[color:var(--muted)]">
                          <svg className="h-4 w-4 shrink-0 text-[color:var(--earth)]" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right — photo */}
                  <div className="relative">
                    <div
                      className="relative overflow-hidden rounded-[28px] sm:rounded-[36px]"
                      style={{
                        opacity: selectedIndex === index ? 1 : 0.5,
                        transform: `scale(${selectedIndex === index ? 1 : 0.97})`,
                        transition: "opacity 0.7s ease, transform 0.7s ease",
                      }}
                    >
                      <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 1024px) 100vw, 46vw"
                          className="object-cover object-top"
                        />
                      </div>

                      {/* Floating badge — top right */}
                      <div className="absolute right-4 top-4 max-w-[180px] rounded-2xl border border-white/60 bg-white/90 px-4 py-3.5 shadow-lg backdrop-blur-md sm:right-5 sm:top-5">
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--earth)]">Premium Care</p>
                        <p className="mt-1 text-[12px] leading-5 text-[color:var(--muted)]">
                          Tư vấn kỹ trước, theo dõi sau mỗi liệu trình
                        </p>
                      </div>

                      {/* Floating accent chip — bottom */}
                      <div className="absolute bottom-4 left-4 rounded-full border border-white/50 bg-white/85 px-4 py-2 text-xs font-semibold text-[color:var(--foreground)] backdrop-blur-sm sm:bottom-5 sm:left-5">
                        {slide.accent}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots + trust strip */}
        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "w-8 bg-[color:var(--cta)]"
                    : "w-2 bg-[color:var(--border-medium)]"
                }`}
                aria-label={`Đi đến slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Trust highlights */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {trustHighlights.map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-[13px] text-[color:var(--muted)]">
                <span className="h-1 w-1 rounded-full bg-[color:var(--earth)] shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
