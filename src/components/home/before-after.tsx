import Image from "next/image";
import { Reveal } from "./reveal";

const beforeAfterItems = [
  {
    title: "Cân chỉnh môi – giữ form tự nhiên",
    image: "/images/before-after-1.jpg",
    alt: "Kết quả cân chỉnh môi tại Vũng Tàu",
  },
  {
    title: "Phun môi xử lý nền nhợt",
    image: "/images/before-after-2.jpg",
    alt: "Kết quả phun môi tại Vũng Tàu",
  },
  {
    title: "Dáng mày mềm, không quá sắc",
    image: "/images/before-after-3.jpg",
    alt: "Kết quả phun mày tại Vũng Tàu",
  },
  {
    title: "Da sau chăm sóc phục hồi",
    image: "/images/before-after-4.jpg",
    alt: "Kết quả chăm sóc da tại Vũng Tàu",
  },
] as const;

export function BeforeAfter() {
  return (
    <section id="before-after" className="section-warm py-16 lg:py-24">
      <div className="section-frame px-4 lg:px-6">
        <Reveal className="mb-10 max-w-2xl">
          <p className="eyebrow">Khách hàng thực tế tại Vũng Tàu</p>
          <h2 className="editorial-title mt-3 text-3xl sm:text-4xl">
            Kết quả thực tế từ khách của Uyn
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
            Mỗi ca được chụp lại — đánh giá theo sự tự nhiên, cân đối và phù hợp với từng người.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 items-stretch">
          {beforeAfterItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="flex">
              <article className="flex w-full flex-col overflow-hidden rounded-[20px] border border-[color:var(--border-soft)] bg-white shadow-sm">
                {/* Fixed aspect ratio — all images same frame */}
                <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden bg-[color:var(--surface-soft)]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 inline-flex rounded-full border border-white/60 bg-white/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[color:var(--earth)]">
                    Thực tế
                  </div>
                </div>
                {/* Fixed height text area so all cards match */}
                <div className="flex flex-1 items-center px-4 py-4">
                  <h3 className="text-[13px] font-bold leading-snug text-[color:var(--foreground)]">
                    {item.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 text-xs text-[color:var(--muted-light)]">
          Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.
        </p>
      </div>
    </section>
  );
}
