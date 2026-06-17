import { MessageCircleMore, PhoneCall } from "lucide-react";
import Link from "next/link";

const chips = ["Tư vấn trước khi làm", "Không ép dịch vụ", "Theo dõi sau khi làm"] as const;

export function QuickBookBand() {
  return (
    <div className="section-frame px-4 pb-4 lg:px-6">
      <div className="flex flex-col gap-4 rounded-[22px] border border-[color:var(--border-soft)] bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-rose)] px-3 py-1.5 text-xs font-medium text-[color:var(--earth)]"
            >
              {chip}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <a
            href="tel:0900000000"
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[color:var(--border-soft)] px-4 text-sm font-medium text-[color:var(--foreground)] hover:border-[color:var(--earth)]"
          >
            <PhoneCall className="h-3.5 w-3.5 text-[color:var(--earth)]" />
            0900 000 000
          </a>
          <Link
            href="#final-cta"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[color:var(--cta)] px-4 text-sm font-semibold text-white hover:bg-[color:var(--cta-hover)]"
          >
            <MessageCircleMore className="h-3.5 w-3.5" />
            Nhắn Zalo
          </Link>
        </div>
      </div>
    </div>
  );
}
