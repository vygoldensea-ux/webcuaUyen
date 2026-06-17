"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: "bottom" | "left" | "right" | "fade";
};

export function Reveal({ children, delay = 0, className, from = "bottom" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const fromVars: gsap.TweenVars =
        from === "bottom"
          ? { opacity: 0, y: 40 }
          : from === "left"
            ? { opacity: 0, x: -40 }
            : from === "right"
              ? { opacity: 0, x: 40 }
              : { opacity: 0 };

      gsap.from(el, {
        ...fromVars,
        duration: 0.8,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
