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
import { BathroomMaterials, bathroomBudgetTiers } from "@/components/renovation/BathroomMaterials";
import { BudgetTierConfigurator } from "@/components/renovation/BudgetTierConfigurator";
import { images } from "@/lib/images";
import { bathroomFaqs, bathroomFeatures } from "@/lib/content";

export const metadata: Metadata = {
  title: "Bathroom Renovations in Ottawa",
  description:
    "Full bathroom renovations in Ottawa — walk-in showers, soaker tubs, and heated floors, delivered on a fixed-price contract with a 5-year warranty.",
};

const bathroomGallery: GalleryItem[] = [
  { ...images.bathroomGlassShower, label: "Kanata Bathroom Renovation", category: "Bathroom" },
  { ...images.bathroomSoakerTub, label: "Barrhaven Ensuite Renovation", category: "Bathroom" },
  { ...images.bathroomCheckerFloor, label: "Orleans Powder Room Renovation", category: "Bathroom" },
];

export default function BathroomRenovationsPage() {
  return (
    <>
      <section className="bg-secondary">
        <Container className="grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Bathroom Renovations
            </p>
            <h1 className="font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl">
              A bathroom finished to a spa-level standard.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              From full ensuite gut renovations to powder room refreshes,
              your matched professional coordinates waterproofing, tile,
              plumbing, and ventilation as one connected build — backed by
              a 5-year workmanship guarantee.
            </p>
            <div className="mt-8">
              <Button href="/contact">Get a Fixed-Price Quote</Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-xl">
            <Image
              src={images.bathroomSoakerTub.src}
              alt={images.bathroomSoakerTub.alt}
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
              title="Built to perform for decades, not years."
              description="Bathrooms fail when waterproofing and ventilation get shortcut. We treat them as the foundation, not an afterthought."
            />
            <div className="mt-14">
              <FeatureGrid features={bathroomFeatures} />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-secondary py-20">
          <Container>
            <SectionHeading
              title="See the transformation."
              description="Drag the level to compare a real Ottawa bathroom before SecuReno and after."
            />
            <div className="mt-14">
              <BeforeAfterCompare
                beforeImage={images.bathroomDated}
                afterImage={images.bathroomGlassShower}
              />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20">
          <Container>
            <SectionHeading
              title="Design your bathroom."
              description="Click through vanity, countertop, and tile finishes to see how they work together before a single wall comes down."
            />
            <div className="mt-14">
              <BathroomMaterials />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-secondary py-20">
          <Container>
            <SectionHeading
              title="What does your budget get you?"
              description="Drag the slider to see how a bathroom upgrades from builder grade to fully custom, and what that looks like at every price point."
            />
            <div className="mt-14">
              <BudgetTierConfigurator
                min={8000}
                max={45000}
                step={500}
                initialValue={20000}
                tiers={bathroomBudgetTiers}
              />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20">
          <Container>
            <SectionHeading
              eyebrow="Recent Bathrooms"
              title="A look at our recent bathroom renovations."
            />
            <div className="mt-14">
              <GalleryGrid items={bathroomGallery} />
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
            <SectionHeading eyebrow="FAQ" title="Bathroom renovation questions." />
            <div className="mt-10">
              <FaqAccordion items={bathroomFaqs} />
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <CtaBand
        title="Ready to renovate your bathroom?"
        description="Book a free in-home consultation and walk away with a fixed-price quote — no obligation."
      />
    </>
  );
}
