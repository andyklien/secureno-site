import { ChatCircleText } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/Button";

export function Testimonials() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center rounded-[2rem] border border-border bg-card px-8 py-16 text-center shadow-tinted">
      <div className="flex size-14 items-center justify-center rounded-full bg-accent/10 text-accent">
        <ChatCircleText weight="light" className="size-7" aria-hidden="true" />
      </div>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Placeholder — no reviews yet
      </p>
      <h3 className="mt-3 font-serif text-2xl text-foreground">
        Client reviews will appear here.
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
        SecuReno is placing its first Ottawa projects through our network.
        Verified client reviews will be added as renovations are completed —
        we won&rsquo;t publish anything we haven&rsquo;t earned.
      </p>
      <div className="mt-8">
        <Button href="/contact" variant="secondary" showArrow={false}>
          Be one of our first projects
        </Button>
      </div>
    </div>
  );
}
