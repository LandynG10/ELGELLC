import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

const STEPS = [
  {
    index: "01",
    title: "Discover",
    copy: "We learn how your business actually operates: its workflows, constraints, and the decisions that get made every day.",
  },
  {
    index: "02",
    title: "Architect",
    copy: "We design the system before we design the interface: data models, integrations, and technical decisions that hold up under real use.",
  },
  {
    index: "03",
    title: "Build",
    copy: "Software shipped in working increments, not a single reveal at the end. You see progress continuously, not quarterly.",
  },
  {
    index: "04",
    title: "Launch & Support",
    copy: "We stay in the system after launch: refining, extending, and supporting what we built as your business changes.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      className="relative border-t border-[var(--line)] py-28 md:py-36"
      aria-label="Process"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mb-16 md:mb-20">
          <p className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--muted)]">
            Process / 03
          </p>
          <h2 className="text-balance max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-tight text-[var(--fg)]">
            A disciplined path from problem to product.
          </h2>
        </Reveal>

        <div ref={ref} className="relative">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-[var(--line)] md:block" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="absolute left-0 right-0 top-5 hidden h-px origin-left bg-[var(--accent)] md:block"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.08}>
                <div className="relative pt-0 md:pt-12">
                  <span className="absolute left-0 top-0 hidden h-2.5 w-2.5 -translate-y-1/2 border border-[var(--accent)] bg-[var(--bg)] md:block" />
                  <span className="mb-4 block font-mono text-sm text-[var(--muted-2)]">
                    {step.index}
                  </span>
                  <h3 className="mb-3 font-display text-xl font-medium text-[var(--fg)]">
                    {step.title}
                  </h3>
                  <p className="text-balance leading-relaxed text-[var(--muted)]">
                    {step.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
