"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Reveal } from "./reveal";

const homeServices = [
  {
    slug: "phun-xam-chan-may-vung-tau",
    title: "Phun xăm chân mày",
    description: "Thiết kế dáng mày mềm, tự nhiên, cân với gương mặt — tư vấn dáng và màu trước khi làm.",
    image: "/images/service-phun-may.jpg",
    alt: "Dịch vụ phun xăm chân mày tại Vũng Tàu",
  },
  {
    slug: "phun-moi-vung-tau",
    title: "Phun môi",
    description: "Xử lý nền môi nhợt hoặc thâm nhẹ, làm tươi sắc môi theo hướng thật và mềm mại.",
    image: "/images/service-phun-moi.jpg",
    alt: "Dịch vụ phun môi tại Vũng Tàu",
  },
  {
    slug: "filler-moi-vung-tau",
    title: "Filler",
    description: "Tạo điểm nhấn vừa đủ cho môi, cằm hoặc vùng cần cân chỉnh — ưu tiên sự hài hòa.",
    image: "/images/service-filler.jpg",
    alt: "Dịch vụ filler tại Vũng Tàu",
  },
  {
    slug: "botox-gon-ham-vung-tau",
    title: "Botox / Gọn hàm",
    description: "Hỗ trợ gương mặt thon gọn, xóa nhăn theo hướng tự nhiên — tư vấn liều phù hợp trước.",
    image: "/images/service-botox.jpg",
    alt: "Dịch vụ botox gọn hàm tại Vũng Tàu",
  },
  {
    slug: "meso-cang-bong-cap-am-vung-tau",
    title: "Meso căng bóng",
    description: "Cấp ẩm sâu, phục hồi độ mịn và căng bóng nhẹ cho da thiếu ẩm, xỉn màu.",
    image: "/images/service-meso.jpg",
    alt: "Dịch vụ meso căng bóng tại Vũng Tàu",
  },
  {
    slug: "cham-soc-da-mun-vung-tau",
    title: "Chăm sóc da mụn",
    description: "Lấy nhân mụn, làm sạch và phục hồi da theo từng tình trạng — theo dõi qua từng buổi.",
    image: "/images/service-da-mun.jpg",
    alt: "Dịch vụ chăm sóc da mụn tại Vũng Tàu",
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
    el.style.transform = "translateY(28px)";
    el.style.transition = `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          io.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -20px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  return (
    <article
      ref={ref}
      className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[color:var(--border-soft)] bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--surface-soft)]">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[17px] font-bold text-[color:var(--foreground)] leading-snug">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-[color:var(--muted)]">
          {service.description}
        </p>
        <Link
          href={`/dich-vu/${service.slug}`}
          className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--earth)]"
        >
          Xem chi tiết
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}

export function ServiceGrid() {
  return (
    <section id="dich-vu" className="section-white py-16 lg:py-24">
      <div className="section-frame px-4 lg:px-6">
        <Reveal className="mb-10 max-w-2xl">
          <p className="eyebrow">Dịch vụ làm đẹp tại Vũng Tàu</p>
          <h2 className="editorial-title mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Phun xăm, filler, botox &amp; chăm sóc da tại Vũng Tàu
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
            Không làm theo trend — chỉ làm theo điều gương mặt, làn da và môi mày bạn thực sự cần.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {homeServices.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/dich-vu"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-white px-5 text-sm font-semibold text-[color:var(--foreground)] hover:border-[color:var(--earth)]"
          >
            Xem tất cả dịch vụ
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
