import { BrandMark, Wordmark } from "./Logo";

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/ELGEStudio/" },
  { label: "Instagram", href: "https://www.instagram.com/elgestudios/" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-6 md:flex-row md:justify-between md:px-10">
        <div className="flex items-center gap-3">
          <BrandMark className="h-8 w-8" />
          <Wordmark className="text-base" />
        </div>

        <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--muted-2)]">
          &copy; {year} ELGE Studio. All rights reserved.
        </p>

        <div className="flex flex-col items-center gap-6 md:flex-row">
          <nav aria-label="Footer">
            <ul className="flex items-center gap-6">
              {["Work", "Capabilities", "Process", "Contact"].map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="text-sm text-[var(--muted)] no-underline transition-colors hover:text-[var(--fg)]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <span aria-hidden="true" className="hidden h-4 w-px bg-[var(--line-strong)] md:block" />

          <nav aria-label="Social">
            <ul className="flex items-center gap-6">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--muted)] no-underline transition-colors hover:text-[var(--fg)]"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
