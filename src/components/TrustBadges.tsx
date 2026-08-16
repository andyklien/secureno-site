import { Certificate, HardHat, Medal, ShieldStar } from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react/lib";
import { trustBadges } from "@/lib/content";

const iconMap: Record<(typeof trustBadges)[number]["icon"], Icon> = {
  shield: ShieldStar,
  hardhat: HardHat,
  award: Medal,
  filecheck: Certificate,
};

export function TrustBadges() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {trustBadges.map((badge) => {
        const Icon = iconMap[badge.icon];
        return (
          <div key={badge.title} className="flex flex-col gap-3">
            <div className="flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Icon weight="light" className="size-6" aria-hidden="true" />
            </div>
            <h3 className="text-base font-semibold text-foreground">
              {badge.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {badge.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
