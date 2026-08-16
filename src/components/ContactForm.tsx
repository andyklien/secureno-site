"use client";

import { CheckCircle } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

const inputClasses =
  "w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

const labelClasses = "mb-2 block text-sm font-medium text-foreground";

const dateLabel = (d: Date) =>
  d.toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" });

export function ContactForm({
  selectedDate = null,
}: {
  selectedDate?: Date | null;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-sm border border-border bg-card p-8">
        <CheckCircle weight="light" className="size-8 text-accent" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-foreground">
          Thanks — your request is in.
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {selectedDate
            ? `We'll confirm your ${dateLabel(selectedDate)} consultation within 24 hours.`
            : "A SecuReno coordinator will reach out within one business day to schedule your free consultation and match you with a professional."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {selectedDate && (
        <div className="flex items-center justify-between rounded-sm border border-accent/30 bg-accent/10 px-4 py-3">
          <p className="text-sm font-medium text-foreground">
            Preferred date: <span className="text-accent">{dateLabel(selectedDate)}</span>
          </p>
          <input type="hidden" name="preferredDate" value={selectedDate.toISOString()} />
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClasses}>
            First name
          </label>
          <input id="firstName" name="firstName" type="text" required className={inputClasses} placeholder="Jane" />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClasses}>
            Last name
          </label>
          <input id="lastName" name="lastName" type="text" required className={inputClasses} placeholder="Doe" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} placeholder="jane@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClasses} placeholder="(613) 555-0100" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="postalCode" className={labelClasses}>
            Postal code
          </label>
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            required
            pattern="[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d"
            className={inputClasses}
            placeholder="K1P 1J1"
          />
        </div>
        <div>
          <label htmlFor="propertyType" className={labelClasses}>
            Property type
          </label>
          <select id="propertyType" name="propertyType" required defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Select property type
            </option>
            <option value="detached">Detached house</option>
            <option value="townhouse">Townhouse</option>
            <option value="condo">Condo / apartment</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="renovationType" className={labelClasses}>
            Renovation type
          </label>
          <select id="renovationType" name="renovationType" required defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Select a renovation type
            </option>
            <option value="kitchen">Kitchen</option>
            <option value="bathroom">Bathroom</option>
            <option value="both">Kitchen &amp; Bathroom</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClasses}>
            Approximate budget
          </label>
          <select id="budget" name="budget" required defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Select a budget range
            </option>
            <option value="under-15k">Under $15,000</option>
            <option value="15k-30k">$15,000 – $30,000</option>
            <option value="30k-50k">$30,000 – $50,000</option>
            <option value="50k-75k">$50,000 – $75,000</option>
            <option value="75k-plus">$75,000+</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="timeline" className={labelClasses}>
            Desired timeline
          </label>
          <select id="timeline" name="timeline" required defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Select a timeline
            </option>
            <option value="asap">As soon as possible</option>
            <option value="1-3-months">1 – 3 months</option>
            <option value="3-6-months">3 – 6 months</option>
            <option value="6-12-months">6 – 12 months</option>
            <option value="exploring">Just exploring</option>
          </select>
        </div>
        {!selectedDate && (
          <div>
            <label htmlFor="preferredDateInput" className={labelClasses}>
              Preferred consultation date{" "}
              <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <input
              id="preferredDateInput"
              name="preferredDate"
              type="date"
              className={inputClasses}
            />
          </div>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClasses}
          placeholder="Room size, must-haves, inspiration — anything that helps us prepare for your consultation."
        />
      </div>

      <div>
        <label htmlFor="photos" className={labelClasses}>
          Photos of your space{" "}
          <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input
          id="photos"
          name="photos"
          type="file"
          accept="image/*"
          multiple
          className={`${inputClasses} cursor-pointer file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-muted file:px-4 file:py-2 file:text-sm file:font-medium file:text-foreground`}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#3a362f] active:scale-[0.98] sm:w-auto"
      >
        Request Free Consultation
      </button>
    </form>
  );
}
