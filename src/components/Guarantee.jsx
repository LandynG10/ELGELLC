import Reveal from "./Reveal";
import { GUARANTEE } from "../content";

export default function Guarantee() {
  return (
    <section id="guarantee" className="relative overflow-hidden border-t border-[var(--line)] py-24 md:py-32" aria-label="Our guarantee">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-[40vw] w-[40vw] max-h-[480px] max-w-[480px] -translate-y-1/2 translate-x-1/3 rounded-full opacity-[0.12] blur-[110px]"
        style={{ background: "var(--accent)" }}
      />
      <div className="relative mx-auto grid max-w-[1440px] gap-12 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-5">
          <p className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--muted)]">
            The Guarantee / 02
          </p>
          <h2 className="text-balance font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.04] tracking-tight text-[var(--fg)]">
            You see your new site <span className="text-[var(--accent)]">before</span> you spend a dollar.
          </h2>
        </Reveal>
        <div className="space-y-px md:col-span-7">
          {GUARANTEE.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="flex gap-6 border-b border-[var(--line)] py-7 first:pt-0">
                <span className="font-mono text-sm text-[var(--muted-2)]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-xl font-medium text-[var(--fg)]">{g.title}</h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-[var(--muted)]">{g.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
