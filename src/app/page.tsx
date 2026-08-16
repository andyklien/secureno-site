import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBadges } from "@/components/TrustBadges";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { FaqAccordion } from "@/components/FaqAccordion";
import { GalleryGrid, type GalleryItem } from "@/components/GalleryGrid";
import { CtaBand } from "@/components/CtaBand";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Hero } from "@/components/homepage/Hero";
import { ContactBooking } from "@/components/homepage/ContactBooking";
import { images } from "@/lib/images";
import { generalFaqs, site } from "@/lib/content";

const portfolioItems: GalleryItem[] = [
  { ...images.kitchenBright, label: "Westboro Kitchen Renovation", category: "Kitchen" },
  { ...images.bathroomSoakerTub, label: "Kanata Ensuite Renovation", category: "Bathroom" },
  { ...images.kitchenModernDark, label: "The Glebe Kitchen Renovation", category: "Kitchen" },
];

const budgetTiers = [
  { name: "Builder grade", kitchen: "$15K – $31K", bathroom: "$8K – $17K" },
  { name: "Mid range", kitchen: "$31K – $48K", bathroom: "$17K – $27K" },
  { name: "Premium", kitchen: "$48K – $64K", bathroom: "$27K – $37K" },
  { name: "Luxury", kitchen: "$64K – $80K", bathroom: "$37K – $45K" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* The renovation problem */}
      <ScrollReveal>
        <section className="border-t border-border py-24">
          <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-balance font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                Most renovations don&rsquo;t fail on design. They fail on
                coordination.
              </h2>
            </div>
            <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7">
              <div className="border-l-2 border-accent pl-5">
                <p className="font-semibold text-foreground">The quote that grows.</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  A number you agreed to in March becomes a different number
                  in June, with allowances and change orders you never saw
                  coming.
                </p>
              </div>
              <div className="border-l-2 border-accent pl-5">
                <p className="font-semibold text-foreground">The timeline that slips.</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Trades show up out of sequence, or don&rsquo;t show up at
                  all, and no one is accountable for the schedule as a whole.
                </p>
              </div>
              <div className="border-l-2 border-accent pl-5">
                <p className="font-semibold text-foreground">The warranty that means nothing.</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Something goes wrong eight months in, and the contractor
                  who built it is impossible to reach.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Kitchen / bathroom */}
      <ScrollReveal>
        <section className="bg-secondary py-24">
          <Container>
            <SectionHeading
              eyebrow="Our Specialties"
              title="We focus on two rooms — and coordinate them exceptionally well."
              description="Kitchens and bathrooms are the most complex, highest-stakes rooms in your home. By specializing, our network knows every detail cold."
            />
            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
              <ServiceCard
                image={images.kitchenModernDark}
                title="Kitchen Renovations"
                description="Custom cabinetry, countertops, islands, and lighting — plus an interactive tool to design and price your own kitchen."
                href="/kitchen-renovations"
              />
              <ServiceCard
                image={images.bathroomGlassShower}
                title="Bathroom Renovations"
                description="Walk-in showers, soaker tubs, and heated floors — plus an interactive tool to design and price your own bathroom."
                href="/bathroom-renovations"
              />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Process */}
      <ScrollReveal>
        <section className="py-24">
          <Container>
            <SectionHeading eyebrow="How It Works" title="A five-step process, not a mystery." />
            <div className="mt-14">
              <ProcessSteps />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Trusted professional network */}
      <ScrollReveal>
        <section className="bg-secondary py-24">
          <Container>
            <SectionHeading
              eyebrow="Trusted Professional Network"
              title="Every introduction is vetted first."
              description="SecuReno doesn't swing hammers — we curate who does. Every professional in our network clears the same standard before we make an introduction."
            />
            <div className="mt-14">
              <TrustBadges />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Why choose us */}
      <ScrollReveal>
        <section className="py-24">
          <Container>
            <SectionHeading title="Why homeowners choose SecuReno." align="center" />
            <div className="mx-auto mt-14 max-w-4xl">
              <WhyChooseUs />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Portfolio */}
      <ScrollReveal>
        <section className="bg-secondary py-24">
          <Container>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading eyebrow="Recent Work" title="Kitchens and bathrooms in our network's portfolio." />
              <Link
                href="/gallery"
                className="group flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground hover:text-accent"
              >
                {site.ctaSecondary}
                <ArrowRight weight="light" className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-14">
              <GalleryGrid items={portfolioItems} />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Budget education */}
      <ScrollReveal>
        <section className="py-24">
          <Container>
            <SectionHeading
              title="What does your budget get you?"
              description="Rough ranges for a full Ottawa kitchen or bathroom renovation through our network, from builder grade to fully custom. Every service page has an interactive tool to explore this in detail."
            />
            <div className="mt-14 overflow-hidden rounded-2xl border border-border">
              <div className="grid grid-cols-3 bg-muted text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                <div className="px-6 py-4">Tier</div>
                <div className="px-6 py-4">Kitchen</div>
                <div className="px-6 py-4">Bathroom</div>
              </div>
              {budgetTiers.map((tier) => (
                <div key={tier.name} className="grid grid-cols-3 border-t border-border">
                  <div className="px-6 py-4 text-sm font-semibold text-foreground">{tier.name}</div>
                  <div className="px-6 py-4 text-sm text-muted-foreground">{tier.kitchen}</div>
                  <div className="px-6 py-4 text-sm text-muted-foreground">{tier.bathroom}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal>
        <section className="bg-secondary py-24">
          <Container>
            <SectionHeading title="Client reviews." align="center" />
            <div className="mt-14">
              <Testimonials />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* General FAQ */}
      <ScrollReveal>
        <section className="py-24">
          <Container size="narrow">
            <SectionHeading eyebrow="FAQ" title="Questions about working with SecuReno." />
            <div className="mt-10">
              <FaqAccordion items={generalFaqs} />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Contact */}
      <ScrollReveal>
        <section className="bg-secondary py-24">
          <Container>
            <SectionHeading title="Book your consultation." align="center" />
            <div className="mt-14">
              <ContactBooking />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <CtaBand />
    </>
  );
}

function ServiceCard({
  image,
  title,
  description,
  href,
}: {
  image: { src: string; alt: string };
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="group block">
      <div className="shadow-tinted relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
      </div>
      <div className="mt-6">
        <h3 className="font-serif text-2xl text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          Learn more
          <ArrowRight weight="light" className="size-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
