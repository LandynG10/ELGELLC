import Reveal from "./Reveal";
import { PACKAGES, CARE_PLAN } from "../content";

export default function Services() {
  return (
    <section id="services" className="relative border-t border-[var(--line)] py-28 md:py-36" aria-label="Services and pricing">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mb-16 md:mb-20">
          <p className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--muted)]">
            Services &amp; Pricing / 01
          </p>
          <h2 className="text-balance max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-tight text-[var(--fg)]">
            Clear packages. Real prices. No surprises.
          </h2>
          <p className="text-balance mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
            Pick what fits, or tell us what you need and we&apos;ll put together a fixed quote.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 xl:grid-cols-4">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 0.06} className="flex">
              <article
                className={`relative flex w-full flex-col p-8 transition-colors ${
                  pkg.featured ? "bg-[var(--panel-2)]" : "bg-[var(--bg)]"
                }`}
              >
                {pkg.featured ? (
                  <span className="absolute right-6 top-6 bg-[var(--accent)] px-2 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--accent-fg)]">
                    Recommended
                  </span>
                ) : null}
                <h3 className="font-display text-2xl font-medium tracking-tight text-[var(--fg)]">{pkg.name}</h3>
                <p className="mt-3 font-display text-xl text-[var(--accent)]">{pkg.price}</p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--muted-2)]">
                  {pkg.timeline}
                </p>
                <p className="mt-6 leading-relaxed text-[var(--muted)]">{pkg.pitch}</p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-[var(--line)] pt-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[var(--fg)]">
                      <span aria-hidden="true" className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-[var(--accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={() => window.dispatchEvent(new CustomEvent("elge:choose-package", { detail: pkg.name }))}
                  className={`mt-8 inline-flex items-center justify-center px-5 py-3 text-sm font-medium no-underline transition-colors ${
                    pkg.featured
                      ? "bg-[var(--fg)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]"
                      : "border border-[var(--line-strong)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  }`}
                >
                  {pkg.id === "custom" ? "Talk it through" : "Get a free preview"}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8 flex flex-col gap-2 border border-[var(--line)] p-6 md:flex-row md:items-center md:gap-6">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--muted)]">
            Care plan · {CARE_PLAN.price}
          </p>
          <p className="text-sm leading-relaxed text-[var(--muted)]">{CARE_PLAN.copy}</p>
        </Reveal>
      </div>
    </section>
  );
}
