"use client";

import { useGSAP } from "@gsap/react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { heroSlides, trustHighlights } from "@/data/home";

export function HeroPromoSlider() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.1 });
      tl.from(".hero-badge", { opacity: 0, y: -16, duration: 0.5, ease: "power2.out" })
        .from(".hero-trust-card", { opacity: 0, y: 24, duration: 0.55, ease: "power2.out", stagger: 0.08 }, "-=0.2")
        .from(".hero-sub", { opacity: 0, y: 12, duration: 0.5, ease: "power2.out" }, "-=0.3");
    },
    { scope: heroRef },
  );

  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
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
    <section ref={heroRef} className="section-frame px-4 pt-6 pb-20 lg:px-6 lg:pt-10 lg:pb-24">
      <div className="overflow-hidden rounded-[32px] border border-[color:var(--border-soft)] bg-white p-2 shadow-[0_40px_120px_rgba(102,71,59,0.1)] sm:rounded-[36px]">
        <div className="relative overflow-hidden rounded-[28px] bg-[color:var(--surface-soft)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,184,172,0.26),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(215,185,138,0.18),transparent_28%)]" />
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {heroSlides.map((slide, index) => (
                <article
                  key={slide.id}
                  className="relative min-w-0 flex-[0_0_100%]"
                  aria-roledescription="slide"
                  aria-label={`Slide ${index + 1} trên ${heroSlides.length}`}
                >
                  <div className="grid gap-6 px-5 py-6 sm:gap-8 sm:px-8 sm:py-8 md:px-10 lg:min-h-[640px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-14 lg:py-14">
                    <div className="relative z-10 flex flex-col justify-center">
                      <span className="hero-badge eyebrow mb-4 text-[11px] text-[color:var(--earth)]">
                        Chòi của Uyn • Beauty editorial
                      </span>
                      <div
                        className="max-w-xl transition-[opacity,transform] duration-500 ease-out"
                        style={{
                          opacity: selectedIndex === index ? 1 : 0.36,
                          transform: `translateY(${selectedIndex === index ? 0 : 12}px)`,
                        }}
                      >
                        {slide.badge ? (
                          <span className="mb-5 inline-flex rounded-full border border-[rgba(155,107,90,0.16)] bg-white/76 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[color:var(--earth)] uppercase">
                            {slide.badge}
                          </span>
                        ) : null}
                        <h1 className="editorial-title text-balance text-[2.2rem] leading-[1.02] text-[color:var(--foreground)] sm:text-[3rem] lg:text-[4.5rem]">
                          {slide.title}
                        </h1>
                        <p className="mt-4 max-w-lg text-[15px] leading-7 text-[color:var(--muted)] sm:mt-5 sm:text-lg sm:leading-8">
                          {slide.subtitle}
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                          <Link
                            href="#final-cta"
                            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[color:var(--cta)] px-6 text-sm font-semibold text-white hover:bg-[color:var(--cta-hover)] sm:w-auto"
                          >
                            {slide.primaryCta}
                          </Link>
                          {slide.secondaryCta ? (
                            <Link
                              href="#dich-vu"
                              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-white/80 px-6 text-sm font-semibold text-[color:var(--foreground)] hover:border-[color:var(--earth)]/40 sm:w-auto"
                            >
                              {slide.secondaryCta}
                            </Link>
                          ) : null}
                        </div>
                        <div className="mt-5 inline-flex rounded-full border border-[rgba(155,107,90,0.14)] bg-white/78 px-4 py-2 text-sm text-[color:var(--earth)] sm:mt-8">
                          {slide.accent}
                        </div>
                      </div>
                    </div>

                    <div className="relative min-h-[260px] sm:min-h-[360px] lg:min-h-[540px]">
                      <div className="absolute inset-x-[6%] top-[6%] bottom-[0] rounded-[28px] border border-white/60 bg-white/20 backdrop-blur-[2px]" />
                      <div
                        className="absolute inset-0 overflow-hidden rounded-[28px] transition-[opacity,transform] duration-700 ease-out"
                        style={{
                          transform: `scale(${selectedIndex === index ? 1.02 : 0.98})`,
                          opacity: selectedIndex === index ? 1 : 0.72,
                        }}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,245,0)_10%,rgba(255,248,245,0.14)_100%)]" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="absolute right-5 bottom-6 z-20 hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/76 text-[color:var(--foreground)] shadow-[0_10px_30px_rgba(71,46,36,0.08)] hover:-translate-y-0.5"
              aria-label="Slide trước"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/76 text-[color:var(--foreground)] shadow-[0_10px_30px_rgba(71,46,36,0.08)] hover:-translate-y-0.5"
              aria-label="Slide tiếp theo"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center lg:bottom-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/78 px-3 py-2 backdrop-blur-sm">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    selectedIndex === index ? "w-8 bg-[color:var(--cta)]" : "w-2.5 bg-[color:var(--border-soft)]"
                  }`}
                  aria-label={`Đi đến slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-4 grid gap-3 px-1 sm:-mt-10 sm:gap-4 sm:px-5 sm:grid-cols-3">
        {trustHighlights.map((item) => (
          <div
            key={item}
            className="hero-trust-card soft-card rounded-[22px] px-4 py-4 text-sm font-medium text-[color:var(--foreground)] sm:rounded-[24px] sm:px-5 sm:py-5"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="hero-sub mt-6 flex flex-col gap-2 px-1 text-sm text-[color:var(--muted)] sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:px-2">
        <p>{activeSlide.subtitle}</p>
        <p className="hidden tracking-[0.18em] uppercase text-[color:var(--earth)] sm:block">
          Vũng Tàu • Tư vấn rõ • Làm đẹp vừa đủ
        </p>
      </div>
    </section>
  );
}
