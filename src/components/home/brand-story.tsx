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
    <section className="section-frame px-4 py-20 lg:px-6 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <Reveal className="relative min-h-[380px] overflow-hidden rounded-[32px] border border-[color:var(--border-soft)] bg-[color:var(--surface)]">
          <Image
            src="/images/placeholder-clinic-soft.svg"
            alt="Không gian mini spa và hình ảnh khách nữ với tổng thể mềm mại, tinh tế"
            fill
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(47,39,36,0.02)_0%,rgba(47,39,36,0.18)_100%)]" />
          <div className="absolute right-5 bottom-5 rounded-[24px] border border-white/45 bg-white/78 px-5 py-4 text-sm text-[color:var(--foreground)] backdrop-blur-md">
            Mini spa riêng tư, sạch và tinh tế
          </div>
        </Reveal>

        <Reveal className="lg:pl-6">
          <p className="eyebrow text-[11px] text-[color:var(--earth)]">Vì sao khách chọn Uyn</p>
          <h2 className="editorial-title mt-4 text-4xl leading-tight text-[color:var(--foreground)] sm:text-5xl">
            Làm đẹp không cần quá tay. Chỉ cần đúng chỗ, đúng dáng, đúng người.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">
            Chòi của Uyn là một mini spa theo hướng tư vấn kỹ và làm đẹp tự nhiên. Mỗi dịch
            vụ đều bắt đầu bằng việc quan sát tình trạng thật: nền môi, dáng mày, cấu trúc
            gương mặt, nền da và mong muốn của khách. Mục tiêu không phải là làm bạn khác
            đi, mà là giúp bạn gọn gàng, tươi hơn và tự tin hơn theo cách vẫn rất là bạn.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {bullets.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[22px] border border-[color:var(--border-soft)] bg-white px-4 py-4 text-sm text-[color:var(--foreground)]"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--surface-rose)] text-[color:var(--earth)]">
                  <Check className="h-4 w-4" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
