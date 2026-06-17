"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Reveal } from "./reveal";

gsap.registerPlugin(ScrollTrigger);

const homeServices = [
  {
    slug: "phun-xam-chan-may-vung-tau",
    groupSlug: "phun-xam-tham-my",
    title: "Phun xăm chân mày",
    description: "Thiết kế dáng mày mềm, tự nhiên, cân với gương mặt — tư vấn dáng và màu trước khi làm.",
    image: "/images/service-phun-may.jpg",
    alt: "Dịch vụ phun xăm chân mày tại Vũng Tàu – kết quả mềm và tự nhiên",
  },
  {
    slug: "phun-moi-vung-tau",
    groupSlug: "phun-xam-tham-my",
    title: "Phun môi",
    description: "Xử lý nền môi nhợt hoặc thâm nhẹ, làm tươi sắc môi theo hướng thật và mềm mại.",
    image: "/images/service-phun-moi.jpg",
    alt: "Dịch vụ phun môi tại Vũng Tàu – sắc môi tự nhiên và tươi hơn",
  },
  {
    slug: "filler-moi-vung-tau",
    groupSlug: "filler-botox-vung-tau",
    title: "Filler",
    description: "Tạo điểm nhấn vừa đủ cho môi, cằm hoặc vùng cần cân chỉnh — ưu tiên sự hài hòa.",
    image: "/images/service-filler.jpg",
    alt: "Dịch vụ filler môi và gương mặt tại Vũng Tàu – cân đối và tự nhiên",
  },
  {
    slug: "botox-gon-ham-vung-tau",
    groupSlug: "filler-botox-vung-tau",
    title: "Botox / Gọn hàm",
    description: "Hỗ trợ gương mặt thon gọn, xóa nhăn theo hướng tự nhiên — tư vấn liều phù hợp trước.",
    image: "/images/service-botox.jpg",
    alt: "Dịch vụ botox gọn hàm tại Vũng Tàu – gương mặt thon gọn tự nhiên",
  },
  {
    slug: "meso-cang-bong-cap-am-vung-tau",
    groupSlug: "cham-soc-da-vung-tau",
    title: "Meso căng bóng",
    description: "Cấp ẩm sâu, phục hồi độ mịn và căng bóng nhẹ cho da thiếu ẩm, xỉn màu.",
    image: "/images/service-meso.jpg",
    alt: "Dịch vụ meso căng bóng cấp ẩm tại Vũng Tàu – da mịn và căng hơn",
  },
  {
    slug: "cham-soc-da-mun-vung-tau",
    groupSlug: "cham-soc-da-vung-tau",
    title: "Chăm sóc da mụn",
    description: "Lấy nhân mụn, làm sạch và phục hồi da theo từng tình trạng — theo dõi qua từng buổi.",
    image: "/images/service-da-mun.jpg",
    alt: "Dịch vụ chăm sóc da mụn tại Vũng Tàu – sạch và phục hồi theo tình trạng",
  },
] as const;

export function ServiceGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".service-card", {
        opacity: 0,
        y: 60,
        scale: 0.96,
        duration: 0.75,
        ease: "power3.out",
        stagger: { amount: 0.5, from: "start" },
        scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
      });
    },
    { scope: gridRef },
  );

  return (
    <section id="dich-vu" className="section-frame px-4 py-20 lg:px-6 lg:py-28">
      <Reveal className="mb-10 max-w-3xl">
        <p className="eyebrow text-[11px] text-[color:var(--earth)]">Dịch vụ làm đẹp tại Vũng Tàu</p>
        <h2 className="editorial-title mt-4 text-4xl text-[color:var(--foreground)] sm:text-5xl">
          Phun xăm, filler, botox &amp; chăm sóc da tại Vũng Tàu
        </h2>
        <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
          Mỗi dịch vụ đều bắt đầu bằng tư vấn thật — không làm theo trend, chỉ làm theo điều
          gương mặt, làn da và môi mày bạn thực sự cần.
        </p>
      </Reveal>

      <div ref={gridRef} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {homeServices.map((service) => (
          <article
            key={service.slug}
            className="service-card group flex h-full flex-col overflow-hidden rounded-[28px] border border-[color:var(--border-soft)] bg-white shadow-[0_20px_50px_rgba(101,72,61,0.05)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--surface-soft)]">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(47,39,36,0.06)_100%)]" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-[color:var(--foreground)]">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[color:var(--muted)]">
                {service.description}
              </p>
              <Link
                href={`/dich-vu/${service.slug}`}
                className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--earth)]"
              >
                Xem chi tiết
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/dich-vu"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-white px-6 text-sm font-semibold text-[color:var(--foreground)] hover:border-[color:var(--earth)]/40"
        >
          Xem tất cả dịch vụ
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
