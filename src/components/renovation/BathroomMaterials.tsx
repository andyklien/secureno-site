"use client";

import { useState } from "react";
import { MaterialLayer, SwatchRow, type MaterialOption } from "./SwatchControls";

type Category = "vanity" | "vanityTop" | "tile";

const VANITY: MaterialOption[] = [
  { id: "white", label: "White", swatch: "#f5f2ea", fill: "#f5f2ea" },
  { id: "cream", label: "Cream", swatch: "#efe6d0", fill: "linear-gradient(160deg,#f2ead6,#e6dabd)" },
  { id: "oak", label: "Oak", swatch: "linear-gradient(135deg,#d3a468,#a9773f)", fill: "linear-gradient(160deg,#d5a86c 0%,#b17f45 55%,#c99a5f 100%)" },
  { id: "sage", label: "Sage", swatch: "linear-gradient(135deg,#9aa88c,#7c8c70)", fill: "linear-gradient(160deg,#9aa88c 0%,#7c8c70 55%,#8a9a7d 100%)" },
  { id: "walnut", label: "Walnut", swatch: "linear-gradient(135deg,#5f4029,#3c2718)", fill: "linear-gradient(160deg,#5f4029 0%,#3c2718 55%,#553a25 100%)" },
  { id: "charcoal", label: "Charcoal", swatch: "linear-gradient(135deg,#454852,#2a2c33)", fill: "linear-gradient(160deg,#454852 0%,#2a2c33 55%,#33363d 100%)" },
  { id: "navy", label: "Navy", swatch: "#243350", fill: "#243350" },
];

const VANITY_TOPS: MaterialOption[] = [
  { id: "white-quartz", label: "White quartz", swatch: "#f2efe7", fill: "repeating-linear-gradient(115deg, rgba(120,115,100,0.14) 0 1px, transparent 1px 46px), #f2efe7" },
  { id: "grey-quartz", label: "Grey quartz", swatch: "#c9c6bd", fill: "repeating-linear-gradient(115deg, rgba(70,68,60,0.16) 0 1px, transparent 1px 42px), #c9c6bd" },
  { id: "marble", label: "Marble", swatch: "linear-gradient(120deg,#efeae1 40%,#c9c2b4 60%)", fill: "repeating-linear-gradient(100deg, rgba(90,90,85,0.22) 0 2px, transparent 2px 58px), repeating-linear-gradient(25deg, rgba(90,90,85,0.12) 0 1px, transparent 1px 72px), #ece7dd" },
  { id: "terrazzo", label: "Terrazzo", swatch: "radial-gradient(circle at 30% 30%, #c96b4f 15%, transparent 16%), radial-gradient(circle at 65% 60%, #3f6b57 15%, transparent 16%), radial-gradient(circle at 40% 78%, #243350 11%, transparent 12%), #f2efe7", fill: "radial-gradient(circle at 15% 25%, #c96b4f 0 3px, transparent 4px), radial-gradient(circle at 42% 70%, #3f6b57 0 3px, transparent 4px), radial-gradient(circle at 68% 18%, #243350 0 2.5px, transparent 3.5px), radial-gradient(circle at 82% 62%, #c9975a 0 3px, transparent 4px), radial-gradient(circle at 24% 86%, #8a9a7d 0 2.5px, transparent 3.5px), radial-gradient(circle at 92% 88%, #3f6b57 0 2px, transparent 3px), radial-gradient(circle at 55% 45%, #c96b4f 0 2px, transparent 3px), #f2efe7" },
  { id: "black-granite", label: "Black granite", swatch: "#1c1c1c", fill: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1.4px), radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1.4px), #1c1c1c" },
  { id: "concrete", label: "Concrete", swatch: "#a9a49a", fill: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1.4px), radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1.4px), #a9a49a" },
];

const TILES: MaterialOption[] = [
  { id: "subway", label: "Subway tile", swatch: "#ffffff", fill: "repeating-linear-gradient(0deg, rgba(0,0,0,0.09) 0 1.5px, transparent 1.5px 26px), repeating-linear-gradient(90deg, rgba(0,0,0,0.07) 0 1.5px, transparent 1.5px 52px), #ffffff" },
  { id: "hex", label: "Hex tile", swatch: "#ece7db", fill: "repeating-linear-gradient(60deg, rgba(0,0,0,0.10) 0 1px, transparent 1px 22px), repeating-linear-gradient(-60deg, rgba(0,0,0,0.10) 0 1px, transparent 1px 22px), #ece7db" },
  { id: "herringbone", label: "Marble herringbone", swatch: "linear-gradient(45deg,#ece7dd 40%,#c9c2b4 60%)", fill: "repeating-linear-gradient(45deg, rgba(120,115,105,0.20) 0 2px, transparent 2px 34px), repeating-linear-gradient(-45deg, rgba(120,115,105,0.20) 0 2px, transparent 2px 34px), #ece7dd" },
  { id: "zellige", label: "Zellige green", swatch: "#3f6b57", fill: "radial-gradient(circle at 25% 30%, rgba(255,255,255,0.16), transparent 45%), radial-gradient(circle at 75% 65%, rgba(0,0,0,0.14), transparent 50%), repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0 1px, transparent 1px 20px), repeating-linear-gradient(90deg, rgba(0,0,0,0.08) 0 1px, transparent 1px 20px), #3f6b57" },
  { id: "terracotta", label: "Terracotta", swatch: "#c1683f", fill: "repeating-linear-gradient(0deg, rgba(0,0,0,0.10) 0 1px, transparent 1px 26px), repeating-linear-gradient(90deg, rgba(0,0,0,0.10) 0 1px, transparent 1px 26px), #c1683f" },
  { id: "charcoal-slate", label: "Charcoal slate", swatch: "#33363a", fill: "repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0 1.5px, transparent 1.5px 26px), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1.5px, transparent 1.5px 52px), #33363a" },
  { id: "ivory-picket", label: "Ivory picket", swatch: "#f4efe3", fill: "repeating-linear-gradient(30deg, rgba(0,0,0,0.08) 0 1.5px, transparent 1.5px 46px), repeating-linear-gradient(-30deg, rgba(0,0,0,0.06) 0 1.5px, transparent 1.5px 46px), #f4efe3" },
];

export function BathroomMaterials() {
  const [selection, setSelection] = useState<Record<Category, string>>({
    vanity: "white",
    vanityTop: "white-quartz",
    tile: "subway",
  });

  const select = (category: Category, id: string) =>
    setSelection((prev) => ({ ...prev, [category]: id }));

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border shadow-lg">
        {/* tile wall */}
        <div className="absolute inset-x-0 top-0 h-[52%] overflow-hidden">
          <MaterialLayer options={TILES} selectedId={selection.tile} />
        </div>

        {/* mirror */}
        <div className="absolute inset-x-[30%] top-[8%] h-[28%] overflow-hidden rounded-full bg-gradient-to-b from-[#dbe7ea] to-[#c3d3d6] shadow-inner">
          <span className="absolute inset-0 rounded-full border border-white/40" />
          <span className="absolute inset-x-1/4 top-1/4 h-1/4 rounded-full bg-white/25 blur-sm" />
        </div>

        {/* sconces */}
        <div className="absolute left-[22%] top-[16%] size-2.5 rounded-full bg-white shadow-[0_0_6px_2px_rgba(255,255,255,0.6)]" />
        <div className="absolute right-[22%] top-[16%] size-2.5 rounded-full bg-white shadow-[0_0_6px_2px_rgba(255,255,255,0.6)]" />

        {/* vanity top */}
        <div className="absolute inset-x-0 top-[52%] h-[7%] overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
          <MaterialLayer options={VANITY_TOPS} selectedId={selection.vanityTop} />
          <span className="absolute inset-x-0 top-0 h-px bg-white/40" />
        </div>

        {/* vessel sink */}
        <div className="absolute inset-x-[38%] top-[46%] h-[8%] rounded-full bg-white shadow-inner" />

        {/* faucet */}
        <div className="absolute left-1/2 top-[38%] h-[10%] w-[5px] -translate-x-1/2 rounded-t-full bg-[#8a8f94]" />

        {/* vanity doors */}
        <div className="absolute inset-x-0 top-[59%] bottom-[4%] flex gap-[3px] px-[3px]">
          {[0, 1].map((i) => (
            <div key={i} className="relative flex-1 overflow-hidden rounded-[3px] shadow-inner">
              <MaterialLayer options={VANITY} selectedId={selection.vanity} />
              <span className="absolute inset-2 rounded-[2px] border border-black/10" />
              <span
                className={`absolute top-3 h-3 w-px bg-black/25 ${i === 0 ? "right-3" : "left-3"}`}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[4%] bg-black/70" />
      </div>

      <div className="flex flex-col gap-8">
        <SwatchRow label="Vanity" options={VANITY} selectedId={selection.vanity} onSelect={(id) => select("vanity", id)} />
        <SwatchRow label="Vanity top" options={VANITY_TOPS} selectedId={selection.vanityTop} onSelect={(id) => select("vanityTop", id)} />
        <SwatchRow label="Tile" options={TILES} selectedId={selection.tile} onSelect={(id) => select("tile", id)} />
      </div>
    </div>
  );
}

export const bathroomBudgetTiers = [
  {
    id: "builder",
    name: "Builder grade",
    range: "$8K – $17K",
    description: "A new vanity, laminate top, and a fresh coat of paint over the existing layout. Clean and functional.",
    base: "#f1ede3",
    surface: "#ded6c4",
    wall: "#e9e4d8",
    fixture: "#c7cbd0",
  },
  {
    id: "mid",
    name: "Mid range",
    range: "$17K – $27K",
    description: "A quartz-top vanity and subway tile surround — the most requested combination for Ottawa ensuites.",
    base: "#e7e2d3",
    surface: "#f2efe7",
    wall: "#ffffff",
    fixture: "#9a978d",
  },
  {
    id: "premium",
    name: "Premium",
    range: "$27K – $37K",
    description: "A custom navy vanity, natural stone top, and handmade tile — spa-level finishes throughout.",
    base: "#243350",
    surface: "#ece7dd",
    wall: "#3f6b57",
    fixture: "#2b2b2b",
  },
  {
    id: "luxury",
    name: "Luxury",
    range: "$37K – $45K",
    description: "Full custom millwork, a floating stone vanity, and designer tile floor to ceiling. No compromises.",
    base: "#3c2718",
    surface: "#1c1c1c",
    wall: "#c1683f",
    fixture: "#b98a45",
  },
];
