"use client";

import { Minus, Plus } from "lucide-react";
import { useRef, useState } from "react";
import { faqs } from "@/data/home";
import { Reveal } from "./reveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section-frame px-4 py-20 lg:px-6 lg:py-28">
      <Reveal className="mb-10 max-w-3xl">
        <p className="eyebrow text-[11px] text-[color:var(--earth)]">Hỏi & đáp</p>
        <h2 className="editorial-title mt-4 text-4xl text-[color:var(--foreground)] sm:text-5xl">
          Câu hỏi thường gặp về dịch vụ làm đẹp tại Vũng Tàu
        </h2>
      </Reveal>

      <div className="grid gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={faq.question}
              className="overflow-hidden rounded-[24px] border border-[color:var(--border-soft)] bg-white"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="text-base font-semibold text-[color:var(--foreground)] sm:text-lg">
                  {faq.question}
                </span>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--surface-rose)] text-[color:var(--earth)] transition-transform duration-300">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <div
                id={`faq-panel-${index}`}
                ref={(el) => {
                  panelRefs.current[index] = el;
                }}
                className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
                style={{
                  maxHeight: isOpen ? "400px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
                aria-hidden={!isOpen}
              >
                <div className="px-5 pb-5 text-[15px] leading-7 text-[color:var(--muted)] sm:px-6">
                  {faq.answer}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
