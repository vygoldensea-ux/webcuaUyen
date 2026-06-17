import Image from "next/image";
import Link from "next/link";
import { navItems, servicesGroupedForMenu } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border-soft)] bg-white/84 backdrop-blur-sm">
      <div className="section-frame grid gap-10 px-4 py-14 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr] lg:px-6">
        <div>
          <Link href="/" className="inline-block" aria-label="Chòi của Uyn - Trang chủ">
            <span className="sr-only">Chòi của Uyn - Mini Spa & Aesthetics</span>
            <Image
              src="/images/logo-uyen-clean.svg"
              alt="Logo Chòi của Uyn"
              width={420}
              height={220}
              className="h-auto w-[170px] sm:w-[200px]"
            />
          </Link>
          <p className="mt-6 max-w-sm text-[15px] leading-7 text-[color:var(--muted)]">
            Mini Spa & Aesthetics tại Vũng Tàu – phun xăm, filler, botox, meso và chăm sóc da theo hướng tự nhiên, rõ quy trình.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground)]">Menu</h3>
          <div className="mt-5 grid gap-3 text-[15px] text-[color:var(--muted)]">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-[color:var(--foreground)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground)]">Dịch vụ</h3>
          <div className="mt-5 grid gap-3 text-[15px] text-[color:var(--muted)]">
            {servicesGroupedForMenu.slice(0, 5).map((group) => (
              <Link key={group.slug} href={`/dich-vu/${group.slug}`} className="hover:text-[color:var(--foreground)]">
                {group.menuTitle}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground)]">Contact</h3>
          <div className="mt-5 space-y-3 text-[15px] leading-7 text-[color:var(--muted)]">
            <p>Địa chỉ: Vũng Tàu</p>
            <p>Zalo / Hotline: 0900 000 000</p>
            <p>Facebook / Instagram / TikTok</p>
            <p>Giờ làm việc: 09:00 - 20:00</p>
          </div>

          <div className="mt-6 rounded-[24px] border border-[color:var(--border-soft)] bg-[color:var(--surface-rose)]/65 p-5">
            <p className="text-base font-semibold text-[color:var(--foreground)]">Nhận tips chăm sóc sau làm đẹp</p>
            <form className="mt-4 flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email của bạn"
                className="h-11 flex-1 rounded-full border border-[color:var(--border-soft)] bg-white px-4 text-sm outline-none"
              />
              <button
                type="submit"
                className="h-11 rounded-full bg-[color:var(--cta)] px-5 text-sm font-semibold text-white hover:bg-[color:var(--cta-hover)]"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
