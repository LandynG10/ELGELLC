import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SOCIALS } from "./SocialIcons";
import { PROJECT_TYPES } from "../content";

const STEPS = [
  { id: "what", label: "What" },
  { id: "who", label: "Who" },
];

const TIMELINES = ["ASAP", "1–2 months", "Flexible"];

const CONTACT_EMAIL = "landyngrant@elgestudio.net";
const MAILTO = `mailto:${CONTACT_EMAIL}`;
// Submissions go to the ELGE CRM: the lead lands in the /leads dashboard
// and the CRM emails a formatted copy to landyngrant@.
// No secret here: this is a static site, so anything in it is public. The
// CRM route checks the request's Origin, rate-limits, and uses a honeypot.
const CRM_ENDPOINT = "https://crm.elgestudio.net/api/leads/website";

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
    phone: "",
    company: "",
    description: "",
    projectType: "",
    timeline: "",
    gotcha: "",
  });

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  // A package's "Get a free preview" button (Services.jsx) preselects it here.
  useEffect(() => {
    const choose = (e) => {
      setForm((prev) => ({ ...prev, projectType: e.detail }));
      setStep(0);
      // Reopen the form if a previous enquiry was already sent.
      setSubmitted(false);
      setSubmitError(null);
    };
    window.addEventListener("elge:choose-package", choose);
    return () => window.removeEventListener("elge:choose-package", choose);
  }, []);

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const isStepValid = () => {
    if (step === 1) return form.name.trim() !== "" && isValidEmail(form.email);
    return true;
  };

  const next = () => step < STEPS.length - 1 && setStep((s) => s + 1);
  const back = () => step > 0 && setStep((s) => s - 1);

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError(null);

    try {
      // CRM payload: { data: [{ label, value }] } — the shape the receiver
      // on crm.elgestudio.net expects.
      const res = await fetch(CRM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formId: "start-a-project",
          data: [
            { label: "Name", value: form.name },
            { label: "Email", value: form.email },
            { label: "Phone", value: form.phone },
            { label: "Company", value: form.company },
            { label: "What are you trying to build", value: form.description },
            { label: "Project type", value: form.projectType },
            { label: "Timeline", value: form.timeline },
            { label: "_gotcha", value: form.gotcha },
          ],
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const reason = data?.error?.replace(/\.$/, "");
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
                <label htmlFor="cf-description" className={labelClass}>
                  What do you need?
                </label>
                <textarea
                  id="cf-description"
                  className={`${fieldClass} min-h-[100px] resize-none`}
                  placeholder="e.g. I run a cleaning business and need a website people can book from."
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                />
              </div>
              <div>
                <span className={labelClass}>Interested in</span>
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

          {step === 1 && (
            <>
              {/* Honeypot: hidden from people, filled in by bots */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-px w-px opacity-0"
                value={form.gotcha}
                onChange={(e) => update("gotcha", e.target.value)}
              />
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
                  placeholder="you@yourbusiness.com"
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
                <label htmlFor="cf-phone" className={labelClass}>
                  Phone{" "}
                  <span className="normal-case text-[var(--muted-2)]">(optional, fastest reply)</span>
                </label>
                <input
                  id="cf-phone"
                  type="tel"
                  autoComplete="tel"
                  className={fieldClass}
                  placeholder="(555) 555-5555"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="cf-company" className={labelClass}>
                  Business name{" "}
                  <span className="normal-case text-[var(--muted-2)]">(optional)</span>
                </label>
                <input
                  id="cf-company"
                  className={fieldClass}
                  placeholder="Your business"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                />
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
            disabled={submitting || !isStepValid()}
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
