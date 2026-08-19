import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SOCIALS } from "./SocialIcons";

const STEPS = [
  { id: "who", label: "Who" },
  { id: "what", label: "What" },
  { id: "budget", label: "Budget" },
];

const PROJECT_TYPES = [
  "Web Applications",
  "Mobile Applications",
  "Workflow Automation & AI",
  "Product Strategy",
  "CRMs & AI Agents",
  "Not sure yet",
];

const BUDGET_RANGES = [
  "$500 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000+",
];

const TIMELINES = ["ASAP", "1–2 months", "Flexible"];

const CONTACT_EMAIL = "support@elgestudio.net";
const CONTACT_EMAIL_CC = "landyngrant@elgestudio.net,joseaguilar@elgestudio.net";
const MAILTO = `mailto:${CONTACT_EMAIL}?cc=${CONTACT_EMAIL_CC}`;
const FORM_ENDPOINT = "https://formspree.io/f/mrpzojvk";

const EASE = [0.16, 1, 0.3, 1];

const fieldClass =
  "w-full bg-transparent border border-[var(--line)] px-4 py-3 text-sm text-[var(--fg)] placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200";

const labelClass =
  "mb-2 block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--muted)]";

const linkClass =
  "text-[var(--fg)] underline decoration-[var(--line-strong)] underline-offset-4 transition-colors hover:text-[var(--accent)]";

function optionClass(active) {
  return [
    "border px-4 py-3 text-sm text-left cursor-pointer transition-colors duration-200",
    active
      ? "border-[var(--accent)] text-[var(--fg)]"
      : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--line-strong)] hover:text-[var(--fg)]",
  ].join(" ");
}

export default function ContactForm() {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    description: "",
    projectType: "",
    budget: "",
    timeline: "",
  });

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const isStepValid = () => {
    if (step === 0) return form.name.trim() !== "" && isValidEmail(form.email);
    return true;
  };

  const next = () => step < STEPS.length - 1 && setStep((s) => s + 1);
  const back = () => step > 0 && setStep((s) => s - 1);

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          description: form.description,
          projectType: form.projectType,
          budget: form.budget,
          timeline: form.timeline,
          _subject: `New project inquiry from ${form.name}`,
          _cc: CONTACT_EMAIL_CC,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const reason = data?.errors?.[0]?.message;
        throw new Error(reason || "Form submission failed");
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="mx-auto w-full max-w-lg py-8 text-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--muted)]">
            Message Received
          </p>
          <h3 className="mb-4 font-display text-2xl font-medium text-[var(--fg)]">
            We'll follow up shortly.
          </h3>
          <p className="mb-6 text-sm text-[var(--muted)]">
            In the meantime, check out our socials.
          </p>
          <div className="flex items-center justify-center gap-6">
            {SOCIALS.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className={`text-sm ${linkClass}`}>
                {label}
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs text-[var(--muted-2)]">
            or email us at <a href={MAILTO} className={linkClass}>{CONTACT_EMAIL}</a>
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-lg py-8 text-left">
      {/* Progress: thin hairline bar, lime-lit active segment (matches the Process section) */}
      <div className="mb-10">
        <div className="mb-3 flex justify-between">
          {STEPS.map((s, i) => (
            <span
              key={s.id}
              className={`font-mono text-[0.65rem] uppercase tracking-[0.16em] ${
                i === step ? "text-[var(--accent)]" : "text-[var(--muted-2)]"
              }`}
            >
              {String(i + 1).padStart(2, "0")} &mdash; {s.label}
            </span>
          ))}
        </div>
        <div className="relative h-px w-full bg-[var(--line)]">
          <motion.div
            className="absolute left-0 top-0 h-px w-full origin-left bg-[var(--accent)]"
            initial={false}
            animate={{ scaleX: (step + 1) / STEPS.length }}
            transition={{ duration: 0.4, ease: EASE }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="space-y-5"
        >
          {step === 0 && (
            <>
              <div>
                <label htmlFor="cf-name" className={labelClass}>
                  Name
                </label>
                <input
                  id="cf-name"
                  className={fieldClass}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="cf-email" className={labelClass}>
                  Email
                </label>
                <input
                  id="cf-email"
                  type="email"
                  className={fieldClass}
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
                {form.email.trim() !== "" && !isValidEmail(form.email) && (
                  <p className="mt-2 text-xs text-[var(--muted)]">
                    That doesn't look like a complete email address yet.
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="cf-company" className={labelClass}>
                  Company{" "}
                  <span className="normal-case text-[var(--muted-2)]">(optional)</span>
                </label>
                <input
                  id="cf-company"
                  className={fieldClass}
                  placeholder="Company name"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                />
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div>
                <label htmlFor="cf-description" className={labelClass}>
                  What are you trying to build?
                </label>
                <textarea
                  id="cf-description"
                  className={`${fieldClass} min-h-[100px] resize-none`}
                  placeholder="Tell us what's slowing your team down, or what you're trying to build."
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                />
              </div>
              <div>
                <span className={labelClass}>Project Type</span>
                <div className="grid grid-cols-2 gap-2">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      aria-pressed={form.projectType === type}
                      onClick={() => update("projectType", type)}
                      className={optionClass(form.projectType === type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <span className={labelClass}>Budget Range</span>
                <div className="grid grid-cols-2 gap-2">
                  {BUDGET_RANGES.map((b) => (
                    <button
                      key={b}
                      type="button"
                      aria-pressed={form.budget === b}
                      onClick={() => update("budget", b)}
                      className={optionClass(form.budget === b)}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className={labelClass}>Timeline</span>
                <div className="grid grid-cols-3 gap-2">
                  {TIMELINES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      aria-pressed={form.timeline === t}
                      onClick={() => update("timeline", t)}
                      className={optionClass(form.timeline === t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex items-center justify-between border-t border-[var(--line)] pt-6">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)] disabled:opacity-30 disabled:hover:text-[var(--muted)]"
        >
          &larr; Back
        </button>

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={next}
            disabled={!isStepValid()}
            className="border border-[var(--line-strong)] px-6 py-3 text-sm text-[var(--fg)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-30 disabled:hover:border-[var(--line-strong)] disabled:hover:text-[var(--fg)]"
          >
            Next &rarr;
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="bg-[var(--fg)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] disabled:opacity-50 disabled:hover:bg-[var(--fg)] disabled:hover:text-[var(--bg)]"
          >
            {submitting ? "Sending…" : "Send"}
          </button>
        )}
      </div>

      {submitError && (
        <p className="mt-4 text-center text-sm text-[var(--muted)]">
          {submitError === "Form submission failed"
            ? "Something went wrong sending that."
            : `We couldn't send that: ${submitError}.`}{" "}
          Try again, or email us directly at{" "}
          <a href={MAILTO} className={linkClass}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}

      <p className="mt-6 text-center font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--muted-2)]">
        Step {step + 1} of {STEPS.length}
      </p>
    </div>
  );
}
