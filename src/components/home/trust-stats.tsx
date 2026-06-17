import { Reveal } from "./reveal";

const stats = [
  { value: "100%", label: "Tư vấn trực tiếp trước khi làm" },
  { value: "Vũng Tàu", label: "Mini spa tại trung tâm thành phố" },
  { value: "Tự nhiên", label: "Hướng làm đẹp ưu tiên, không quá tay" },
  { value: "1-on-1", label: "Mỗi ca là một buổi tư vấn riêng" },
] as const;

export function TrustStats() {
  return (
    <section
      aria-label="Điểm nổi bật của Chòi của Uyn"
      className="section-rose py-14 lg:py-20"
    >
      <div className="section-frame px-4 lg:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 0.07}>
              <div className="rounded-[20px] border border-[color:var(--border-soft)] bg-white/80 px-6 py-7 backdrop-blur-sm">
                <p className="editorial-title text-3xl font-bold text-[color:var(--earth)]">
                  {value}
                </p>
                <p className="mt-2.5 text-sm leading-6 text-[color:var(--muted)]">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
