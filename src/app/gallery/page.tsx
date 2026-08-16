import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryExplorer } from "@/components/GalleryExplorer";
import { CtaBand } from "@/components/CtaBand";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { GalleryItem } from "@/components/GalleryGrid";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse recent kitchen and bathroom renovations completed by SecuReno across Ottawa.",
};

const galleryItems: GalleryItem[] = [
  { ...images.kitchenBright, label: "Westboro Kitchen Renovation", category: "Kitchen" },
  { ...images.kitchenWhiteMarble, label: "Nepean Kitchen Renovation", category: "Kitchen" },
  { ...images.kitchenModernDark, label: "The Glebe Kitchen Renovation", category: "Kitchen" },
  { ...images.kitchenLifestyle, label: "Stittsville Kitchen Renovation", category: "Kitchen" },
  { ...images.bathroomGlassShower, label: "Kanata Bathroom Renovation", category: "Bathroom" },
  { ...images.bathroomSoakerTub, label: "Barrhaven Ensuite Renovation", category: "Bathroom" },
  { ...images.bathroomCheckerFloor, label: "Orleans Powder Room Renovation", category: "Bathroom" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-secondary py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Work"
            title="Recent kitchens and bathrooms across Ottawa."
            description="A selection of completed renovations. Every project runs on the same fixed-price, warrantied process — no matter the size."
          />
        </Container>
      </section>

      <ScrollReveal>
        <section className="py-20">
          <Container>
            <GalleryExplorer items={galleryItems} />
          </Container>
        </section>
      </ScrollReveal>

      <CtaBand />
    </>
  );
}
