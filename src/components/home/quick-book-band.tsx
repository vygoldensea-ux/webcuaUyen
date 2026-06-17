"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircleMore, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const chips = [
  "Tư vấn trước khi làm",
  "Không ép dịch vụ",
  "Theo dõi sau khi làm",
] as const;

export function QuickBookBand() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".qb-item", {
        opacity: 0,
        y: 20,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.07,
        scrollTrigger: { trigger: ref.current, start: "top 90%" },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="section-frame px-4 pb-4 lg:px-6">
      <div className="flex flex-col gap-4 rounded-[28px] border border-[color:var(--border-soft)] bg-white/90 px-5 py-5 shadow-[0_12px_40px_rgba(90,61,50,0.06)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-5">
        <div className="qb-item flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-rose)]/60 px-3 py-1.5 text-xs font-medium text-[color:var(--earth)]"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="qb-item flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <a
            href="tel:0900000000"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-[color:var(--border-soft)] px-4 text-sm font-medium text-[color:var(--foreground)] hover:border-[color:var(--earth)]/40"
          >
            <PhoneCall className="h-4 w-4 text-[color:var(--earth)]" />
            0900 000 000
          </a>
          <Link
            href="#final-cta"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[color:var(--cta)] px-5 text-sm font-semibold text-white hover:bg-[color:var(--cta-hover)]"
          >
            <MessageCircleMore className="h-4 w-4" />
            Nhắn Zalo tư vấn
          </Link>
        </div>
      </div>
    </div>
  );
}
