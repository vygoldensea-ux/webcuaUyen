import { processSteps } from "@/data/home";
import { Reveal } from "./reveal";

export function ProcessTimeline() {
  return (
    <section className="section-frame px-4 py-20 lg:px-6 lg:py-28">
      <Reveal className="mb-10 max-w-3xl">
        <p className="eyebrow text-[11px] text-[color:var(--earth)]">Quy trình</p>
        <h2 className="editorial-title mt-4 text-4xl text-[color:var(--foreground)] sm:text-5xl">
          Quy trình tại Chòi của Uyn
        </h2>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-5">
        {processSteps.map((step, index) => (
          <Reveal key={step} delay={index * 0.05} className="relative">
            <article className="relative h-full rounded-[28px] border border-[color:var(--border-soft)] bg-white px-5 py-6 shadow-[0_18px_50px_rgba(95,68,58,0.04)]">
              <span className="editorial-title text-5xl text-[color:var(--rose)]/90">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-[color:var(--foreground)]">
                {step}
              </h3>
            </article>
            {index < processSteps.length - 1 ? (
              <span className="pointer-events-none absolute top-1/2 right-[-14px] hidden h-px w-7 bg-[color:var(--border-soft)] lg:block" />
            ) : null}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
