"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Reveal } from "./reveal";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "100%", label: "Tư vấn trực tiếp trước khi làm" },
  { value: "Vũng Tàu", label: "Mini spa tại trung tâm thành phố" },
  { value: "Tự nhiên", label: "Hướng làm đẹp ưu tiên, không quá tay" },
  { value: "1-on-1", label: "Mỗi ca là một buổi tư vấn riêng" },
] as const;

export function TrustStats() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".stat-card", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: gridRef.current, start: "top 82%" },
      });
    },
    { scope: gridRef },
  );

  return (
    <section
      aria-label="Điểm nổi bật của Chòi của Uyn"
      className="section-frame px-4 py-16 lg:px-6 lg:py-20"
    >
      <Reveal className="mb-8 max-w-xl">
        <p className="eyebrow text-[11px] text-[color:var(--earth)]">Tại sao chọn Uyn</p>
        <h2 className="editorial-title mt-3 text-3xl text-[color:var(--foreground)] sm:text-4xl">
          Làm đẹp riêng tư, tư vấn thật
        </h2>
      </Reveal>

      <div ref={gridRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="stat-card rounded-[28px] border border-[color:var(--border-soft)] bg-white px-6 py-7 shadow-[0_16px_48px_rgba(90,63,52,0.05)]"
          >
            <p className="editorial-title text-3xl font-semibold text-[color:var(--earth)]">
              {value}
            </p>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
