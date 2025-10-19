"use client"

import { Beaker, Shield, Sparkles, Leaf, Compass, ClipboardCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Beaker,
    title: "Compliance engineered",
    description:
      "IFRA, CPSR, and Prop 65 documentation bundled with every concept so clients sign off without friction.",
    image: "/laboratory-beakers-and-test-tubes-with-clear-liqui.jpg",
  },
  {
    icon: Shield,
    title: "Clean-room grade",
    description:
      "Phthalate, sulfate, and cruelty-free batches produced in small runs with traceable ingredients and batch IDs.",
    image: "/natural-organic-ingredients-in-glass-containers--c.jpg",
  },
  {
    icon: Sparkles,
    title: "Design-first storytelling",
    description:
      "Texture, lighting, and packaging ready for decks, line sheets, and immersive mock-ups within 48 hours.",
    image: "/elegant-essential-oil-bottles-arranged-geometrical.jpg",
  },
  {
    icon: Leaf,
    title: "Circular materials",
    description:
      "Refillable vessels, recycled glass, and FSC-certified wraps ensure sustainability is part of the pitch.",
    image: "/sustainable-eco-friendly-packaging-with-natural-el.jpg",
  },
]

const process = [
  {
    icon: Compass,
    title: "Discovery Sprint",
    description: "Collaborative mood-boarding translates brand values into olfactive direction within one workshop.",
  },
  {
    icon: ClipboardCheck,
    title: "Pilot Launch",
    description: "We deliver sensory prototypes, test scripts, and analytics templates so approvals arrive in days, not weeks.",
  },
]

export function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => [...new Set([...prev, index])])
            }
          })
        },
        { threshold: 0.2 },
      )

      observer.observe(card)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="features" className="border-b border-border/40 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-accent">
            Full-stack formulation studio
          </div>
          <h2 className="mb-4 text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
            The science is invisible. The desire is immediate.
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
            We build fragrance programs that stand up to regulatory scrutiny while dazzling the senses. Every deliverable
            arrives with visuals, compliance, and operations pre-solved so your presentation feels inevitable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`transition-all duration-700 ${visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-accent/50 hover:shadow-xl hover:scale-105 h-full overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  </div>

                  <div className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-accent/10 border border-accent/20 transition-all group-hover:bg-accent/20 group-hover:scale-110">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="mb-2 text-xl font-display font-semibold">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {process.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="flex items-start gap-4 rounded-lg border border-border/60 bg-background/80 p-6 shadow-sm transition-all hover:border-accent/50 hover:shadow-accent/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-accent/30 bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="#case-studies" className="inline-flex">
            <Button variant="outline" className="border-accent/40 text-foreground hover:border-accent/60 hover:bg-background/80">
              View recent launch outcomes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
