"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const lookbookShots = [
  {
    title: "Clean Lab Ritual",
    description: "Minimalist concrete surfaces with lab glass silhouettes and translucent soaps.",
    image: "/minimalist-lab-glassware-with-modern-soap-bars-and.jpg",
    tag: "Concept styling",
  },
  {
    title: "Chromatic Amber",
    description: "Warm lighting with smoked amber vessels staged for lobby installations.",
    image: "/warm-amber-liquid-in-elegant-glass-containers--ric.jpg",
    tag: "Hospitality rollout",
  },
  {
    title: "Citrus Atelier",
    description: "Vibrant botanicals and geometric forms ideal for retail feature walls.",
    image: "/fresh-citrus-fruits-and-essential-oils-in-minimal-.jpg",
    tag: "Retail moment",
  },
]

export function LookbookSection() {
  return (
    <section id="lookbook" className="border-b border-border/40 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-accent">
            Lookbook preview
          </div>
          <h2 className="mb-4 max-w-3xl text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
            Gallery-grade visuals that sell the scent before it ships
          </h2>
          <p className="max-w-2xl text-pretty text-lg text-muted-foreground">
            Every Lab & Lather engagement includes pre-built creative assets—art direction, lighting notes, shelf concepts,
            and copy that make your pitch deck read like a finished campaign.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {lookbookShots.map((shot, index) => (
            <div
              key={shot.title}
              className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/80 shadow-lg transition-transform duration-700 hover:-translate-y-2 hover:border-accent/50 hover:shadow-2xl"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={shot.image || "/placeholder.svg"}
                  alt={shot.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background/90" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-background/80 text-accent border border-accent/30 uppercase tracking-[0.2em]">
                    {shot.tag}
                  </Badge>
                </div>
              </div>
              <div className="space-y-3 px-6 pb-6 pt-5">
                <h3 className="text-xl font-display font-semibold text-foreground">{shot.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{shot.description}</p>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  <span>Scene {index + 1}</span>
                  <span>Lab & Lather Art Dept.</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground max-w-xl">
            Request the interactive lookbook to access scene breakdowns, prop sourcing lists, and CAD-ready packaging dielines.
          </p>
          <Button
            asChild
            size="lg"
            className="group bg-background/80 text-foreground border border-accent/40 hover:border-accent/60 hover:bg-background"
          >
            <Link href="#subscribe" className="inline-flex items-center">
              Unlock the full lookbook
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
