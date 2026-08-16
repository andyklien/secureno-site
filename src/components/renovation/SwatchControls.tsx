export type MaterialOption = {
  id: string;
  label: string;
  swatch: string;
  fill: string;
};

const LUXE_EASE = "cubic-bezier(0.16,1,0.3,1)";

export function MaterialLayer({
  options,
  selectedId,
}: {
  options: MaterialOption[];
  selectedId: string;
}) {
  return (
    <>
      {options.map((option) => {
        const active = option.id === selectedId;
        return (
          <div
            key={option.id}
            className="absolute inset-0 transition-[opacity,transform] duration-[650ms]"
            style={{
              background: option.fill,
              opacity: active ? 1 : 0,
              transform: active ? "scale(1)" : "scale(1.045)",
              transitionTimingFunction: LUXE_EASE,
            }}
          />
        );
      })}
      <span key={selectedId} aria-hidden="true" className="material-sheen absolute inset-0 z-[2] bg-gradient-to-r from-transparent via-white/45 to-transparent" />
    </>
  );
}

export function SwatchRow({
  label,
  options,
  selectedId,
  onSelect,
}: {
  label: string;
  options: MaterialOption[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        {options.map((option) => {
          const active = option.id === selectedId;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              aria-pressed={active}
              className="group flex flex-col items-center gap-2"
            >
              <span
                className={`block size-11 rounded-full border-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-active:scale-95 ${
                  active
                    ? "scale-110 border-accent shadow-[0_0_0_4px_rgba(169,124,47,0.22),0_6px_14px_-4px_rgba(0,0,0,0.35)]"
                    : "border-border shadow-sm group-hover:border-foreground/30 group-hover:shadow-md"
                }`}
                style={{ background: option.swatch }}
              />
              <span
                className={`text-[11px] leading-tight transition-colors duration-300 ${
                  active ? "font-semibold text-foreground" : "text-muted-foreground"
                }`}
              >
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
