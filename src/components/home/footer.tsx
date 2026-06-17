import Link from "next/link";
import { navItems } from "@/data/home";

const serviceLinks = [
  "Phun môi",
  "Phun mày",
  "Filler",
  "Botox",
  "Meso",
  "Chăm sóc da mụn",
];

export function Footer() {
  return (
    <footer
      id="lien-he"
      className="border-t border-[color:var(--border-soft)] bg-white/84 backdrop-blur-sm"
    >
      <div className="section-frame grid gap-10 px-4 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-6">
        <div>
          <p className="editorial-title text-3xl tracking-[0.18em] text-[color:var(--foreground)]">
            Uyn
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[color:var(--earth)]">
            Chòi của Uyn
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
            Mini Spa & Aesthetics
          </p>
          <p className="mt-6 max-w-sm text-[15px] leading-7 text-[color:var(--muted)]">
            Mini Spa & Aesthetics tại Vũng Tàu – phun xăm, filler, botox, meso và chăm sóc da
            theo hướng tự nhiên, rõ quy trình.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground)]">
            Menu
          </h3>
          <div className="mt-5 grid gap-3 text-[15px] text-[color:var(--muted)]">
            {navItems.map((item) => (
              <Link key={item} href={item === "Home" ? "/" : `#${slugify(item)}`} className="hover:text-[color:var(--foreground)]">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground)]">
            Dịch vụ
          </h3>
          <div className="mt-5 grid gap-3 text-[15px] text-[color:var(--muted)]">
            {serviceLinks.map((item) => (
              <a key={item} href="#dich-vu" className="hover:text-[color:var(--foreground)]">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground)]">
            Contact
          </h3>
          <div className="mt-5 space-y-3 text-[15px] leading-7 text-[color:var(--muted)]">
            <p>Địa chỉ: Vũng Tàu</p>
            <p>Zalo / Hotline: 0900 000 000</p>
            <p>Facebook / Instagram / TikTok</p>
          </div>

          <div className="mt-6 rounded-[24px] border border-[color:var(--border-soft)] bg-[color:var(--surface-rose)]/65 p-5">
            <p className="text-base font-semibold text-[color:var(--foreground)]">
              Nhận tips chăm sóc sau làm đẹp
            </p>
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

function slugify(label: string) {
  return label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
