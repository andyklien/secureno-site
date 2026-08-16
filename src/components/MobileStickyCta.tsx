import { Phone } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { site } from "@/lib/content";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-border bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
      <a
        href={site.phoneHref}
        aria-label={`Call ${site.phoneDisplay}`}
        className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-200 hover:bg-muted"
      >
        <Phone weight="light" className="size-4" aria-hidden="true" />
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98]"
      >
        {site.ctaPrimary}
      </Link>
    </div>
  );
}
