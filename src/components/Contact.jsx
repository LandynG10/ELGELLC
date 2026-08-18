import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

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

        <Reveal delay={0.16} className="mx-auto mt-10 flex items-center justify-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-[var(--line-strong)]" />
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[var(--muted-2)]">
            Built for teams where the workflow is the product.
          </p>
          <span aria-hidden="true" className="h-px w-8 bg-[var(--line-strong)]" />
        </Reveal>

        <Reveal delay={0.22}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
