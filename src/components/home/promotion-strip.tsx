import Link from "next/link";
import { offers } from "@/data/home";
import { Reveal } from "./reveal";

export function PromotionStrip() {
  return (
    <section id="bang-gia" className="section-warm py-12 lg:py-16">
      <div className="section-frame px-4 lg:px-6">
        <div className="relative overflow-hidden rounded-[28px] border border-[color:var(--border-soft)] bg-white px-6 py-8 shadow-sm sm:px-8 lg:px-10 lg:py-10">
          {/* Subtle background accent */}
          <div className="pointer-events-none absolute -top-10 right-8 h-36 w-36 rounded-full bg-[color:var(--surface-rose)] opacity-60 blur-3xl" />

          <div className="relative">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <Reveal className="max-w-xl">
                <p className="eyebrow">Ưu đãi hiện tại</p>
                <h2 className="editorial-title mt-3 text-3xl text-[color:var(--foreground)]">
                  Ưu đãi dành cho khách đặt lịch trước
                </h2>
              </Reveal>
              <Link
                href="#final-cta"
                className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--cta)] px-5 text-sm font-semibold text-white hover:bg-[color:var(--cta-hover)]"
              >
                Nhận tư vấn ưu đãi
              </Link>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {offers.map((offer, i) => (
                <Reveal key={offer.title} delay={i * 0.07}>
                  <article className="rounded-[18px] border border-[color:var(--border-soft)] bg-[color:var(--surface-alt)] p-5">
                    <h3 className="text-[15px] font-bold text-[color:var(--foreground)]">
                      {offer.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{offer.detail}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
