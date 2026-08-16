import Image from "next/image";

export type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  category: "Kitchen" | "Bathroom";
};

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.src} className="group">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-muted">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground">
              {item.category}
            </span>
          </div>
          <p className="mt-3 text-sm font-medium text-foreground">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
