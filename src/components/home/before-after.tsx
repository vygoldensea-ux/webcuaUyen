import Image from "next/image";
import { beforeAfterItems } from "@/data/home";
import { Reveal } from "./reveal";

export function BeforeAfter() {
  return (
    <section id="before-after" className="section-frame px-4 py-20 lg:px-6 lg:py-28">
      <Reveal className="mb-10 max-w-3xl">
        <p className="eyebrow text-[11px] text-[color:var(--earth)]">Khách hàng thực tế</p>
        <h2 className="editorial-title mt-4 text-4xl text-[color:var(--foreground)] sm:text-5xl">
          Kết quả thực tế
        </h2>
        <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
          Mỗi ca làm đẹp nên được nhìn bằng sự tự nhiên, cân đối và phù hợp với từng người.
        </p>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {beforeAfterItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.04}>
            <article className="overflow-hidden rounded-[28px] border border-[color:var(--border-soft)] bg-white shadow-[0_20px_50px_rgba(96,70,58,0.05)]">
              <div className="relative aspect-[0.9/1.1] overflow-hidden bg-[color:var(--surface-soft)]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/75 bg-white/82 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--earth)]">
                  Khách hàng thực tế
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[color:var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-sm text-[color:var(--muted)]">
        Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.
      </p>
    </section>
  );
}
