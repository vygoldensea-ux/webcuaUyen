import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Liên hệ và đặt lịch | Chòi của Uyn",
  description:
    "Đặt lịch tư vấn tại Chòi của Uyn. Gửi hình môi, mày, da hoặc vùng muốn cải thiện để được tư vấn trước.",
  path: "/lien-he",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Liên hệ"
        title="Đặt lịch tư vấn tại Chòi của Uyn"
        description="Bạn có thể gửi hình tình trạng môi, mày, da hoặc vùng muốn cải thiện để được tư vấn trước."
        image="/images/placeholder-clinic-soft.svg"
        imageAlt="Không gian sáng sạch cho trang liên hệ"
      />

      <section className="section-frame px-4 py-16 lg:px-6 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <form className="rounded-[30px] border border-[color:var(--border-soft)] bg-white px-6 py-6 shadow-[0_18px_40px_rgba(95,68,58,0.05)]">
            <h2 className="editorial-title text-3xl text-[color:var(--foreground)]">Form đặt lịch</h2>
            <div className="mt-6 grid gap-4">
              <Field label="Họ tên" placeholder="Tên của bạn" />
              <Field label="Số điện thoại / Zalo" placeholder="0900..." />
              <Field label="Dịch vụ quan tâm" placeholder="Ví dụ: phun môi, meso..." />
              <TextArea label="Tình trạng hiện tại" placeholder="Mô tả nhanh tình trạng môi, mày, da hoặc vùng muốn cải thiện" />
              <Field label="Thời gian muốn đặt lịch" placeholder="Ví dụ: cuối tuần hoặc sau 18:00" />
              <div>
                <label className="mb-2 block text-sm font-medium text-[color:var(--foreground)]">Upload hình nếu có</label>
                <div className="rounded-[22px] border border-dashed border-[color:var(--border-soft)] bg-[color:var(--surface-rose)]/42 px-4 py-8 text-sm text-[color:var(--muted)]">
                  Có thể gửi hình qua Zalo nếu chưa upload trực tiếp trên website.
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--cta)] px-6 text-sm font-semibold text-white hover:bg-[color:var(--cta-hover)]"
            >
              Gửi thông tin tư vấn
            </button>
          </form>

          <div className="grid gap-5">
            <div className="rounded-[30px] border border-[color:var(--border-soft)] bg-white px-6 py-6 shadow-[0_18px_40px_rgba(95,68,58,0.05)]">
              <h2 className="editorial-title text-3xl text-[color:var(--foreground)]">Thông tin liên hệ</h2>
              <div className="mt-5 space-y-3 text-[16px] leading-8 text-[color:var(--muted)]">
                <p>Hotline / Zalo: 0900 000 000</p>
                <p>Facebook: Chòi của Uyn</p>
                <p>Instagram: @choicuauyn</p>
                <p>TikTok: @choicuauyn</p>
                <p>Địa chỉ: Vũng Tàu</p>
                <p>Giờ làm việc: 09:00 - 20:00</p>
              </div>
            </div>
            <div className="rounded-[30px] border border-[color:var(--border-soft)] bg-[color:var(--surface-rose)]/42 px-6 py-6 shadow-[0_18px_40px_rgba(95,68,58,0.04)]">
              <h2 className="editorial-title text-3xl text-[color:var(--foreground)]">Google Map</h2>
              <div className="mt-5 min-h-[260px] rounded-[24px] border border-dashed border-[color:var(--border-soft)] bg-white/70 p-5 text-[15px] leading-7 text-[color:var(--muted)]">
                Placeholder vị trí Google Map tại Vũng Tàu. Có thể thay bằng iframe hoặc embed thật ở bước tiếp theo.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[color:var(--foreground)]">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="h-12 w-full rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-4 text-sm outline-none"
      />
    </div>
  );
}

function TextArea({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[color:var(--foreground)]">{label}</label>
      <textarea
        placeholder={placeholder}
        rows={5}
        className="w-full rounded-[22px] border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-4 py-3 text-sm outline-none"
      />
    </div>
  );
}
