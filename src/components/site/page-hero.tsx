import Image from "next/image";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="section-frame px-4 pt-8 pb-16 lg:px-6 lg:pt-12 lg:pb-20">
      <div className="grid gap-8 overflow-hidden rounded-[32px] border border-[color:var(--border-soft)] bg-white px-6 py-8 shadow-[0_30px_80px_rgba(95,68,58,0.07)] sm:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:px-12 lg:py-12">
        <div className="relative z-10">
          {eyebrow ? (
            <p className="eyebrow text-[11px] text-[color:var(--earth)]">{eyebrow}</p>
          ) : null}
          <h1 className="editorial-title mt-4 text-balance text-[2.5rem] leading-[1.02] text-[color:var(--foreground)] sm:text-[3.35rem] lg:text-[4.5rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">{description}</p>
          {primaryCta || secondaryCta ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <a
                  href={primaryCta.href}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--cta)] px-6 text-sm font-semibold text-white hover:bg-[color:var(--cta-hover)]"
                >
                  {primaryCta.label}
                </a>
              ) : null}
              {secondaryCta ? (
                <a
                  href={secondaryCta.href}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-6 text-sm font-semibold text-[color:var(--foreground)]"
                >
                  {secondaryCta.label}
                </a>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-[color:var(--surface-soft)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,184,172,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(215,185,138,0.18),transparent_24%)]" />
          {image ? (
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          ) : null}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_15%,rgba(47,39,36,0.1)_100%)]" />
        </div>
      </div>
    </section>
  );
}
