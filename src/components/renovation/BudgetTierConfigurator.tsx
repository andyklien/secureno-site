"use client";

import { useMemo, useState } from "react";

export type BudgetTier = {
  id: string;
  name: string;
  range: string;
  description: string;
  base: string;
  surface: string;
  wall: string;
  fixture: string;
};

const LUXE_EASE = "cubic-bezier(0.16,1,0.3,1)";

function formatCurrency(value: number) {
  return value.toLocaleString("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  });
}

function TierFill({
  tiers,
  activeId,
  field,
}: {
  tiers: BudgetTier[];
  activeId: string;
  field: "wall" | "surface" | "base";
}) {
  return (
    <>
      {tiers.map((t) => {
        const active = t.id === activeId;
        return (
          <div
            key={t.id}
            className="absolute inset-0 transition-[opacity,transform] duration-[650ms]"
            style={{
              background: t[field],
              opacity: active ? 1 : 0,
              transform: active ? "scale(1)" : "scale(1.045)",
              transitionTimingFunction: LUXE_EASE,
            }}
          />
        );
      })}
      <span
        key={activeId}
        aria-hidden="true"
        className="material-sheen absolute inset-0 z-[2] bg-gradient-to-r from-transparent via-white/45 to-transparent"
      />
    </>
  );
}

export function BudgetTierConfigurator({
  min,
  max,
  step = 500,
  initialValue,
  tiers,
}: {
  min: number;
  max: number;
  step?: number;
  initialValue: number;
  tiers: BudgetTier[];
}) {
  const [value, setValue] = useState(initialValue);

  const tierIndex = useMemo(() => {
    const span = (max - min) / tiers.length;
    const idx = Math.floor((value - min) / span);
    return Math.min(tiers.length - 1, Math.max(0, idx));
  }, [value, min, max, tiers.length]);

  const tier = tiers[tierIndex];

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      {/* Room illustration */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border shadow-lg">
        <div className="absolute inset-0 bg-[#eee9dd]" />

        <div className="absolute inset-x-0 top-0 h-[46%] overflow-hidden">
          <TierFill tiers={tiers} activeId={tier.id} field="wall" />
        </div>

        <div className="absolute inset-x-0 top-[46%] h-[8%] overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
          <TierFill tiers={tiers} activeId={tier.id} field="surface" />
          <span className="absolute inset-x-0 top-0 h-px bg-white/40" />
        </div>

        <div
          className="absolute left-[18%] top-[30%] h-[18%] w-[6px] rounded-t-full transition-colors duration-[650ms]"
          style={{ background: tier.fixture, transitionTimingFunction: LUXE_EASE }}
        >
          <span
            className="absolute -top-1 left-1/2 h-2 w-8 -translate-x-1/2 rounded-full transition-colors duration-[650ms]"
            style={{ background: tier.fixture, transitionTimingFunction: LUXE_EASE }}
          />
        </div>

        <div className="absolute inset-x-0 top-[54%] bottom-[4%] flex gap-[3px] px-[3px]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative flex-1 overflow-hidden rounded-[3px] shadow-inner">
              <TierFill tiers={tiers} activeId={tier.id} field="base" />
              <span className="absolute inset-2 rounded-[2px] border border-black/10" />
              <span
                className="absolute left-1/2 top-3 z-[3] h-3 w-1 -translate-x-1/2 rounded-full transition-colors duration-[650ms]"
                style={{ background: tier.fixture, transitionTimingFunction: LUXE_EASE }}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[4%] bg-black/70" />

        <span className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
          {tier.name}
        </span>
      </div>

      {/* Slider controls */}
      <div className="flex flex-col gap-8">
        <div>
          <div className="flex items-baseline justify-between">
            <span className="font-serif text-3xl text-foreground">
              {formatCurrency(value)}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              {tier.name}
            </span>
          </div>

          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            aria-label="Renovation budget"
            className="mt-5 h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-accent"
          />

          <div className="pointer-events-none relative mt-1.5 h-2" aria-hidden="true">
            {[25, 50, 75].map((mark) => (
              <span
                key={mark}
                className="absolute top-0 h-2 w-px bg-border"
                style={{ left: `${mark}%` }}
              />
            ))}
          </div>

          <div className="relative mt-2 h-8 text-[11px] font-medium text-muted-foreground">
            {tiers.map((t, i) => (
              <span
                key={t.id}
                className="absolute w-16 -translate-x-1/2 text-center leading-tight"
                style={{ left: `${(i / tiers.length) * 100 + 100 / tiers.length / 2}%` }}
              >
                {t.name}
              </span>
            ))}
          </div>
        </div>

        <p key={tier.id} className="max-w-md text-base leading-relaxed text-muted-foreground">
          {tier.description}
        </p>
      </div>
    </div>
  );
}
