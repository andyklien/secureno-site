import { whyChooseUs } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
      {whyChooseUs.map((reason) => (
        <div key={reason.title} className="border-l-2 border-accent pl-5">
          <p className="font-semibold text-foreground">{reason.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {reason.description}
          </p>
        </div>
      ))}
    </div>
  );
}
