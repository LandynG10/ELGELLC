import Reveal from "./Reveal";
import { FAQ } from "../content";

export default function Faq() {
  return (
    <section id="faq" className="relative border-t border-[var(--line)] py-28 md:py-36" aria-label="Frequently asked questions">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-4">
          <p className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--muted)]">Questions / 05</p>
          <h2 className="text-balance font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.04] tracking-tight text-[var(--fg)]">
            Straight answers.
          </h2>
        </Reveal>
        <div className="border-t border-[var(--line)] md:col-span-8">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <details className="group border-b border-[var(--line)] py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-medium text-[var(--fg)] transition-colors hover:text-[var(--accent)] [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-mono text-[var(--muted-2)] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
