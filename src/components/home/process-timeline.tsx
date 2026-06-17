import { processSteps } from "@/data/home";
import { Reveal } from "./reveal";

export function ProcessTimeline() {
  return (
    <section className="section-warm py-16 lg:py-24">
      <div className="section-frame px-4 lg:px-6">
        <Reveal className="mb-10 max-w-xl">
          <p className="eyebrow">Quy trình</p>
          <h2 className="editorial-title mt-3 text-3xl sm:text-4xl">
            Làm sao một buổi tại Chòi của Uyn diễn ra?
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step} delay={index * 0.07}>
              <article className="relative rounded-[20px] border border-[color:var(--border-soft)] bg-white px-5 py-6 shadow-sm">
                <span className="editorial-title block text-5xl font-bold leading-none text-[color:var(--rose)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[15px] font-bold leading-snug text-[color:var(--foreground)]">
                  {step}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
