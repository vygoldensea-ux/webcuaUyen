import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { services } from "@/data/home";
import { Reveal } from "./reveal";

export function ServiceGrid() {
  return (
    <section id="dich-vu" className="section-frame px-4 py-20 lg:px-6 lg:py-28">
      <Reveal className="mb-10 max-w-3xl">
        <p className="eyebrow text-[11px] text-[color:var(--earth)]">Dịch vụ nổi bật</p>
        <h2 className="editorial-title mt-4 text-4xl text-[color:var(--foreground)] sm:text-5xl">
          Dịch vụ tại Chòi của Uyn
        </h2>
        <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
          Không chọn dịch vụ theo trend. Chọn theo điều làn da, dáng môi, dáng mày và gương
          mặt của bạn thật sự cần.
        </p>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.04}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[color:var(--border-soft)] bg-white shadow-[0_20px_50px_rgba(101,72,61,0.05)] transition-transform duration-200 hover:-translate-y-1">
              <div className="relative aspect-[1.15/1] overflow-hidden bg-[color:var(--surface-soft)]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,245,0)_45%,rgba(255,248,245,0.2)_100%)]" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-semibold text-[color:var(--foreground)]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-7 text-[color:var(--muted)]">
                  {service.description}
                </p>
                <a
                  href="#final-cta"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--earth)]"
                >
                  Xem chi tiết
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
