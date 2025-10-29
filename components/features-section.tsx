"use client"

import { Flame, Shield, Sparkles, Leaf, Clock, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Flame,
    title: "Perfume-Grade Fragrances",
    description:
      "Complex scent profiles with top, heart, and base notes that evolve beautifully as your candle burns, creating an immersive sensory experience.",
    image: "/elegant-essential-oil-bottles-arranged-geometrical.jpg",
  },
  {
    icon: Shield,
    title: "Clean & Safe Ingredients",
    description:
      "IFRA-certified formulations that are phthalate-free, paraben-free, and cruelty-free. Premium soy-coconut wax blend for a clean, even burn.",
    image: "/natural-organic-ingredients-in-glass-containers--c.jpg",
  },
  {
    icon: Clock,
    title: "Extended Burn Time",
    description:
      "Each luxury candle provides 60+ hours of exceptional fragrance throw, filling your entire space with sophisticated scent from first light to last.",
    image: "/laboratory-beakers-and-test-tubes-with-clear-liqui.jpg",
  },
  {
    icon: Leaf,
    title: "Sustainable Luxury",
    description:
      "Refillable vessels, recycled glass containers, and FSC-certified packaging ensure your indulgence is as kind to the planet as it is to your senses.",
    image: "/sustainable-eco-friendly-packaging-with-natural-el.jpg",
  },
]

const process = [
  {
    icon: Sparkles,
    title: "Curated Scent Selection",
    description:
      "Choose from our signature collection or let our experts curate the perfect fragrance journey for your home.",
  },
  {
    icon: Award,
    title: "Hand-Poured Excellence",
    description:
      "Each candle is meticulously hand-poured in small batches to ensure consistent quality and exceptional scent throw.",
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
            Premium Candle Craftsmanship
          </div>
          <h2 className="mb-4 text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
            Luxury That Burns Beautifully
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
            Every Lab & Lather candle is a masterpiece of fragrance engineering. We combine the finest natural waxes
            with perfume-grade essential oils and fragrance compounds to create scented candles that transform ordinary
            moments into extraordinary experiences.
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
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {process.map((step) => {
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
          <Link href="#subscribe" className="inline-flex">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-accent/80 shadow-xl shadow-accent/30 transition-all hover:from-accent/90 hover:to-accent/70 hover:shadow-accent/50 hover:scale-105"
            >
              Start Your Candle Subscription Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
