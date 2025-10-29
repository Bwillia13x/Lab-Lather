"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    client: "Modern Home Makeover",
    sector: "Home Transformation",
    image: "/luxury-midnight-amber-candle-bestseller.jpg",
    outcome: "Complete ambiance transformation",
    summary:
      "Sarah transformed her entire home with our Warm Woods collection. The rich, grounding scents created a cohesive atmosphere throughout her space, making every room feel like a luxury retreat.",
    deliverables: ["3 signature candles", "Living room & bedroom sets", "Seasonal rotation guide"],
    timeline: "Instant transformation",
  },
  {
    client: "Wellness Sanctuary",
    sector: "Self-care ritual",
    image: "/luxury-holiday-candle-collection-seasonal.jpg",
    outcome: "Enhanced daily wellness routine",
    summary:
      "Marcus created his perfect evening wind-down ritual with our Amber & Spice candles. The warm, inviting scents helped him disconnect from work stress and embrace relaxation every night.",
    deliverables: ["Evening ritual set", "Meditation corner setup", "Scent pairing guide"],
    timeline: "Daily ritual",
  },
  {
    client: "Fresh Start Collection",
    sector: "New home essentials",
    image: "/luxury-coastal-candle-collection-ocean-breeze.jpg",
    outcome: "Perfect housewarming gift",
    summary:
      "Elena gifted our Fresh Citrus collection to her best friend's new apartment. The bright, energizing scents made the space feel instantly welcoming and became a conversation starter at every gathering.",
    deliverables: ["3-candle gift set", "Premium gift packaging", "Personalized note card"],
    timeline: "Memorable gift",
  },
]

export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="border-b border-border/40 bg-muted/10 py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="container mx-auto px-4 relative">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-accent">
            Customer Stories
          </div>
          <h2 className="mb-4 text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
            Real homes, real transformations
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
            Discover how our customers use Lab & Lather candles to create their perfect atmosphere, from cozy evening
            rituals to energizing morning routines.
          </p>
        </div>

        <div className="space-y-10">
          {caseStudies.map((study, index) => (
            <Card
              key={study.client}
              className={`relative overflow-hidden border-border/50 bg-card/85 backdrop-blur-sm transition-all hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/20 ${index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <CardContent className="flex flex-col gap-8 p-6 md:flex-row md:gap-10 md:p-10">
                <div className="relative w-full md:w-2/5">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={`${study.client} customer story`}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-6 rounded-md border border-accent/30 bg-background/90 px-4 py-3 text-xs uppercase tracking-[0.22em] text-muted-foreground shadow-xl">
                    <span className="block text-foreground">{study.timeline}</span>
                    <span>{study.sector}</span>
                  </div>
                </div>

                <div className="md:w-3/5 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge
                      variant="secondary"
                      className="bg-background/90 border border-accent/30 uppercase tracking-[0.26em]"
                    >
                      {study.client}
                    </Badge>
                    <span className="text-sm font-display text-accent">{study.outcome}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{study.summary}</p>
                  <div className="grid gap-2">
                    {study.deliverables.map((deliverable) => (
                      <div key={deliverable} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {deliverable}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 text-xs uppercase tracking-[0.26em] text-muted-foreground">
                    <span>Story {index + 1}</span>
                    <span className="h-px w-12 bg-border" />
                    <span>Lab & Lather</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground max-w-xl">
            Ready to create your own story? Join our waitlist and be among the first to experience our luxury scented
            candles.
          </p>
          <Button
            asChild
            size="lg"
            className="group bg-gradient-to-r from-accent to-accent/80 shadow-lg shadow-accent/30 hover:from-accent/90 hover:to-accent/70"
          >
            <Link href="#subscribe" className="inline-flex items-center">
              Join the Waitlist Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
