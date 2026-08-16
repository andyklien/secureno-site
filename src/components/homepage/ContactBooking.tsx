"use client";

import { useState } from "react";
import { ContactForm } from "@/components/ContactForm";
import { AvailabilityCalendar } from "@/components/homepage/AvailabilityCalendar";

export function ContactBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <AvailabilityCalendar selected={selectedDate} onSelect={setSelectedDate} />
        <div>
          <ContactForm selectedDate={selectedDate} />
        </div>
      </div>

      <p className="mt-14 text-center text-sm text-muted-foreground">
        SecuReno handles all permits. You never touch paperwork.
      </p>
    </div>
  );
}
