import { CheckCircle } from "@phosphor-icons/react/ssr";

export function FeatureGrid({
  features,
}: {
  features: { title: string; description: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
      {features.map((feature) => (
        <div key={feature.title} className="flex gap-4">
          <CheckCircle
            weight="light"
            className="mt-0.5 size-5 shrink-0 text-accent"
            aria-hidden="true"
          />
          <div>
            <h3 className="text-base font-semibold text-foreground">
              {feature.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
