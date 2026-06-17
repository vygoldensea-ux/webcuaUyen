type CtaPanelProps = {
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaPanel({
  title,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaPanelProps) {
  return (
    <section className="section-frame px-4 py-12 lg:px-6 lg:py-16">
      <div className="rounded-[32px] border border-[color:var(--border-soft)] bg-[linear-gradient(135deg,#fff8f5_0%,#f8eee8_48%,#fff6f1_100%)] px-6 py-10 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h2 className="editorial-title text-4xl text-[color:var(--foreground)] sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={primaryHref}
              className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--cta)] px-6 text-sm font-semibold text-white hover:bg-[color:var(--cta-hover)]"
            >
              {primaryLabel}
            </a>
            {secondaryLabel && secondaryHref ? (
              <a
                href={secondaryHref}
                className="inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-white px-6 text-sm font-semibold text-[color:var(--foreground)]"
              >
                {secondaryLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
