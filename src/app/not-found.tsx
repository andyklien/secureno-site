import Link from "next/link";
import { Compass } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container size="narrow" className="text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Compass weight="light" className="size-7" aria-hidden="true" />
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Page not found
        </p>
        <h1 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          The page you&rsquo;re looking for may have moved. Try the homepage, or
          jump straight to a kitchen or bathroom renovation.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/">Back to homepage</Button>
          <Link
            href="/kitchen-renovations"
            className="text-sm font-semibold text-foreground hover:text-accent"
          >
            Kitchen Renovations
          </Link>
          <Link
            href="/bathroom-renovations"
            className="text-sm font-semibold text-foreground hover:text-accent"
          >
            Bathroom Renovations
          </Link>
        </div>
      </Container>
    </section>
  );
}
