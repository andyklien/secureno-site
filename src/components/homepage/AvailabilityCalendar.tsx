"use client";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useMemo, useState } from "react";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

type DayStatus = "past" | "closed" | "booked" | "available";

// Integer hash (murmur-style bit mixing) so booked days scatter across the
// month instead of correlating with day-of-week the way a plain mod does.
function hashDate(year: number, month: number, day: number): number {
  let h = year * 10000 + month * 100 + day;
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b);
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b);
  h = (h ^ (h >>> 16)) >>> 0;
  return h;
}

function statusFor(date: Date, today: Date): DayStatus {
  const day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (day < todayStart) return "past";
  if (day.getDay() === 0) return "closed"; // crews are off Sundays

  const hash = hashDate(day.getFullYear(), day.getMonth(), day.getDate());
  return hash % 5 === 0 ? "booked" : "available";
}

export function AvailabilityCalendar({
  selected,
  onSelect,
}: {
  selected: Date | null;
  onSelect: (date: Date) => void;
}) {
  const today = useMemo(() => new Date(), []);
  const [cursor, setCursor] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));

  const canGoBack =
    cursor.getFullYear() > today.getFullYear() ||
    (cursor.getFullYear() === today.getFullYear() && cursor.getMonth() > today.getMonth());

  const weeks = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startOffset = firstDay.getDay();

    const cells: (Date | null)[] = [];
    for (let i = 0; i < startOffset; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
    while (cells.length % 7 !== 0) cells.push(null);

    const rows: (Date | null)[][] = [];
    for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));
    return rows;
  }, [cursor]);

  const changeMonth = (delta: number) => {
    setCursor((c) => new Date(c.getFullYear(), c.getMonth() + delta, 1));
  };

  const dateLabel = (d: Date) =>
    d.toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" });

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => changeMonth(-1)}
            disabled={!canGoBack}
            aria-label="Previous month"
            className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-30"
          >
            <CaretLeft weight="light" className="size-4" aria-hidden="true" />
          </button>
          <p className="font-serif text-lg text-foreground">
            {MONTH_NAMES[cursor.getMonth()]} {cursor.getFullYear()}
          </p>
          <button
            type="button"
            onClick={() => changeMonth(1)}
            aria-label="Next month"
            className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
          >
            <CaretRight weight="light" className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-7 gap-y-2 text-center">
          {WEEKDAYS.map((wd) => (
            <span key={wd} className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              {wd}
            </span>
          ))}

          {weeks.map((week, wi) =>
            week.map((date, di) => {
              if (!date) return <span key={`${wi}-${di}`} />;
              const status = statusFor(date, today);
              const isSelected = selected?.toDateString() === date.toDateString();

              if (status === "available") {
                return (
                  <button
                    key={date.toISOString()}
                    type="button"
                    onClick={() => onSelect(date)}
                    aria-pressed={isSelected}
                    aria-label={`${dateLabel(date)} — available`}
                    className={`mx-auto flex size-9 items-center justify-center rounded-full text-sm font-semibold transition-all duration-150 ${
                      isSelected
                        ? "bg-accent text-accent-foreground ring-2 ring-accent ring-offset-2 ring-offset-card"
                        : "bg-accent/15 text-accent hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {date.getDate()}
                  </button>
                );
              }

              const stateClass =
                status === "booked"
                  ? "text-destructive/70 bg-destructive/10"
                  : status === "past"
                    ? "text-muted-foreground/40"
                    : "text-muted-foreground/30";

              return (
                <span
                  key={date.toISOString()}
                  aria-label={
                    status === "booked" ? `${dateLabel(date)} — booked` : undefined
                  }
                  className={`mx-auto flex size-9 items-center justify-center rounded-full text-sm ${stateClass}`}
                >
                  {date.getDate()}
                </span>
              );
            })
          )}
        </div>

        <div className="mt-6 flex items-center justify-center gap-5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-accent" /> Available
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-destructive/40" /> Booked
          </span>
        </div>
      </div>

      <div className="mt-5 min-h-[1.5rem] text-center" aria-live="polite">
        {selected && (
          <p className="text-sm font-medium text-accent">
            {dateLabel(selected)} selected — fill in your details to confirm.
          </p>
        )}
      </div>
    </div>
  );
}
