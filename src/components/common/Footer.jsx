
import { Link, NavLink } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";


function FooterNavigationLink({ link }) {
  const classes = `
    group inline-flex items-center gap-1
    text-sm
    text-[var(--color-text-secondary)]
    transition-colors duration-200
    hover:text-[var(--color-primary)]
  `;

 if (link.external) {
  return (
    <a
      href={link.href}
      target={link.openInNewTab ? "_blank" : undefined}
      rel={link.openInNewTab ? "noopener noreferrer" : undefined}
      className={classes}
    >
      {link.label}

      <ArrowUpRight
        size={13}
        aria-hidden="true"
        className="
          opacity-0
          transition-all duration-200
          group-hover:translate-x-0.5
          group-hover:-translate-y-0.5
          group-hover:opacity-100
        "
      />
    </a>
  );
}

  return (
    <NavLink
      to={link.to}
      className={({ isActive }) => `
        ${classes}
        ${isActive ? "font-semibold text-[var(--color-primary)]" : ""}
      `}
    >
      {link.label}
    </NavLink>
  );
}

export default function Footer({ data }) {
  const footer = data?.footer;
  const identity = data?.identity;
  const contact = data?.contact;

  const navLinks = footer?.navigationLinks ?? [];
  const emails = contact?.email ?? [];
  const phones = contact?.phoneNumber ?? [];
  const addresses = contact?.address ?? [];
  return (
    <footer className="academy-theme bg-[var(--color-surface-warm)]">
      <div
        className="
          mx-auto max-w-7xl
          px-4 py-12
          sm:px-6 sm:py-16
          lg:px-8 lg:py-20
        "
      >
        {/* Main Footer */}

        <div
          className="
            grid gap-10
            lg:grid-cols-[1.2fr_0.7fr_1fr]
            lg:gap-12
          "
        >
          {/* Brand Panel */}

          <div
            className="
              relative isolate overflow-hidden
              rounded-[var(--radius-lg)]
              bg-[var(--color-secondary)]
              p-7 sm:p-9
            "
          >
            {/* Decorative elements */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                -right-12 -top-12
                h-40 w-40 rounded-full
                border border-white/10
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                -bottom-16 -right-5
                h-36 w-36 rounded-full
                bg-[var(--color-primary)]/20
                blur-2xl
              "
            />

            <div className="relative z-10">
              <Link
                to="/"
                className="
                  inline-flex items-center gap-3
                  text-white
                  transition-opacity hover:opacity-80
                "
              >
                <img
                  src={identity?.logo || "/images/logo-EM.png"}
                  alt=""
                  className="h-11 w-11 object-contain"
                />

                <span className="text-xl font-bold tracking-[-0.035em]">
                  {identity?.siteName || "Empowering Minds"}
                </span>
              </Link>

              <div
                aria-hidden="true"
                className="
                  mt-6 h-1 w-12
                  rounded-full
                  bg-[var(--color-primary)]
                "
              />

              <p
                className="
                  mt-6 max-w-sm
                  text-sm leading-7
                  text-white/75
                  sm:text-base sm:leading-8
                "
              >
                {footer?.brandDescription}
              </p>

              <p
                className="
                  mt-8
                  text-xs font-semibold uppercase
                  tracking-[0.2em]
                  text-white/60
                "
              >
                {footer?.tagline}
              </p>
            </div>
          </div>

          {/* Navigation */}

          <div className="pt-2">
            <div className="mb-6 flex items-center gap-3">
              <span
                className="
                  h-2 w-2 rounded-full
                  bg-[var(--color-primary)]
                "
              />

              <h3
                className="
                  text-xs font-bold uppercase
                  tracking-[0.2em]
                  text-[var(--color-secondary)]
                "
              >
                Explore
              </h3>
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-start gap-4"
            >
              {navLinks.map((link) => (
                <FooterNavigationLink
                  key={link.label}
                  link={link}
                />
              ))}
            </nav>
          </div>

          {/* Contact */}

          <div className="pt-2">
            <div className="mb-6 flex items-center gap-3">
              <span
                className="
                  h-2 w-2 rounded-full
                  bg-[var(--color-primary)]
                "
              />

              <h3
                className="
                  text-xs font-bold uppercase
                  tracking-[0.2em]
                  text-[var(--color-secondary)]
                "
              >
                {footer?.contactHeading || "Find Us"}
              </h3>
            </div>

            <div
            className="
              space-y-5
              text-sm leading-7
              text-[var(--color-text-secondary)]
            "
            >
              {/* Emails */}

              {emails.length > 0 && (
                <div className="flex items-start gap-3">
                  <Mail
                    size={18}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[var(--color-primary)]"
                  />

                  <div className="space-y-1">
                    {emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="
                          block break-all
                          transition-colors
                          hover:text-[var(--color-primary)]
                        "
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Phone numbers */}

              {phones.length > 0 && (
                <div className="flex items-start gap-3">
                  <Phone
                    size={18}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[var(--color-primary)]"
                  />

                  <div className="space-y-1">
                    {phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                        className="
                          block
                          transition-colors
                          hover:text-[var(--color-primary)]
                        "
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Address */}

              {addresses.length > 0 && (
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[var(--color-primary)]"
                  />

                  <address className="not-italic">
                    {addresses.map((line, index) => (
                      <div key={`${line}-${index}`}>{line}</div>
                    ))}
                  </address>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}

        <div
          className="
            mt-12 flex flex-col gap-3
            border-t border-[var(--color-border)]
            pt-6
            text-xs
            text-[var(--color-text-secondary)]
            sm:mt-16
            sm:flex-row sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()}{" "}
            {identity?.siteName || "Empowering Minds"}.{" "}
            {footer?.copyrightText || "All rights reserved."}
          </p>

          {footer?.showBackToHome !== false && (
            <Link
              to="/"
              className="
                inline-flex items-center gap-1
                transition-colors
                hover:text-[var(--color-primary)]
              "
            >
              Back to home
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
