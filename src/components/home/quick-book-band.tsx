import { MessageCircleMore, PhoneCall, ShieldCheck, Star, Clock } from "lucide-react";
import Link from "next/link";

const trust = [
  { icon: ShieldCheck, label: "Tư vấn trước khi làm" },
  { icon: Star, label: "Không ép dịch vụ" },
  { icon: Clock, label: "Theo dõi sau khi làm" },
] as const;

export function QuickBookBand() {
  return (
    <div className="section-frame px-4 pb-5 lg:px-6">
      <div className="overflow-hidden rounded-[22px] border border-[color:var(--border-soft)] bg-white px-5 py-4 shadow-sm sm:px-7 sm:py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {trust.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-[13px] font-medium text-[color:var(--muted)]">
                <Icon className="h-3.5 w-3.5 text-[color:var(--earth)] shrink-0" />
                {label}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:0900000000"
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[color:var(--border-soft)] px-4 text-sm font-semibold text-[color:var(--foreground)] hover:border-[color:var(--earth)]"
            >
              <PhoneCall className="h-3.5 w-3.5 text-[color:var(--earth)]" />
              0900 000 000
            </a>
            <Link
              href="#final-cta"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[color:var(--cta)] px-4 text-sm font-bold text-white hover:bg-[color:var(--cta-hover)]"
            >
              <MessageCircleMore className="h-3.5 w-3.5" />
              Nhắn Zalo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
