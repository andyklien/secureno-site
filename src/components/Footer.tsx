import Link from "next/link";
import { EnvelopeSimple, MapPin, Phone, ShieldCheck } from "@phosphor-icons/react/ssr";
import { navLinks, serviceAreas, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 font-serif text-2xl tracking-tight"
          >
            <ShieldCheck weight="light" className="size-6 text-accent" aria-hidden="true" />
            {site.name}
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            SecuReno connects Ottawa homeowners with a vetted network of
            kitchen and bathroom renovation professionals — coordinated, fixed-price, and warrantied.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
            Navigate
          </h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
            Service Area
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="text-sm text-primary-foreground/80"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 hover:text-primary-foreground"
              >
                <Phone weight="light" className="size-4 shrink-0" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 hover:text-primary-foreground"
              >
                <EnvelopeSimple weight="light" className="size-4 shrink-0" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin weight="light" className="size-4 shrink-0" aria-hidden="true" />
              Serving {site.city} &amp; area
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-primary-foreground/50 sm:flex-row lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-primary-foreground/80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-foreground/80">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
