import { Droplets, ShieldCheck, Sparkle } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./reveal";

const details = [
  {
    icon: Sparkle,
    label: "Phù hợp với",
    value: "Da thiếu ẩm, da xỉn, da kém mịn",
  },
  {
    icon: Droplets,
    label: "Cảm giác sau làm",
    value: "Da có thể hơi đỏ nhẹ tùy nền",
  },
  {
    icon: ShieldCheck,
    label: "Cần lưu ý",
    value: "Chăm sóc và chống nắng kỹ",
  },
];

export function FeaturedService() {
  return (
    <section className="section-frame px-4 py-20 lg:px-6 lg:py-28">
      <div className="grid gap-10 overflow-hidden rounded-[32px] border border-[color:var(--border-soft)] bg-white p-5 shadow-[0_28px_80px_rgba(90,63,52,0.06)] lg:grid-cols-[0.95fr_1.05fr] lg:p-7">
        <Reveal className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[color:var(--surface-soft)]">
          <Image
            src="/images/placeholder-clinic-soft.svg"
            alt="Người mẫu với làn da căng mịn và ánh sáng dịu cho section Meso"
            fill
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_10%,rgba(47,39,36,0.08)_100%)]" />
        </Reveal>

        <Reveal className="flex flex-col justify-center px-1 py-3 lg:px-5">
          <p className="eyebrow text-[11px] text-[color:var(--earth)]">Featured service</p>
          <h2 className="editorial-title mt-4 text-4xl text-[color:var(--foreground)] sm:text-5xl">
            Meso căng bóng cấp ẩm
          </h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
            Dành cho làn da thiếu ẩm, kém mịn, xỉn màu hoặc cần phục hồi độ căng nhẹ. Tại
            Chòi của Uyn, meso được tư vấn theo tình trạng da trước, không làm đại trà.
          </p>

          <div className="mt-8 grid gap-4">
            {details.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-[22px] border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-5 py-5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--surface-rose)] text-[color:var(--earth)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--earth)]">
                      {label}
                    </p>
                    <p className="mt-2 text-base text-[color:var(--foreground)]">{value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#final-cta"
            className="mt-8 inline-flex h-12 w-fit items-center justify-center rounded-full bg-[color:var(--cta)] px-6 text-sm font-semibold text-white hover:bg-[color:var(--cta-hover)]"
          >
            Tư vấn Meso
          </a>
        </Reveal>
      </div>
    </section>
  );
}
