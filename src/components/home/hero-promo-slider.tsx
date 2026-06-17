"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { heroSlides, trustHighlights } from "@/data/home";

export function HeroPromoSlider() {
  const autoplay = useMemo(
    () => Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true }),
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

  const activeSlide = heroSlides[selectedIndex] ?? heroSlides[0];

  return (
    <section className="section-frame px-4 pt-5 pb-3 lg:px-6 lg:pt-6">
      {/* Main hero card */}
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px]">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {heroSlides.map((slide, index) => (
              <article
                key={slide.id}
                className="relative min-w-0 flex-[0_0_100%]"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} trên ${heroSlides.length}`}
              >
                {/* Full-bleed image */}
                <div className="relative min-h-[520px] sm:min-h-[600px] lg:min-h-[720px]">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                  {/* Gradient overlay — warm dark from left-bottom */}
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(18,10,8,0.78)_0%,rgba(18,10,8,0.38)_55%,rgba(18,10,8,0.08)_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,10,8,0.65)_0%,transparent_50%)]" />

                  {/* Content overlaid at bottom-left */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14">
                    <div
                      className="max-w-2xl transition-all duration-700 ease-out"
                      style={{
                        opacity: selectedIndex === index ? 1 : 0,
                        transform: `translateY(${selectedIndex === index ? 0 : 20}px)`,
                      }}
                    >
                      {slide.badge ? (
                        <span className="mb-4 inline-flex rounded-full border border-white/25 bg-white/12 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-white/85 uppercase backdrop-blur-sm">
                          {slide.badge}
                        </span>
                      ) : null}

                      <h1 className="hero-headline text-[2.8rem] font-black leading-[0.95] text-white sm:text-[4.2rem] lg:text-[6rem]">
                        {slide.title}
                      </h1>

                      <p className="mt-4 max-w-md text-[15px] leading-7 text-white/75 sm:mt-5 sm:text-base">
                        {slide.subtitle}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                        <Link
                          href="#final-cta"
                          className="inline-flex h-12 items-center gap-2 rounded-full bg-[color:var(--cta)] px-7 text-sm font-bold text-white hover:bg-[color:var(--cta-hover)]"
                        >
                          {slide.primaryCta}
                        </Link>
                        {slide.secondaryCta ? (
                          <Link
                            href="#dich-vu"
                            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20"
                          >
                            {slide.secondaryCta}
                          </Link>
                        ) : null}
                      </div>
                    </div>

                    {/* Bottom-right: accent pill */}
                    <div className="absolute right-6 bottom-6 sm:right-10 sm:bottom-8 hidden sm:block">
                      <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/70 backdrop-blur-md">
                        {slide.accent}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Slide controls */}
        <div className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/12 text-white backdrop-blur-sm hover:bg-white/22"
            aria-label="Slide trước"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/12 text-white backdrop-blur-sm hover:bg-white/22"
            aria-label="Slide tiếp theo"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="absolute inset-x-0 bottom-5 z-20 flex justify-center lg:bottom-7">
          <div className="inline-flex items-center gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  selectedIndex === index ? "w-8 bg-white" : "w-1.5 bg-white/40"
                }`}
                aria-label={`Đi đến slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Trust strip below hero */}
      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {trustHighlights.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl border border-[color:var(--border-soft)] bg-white px-4 py-3 text-[13px] font-semibold text-[color:var(--foreground)]"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--cta)]" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
