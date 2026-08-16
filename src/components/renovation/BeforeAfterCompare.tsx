"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const STEP = 3;

function LevelHandle() {
  return (
    <svg width="20" height="44" viewBox="0 0 20 44" fill="none" aria-hidden="true">
      <rect
        x="1"
        y="1"
        width="18"
        height="42"
        rx="9"
        className="fill-white stroke-primary/15"
        strokeWidth="1"
      />
      <line x1="10" y1="7" x2="10" y2="13" className="stroke-primary/30" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="31" x2="10" y2="37" className="stroke-primary/30" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="22" r="5" className="fill-secondary stroke-accent" strokeWidth="1.5" />
      <circle cx="10" cy="22" r="1.6" className="fill-accent" />
    </svg>
  );
}

export function BeforeAfterCompare({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After — SecuReno",
  startPercent = 35,
  className = "aspect-[16/10] sm:aspect-[16/9]",
}: {
  beforeImage: { src: string; alt: string };
  afterImage: { src: string; alt: string };
  beforeLabel?: string;
  afterLabel?: string;
  startPercent?: number;
  className?: string;
}) {
  const [percent, setPercent] = useState(startPercent);
  const stageRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(98, Math.max(2, raw)));
  }, []);

  const handleWindowMove = useCallback(
    (e: PointerEvent) => {
      if (!draggingRef.current) return;
      updateFromClientX(e.clientX);
    },
    [updateFromClientX]
  );

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      draggingRef.current = true;
      updateFromClientX(e.clientX);
      const onWindowUp = () => {
        draggingRef.current = false;
        window.removeEventListener("pointermove", handleWindowMove);
      };
      window.addEventListener("pointermove", handleWindowMove);
      window.addEventListener("pointerup", onWindowUp, { once: true });
    },
    [updateFromClientX, handleWindowMove]
  );

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPercent((p) => Math.max(2, p - STEP));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPercent((p) => Math.min(98, p + STEP));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPercent(2);
    } else if (e.key === "End") {
      e.preventDefault();
      setPercent(98);
    }
  }, []);

  return (
    <div
      ref={stageRef}
      role="slider"
      tabIndex={0}
      aria-label="Before and after comparison slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(percent)}
      onPointerDown={onPointerDown}
      onKeyDown={onKeyDown}
      className={`relative w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent ${className}`}
    >
      <div className="absolute inset-0">
        <Image
          src={afterImage.src}
          alt={afterImage.alt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          draggable={false}
          className="object-cover"
        />
        <span className="absolute right-4 top-4 rounded-full bg-black/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
          {afterLabel}
        </span>
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      >
        <Image
          src={beforeImage.src}
          alt={beforeImage.alt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          draggable={false}
          className="object-cover grayscale-[15%] brightness-[0.85]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
          {beforeLabel}
        </span>
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 flex items-center justify-center"
        style={{ left: `${percent}%` }}
      >
        <div className="absolute inset-y-0 w-[2px] -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" />
        <div className="relative flex h-11 w-6 -translate-x-1/2 items-center justify-center rounded-full shadow-lg">
          <LevelHandle />
        </div>
      </div>
    </div>
  );
}
