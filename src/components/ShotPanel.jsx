import { useState } from "react";

/**
 * Drop a real screenshot at `src` (see public/images/pjrc/README) and it will
 * fade in automatically. Until then, an intentional abstract placeholder
 * renders in its place — never a broken-image icon.
 */
export default function ShotPanel({
  src,
  alt,
  index = 0,
  label,
  sublabel,
  className = "",
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const hueShift = (index * 37) % 360;

  return (
    <div
      className={`relative overflow-hidden border border-[var(--line)] bg-[var(--panel)] ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(120% 90% at 15% 0%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 60%),
            linear-gradient(155deg, color-mix(in srgb, var(--fg) 6%, transparent), transparent 45%),
            conic-gradient(from ${hueShift}deg at 80% 100%, color-mix(in srgb, var(--accent) 8%, transparent), transparent 30%)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.4] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      {src && !errored && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {!loaded && (label || sublabel) && (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 border-t border-[var(--line)] p-4">
          <div>
            {label && (
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--muted)]">
                {label}
              </p>
            )}
            {sublabel && (
              <p className="mt-0.5 font-mono text-[0.65rem] text-[var(--muted-2)]">
                {sublabel}
              </p>
            )}
          </div>
          <div className="h-2 w-2 shrink-0 border border-[var(--muted-2)]" />
        </div>
      )}
    </div>
  );
}
