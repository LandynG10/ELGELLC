import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

const STEPS = [
  {
    index: "01",
    title: "Quick call",
    copy: "Fifteen minutes about your business, your customers and what you want more of. No tech talk needed.",
  },
  {
    index: "02",
    title: "Free preview",
    copy: "In about 2 business days you get a working preview of your new site to click through on your phone.",
  },
  {
    index: "03",
    title: "Approve & launch",
    copy: "Like it? Put down a deposit, ask for any changes, and we take it live on your domain, usually within a week.",
  },
  {
    index: "04",
    title: "Grow",
    copy: "Add online booking, an AI receptionist or a care plan whenever you're ready. We stay a text away.",
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
            How It Works / 04
          </p>
          <h2 className="text-balance max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-tight text-[var(--fg)]">
            From first call to live site in about a week.
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
