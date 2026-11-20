
import { Link, NavLink } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

function SkeletonLine({ className = "" }) {
  return (
    <span
      className={`block rounded-full bg-current opacity-10 ${className}`}
    />
  );
}

function FooterSkeleton() {
  return (
    <footer
      className="academy-theme bg-[var(--color-surface-warm)]"
      aria-busy="true"
      aria-label="Loading footer"
    >
      <div
        aria-hidden="true"
        className="
          mx-auto max-w-7xl
          px-4 py-12
          sm:px-6 sm:py-16
          lg:px-8 lg:py-20
        "
      >
        <div
          className="
            grid gap-10
            lg:grid-cols-[1.2fr_0.7fr_1fr]
            lg:gap-12
          "
        >
          {/* Brand skeleton */}

          <div
            className="
              relative isolate overflow-hidden
              rounded-[var(--radius-lg)]
              bg-[var(--color-secondary)]
              p-7 sm:p-9
              text-white
            "
          >
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
              <div className="flex items-center gap-3">
                <SkeletonLine className="h-11 w-11 shrink-0 rounded-lg bg-white" />
                <SkeletonLine className="h-6 w-40 bg-white" />
              </div>

              <SkeletonLine className="mt-6 h-1 w-12 bg-white" />

              <div className="mt-6 max-w-sm space-y-1">
                <SkeletonLine className="h-7 w-full bg-white" />
                <SkeletonLine className="h-7 w-[90%] bg-white" />
                <SkeletonLine className="h-7 w-[65%] bg-white" />
              </div>

              <SkeletonLine className="mt-8 h-3 w-32 bg-white" />
            </div>
          </div>

          {/* Navigation skeleton */}

          <div className="pt-2">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              <SkeletonLine className="h-3 w-20 text-[var(--color-secondary)]" />
            </div>

            <div className="flex flex-col items-start gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonLine
                  key={index}
                  className={`h-5 ${
                    ["w-20", "w-24", "w-16", "w-28", "w-20", "w-24"][index]
                  } text-[var(--color-text-secondary)]`}
                />
              ))}
            </div>
          </div>

          {/* Contact skeleton */}

          <div className="pt-2">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              <SkeletonLine className="h-3 w-20 text-[var(--color-secondary)]" />
            </div>

            <div className="space-y-5 text-[var(--color-text-secondary)]">

              {/* Emails */}

              <div className="flex-1 space-y-1">
                <SkeletonLine className="h-7 w-[90%]" />
                <SkeletonLine className="h-7 w-[75%]" />
              </div>

              {/* Phone numbers */}

              <div className="flex-1 space-y-1">
                <SkeletonLine className="h-7 w-32" />
                <SkeletonLine className="h-7 w-32" />
              </div>

              {/* Address */}

              <div className="flex-1 space-y-1">
                <SkeletonLine className="h-7 w-full" />
                <SkeletonLine className="h-7 w-[90%]" />
                <SkeletonLine className="h-7 w-[65%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar skeleton */}

        <div
          className="
            mt-12 flex flex-col gap-3
            border-t border-[var(--color-border)]
            pt-6 sm:mt-16
            sm:flex-row sm:items-center
            sm:justify-between
          "
        >
          <SkeletonLine className="h-4 w-64 text-[var(--color-text-secondary)]" />
          <SkeletonLine className="h-4 w-24 text-[var(--color-text-secondary)]" />
        </div>
      </div>
    </footer>
  );
}

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

export default function Footer({ data, loading = false }) {
  if (loading) {
    return <FooterSkeleton />;
  }

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
                  src={identity?.logo || "/images/logo-EM.webp"}
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
                  mt-6 h-1 w-12 rounded-full
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
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />

              <h3
                className="
                  text-xs font-bold uppercase
                  tracking-[0.2em]
                  text-[var(--color-secondary)]
                "
              >
                {footer?.navigationHeading || "Explore"}
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
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />

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
                space-y-5 text-sm leading-7
                text-[var(--color-text-secondary)]
              "
            >
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
                        className="block break-all transition-colors hover:text-[var(--color-primary)]"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              )}

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
                        className="block transition-colors hover:text-[var(--color-primary)]"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              )}

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
            pt-6 text-xs
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
