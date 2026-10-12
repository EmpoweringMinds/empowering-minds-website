import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

const variants = {
  primary: "bg-[var(--color-primary)] text-white shadow-[var(--shadow-warm)] hover:bg-[var(--color-secondary)] hover:-translate-y-0.5 transition-all duration-300 ease-out",
  secondary: "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-secondary)] shadow-[var(--shadow-sm)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:-translate-y-0.5 transition-all duration-300 ease-out",
  ghost: "border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 ease-out",
};

export default function CTAButton({
  as,
  to,
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
  ...props
}) {
  const Component = as || (href ? "a" : to ? Link : "button");
  
  const destinationProps = Component === Link ? { to } : (href ? { href } : {});
  const styles = variants[variant] ?? variants.primary;

  return (
    <Component
      {...destinationProps}
      {...props}
      className={twMerge(
        clsx(
          "group inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] px-5 py-3 text-center text-sm font-semibold transition duration-[var(--transition-base)] ease-[var(--ease-brand)] sm:w-auto sm:px-6",
          styles,
          className
        )
      )}
    >
      <span>{children}</span>

      {showArrow && (
        <ArrowRight
          size={16}
          aria-hidden="true"
          className="transition-transform duration-[var(--transition-fast)] group-hover:translate-x-1"
        />
      )}
    </Component>
  );
}
