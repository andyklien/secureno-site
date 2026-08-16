"use client";

import Image from "next/image";
import { Medal } from "@phosphor-icons/react";
import { Button } from "@/components/Button";
import { StaggerReveal, StaggerItem } from "@/components/motion/StaggerReveal";
import { site } from "@/lib/content";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <StaggerReveal className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-14 pt-16 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-20 lg:pt-24">
        <StaggerItem className="flex lg:col-span-4 lg:col-start-1 lg:items-end">
          <p className="max-w-xs text-sm leading-relaxed tracking-tight text-muted-foreground sm:text-base">
            SecuReno matches Ottawa homeowners with a vetted network of
            kitchen and bathroom renovation professionals.
          </p>
        </StaggerItem>

        <div className="flex flex-col items-start gap-6 lg:col-span-7 lg:col-start-6">
          <StaggerItem>
            <h1 className="text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {site.tagline}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="max-w-xl text-balance text-base leading-relaxed text-muted-foreground">
              One coordinated process, one fixed-price proposal, and a
              5-year workmanship guarantee — from your first consultation
              to the final walkthrough.
            </p>
          </StaggerItem>
          <StaggerItem className="flex flex-wrap items-center gap-x-4 gap-y-3 pt-2">
            <Button href="/contact">{site.ctaPrimary}</Button>
            <Button href="/gallery" variant="secondary" showArrow={false}>
              {site.ctaSecondary}
            </Button>
          </StaggerItem>
        </div>
      </StaggerReveal>

      <StaggerReveal className="relative w-full px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="grain-overlay shadow-tinted-lg relative aspect-[16/8] w-full overflow-hidden rounded-[1.5rem] sm:aspect-[16/7]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 bg-primary/10 mix-blend-overlay"
            />
            <Image
              src={images.kitchenBright.src}
              alt={images.kitchenBright.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-6 hidden max-w-[16rem] items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-tinted sm:flex">
            <Medal weight="light" className="mt-0.5 size-6 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                5-Year Workmanship Guarantee
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Backed by SecuReno on every project in our network.
              </p>
            </div>
          </div>
        </div>
      </StaggerReveal>
    </section>
  );
}
