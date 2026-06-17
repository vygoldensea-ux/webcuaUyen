"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import { offers } from "@/data/home";

gsap.registerPlugin(ScrollTrigger);

export function PromotionStrip() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
      });

      tl.from(".promo-header > *", {
        opacity: 0,
        y: 28,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
      }).from(
        ".offer-card",
        {
          opacity: 0,
          y: 36,
          scale: 0.96,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.09,
        },
        "-=0.4",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="bang-gia" className="section-frame px-4 py-10 lg:px-6 lg:py-14">
      <div className="relative overflow-hidden rounded-[32px] border border-[color:var(--border-soft)] bg-[color:var(--surface-rose)] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="pointer-events-none absolute -top-12 right-10 h-40 w-40 rounded-full bg-white/35 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-[rgba(215,185,138,0.18)] blur-2xl" />
        <div className="relative">
          <div className="promo-header flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-[11px] text-[color:var(--earth)]">Offer strip</p>
              <h2 className="editorial-title mt-4 text-4xl text-[color:var(--foreground)]">
                Ưu đãi dành cho khách đặt lịch trước
              </h2>
            </div>
            <Link
              href="#final-cta"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--cta)] px-6 text-sm font-semibold text-white hover:bg-[color:var(--cta-hover)]"
            >
              Nhận tư vấn ưu đãi
            </Link>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className="offer-card rounded-[24px] border border-white/70 bg-white/78 p-5 shadow-[0_18px_40px_rgba(115,80,69,0.04)]"
              >
                <h3 className="text-lg font-semibold text-[color:var(--foreground)]">{offer.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{offer.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
