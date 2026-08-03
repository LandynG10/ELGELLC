import { motion, useReducedMotion } from "framer-motion";
import GridLines from "./GridLines";
import { BrandMark } from "./Logo";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-28"
      aria-label="Introduction"
    >
      <GridLines columns={4} />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/4 left-1/2 h-[60vw] w-[60vw] max-h-[720px] max-w-[720px] -translate-x-1/2 rounded-full opacity-[0.16] blur-[110px]"
        style={{ background: "var(--accent)" }}
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 md:px-10">
        <motion.div {...fadeUp(0)} className="mb-6 flex justify-center md:mb-8">
          <BrandMark className="h-28 w-28 md:h-40 md:w-40" />
        </motion.div>

        <motion.p
          {...fadeUp(0.08)}
          className="mb-6 text-center font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--muted)]"
        >
          ELGE LLC &mdash; Software Studio
        </motion.p>

        <motion.h1
          {...fadeUp(0.16)}
          className="text-balance mx-auto max-w-5xl text-center font-display text-[clamp(2.6rem,7vw,6.4rem)] font-medium leading-[0.98] tracking-tight text-[var(--fg)]"
        >
          Software that moves
          <br />
          businesses <span className="text-[var(--accent)]">forward.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-balance mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-[var(--muted)] md:text-lg"
        >
          ELGE designs and builds custom web platforms, mobile products,
          internal tools, and AI-enabled workflows for companies that can't
          afford to wait on off-the-shelf software.
        </motion.p>

        <motion.div
          {...fadeUp(0.42)}
          className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-2 overflow-hidden border border-[var(--fg)] px-6 py-3 text-sm font-medium text-[var(--fg)] no-underline"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--accent-fg)]">
              View our work
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-[var(--muted)] underline decoration-[var(--line-strong)] underline-offset-8 transition-colors hover:text-[var(--fg)]"
          >
            Start a project &rarr;
          </a>
        </motion.div>
      </div>

      <motion.div
        {...fadeUp(0.6)}
        className="relative mx-auto mb-10 flex w-full max-w-[1440px] items-center justify-between px-6 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--muted-2)] md:px-10"
      >
        <span>Web &middot; Mobile &middot; Automation &middot; AI</span>
        <span className="hidden sm:inline">Scroll</span>
      </motion.div>
    </section>
  );
}
