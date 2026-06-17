"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function FinalCTA() {
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 82%",
        },
      });

      tl.from(boxRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.97,
        duration: 0.85,
        ease: "power3.out",
      }).from(
        ".cta-content > *",
        {
          opacity: 0,
          y: 24,
          duration: 0.65,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.5",
      );
    },
    { scope: boxRef },
  );

  return (
    <section id="final-cta" className="section-frame px-4 py-16 lg:px-6 lg:py-24">
      <div
        ref={boxRef}
        className="overflow-hidden rounded-[32px] border border-[color:var(--border-soft)] bg-[linear-gradient(135deg,#fff8f5_0%,#f8eee8_48%,#fff6f1_100%)] px-6 py-10 sm:px-8 lg:px-12 lg:py-14"
      >
        <div className="cta-content max-w-3xl">
          <p className="eyebrow text-[11px] text-[color:var(--earth)]">Tư vấn trước khi làm</p>
          <h2 className="editorial-title mt-4 text-4xl text-[color:var(--foreground)] sm:text-5xl">
            Không chắc mình phù hợp dịch vụ nào?
          </h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
            Gửi hình hoặc mô tả tình trạng hiện tại, Uyn sẽ tư vấn trước để bạn biết nên làm
            gì, chưa nên làm gì và cần chuẩn bị gì.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://zalo.me"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--cta)] px-6 text-sm font-semibold text-white hover:bg-[color:var(--cta-hover)]"
            >
              <MessageCircleMore className="h-4 w-4" />
              Nhắn Zalo tư vấn
            </a>
            <Link
              href="/bang-gia"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-white/70 px-6 text-sm font-semibold text-[color:var(--foreground)] hover:border-[color:var(--earth)]/40"
            >
              Xem bảng giá
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
