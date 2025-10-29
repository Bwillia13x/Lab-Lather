"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const products = [
  {
    name: "Midnight Ember",
    category: "Luxury Candle",
    scent: "Smoked Cedar • Leather • Dark Amber",
    image: "/luxury-amber-scented-candle-warm-glow.jpg",
    statLabel: "Burn Time",
    statValue: "65 hours",
    notes: "Rich, sophisticated, and deeply grounding",
  },
  {
    name: "Citrus Grove",
    category: "Luxury Candle",
    scent: "Bergamot • Yuzu • White Tea • Jasmine",
    image: "/elegant-coastal-scented-candle-blue-tones.jpg",
    statLabel: "Scent Throw",
    statValue: "Exceptional",
    notes: "Bright, uplifting, and refreshingly elegant",
  },
  {
    name: "Coastal Sanctuary",
    category: "Luxury Candle",
    scent: "Sea Salt • Driftwood • Sage • Eucalyptus",
    image: "/luxury-rose-scented-candle-elegant-vessel.jpg",
    statLabel: "Customer Rating",
    statValue: "4.9 / 5",
    notes: "Clean, calming, and spa-like tranquility",
  },
]

export function ProductShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
            Our Signature Scented Candle Collection
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Each luxury candle is hand-poured with premium soy-coconut wax and features complex, perfume-grade
            fragrances that fill your space with sophisticated scent. Experience the difference of high-grade,
            IFRA-certified candles crafted for the most discerning homes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden group transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/50 perspective-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />

                  <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />

                  <div className="absolute top-4 right-4 flex flex-col items-end gap-3">
                    <Badge
                      variant="secondary"
                      className="bg-background/90 backdrop-blur-sm border border-accent/20 group-hover:border-accent/40 transition-all uppercase tracking-[0.2em]"
                    >
                      {product.category}
                    </Badge>
                    <div className="rounded-md border border-accent/40 bg-background/90 px-3 py-2 text-right text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      <span className="block text-foreground">{product.statLabel}</span>
                      <span className="text-accent text-sm font-display">{product.statValue}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-display font-semibold group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{product.scent}</p>
                  <p className="text-xs text-muted-foreground italic">{product.notes}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-accent to-accent/80 shadow-xl shadow-accent/30 transition-all hover:from-accent/90 hover:to-accent/70 hover:shadow-accent/50 hover:scale-105"
          >
            <span className="flex items-center">
              Shop All Luxury Candles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
          <Badge className="bg-accent/10 text-accent border border-accent/30 px-6 py-2 text-xs uppercase tracking-[0.26em]">
            Free Shipping on Orders Over $75
          </Badge>
        </div>
      </div>
    </section>
  )
}
