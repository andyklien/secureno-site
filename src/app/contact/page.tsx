import type { Metadata } from "next";
import { Clock, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { serviceAreas, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consultation with SecuReno and get matched with a vetted kitchen or bathroom renovation professional in Ottawa.",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Start your renovation."
          description="Tell us a bit about your project and we'll schedule a free consultation to walk through scope, budget, and match you with the right professional."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-sm border border-border bg-card p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Contact Details
              </h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <Phone weight="light" className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <a href={site.phoneHref} className="text-foreground hover:text-primary">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <EnvelopeSimple weight="light" className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <a href={`mailto:${site.email}`} className="text-foreground hover:text-primary">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock weight="light" className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-foreground">
                    Mon&ndash;Fri, 8am&ndash;6pm &middot; Sat by appointment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin weight="light" className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-foreground">Serving {site.city} &amp; area</span>
                </li>
              </ul>
            </div>

            <div className="rounded-sm border border-border bg-card p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Service Area
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
