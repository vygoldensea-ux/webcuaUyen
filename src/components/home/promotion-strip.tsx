import { offers } from "@/data/home";
import { Reveal } from "./reveal";

export function PromotionStrip() {
  return (
    <section id="bang-gia" className="section-frame px-4 py-10 lg:px-6 lg:py-14">
      <Reveal className="relative overflow-hidden rounded-[32px] border border-[color:var(--border-soft)] bg-[color:var(--surface-rose)] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="pointer-events-none absolute -top-12 right-10 h-40 w-40 rounded-full bg-white/35 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-[rgba(215,185,138,0.18)] blur-2xl" />
        <div className="relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-[11px] text-[color:var(--earth)]">Offer strip</p>
              <h2 className="editorial-title mt-4 text-4xl text-[color:var(--foreground)]">
                Ưu đãi dành cho khách đặt lịch trước
              </h2>
            </div>
            <a
              href="#final-cta"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--cta)] px-6 text-sm font-semibold text-white hover:bg-[color:var(--cta-hover)]"
            >
              Nhận tư vấn ưu đãi
            </a>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className="rounded-[24px] border border-white/70 bg-white/78 p-5 shadow-[0_18px_40px_rgba(115,80,69,0.04)]"
              >
                <h3 className="text-lg font-semibold text-[color:var(--foreground)]">{offer.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{offer.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
