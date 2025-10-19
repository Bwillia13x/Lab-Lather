"use client"

import { Beaker, Shield, Sparkles, Leaf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const features = [
  {
    icon: Beaker,
    title: "IFRA-Compliant",
    description:
      "Every scent meets International Fragrance Association standards. Rigorously tested, scientifically validated.",
    image: "/laboratory-beakers-and-test-tubes-with-clear-liqui.jpg",
  },
  {
    icon: Shield,
    title: "Phthalate & Sulfate-Free",
    description: "Clean formulations without harmful chemicals. Safe for your skin, safe for your home.",
    image: "/natural-organic-ingredients-in-glass-containers--c.jpg",
  },
  {
    icon: Sparkles,
    title: "Modern Scent Families",
    description: "Curated collections from fresh citrus to warm amber. Designed for contemporary rituals.",
    image: "/elegant-essential-oil-bottles-arranged-geometrical.jpg",
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description: "Ethically sourced ingredients, recyclable packaging, and cruelty-free practices throughout.",
    image: "/sustainable-eco-friendly-packaging-with-natural-el.jpg",
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
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
            Science-first, <span className="text-accent">design-forward</span>
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
            Clean ingredients meet crisp geometry. Every product is crafted with laboratory precision.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`transition-all duration-700 ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
      </div>
    </section>
  )
}
