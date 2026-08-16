import { Phone } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/Button";
import { site } from "@/lib/content";

export function CtaBand({
  title = "Ready to start your renovation?",
  description = "Book a free consultation and get matched with a vetted renovation professional — no obligation, no pressure.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-primary py-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 text-center lg:px-8">
        <h2 className="font-serif text-3xl text-primary-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-primary-foreground/75">
          {description}
        </p>
        <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
          <Button href="/contact" variant="ghost">
            {site.ctaPrimary}
          </Button>
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-primary-foreground/90 hover:text-primary-foreground"
          >
            <Phone weight="light" className="size-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
