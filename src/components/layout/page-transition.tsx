"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useRef } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        y: 18,
        duration: 0.55,
        ease: "power3.out",
        clearProps: "all",
      });
    },
    { scope: ref, dependencies: [pathname] },
  );

  return <div ref={ref}>{children}</div>;
}
