"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "@/lib/site-data";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <article
            key={item.question}
            className="overflow-hidden rounded-[24px] border border-[color:var(--border-soft)] bg-white"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-[color:var(--foreground)] sm:text-lg">
                {item.question}
              </span>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--surface-rose)] text-[color:var(--earth)]">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-[15px] leading-7 text-[color:var(--muted)] sm:px-6">
                    {item.answer}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
