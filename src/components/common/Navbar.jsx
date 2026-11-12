
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/siteContent";
import CTAButton from "../ui/CTAButton";

function NavigationLink({ link, mobile = false, onClick }) {
  const baseClasses = mobile
    ? `
        block rounded-xl px-4 py-3.5
        text-base font-medium
        transition-all duration-200
      `
    : `
        relative py-2
        text-sm font-medium
        transition-colors duration-200
        xl:text-[15px]
        after:absolute after:bottom-0
        after:left-0 after:h-[2px]
        after:w-0 after:rounded-full
        after:bg-[var(--color-primary)]
        after:transition-all after:duration-300
      `;

  const mobileActive = `
    bg-[var(--color-soft-accent)]/50
    text-[var(--color-secondary)]
  `;

  const mobileInactive = `
    text-[var(--color-text-secondary)]
    hover:bg-[var(--color-surface-warm)]
    hover:text-[var(--color-secondary)]
  `;

  const desktopInactive = `
    text-[var(--color-text-secondary)]
    hover:text-[var(--color-secondary)]
    hover:after:w-1/2
  `;

  if (link.external) {
    return (
      <a
        href={link.href}
        onClick={onClick}
        className={`
          ${baseClasses}
          ${mobile ? mobileInactive : desktopInactive}
        `}
      >
        <span>{link.label}</span>
        {mobile && (
          <span className="ml-1 text-xs text-[var(--color-primary)]">
            ↗
          </span>
        )}
      </a>
    );
  }

  return (
    <NavLink
      to={link.to}
      onClick={onClick}
      className={({ isActive }) => `
        ${baseClasses}
        ${
          mobile
            ? isActive
              ? mobileActive
              : mobileInactive
            : isActive
              ? `
                text-[var(--color-secondary)]
                after:w-full
              `
              : desktopInactive
        }
      `}
    >
      {link.label}
    </NavLink>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50
        border-b border-[var(--color-border-soft)]
        bg-[var(--color-background)]/95
        backdrop-blur-xl
        shadow-[0_2px_20px_rgba(70,45,30,0.04)]
        academy-theme
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Main navigation"
          className="
            flex min-h-[82px]
            items-center justify-between
            gap-5
          "
        >
          {/* Brand */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="
              group flex shrink-0 items-center gap-3
              text-[var(--color-secondary)]
              transition-colors duration-200
              hover:text-[var(--color-primary)]
            "
          >
            <img
              src="/images/logo-EM.png"
              alt=""
              className="
                h-10 w-10 object-contain
                sm:h-11 sm:w-11
              "
            />

            <span
              className="
                text-lg font-bold
                tracking-[-0.035em]
                sm:text-xl
              "
            >
              Empowering Minds
            </span>
          </Link>

          {/* Desktop Navigation */}

          <div
            className="
              hidden xl:flex
              items-center gap-5
              2xl:gap-7
            "
          >
            {navLinks.map((link) => (
              <NavigationLink
                key={link.label}
                link={link}
              />
            ))}

            <CTAButton
              href="tel:+917003055263"
              className="
                ml-1 shrink-0
                px-5 py-2.5
              "
            >
              Talk to us
            </CTAButton>
          </div>

          {/* Mobile Menu Toggle */}

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="
              flex h-11 w-11 shrink-0
              items-center justify-center
              rounded-full
              border border-[var(--color-border)]
              bg-[var(--color-surface)]
              text-[var(--color-secondary)]
              transition-all duration-200
              hover:border-[var(--color-primary)]/40
              hover:bg-[var(--color-soft-accent)]/40
              xl:hidden
            "
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <X size={21} strokeWidth={1.8} />
            ) : (
              <Menu size={21} strokeWidth={1.8} />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}

        {mobileOpen && (
          <div
            id="mobile-navigation"
            className="
              border-t border-[var(--color-border-soft)]
              pb-6 pt-5
              xl:hidden
            "
          >
            <nav
              aria-label="Mobile navigation"
              className="space-y-1"
            >
              {navLinks.map((link) => (
                <NavigationLink
                  key={link.label}
                  link={link}
                  mobile
                  onClick={closeMobileMenu}
                />
              ))}
            </nav>

            {/* Mobile CTA */}

            <div className="mt-5 border-t border-[var(--color-border-soft)] pt-5">
              <CTAButton
                href="tel:+917003055263"
                className="w-full"
                onClick={closeMobileMenu}
              >
                Talk to us
              </CTAButton>

              <p
                className="
                  mt-3 text-center
                  text-xs
                  text-[var(--color-text-secondary)]
                "
              >
                We'd be happy to hear from you.
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
