import { Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="border-b border-[color:var(--border-soft)] bg-[color:var(--surface-rose)]/90">
      <div className="section-frame flex min-h-11 items-center justify-center gap-2 px-4 py-2 text-center text-sm text-[color:var(--earth)]">
        <Sparkles className="h-4 w-4 text-[color:var(--champagne)]" aria-hidden="true" />
        <p>
          Ưu đãi khai trương: Tư vấn miễn phí + soi tình trạng da/môi/mày trước khi làm
        </p>
      </div>
    </div>
  );
}
