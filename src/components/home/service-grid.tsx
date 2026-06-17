"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { services } from "@/data/home";
import { Reveal } from "./reveal";

gsap.registerPlugin(ScrollTrigger);

export function ServiceGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");

      gsap.from(cards, {
        opacity: 0,
        y: 60,
        scale: 0.96,
        duration: 0.75,
        ease: "power3.out",
        stagger: {
          amount: 0.5,
          from: "start",
        },
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: gridRef },
  );

  return (
    <section id="dich-vu" className="section-frame px-4 py-20 lg:px-6 lg:py-28">
      <Reveal className="mb-10 max-w-3xl">
        <p className="eyebrow text-[11px] text-[color:var(--earth)]">Dịch vụ nổi bật</p>
        <h2 className="editorial-title mt-4 text-4xl text-[color:var(--foreground)] sm:text-5xl">
          Dịch vụ tại Chòi của Uyn
        </h2>
        <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
          Không chọn dịch vụ theo trend. Chọn theo điều làn da, dáng môi, dáng mày và gương
          mặt của bạn thật sự cần.
        </p>
      </Reveal>

      <div ref={gridRef} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="service-card group flex h-full flex-col overflow-hidden rounded-[28px] border border-[color:var(--border-soft)] bg-white shadow-[0_20px_50px_rgba(101,72,61,0.05)] will-change-transform"
            style={{ transform: "translateZ(0)" }}
          >
            <div className="relative aspect-[1.15/1] overflow-hidden bg-[color:var(--surface-soft)]">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,245,0)_45%,rgba(255,248,245,0.2)_100%)]" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-2xl font-semibold text-[color:var(--foreground)]">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-7 text-[color:var(--muted)]">
                {service.description}
              </p>
              <Link
                href="#final-cta"
                className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--earth)] transition-gap duration-200"
              >
                Xem chi tiết
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
