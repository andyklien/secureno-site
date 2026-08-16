import { processSteps } from "@/lib/content";

export function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
      {processSteps.map((step, index) => (
        <div key={step.number} className="relative">
          <span className="font-serif text-5xl text-accent/40">
            {step.number}
          </span>
          <h3 className="mt-4 text-lg font-semibold text-foreground">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {step.description}
          </p>
          {index < processSteps.length - 1 && (
            <div
              className="absolute top-6 left-full hidden h-px w-8 bg-border lg:block"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}
