import Reveal from "./Reveal";
import { asset } from "../lib/asset";

const HIGHLIGHTS = [
  {
    index: "01",
    title: "Regional Positioning",
    copy: "Local trust and East Texas roots, paired with a clear growth narrative for the new markets PJRC is expanding into.",
  },
  {
    index: "02",
    title: "Coverage, Made Legible",
    copy: "Personal, business, life, health, and financial coverage lines, presented clearly, with a direct path to request a review.",
  },
  {
    index: "03",
    title: "Built to Convert",
    copy: "Every section leads back to one action — request a coverage review — with no dead ends.",
  },
];

function BrowserFrame({ src, alt, url, className = "" }) {
  return (
    <div className={`overflow-hidden border border-[var(--line)] bg-[var(--panel)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-[var(--line)] px-4 py-2.5">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--muted-2)]" />
        <span className="font-mono text-[0.65rem] tracking-wide text-[var(--muted-2)]">
          {url}
        </span>
      </div>
      <img src={src} alt={alt} loading="lazy" className="block h-auto w-full" />
    </div>
  );
}

function PhoneFrame({ src, alt, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-[1.75rem] border-[3px] border-[var(--panel-2)] bg-[var(--panel)] shadow-[0_18px_50px_-25px_rgba(0,0,0,0.5)] ${className}`}
    >
      <div className="flex justify-center py-2">
        <span className="h-1 w-9 rounded-full bg-[var(--muted-2)] opacity-60" />
      </div>
      <img src={src} alt={alt} loading="lazy" className="block h-auto w-full" />
    </div>
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
            Insurance &middot; Regional Brokerage
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-balance max-w-4xl font-display text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-tight text-[var(--fg)]">
            PJRC Insurance
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-6 max-w-2xl">
          <p className="text-balance text-lg leading-relaxed text-[var(--muted)]">
            ELGE designed and built the public-facing platform for PJRC
            Insurance Group, an independent brokerage based in East Texas.
            The site needed to carry the credibility of an established,
            regionally trusted operator while giving PJRC room to expand
            into new markets, without ever feeling like a template.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-20 max-w-[1040px] md:mt-28">
          <Reveal>
            <BrowserFrame
              src={asset("images/pjrc/desktop.jpg")}
              alt="PJRC Insurance homepage, desktop view"
              url="pjrcinsurance.com"
              className="w-full"
            />
          </Reveal>

          <Reveal
            delay={0.12}
            className="mx-auto mt-6 w-[220px] sm:absolute sm:-bottom-14 sm:right-0 sm:mt-0 sm:w-[210px] md:-bottom-16 md:w-[240px]"
          >
            <PhoneFrame
              src={asset("images/pjrc/mobile.jpg")}
              alt="PJRC Insurance homepage, mobile view"
            />
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-x-10 gap-y-12 border-t border-[var(--line)] pt-14 sm:mt-16 md:mt-28 md:grid-cols-3">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal key={item.index} delay={i * 0.06}>
              <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--muted-2)]">
                {item.index}
              </p>
              <h3 className="mb-3 font-display text-xl font-medium text-[var(--fg)]">
                {item.title}
              </h3>
              <p className="text-balance leading-relaxed text-[var(--muted)]">
                {item.copy}
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
            <div className="relative md:order-1 md:col-span-7">
              <Reveal delay={0.08}>
                <BrowserFrame
                  src={asset("images/pitchtrace/cover.jpg")}
                  alt="PitchTrace marketing site, desktop view"
                  url="pitchtrace.com"
                  className="w-full"
                />
              </Reveal>

              <Reveal
                delay={0.16}
                className="mx-auto mt-6 w-[150px] sm:absolute sm:-bottom-12 sm:right-2 sm:mt-0 sm:w-[140px] md:-bottom-14 md:w-[160px]"
              >
                <PhoneFrame
                  src={asset("images/pitchtrace/mobile.jpg")}
                  alt="PitchTrace coach app, home screen"
                />
              </Reveal>
            </div>

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
