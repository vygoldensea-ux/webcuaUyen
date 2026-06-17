"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: "bottom" | "left" | "right" | "fade";
};

export function Reveal({ children, delay = 0, className, from = "bottom" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial state
    el.style.opacity = "0";
    el.style.transition = `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`;
    if (from === "bottom") el.style.transform = "translateY(24px)";
    else if (from === "left") el.style.transform = "translateX(-24px)";
    else if (from === "right") el.style.transform = "translateX(24px)";

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, from]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
