import Reveal from "./Reveal";

const CAPABILITIES = [
  {
    index: "01",
    title: "Web Applications",
    copy: "Custom web platforms built for scale, speed, and longevity, from customer-facing products to internal systems of record. Modern architectures engineered to be maintained for years, not just shipped once.",
    tags: ["React", "Next.js", "Node"],
  },
  {
    index: "02",
    title: "Mobile Applications",
    copy: "Native and cross-platform mobile products designed around real usage, not app-store trends, built with React Native and native tooling where performance demands it.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    index: "03",
    title: "Workflow Automation & AI",
    copy: "We identify where manual work is quietly costing your team time, then design automation and AI-enabled systems that remove it, without adding another dashboard nobody opens.",
    tags: ["LLM Integration", "Pipelines", "Internal Tools"],
  },
  {
    index: "04",
    title: "Product Strategy",
    copy: "Before we build, we define what's worth building. Technical and product strategy that turns ambiguous problems into a roadmap your team can actually execute.",
    tags: ["Discovery", "Architecture", "Roadmapping"],
  },
  {
    index: "05",
    title: "CRMs & AI Agents",
    copy: "Custom CRM platforms and AI agent systems — agents that handle marketing and customer response, and PM agents that keep sales reps briefed and moving — built to fit how your team actually sells and operates, not a generic pipeline template.",
    tags: ["Supabase", "Claude & Gemini", "Automation"],
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative border-t border-[var(--line)] py-28 md:py-36"
      aria-label="Capabilities"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mb-16 md:mb-20">
          <p className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--muted)]">
            Capabilities / 02
          </p>
          <h2 className="text-balance max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-tight text-[var(--fg)]">
            Five disciplines. One team.
          </h2>
        </Reveal>

        <div className="border-t border-[var(--line)]">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.index} delay={i * 0.05}>
              <div className="group grid grid-cols-1 gap-4 border-b border-[var(--line)] py-10 transition-colors md:grid-cols-12 md:items-start md:gap-6 md:py-12">
                <div className="md:col-span-2">
                  <span className="font-mono text-sm text-[var(--muted-2)]">
                    {cap.index}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl font-medium tracking-tight text-[var(--fg)] transition-colors duration-300 md:text-3xl group-hover:text-[var(--accent)]">
                    {cap.title}
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-balance max-w-lg leading-relaxed text-[var(--muted)]">
                    {cap.copy}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                    {cap.tags.map((tag) => (
                      <li
                        key={tag}
                        className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[var(--muted-2)]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden items-start justify-end md:col-span-1 md:flex">
                  <span
                    aria-hidden="true"
                    className="translate-x-0 text-[var(--muted-2)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                  >
                    &rarr;
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
