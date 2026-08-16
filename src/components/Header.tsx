"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, Phone, ShieldCheck, X } from "@phosphor-icons/react";
import { navLinks, site } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-2xl tracking-tight text-foreground"
        >
          <ShieldCheck weight="light" className="size-6 text-accent" aria-hidden="true" />
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
          >
            <Phone weight="light" className="size-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#3a362f] active:scale-[0.98]"
          >
            {site.ctaPrimary}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X weight="light" className="size-6" /> : <List weight="light" className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 text-base font-medium ${
                    active
                      ? "bg-muted text-primary"
                      : "text-foreground/80 hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={site.phoneHref}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 text-sm font-semibold text-foreground"
            >
              <Phone weight="light" className="size-4" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              {site.ctaPrimary}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
