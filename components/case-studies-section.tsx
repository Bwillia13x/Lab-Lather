"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    client: "Atlas Residences",
    sector: "Luxury residential",
    image: "/natural-wood-elements-and-warm-amber-tones--minima.jpg",
    outcome: "+42% lease tour conversions",
    summary:
      "Curated an amber-forward scent story to match the architect's brass and walnut palette. Delivered interactive mood boards, compliance docs, and photo-ready merchandising in seven days.",
    deliverables: ["3 signature fragrances", "Lobby & amenity styling guide", "Compliance packet"],
    timeline: "7-day sprint",
  },
  {
    client: "Meridian Hotel Flagship",
    sector: "Boutique hospitality",
    image: "/warm-amber-liquid-in-elegant-glass-containers--ric.jpg",
    outcome: "+37% guest dwell time",
    summary:
      "Designed a forest compound candle program for lobby and suites. Produced sensory scripting, staff training, and analytics prompts that quantified guest sentiment within the first month.",
    deliverables: ["Candle + soap duo", "Staff activation kit", "Sentiment tracking dashboard"],
    timeline: "14-day rollout",
  },
  {
    client: "Haus Series",
    sector: "Direct-to-consumer",
    image: "/fresh-citrus-fruits-and-essential-oils-in-minimal-.jpg",
    outcome: "3.4x launch day revenue",
    summary:
      "Built a citrus laboratory collection with ready-to-run e-commerce assets. Provided packaging dielines, campaign stills, and regulatory language for US/EU expansion.",
    deliverables: ["3 soap SKUs", "Campaign stills", "Regulatory copy deck"],
    timeline: "21-day engagement",
  },
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="border-b border-border/40 bg-muted/10 py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="container mx-auto px-4 relative">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-accent">
            Proven launch outcomes
          </div>
          <h2 className="mb-4 text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
            Programs that move decision makers on first review
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
            Each engagement pairs scientific rigor with editorial storytelling so clients see, smell, and sign off before
            revisions are requested.
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
                      alt={`${study.client} case study`}
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
                    <Badge variant="secondary" className="bg-background/90 border border-accent/30 uppercase tracking-[0.26em]">
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
                    <span>Engagement {index + 1}</span>
                    <span className="h-px w-12 bg-border" />
                    <span>Lab & Lather Studio</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground max-w-xl">
            Need a tailored preview for your client? We package scent boards, compliance paperwork, and activation plans in a
            single branded PDF within 48 hours.
          </p>
          <Button
            asChild
            size="lg"
            className="group bg-gradient-to-r from-accent to-accent/80 shadow-lg shadow-accent/30 hover:from-accent/90 hover:to-accent/70"
          >
            <Link href="#subscribe" className="inline-flex items-center">
              Request the full case study deck
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
