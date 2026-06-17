"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, PhoneCall, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navItems, servicesGroupedForMenu } from "@/lib/site-data";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesPanelRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!servicesPanelRef.current) return;
      if (!servicesPanelRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            <Link href="/" className="group block" aria-label="Chòi của Uyn - Trang chủ">
              <span className="sr-only">Chòi của Uyn - Mini Spa & Aesthetics</span>
              <Image
                src="/images/logo-uyen-clean.svg"
                alt="Logo Chòi của Uyn"
                width={420}
                height={220}
                priority
                className="h-auto w-[170px] sm:w-[205px]"
              />
            </Link>
          </div>

          <nav className="hidden items-center gap-7 text-sm text-[color:var(--muted)] lg:flex">
            {navItems.map((item) =>
              item.label === "Dịch vụ" ? (
                <div key={item.label} className="relative" ref={servicesPanelRef}>
                  <button
                    type="button"
                    onClick={() => setIsServicesOpen((value) => !value)}
                    className="flex items-center gap-1 hover:text-[color:var(--foreground)]"
                    aria-expanded={isServicesOpen}
                    aria-label="Mở danh sách dịch vụ"
                  >
                    Dịch vụ
                    <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className={`absolute left-1/2 top-full z-50 mt-4 w-[760px] -translate-x-1/2 rounded-[28px] border border-[color:var(--border-soft)] bg-white p-6 shadow-[0_24px_60px_rgba(95,68,58,0.09)] transition ${
                      isServicesOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                    }`}
                  >
                    <div className="mb-4 flex items-center justify-between rounded-[22px] bg-[color:var(--surface-rose)]/48 px-4 py-4">
                      <div>
                        <p className="text-sm font-semibold text-[color:var(--foreground)]">Danh sách dịch vụ</p>
                        <p className="mt-1 text-xs text-[color:var(--muted)]">Bấm vào từng mục để mở landing page chi tiết.</p>
                      </div>
                      <Link
                        href="/dich-vu"
                        onClick={() => setIsServicesOpen(false)}
                        className="inline-flex rounded-full border border-[color:var(--border-soft)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--foreground)]"
                      >
                        Xem tất cả
                      </Link>
                    </div>
                    <div className="grid max-h-[68vh] gap-5 overflow-y-auto pr-2 md:grid-cols-2">
                      {servicesGroupedForMenu.map((group) => (
                        <div key={group.slug} className="rounded-[22px] bg-[color:var(--surface-soft)]/55 p-4">
                          <Link
                            href={`/dich-vu/${group.slug}`}
                            onClick={() => setIsServicesOpen(false)}
                            className="text-base font-semibold text-[color:var(--foreground)]"
                          >
                            {group.menuTitle}
                          </Link>
                          <div className="mt-3 grid gap-2 text-sm text-[color:var(--muted)]">
                            {group.services.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/dich-vu/${service.slug}`}
                                onClick={() => setIsServicesOpen(false)}
                                className="rounded-2xl px-3 py-2 transition hover:bg-white hover:text-[color:var(--foreground)]"
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.label} href={item.href} className="hover:text-[color:var(--foreground)]">
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/blog"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-white/80 text-[color:var(--foreground)] sm:h-11 sm:w-11"
              aria-label="Tìm kiếm nội dung"
            >
              <Search className="h-[18px] w-[18px]" />
            </Link>
            <a
              href="tel:0900000000"
              className="hidden h-11 items-center gap-2 rounded-full border border-[color:var(--border-soft)] px-4 text-sm text-[color:var(--foreground)] sm:inline-flex"
              aria-label="Gọi hotline tư vấn"
            >
              <PhoneCall className="h-4 w-4 text-[color:var(--earth)]" />
              0900 000 000
            </a>
            <Link
              href="/lien-he"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[color:var(--cta)] px-5 text-sm font-semibold text-white hover:bg-[color:var(--cta-hover)] sm:h-11"
            >
              Đặt lịch
            </Link>
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
              className="thin-scrollbar h-full w-[90%] max-w-sm overflow-y-auto bg-[color:var(--surface)] px-5 py-5 shadow-2xl"
            >
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <Image
                    src="/images/logo-uyen-clean.svg"
                    alt="Logo Chòi của Uyn"
                    width={420}
                    height={220}
                    className="h-auto w-[176px]"
                  />
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
                    key={item.label}
                    href={item.href}
                    className="rounded-2xl border border-transparent px-4 py-3 text-base text-[color:var(--foreground)] hover:border-[color:var(--border-soft)] hover:bg-[color:var(--surface-rose)]/60"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 space-y-4">
                {servicesGroupedForMenu.map((group) => (
                  <div key={group.slug} className="rounded-[24px] border border-[color:var(--border-soft)] bg-[color:var(--surface-rose)]/55 p-4">
                    <Link href={`/dich-vu/${group.slug}`} onClick={() => setIsOpen(false)} className="font-semibold text-[color:var(--foreground)]">
                      {group.menuTitle}
                    </Link>
                    <div className="mt-3 grid gap-2 text-sm text-[color:var(--muted)]">
                      {group.services.map((service) => (
                        <Link key={service.slug} href={`/dich-vu/${service.slug}`} onClick={() => setIsOpen(false)}>
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[28px] border border-[color:var(--border-soft)] bg-[color:var(--surface-rose)]/70 p-5">
                <p className="text-sm text-[color:var(--foreground)]">
                  Gửi hình tình trạng hiện tại để được tư vấn trước khi đặt lịch.
                </p>
                <Link
                  href="/lien-he"
                  className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-[color:var(--cta)] px-5 text-sm font-semibold text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Nhắn Zalo tư vấn
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
