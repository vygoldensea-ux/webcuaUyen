import { Reveal } from "./reveal";

const stats = [
  { value: "100%", label: "Tư vấn trực tiếp trước khi làm" },
  { value: "Vũng Tàu", label: "Mini spa ngay trung tâm thành phố" },
  { value: "Tự nhiên", label: "Hướng làm đẹp ưu tiên, không quá tay" },
  { value: "1-on-1", label: "Mỗi ca là một buổi tư vấn riêng" },
] as const;

export function TrustStats() {
  return (
    <section aria-label="Điểm nổi bật của Chòi của Uyn" className="bg-[color:var(--foreground)] py-14 lg:py-20">
      <div className="section-frame px-4 lg:px-6">
        <div className="mb-10 flex items-end justify-between">
          <p className="editorial-title text-2xl text-white sm:text-3xl">
            Vì sao chọn<br />Chòi của Uyn?
          </p>
          <p className="hidden max-w-xs text-right text-sm leading-6 text-white/50 sm:block">
            Một chỗ nhỏ, làm kỹ — không chạy theo số lượng
          </p>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4 rounded-[20px] overflow-hidden">
          {stats.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 0.07}>
              <div className="bg-[color:var(--foreground)] px-6 py-8">
                <p className="editorial-title text-4xl font-bold text-[color:var(--rose)] sm:text-5xl">
                  {value}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
