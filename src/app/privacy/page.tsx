import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SecuReno collects, uses, and protects information from homeowners and renovation professionals.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <Container size="narrow">
        <SectionHeading eyebrow="Legal" title="Privacy Policy" />
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <p>Last updated: August 2026.</p>

          <div>
            <h2 className="text-base font-semibold text-foreground">What we collect</h2>
            <p className="mt-2">
              When you submit a project brief or book a consultation, we collect your name, contact
              details, property address or postal code, and details about your renovation project.
              We do not collect this information unless you provide it directly through our forms.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">How we use it</h2>
            <p className="mt-2">
              We use your information to match you with vetted renovation professionals in our
              network, to coordinate your consultation and proposal, and to follow up on active
              projects. We do not sell your information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">Sharing with our network</h2>
            <p className="mt-2">
              To connect you with a renovation professional, we share the project details you
              submit — and only those details — with the specific professionals we match you with.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">Your choices</h2>
            <p className="mt-2">
              You can request a copy of the information we hold about you, ask us to correct it, or
              ask us to delete it at any time by emailing{" "}
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
