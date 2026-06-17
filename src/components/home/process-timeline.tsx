"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { processSteps } from "@/data/home";

gsap.registerPlugin(ScrollTrigger);

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".process-card");
      const line = sectionRef.current?.querySelector(".process-line") as HTMLElement | null;

      if (line) {
        gsap.from(line, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        });
      }

      gsap.from(cards, {
        opacity: 0,
        y: 50,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="section-frame px-4 py-20 lg:px-6 lg:py-28">
      <div className="mb-10 max-w-3xl">
        <p className="eyebrow text-[11px] text-[color:var(--earth)]">Quy trình</p>
        <h2 className="editorial-title mt-4 text-4xl text-[color:var(--foreground)] sm:text-5xl">
          Quy trình tại Chòi của Uyn
        </h2>
      </div>

      <div className="relative grid gap-5 lg:grid-cols-5">
        <div className="process-line pointer-events-none absolute top-1/2 right-0 left-0 hidden h-px bg-[color:var(--border-soft)] lg:block" />

        {processSteps.map((step, index) => (
          <article
            key={step}
            className="process-card relative h-full rounded-[28px] border border-[color:var(--border-soft)] bg-white px-5 py-6 shadow-[0_18px_50px_rgba(95,68,58,0.04)]"
          >
            <span className="editorial-title text-5xl text-[color:var(--rose)]/90">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 text-lg font-semibold leading-8 text-[color:var(--foreground)]">
              {step}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
