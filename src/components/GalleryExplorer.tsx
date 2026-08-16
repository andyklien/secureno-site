"use client";

import { useState } from "react";
import { GalleryGrid, type GalleryItem } from "@/components/GalleryGrid";

const filters = ["All", "Kitchen", "Bathroom"] as const;

export function GalleryExplorer({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible =
    filter === "All" ? items : items.filter((item) => item.category === filter);

  return (
    <div>
      <div className="flex gap-3">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
              filter === f
                ? "bg-primary text-primary-foreground"
                : "bg-transparent text-foreground/70 ring-1 ring-inset ring-border hover:text-foreground"
            }`}
            aria-pressed={filter === f}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mt-10">
        <GalleryGrid items={visible} />
      </div>
    </div>
  );
}
