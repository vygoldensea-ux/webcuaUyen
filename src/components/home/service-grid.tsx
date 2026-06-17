"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const homeServices = [
  {
    slug: "phun-xam-chan-may-vung-tau",
    title: "Phun xăm chân mày",
    sub: "Dáng mày tự nhiên, vẽ theo gương mặt",
    image: "/images/service-phun-may.jpg",
    alt: "Phun xăm chân mày Vũng Tàu",
    count: "Phun xăm",
  },
  {
    slug: "phun-moi-vung-tau",
    title: "Phun môi",
    sub: "Tươi sắc môi, xử lý nền thâm nhẹ",
    image: "/images/service-phun-moi.jpg",
    alt: "Phun môi Vũng Tàu",
    count: "Phun xăm",
  },
  {
    slug: "filler-moi-vung-tau",
    title: "Filler",
    sub: "Điểm nhấn vừa đủ, hài hòa gương mặt",
    image: "/images/service-filler.jpg",
    alt: "Filler Vũng Tàu",
    count: "Thẩm mỹ",
  },
  {
    slug: "botox-gon-ham-vung-tau",
    title: "Botox / Gọn hàm",
    sub: "Thon gọn, xóa nhăn theo hướng tự nhiên",
    image: "/images/service-botox.jpg",
    alt: "Botox gọn hàm Vũng Tàu",
    count: "Thẩm mỹ",
  },
  {
    slug: "meso-cang-bong-cap-am-vung-tau",
    title: "Meso căng bóng",
    sub: "Cấp ẩm sâu, phục hồi độ mịn căng",
    image: "/images/service-meso.jpg",
    alt: "Meso căng bóng Vũng Tàu",
    count: "Chăm sóc da",
  },
  {
    slug: "cham-soc-da-mun-vung-tau",
    title: "Chăm sóc da mụn",
    sub: "Lấy nhân, làm sạch, phục hồi từng tình trạng",
    image: "/images/service-da-mun.jpg",
    alt: "Chăm sóc da mụn Vũng Tàu",
    count: "Chăm sóc da",
  },
] as const;

function ServiceCard({
  service,
  index,
}: {
  service: (typeof homeServices)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.48s ease ${index * 0.07}s, transform 0.48s ease ${index * 0.07}s`;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          io.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -16px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  return (
    <article ref={ref} className="group">
      <Link href={`/dich-vu/${service.slug}`} className="block">
        {/* Image — tall portrait crop */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-[color:var(--surface-soft)]">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-[color:var(--foreground)] opacity-0 transition-opacity duration-300 group-hover:opacity-10 rounded-[20px]" />
          {/* Category badge */}
          <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold text-[color:var(--earth)] backdrop-blur-sm">
            {service.count}
          </span>
        </div>
        {/* Info below image */}
        <div className="mt-3 px-1">
          <h3 className="text-[15px] font-bold text-[color:var(--foreground)] leading-snug group-hover:text-[color:var(--earth)] transition-colors">
            {service.title}
          </h3>
          <p className="mt-1 text-[13px] leading-5 text-[color:var(--muted)]">{service.sub}</p>
        </div>
      </Link>
    </article>
  );
}

export function ServiceGrid() {
  return (
    <section id="dich-vu" className="bg-white py-16 lg:py-24">
      <div className="section-frame px-4 lg:px-6">
        {/* Header row */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Dịch vụ tại Vũng Tàu</p>
            <h2 className="editorial-title mt-3 text-3xl text-[color:var(--foreground)] sm:text-4xl">
              Dịch vụ làm đẹp<br className="hidden sm:block" /> tại Chòi của Uyn
            </h2>
          </div>
          <Link
            href="/dich-vu"
            className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full border border-[color:var(--border-soft)] bg-white px-5 text-sm font-semibold text-[color:var(--foreground)] hover:border-[color:var(--earth)]"
          >
            Xem tất cả
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Category grid — 2 cols mobile, 3 tablet, 6 desktop */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {homeServices.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>

        {/* Banner strip below grid */}
        <div className="mt-10 overflow-hidden rounded-[24px] bg-[color:var(--surface-rose)] px-6 py-6 sm:px-8 sm:py-7 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--earth)]">
                Tư vấn trước · Không ép dịch vụ
              </p>
              <p className="mt-1 text-xl font-bold text-[color:var(--foreground)] sm:text-2xl">
                Làm đẹp vừa đủ — đúng điều da cần
              </p>
            </div>
            <Link
              href="/lien-he"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-[color:var(--cta)] px-6 text-sm font-bold text-white hover:bg-[color:var(--cta-hover)]"
            >
              Đặt lịch ngay
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
