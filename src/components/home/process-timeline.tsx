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

        {/* items-stretch ensures all cards fill the row height equally */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 items-stretch">
          {processSteps.map((step, index) => (
            <Reveal key={step} delay={index * 0.07} className="flex">
              <article className="flex w-full flex-col rounded-[20px] border border-[color:var(--border-soft)] bg-white px-5 py-6 shadow-sm">
                <span className="editorial-title block text-5xl font-bold leading-none text-[color:var(--rose)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 flex-1 text-[14px] font-bold leading-snug text-[color:var(--foreground)]">
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
