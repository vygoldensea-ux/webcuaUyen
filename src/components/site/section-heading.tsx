type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="eyebrow text-[11px] text-[color:var(--earth)]">{eyebrow}</p>
      ) : null}
      <h2 className="editorial-title mt-4 text-4xl leading-tight text-[color:var(--foreground)] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">{description}</p>
      ) : null}
    </div>
  );
}
