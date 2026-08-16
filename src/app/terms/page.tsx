import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the SecuReno website and matching service.",
};

export default function TermsPage() {
  return (
    <section className="py-20">
      <Container size="narrow">
        <SectionHeading eyebrow="Legal" title="Terms of Service" />
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <p>Last updated: August 2026.</p>

          <div>
            <h2 className="text-base font-semibold text-foreground">What SecuReno is</h2>
            <p className="mt-2">
              SecuReno operates a matching service that connects Ottawa-area homeowners with
              independent, vetted kitchen and bathroom renovation professionals. SecuReno is not
              itself a general contractor and does not perform renovation labour directly.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">Consultations and proposals</h2>
            <p className="mt-2">
              A free consultation and a fixed-price proposal do not obligate you to proceed with a
              project. The contract for renovation work is between you and your matched
              professional; SecuReno coordinates the process and enforces the workmanship guarantee
              described in your proposal.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">Network standards</h2>
            <p className="mt-2">
              We verify licensing and insurance for every professional in our network before making
              an introduction, and we require a minimum 5-year workmanship guarantee on completed
              projects.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
