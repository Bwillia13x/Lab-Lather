"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const lookbookShots = [
  {
    title: "Minimalist Sanctuary",
    description: "Clean lines and warm candlelight create a serene, modern atmosphere.",
    image: "/minimalist-lab-glassware-with-modern-soap-bars-and.jpg",
    tag: "Modern Living",
  },
  {
    title: "Amber Glow",
    description: "Rich amber tones and flickering flames for cozy, intimate evenings.",
    image: "/warm-amber-liquid-in-elegant-glass-containers--ric.jpg",
    tag: "Evening Ambiance",
  },
  {
    title: "Fresh & Bright",
    description: "Energizing citrus scents paired with natural elements for daytime vitality.",
    image: "/fresh-citrus-fruits-and-essential-oils-in-minimal-.jpg",
    tag: "Morning Ritual",
  },
]

export function LookbookSection() {
  return (
    <section id="lookbook" className="border-b border-border/40 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-accent">
            Inspiration Gallery
          </div>
          <h2 className="mb-4 max-w-3xl text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
            Discover how our candles <span className="text-gradient-accent">transform spaces</span>
          </h2>
          <p className="max-w-2xl text-pretty text-lg text-muted-foreground">
            From minimalist sanctuaries to cozy retreats, see how Lab & Lather candles create the perfect ambiance for
            every moment. Let our curated gallery inspire your next purchase.
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
                  <span>Style {index + 1}</span>
                  <span>Lab & Lather</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground max-w-xl">
            Ready to create your own sanctuary? Explore our full collection of luxury scented candles and find your
            perfect match.
          </p>
          <Button
            asChild
            size="lg"
            className="group bg-gradient-to-r from-accent to-accent/80 shadow-lg shadow-accent/30 hover:from-accent/90 hover:to-accent/70"
          >
            <Link href="#subscribe" className="inline-flex items-center">
              Shop Our Collection
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
