"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/home";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-frame px-4 py-20 lg:px-6 lg:py-28">
      <div className="mb-10 max-w-3xl">
        <p className="eyebrow text-[11px] text-[color:var(--earth)]">FAQ</p>
        <h2 className="editorial-title mt-4 text-4xl text-[color:var(--foreground)] sm:text-5xl">
          Những câu hỏi thường gặp
        </h2>
      </div>

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
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="text-base font-semibold text-[color:var(--foreground)] sm:text-lg">
                  {faq.question}
                </span>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--surface-rose)] text-[color:var(--earth)]">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={`faq-panel-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-[15px] leading-7 text-[color:var(--muted)] sm:px-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}
