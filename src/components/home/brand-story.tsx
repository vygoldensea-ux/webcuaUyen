import { Check } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./reveal";

const bullets = [
  "Tư vấn rõ trước khi làm",
  "Không ép dịch vụ",
  "Ưu tiên kết quả tự nhiên",
  "Hướng dẫn chăm sóc sau dịch vụ",
  "Theo dõi sau khi làm",
];

export function BrandStory() {
  return (
    <section className="section-frame px-4 py-16 lg:px-6 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">

        <Reveal className="relative min-h-[400px] overflow-hidden rounded-[28px] border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)]">
          <Image
            src="/images/brand-story.jpg"
            alt="Không gian mini spa Chòi của Uyn tại Vũng Tàu – sạch, riêng tư và tinh tế"
            fill
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="object-cover"
          />
          <div className="absolute right-4 bottom-4 rounded-[18px] border border-white/50 bg-white/85 px-4 py-3 text-sm font-medium text-[color:var(--foreground)] backdrop-blur-md">
            Mini spa riêng tư, sạch và tinh tế
          </div>
        </Reveal>

        <div className="lg:pl-6">
          <Reveal>
            <p className="eyebrow">Vì sao khách chọn Uyn</p>
            <h2 className="editorial-title mt-3 text-3xl leading-tight text-[color:var(--foreground)] sm:text-4xl lg:text-5xl">
              Làm đẹp không cần quá tay. Chỉ cần đúng chỗ, đúng dáng, đúng người.
            </h2>
            <p className="mt-5 text-base leading-7 text-[color:var(--muted)]">
              Chòi của Uyn là một mini spa theo hướng tư vấn kỹ và làm đẹp tự nhiên. Mỗi dịch
              vụ đều bắt đầu bằng việc quan sát tình trạng thật: nền môi, dáng mày, cấu trúc
              gương mặt, nền da và mong muốn của khách.
            </p>
          </Reveal>

          <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {bullets.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <div className="flex items-center gap-3 rounded-[16px] border border-[color:var(--border-soft)] bg-white px-4 py-3.5 text-sm font-medium text-[color:var(--foreground)]">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--surface-rose)] text-[color:var(--earth)]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
