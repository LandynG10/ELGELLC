import logo from "../assets/logo-small.png";

/**
 * Chrome mark on a transparent plate. It reads light-on-dark natively;
 * in light theme it's inverted via --logo-filter (see index.css) so it
 * stays a dark mark rather than washing out on a pale background.
 */
export function BrandMark({ className = "h-14 w-14" }) {
  return (
    <img
      src={logo}
      alt="ELGE LLC"
      className={`shrink-0 object-contain [filter:var(--logo-filter)] ${className}`}
    />
  );
}

export function Wordmark({ className = "" }) {
  return (
    <span
      className={`font-display font-semibold tracking-[0.02em] text-[var(--fg)] ${className}`}
    >
      ELGE<span className="text-[var(--accent)]">.</span>
    </span>
  );
}
