import { BrandMark, Wordmark } from "./Logo";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/ELGEStudio/", Icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/elgestudios/", Icon: InstagramIcon },
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
            <ul className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center border border-[var(--line)] text-[var(--muted)] no-underline transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <Icon className="h-3.5 w-3.5" />
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
