import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import ShotPanel from "./ShotPanel";
import { asset } from "../lib/asset";

const PANELS = [
  {
    key: "discovery",
    index: "01",
    label: "Discovery",
    src: asset("images/pjrc/discovery.jpg"),
    span: "lg:col-span-4",
    copy: "We started inside PJRC's operations, mapping every handoff between intake, underwriting, and carrier communication before writing a line of code. The platform's architecture was shaped by how the business actually runs, not a generic insurance template.",
  },
  {
    key: "underwriting",
    index: "02",
    label: "Underwriting Workflow",
    src: asset("images/pjrc/underwriting.jpg"),
    span: "lg:col-span-4",
    copy: "A purpose-built workspace gives underwriters a single view of applicant data, risk signals, and prior decisions, replacing scattered spreadsheets with a workflow that moves cases forward instead of stalling them.",
  },
  {
    key: "routing",
    index: "03",
    label: "Carrier Routing",
    src: asset("images/pjrc/carrier-routing.jpg"),
    span: "lg:col-span-4",
    copy: "Business rules determine, case by case, which carrier a policy should route to, encoded directly into the platform so routing decisions are consistent, auditable, and no longer dependent on institutional memory.",
  },
  {
    key: "enrollment",
    index: "04",
    label: "Enrollment Handoff",
    src: asset("images/pjrc/enrollment.jpg"),
    span: "lg:col-span-6",
    copy: "Once a policy clears underwriting, enrollment happens without re-entry, re-verification, or a second system of record: a clean, structured handoff from decision to activation.",
  },
  {
    key: "architecture",
    index: "05",
    label: "Platform Architecture",
    src: asset("images/pjrc/architecture.jpg"),
    span: "lg:col-span-6",
    copy: "Built on a modular architecture designed to absorb new carriers, new products, and new compliance requirements without a rebuild: infrastructure meant to outlast this year's roadmap.",
  },
];

function ScrollBreakApart() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const coverOpacity = useTransform(scrollYProgress, [0, 0.14, 0.32], [1, 1, 0]);
  const coverScale = useTransform(scrollYProgress, [0, 0.32], [1, 0.92]);
  const coverBlur = useTransform(scrollYProgress, [0, 0.32], [0, 6]);
  const coverFilter = useTransform(coverBlur, (v) => `blur(${v}px)`);

  return (
    <div ref={ref} className="relative hidden lg:block lg:h-[280vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1440px] px-10">
          <div className="relative h-[70vh]">
            {!reduceMotion && (
              <motion.div
                style={{
                  opacity: coverOpacity,
                  scale: coverScale,
                  filter: coverFilter,
                }}
                className="absolute inset-0 z-10 overflow-hidden border border-[var(--line)] bg-[var(--panel)]"
              >
                <ShotPanel
                  src={asset("images/pjrc/cover.jpg")}
                  alt="PJRC Insurance platform overview"
                  label="PJRC Insurance"
                  sublabel="Platform Overview"
                  className="h-full w-full"
                />
              </motion.div>
            )}

            <div className="grid h-full grid-cols-12 gap-3">
              {PANELS.map((panel, i) => {
                const start = 0.12 + i * 0.09;
                const end = start + 0.24;
                return (
                  <PanelTile
                    key={panel.key}
                    panel={panel}
                    scrollYProgress={scrollYProgress}
                    start={reduceMotion ? 0 : start}
                    end={reduceMotion ? 0 : end}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PanelTile({ panel, scrollYProgress, start, end }) {
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [36, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.94, 1]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className={`col-span-12 ${panel.span}`}
    >
      <ShotPanel
        src={panel.src}
        alt={`${panel.label} screenshot`}
        index={Number(panel.index)}
        label={`${panel.index} / ${panel.label}`}
        className="h-full min-h-[220px]"
      />
    </motion.div>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="relative border-t border-[var(--line)] py-28 md:py-36" aria-label="Featured work">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mb-16 flex items-baseline justify-between gap-6 md:mb-20">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--muted)]">
            Selected Work / 01
          </p>
          <p className="hidden font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--muted-2)] md:block">
            Insurance &middot; Operations Platform
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-balance max-w-4xl font-display text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-tight text-[var(--fg)]">
            PJRC Insurance
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-6 max-w-2xl">
          <p className="text-balance text-lg leading-relaxed text-[var(--muted)]">
            ELGE partnered with PJRC Insurance to replace a patchwork of
            spreadsheets, email chains, and legacy portals with a single
            platform built around how underwriters, carriers, and enrollees
            actually work.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 md:mt-20">
        <ScrollBreakApart />

        {/* Mobile / static fallback: stacked, no scroll-pin */}
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-3 px-6 lg:hidden md:px-10">
          <Reveal className="min-h-[240px]">
            <ShotPanel
              src={asset("images/pjrc/cover.jpg")}
              alt="PJRC Insurance platform overview"
              label="PJRC Insurance"
              sublabel="Platform Overview"
              className="h-full min-h-[240px]"
            />
          </Reveal>
          {PANELS.map((panel, i) => (
            <Reveal key={panel.key} delay={i * 0.05} className="min-h-[200px]">
              <ShotPanel
                src={panel.src}
                alt={`${panel.label} screenshot`}
                index={Number(panel.index)}
                label={`${panel.index} / ${panel.label}`}
                className="h-full min-h-[200px]"
              />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[1440px] px-6 md:mt-28 md:px-10">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 border-t border-[var(--line)] pt-14 md:grid-cols-2">
          {PANELS.map((panel, i) => (
            <Reveal key={panel.key} delay={(i % 2) * 0.06}>
              <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--muted-2)]">
                {panel.index}
              </p>
              <h3 className="mb-3 font-display text-xl font-medium text-[var(--fg)]">
                {panel.label}
              </h3>
              <p className="text-balance leading-relaxed text-[var(--muted)]">
                {panel.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-28 max-w-[1440px] px-6 md:mt-36 md:px-10">
        <div className="border-t border-[var(--line)] pt-16 md:pt-20">
          <Reveal className="mb-12 flex items-baseline justify-between gap-6 md:mb-16">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--muted)]">
              Selected Work / 02
            </p>
            <p className="hidden font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--muted-2)] md:block">
              Baseball &middot; Mobile Web App
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8">
            <Reveal delay={0.08} className="md:order-1 md:col-span-7">
              <ShotPanel
                src={asset("images/pitchtrace/cover.jpg")}
                alt="PitchTrace app screenshot"
                label="PitchTrace"
                sublabel="Live Tracking & Analytics"
                className="min-h-[320px] md:min-h-[440px]"
              />
            </Reveal>

            <Reveal className="md:order-2 md:col-span-5">
              <h3 className="text-balance mb-5 font-display text-[clamp(1.8rem,4vw,3rem)] font-medium tracking-tight text-[var(--fg)]">
                PitchTrace
              </h3>
              <p className="text-balance mb-6 leading-relaxed text-[var(--muted)]">
                PitchTrace gives baseball coaches professional-grade
                pitching analytics without professional-grade hardware.
                Coaches tap ball, strike, or in-play as it happens, and
                PitchTrace turns it into pitch counts, workload monitoring,
                strike percentage, pitch location, and season-long trends
                the moment the game ends.
              </p>
              <ul className="mb-8 flex flex-wrap gap-x-4 gap-y-2">
                {["Mobile Web App", "Live Analytics", "Youth to College Baseball"].map(
                  (tag) => (
                    <li
                      key={tag}
                      className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[var(--muted-2)]"
                    >
                      {tag}
                    </li>
                  )
                )}
              </ul>
              <a
                href="https://pitchtrace.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-b border-[var(--line-strong)] pb-1 text-sm font-medium text-[var(--fg)] no-underline transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Visit pitchtrace.com &rarr;
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
