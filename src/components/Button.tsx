import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-[#3a362f] focus-visible:outline-primary",
  secondary:
    "bg-transparent text-foreground border border-foreground/20 hover:bg-foreground/5 hover:border-foreground/35 focus-visible:outline-foreground",
  ghost:
    "bg-transparent text-primary-foreground border border-primary-foreground/40 hover:bg-primary-foreground/10 focus-visible:outline-primary-foreground",
};

const iconWrap: Record<Variant, string> = {
  primary: "bg-primary-foreground/15 group-hover:bg-primary-foreground/25",
  secondary: "bg-foreground/5 group-hover:bg-foreground/10",
  ghost: "bg-primary-foreground/10 group-hover:bg-primary-foreground/20",
};

export function Button({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
}) {
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = `group inline-flex items-center justify-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-semibold tracking-wide transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
    showArrow ? "" : "pr-6"
  } ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <span
          className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 ${iconWrap[variant]}`}
        >
          <ArrowRight weight="light" className="size-3.5" aria-hidden="true" />
        </span>
      )}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
