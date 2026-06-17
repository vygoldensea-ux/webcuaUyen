import { MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./reveal";

export function FinalCTA() {
  return (
    <section id="final-cta" className="section-frame px-4 py-14 lg:px-6 lg:py-20">
      <Reveal>
        <div className="overflow-hidden rounded-[28px] bg-[color:var(--foreground)] px-7 py-10 sm:px-10 lg:px-14 lg:py-14">
          <p className="eyebrow" style={{ color: "rgba(232,184,172,0.75)" }}>
            Tư vấn trước khi làm
          </p>
          <h2 className="editorial-title mt-4 max-w-2xl text-3xl text-white sm:text-4xl lg:text-5xl">
            Không chắc mình phù hợp dịch vụ nào?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
            Gửi hình hoặc mô tả tình trạng hiện tại, Uyn sẽ tư vấn trước để bạn biết nên làm gì,
            chưa nên làm gì và cần chuẩn bị gì.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://zalo.me"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[color:var(--cta)] px-6 text-sm font-semibold text-white hover:bg-[color:var(--cta-hover)]"
            >
              <MessageCircleMore className="h-4 w-4" />
              Nhắn Zalo tư vấn
            </a>
            <Link
              href="/bang-gia"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white hover:border-white/40"
            >
              Xem bảng giá
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
