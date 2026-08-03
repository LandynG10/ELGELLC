import Reveal from "./Reveal";

const CONTACT_EMAIL = "landyngrant04@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[var(--line)] py-28 md:py-40"
      aria-label="Contact"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[50vw] w-[50vw] max-h-[560px] max-w-[560px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-[0.14] blur-[110px]"
        style={{ background: "var(--accent)" }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 text-center md:px-10">
        <Reveal>
          <p className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--muted)]">
            Start a Project / 04
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="text-balance mx-auto max-w-4xl font-display text-[clamp(2.2rem,6vw,5rem)] font-medium leading-[1.02] tracking-tight text-[var(--fg)]">
            Let's build something that moves your business forward.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-balance mx-auto mt-8 max-w-lg text-lg leading-relaxed text-[var(--muted)]">
            Tell us what's slowing your team down, or what you're trying to
            build. We'll tell you honestly whether we're the right team for
            it.
          </p>
        </Reveal>

        <Reveal delay={0.18} className="mt-12 flex flex-col items-center gap-8">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group relative inline-flex items-center gap-3 overflow-hidden border border-[var(--fg)] px-8 py-4 text-base font-medium text-[var(--fg)] no-underline"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--accent-fg)]">
              Email us
            </span>
            <span
              aria-hidden="true"
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent-fg)]"
            >
              &rarr;
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-mono text-sm text-[var(--muted)] no-underline transition-colors hover:text-[var(--fg)]"
          >
            {CONTACT_EMAIL}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
