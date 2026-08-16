import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBadges } from "@/components/TrustBadges";
import { CtaBand } from "@/components/CtaBand";
import { ScrollReveal } from "@/components/ScrollReveal";
import { images } from "@/lib/images";
import { serviceAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SecuReno is an Ottawa-based kitchen and bathroom renovation company built around fixed-price contracts and warrantied craftsmanship.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary">
        <Container className="grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              About SecuReno
            </p>
            <h1 className="font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl">
              Our name is our promise.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              SecuReno — secure renovation. We started this company
              because too many Ottawa homeowners we talked to had the
              same renovation story: a quote that grew, a timeline that
              slipped, and a warranty that turned out to mean nothing.
              We built our process to remove that risk, not just promise
              to.
            </p>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-xl">
            <Image
              src={images.handshake.src}
              alt={images.handshake.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <ScrollReveal>
        <section className="py-20">
          <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm lg:order-2">
              <Image
                src={images.planningBlueprint.src}
                alt={images.planningBlueprint.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="lg:order-1">
              <SectionHeading
                eyebrow="How We Work"
                title="Every project runs on the same three rules."
              />
              <ul className="mt-8 space-y-6">
                <li className="border-l-2 border-accent pl-5">
                  <p className="font-semibold text-foreground">
                    One price, signed before we start.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Your quote is itemized and fixed. Scope changes are
                    approved by you in writing before they touch the price.
                  </p>
                </li>
                <li className="border-l-2 border-accent pl-5">
                  <p className="font-semibold text-foreground">
                    Licensed trades, not day labour.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Every electrician, plumber, and tile setter on your job
                    is licensed, with WSIB and liability insurance we
                    verify before they ever join our network.
                  </p>
                </li>
                <li className="border-l-2 border-accent pl-5">
                  <p className="font-semibold text-foreground">
                    A warranty that outlasts the crew.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Five years of workmanship coverage, honoured directly
                    by SecuReno — not routed through a manufacturer.
                  </p>
                </li>
              </ul>
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-secondary py-20">
          <Container>
            <SectionHeading
              eyebrow="Our Standards"
              title="What every SecuReno project includes."
              align="center"
            />
            <div className="mt-14">
              <TrustBadges />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20">
          <Container size="narrow" className="text-center">
            <SectionHeading
              eyebrow="Service Area"
              title="Proudly renovating homes across Ottawa."
              align="center"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-foreground/80"
                >
                  <MapPin weight="light" className="size-3.5 text-accent" aria-hidden="true" />
                  {area}
                </span>
              ))}
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <CtaBand />
    </>
  );
}
