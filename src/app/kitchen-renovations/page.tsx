import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FaqAccordion } from "@/components/FaqAccordion";
import { GalleryGrid, type GalleryItem } from "@/components/GalleryGrid";
import { CtaBand } from "@/components/CtaBand";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BeforeAfterCompare } from "@/components/renovation/BeforeAfterCompare";
import { KitchenMaterials, kitchenBudgetTiers } from "@/components/renovation/KitchenMaterials";
import { BudgetTierConfigurator } from "@/components/renovation/BudgetTierConfigurator";
import { images } from "@/lib/images";
import { kitchenFaqs, kitchenFeatures } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kitchen Renovations in Ottawa",
  description:
    "Custom kitchen renovations in Ottawa — cabinetry, countertops, islands, and lighting, delivered on a fixed-price contract with a 5-year warranty.",
};

const kitchenGallery: GalleryItem[] = [
  { ...images.kitchenBright, label: "Westboro Kitchen Renovation", category: "Kitchen" },
  { ...images.kitchenWhiteMarble, label: "Nepean Kitchen Renovation", category: "Kitchen" },
  { ...images.kitchenModernDark, label: "The Glebe Kitchen Renovation", category: "Kitchen" },
];

export default function KitchenRenovationsPage() {
  return (
    <>
      <section className="bg-secondary">
        <Container className="grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Kitchen Renovations
            </p>
            <h1 className="font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl">
              A kitchen built around how you actually live.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              From a single fixed-price quote through to your final
              walkthrough, your matched professional coordinates cabinetry,
              countertops, electrical, plumbing, and flooring as one
              connected project — not a string of subcontractors.
            </p>
            <div className="mt-8">
              <Button href="/contact">Get a Fixed-Price Quote</Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-xl">
            <Image
              src={images.kitchenLifestyle.src}
              alt={images.kitchenLifestyle.alt}
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
          <Container>
            <SectionHeading
              eyebrow="What's Included"
              title="Every trade, one accountable team."
              description="We coordinate every discipline your kitchen touches, so nothing falls through the cracks between contractors."
            />
            <div className="mt-14">
              <FeatureGrid features={kitchenFeatures} />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-secondary py-20">
          <Container>
            <SectionHeading
              title="See the transformation."
              description="Drag the level to compare a real Ottawa kitchen before SecuReno and after."
            />
            <div className="mt-14">
              <BeforeAfterCompare
                beforeImage={images.kitchenDated}
                afterImage={images.kitchenBright}
              />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20">
          <Container>
            <SectionHeading
              title="Design your kitchen."
              description="Click through cabinet, countertop, and backsplash finishes to see how they work together before a single wall comes down."
            />
            <div className="mt-14">
              <KitchenMaterials />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-secondary py-20">
          <Container>
            <SectionHeading
              title="What does your budget get you?"
              description="Drag the slider to see how a kitchen upgrades from builder grade to fully custom, and what that looks like at every price point."
            />
            <div className="mt-14">
              <BudgetTierConfigurator
                min={15000}
                max={80000}
                initialValue={38000}
                tiers={kitchenBudgetTiers}
              />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20">
          <Container>
            <SectionHeading
              eyebrow="Recent Kitchens"
              title="A look at our recent kitchen renovations."
            />
            <div className="mt-14">
              <GalleryGrid items={kitchenGallery} />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-secondary py-20">
          <Container>
            <SectionHeading eyebrow="How It Works" title="Our fixed-price process." />
            <div className="mt-14">
              <ProcessSteps />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20">
          <Container size="narrow">
            <SectionHeading eyebrow="FAQ" title="Kitchen renovation questions." />
            <div className="mt-10">
              <FaqAccordion items={kitchenFaqs} />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <CtaBand
        title="Ready to redesign your kitchen?"
        description="Book a free in-home consultation and walk away with a fixed-price quote — no obligation."
      />
    </>
  );
}
