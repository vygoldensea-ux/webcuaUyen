"use client";

import { Menu, PhoneCall, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/data/home";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? "border-[color:var(--border-soft)] bg-white/92 shadow-[0_10px_30px_rgba(90,61,50,0.07)] backdrop-blur-xl"
            : "border-transparent bg-white/55 backdrop-blur-md"
        }`}
      >
        <div className="section-frame flex items-center justify-between gap-3 px-4 py-3 lg:px-6 lg:py-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-soft)] text-[color:var(--foreground)] lg:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Mở menu điều hướng"
            >
              <Menu className="h-5 w-5" />
            </button>
            <Link href="/" className="group flex flex-col leading-none">
              <span className="editorial-title text-[2.15rem] tracking-[0.16em] text-[color:var(--foreground)] sm:text-2xl">
                Uyn
              </span>
              <span className="mt-1 text-[9px] tracking-[0.28em] text-[color:var(--earth)] uppercase sm:text-[10px] sm:tracking-[0.35em]">
                Chòi của Uyn
              </span>
              <span className="mt-1 text-[9px] tracking-[0.18em] text-[color:var(--muted)] uppercase sm:text-[10px] sm:tracking-[0.24em]">
                Mini Spa & Aesthetics
              </span>
            </Link>
          </div>

          <nav className="hidden items-center gap-7 text-sm text-[color:var(--muted)] lg:flex">
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `#${slugify(item)}`}
                className="hover:text-[color:var(--foreground)]"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-white/80 text-[color:var(--foreground)] sm:h-11 sm:w-11"
              aria-label="Tìm kiếm nội dung"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <a
              href="tel:0900000000"
              className="hidden h-11 items-center gap-2 rounded-full border border-[color:var(--border-soft)] px-4 text-sm text-[color:var(--foreground)] sm:inline-flex"
              aria-label="Gọi hotline tư vấn"
            >
              <PhoneCall className="h-4 w-4 text-[color:var(--earth)]" />
              0900 000 000
            </a>
            <a
              href="#lien-he"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[color:var(--cta)] px-5 text-sm font-semibold text-white hover:bg-[color:var(--cta-hover)] sm:h-11"
            >
              Đặt lịch
            </a>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[rgba(47,39,36,0.38)] lg:hidden"
          >
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="h-full w-[88%] max-w-sm bg-[color:var(--surface)] px-5 py-5 shadow-2xl"
            >
              <div className="mb-10 flex items-start justify-between">
                <div>
                  <p className="editorial-title text-2xl tracking-[0.18em]">Uyn</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.26em] text-[color:var(--muted)]">
                    Mini Spa & Aesthetics
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-soft)]"
                  onClick={() => setIsOpen(false)}
                  aria-label="Đóng menu điều hướng"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `#${slugify(item)}`}
                    className="rounded-2xl border border-transparent px-4 py-3 text-base text-[color:var(--foreground)] hover:border-[color:var(--border-soft)] hover:bg-[color:var(--surface-rose)]/60"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 rounded-[28px] border border-[color:var(--border-soft)] bg-[color:var(--surface-rose)]/70 p-5">
                <p className="text-sm text-[color:var(--foreground)]">
                  Nhắn tình trạng hiện tại để được tư vấn trước khi đặt lịch.
                </p>
                <a
                  href="#final-cta"
                  className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-[color:var(--cta)] px-5 text-sm font-semibold text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Nhắn Zalo tư vấn
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function slugify(label: string) {
  return label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
