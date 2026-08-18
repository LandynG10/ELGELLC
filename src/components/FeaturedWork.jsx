import Reveal from "./Reveal";
import { asset } from "../lib/asset";

const TAGS = ["Mobile Web App", "Live Analytics", "Youth to College Baseball"];

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
            Baseball &middot; Mobile Web App
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-balance max-w-4xl font-display text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-tight text-[var(--fg)]">
            PitchTrace
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-6 max-w-2xl">
          <p className="text-balance text-lg leading-relaxed text-[var(--muted)]">
            PitchTrace gives baseball coaches professional-grade pitching
            analytics without professional-grade hardware. Coaches tap
            ball, strike, or in-play as it happens, and PitchTrace turns it
            into pitch counts, workload monitoring, strike percentage,
            pitch location, and season-long trends the moment the game
            ends.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-20 max-w-[1040px] md:mt-28">
          <Reveal>
            <BrowserFrame
              src={asset("images/pitchtrace/cover.jpg")}
              alt="PitchTrace marketing site, desktop view"
              url="pitchtrace.com"
              className="w-full"
            />
          </Reveal>

          <Reveal
            delay={0.12}
            className="mx-auto mt-6 w-[200px] sm:absolute sm:-bottom-14 sm:right-0 sm:mt-0 sm:w-[190px] md:-bottom-16 md:w-[220px]"
          >
            <PhoneFrame
              src={asset("images/pitchtrace/mobile.jpg")}
              alt="PitchTrace coach app, home screen"
            />
          </Reveal>
        </div>

        <Reveal
          delay={0.06}
          className="mt-24 flex flex-col gap-6 border-t border-[var(--line)] pt-14 sm:mt-16 sm:flex-row sm:items-center sm:justify-between md:mt-28"
        >
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {TAGS.map((tag) => (
              <li
                key={tag}
                className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[var(--muted-2)]"
              >
                {tag}
              </li>
            ))}
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
    </section>
  );
}
