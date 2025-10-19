"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const products = [
  {
    name: "Citrus Laboratory",
    category: "Soap Bar",
    scent: "Bergamot • Yuzu • White Tea",
    image: "/elegant-essential-oil-bottles-arranged-geometrical.jpg",
    statLabel: "Retail sell-through",
    statValue: "82% in 6 weeks",
  },
  {
    name: "Forest Compound",
    category: "Candle",
    scent: "Cedar • Moss • Rain",
    image: "/natural-organic-ingredients-in-glass-containers--c.jpg",
    statLabel: "Boutique reorder",
    statValue: "3.2x standard",
  },
  {
    name: "Coastal Elements",
    category: "Soap Bar",
    scent: "Sea Salt • Driftwood • Sage",
    image: "/sustainable-eco-friendly-packaging-with-natural-el.jpg",
    statLabel: "Guest satisfaction",
    statValue: "4.9 / 5",
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
            Signature launches that converted on first sight
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Each collection marries a memorable scent architecture with tactile storytelling—delivered with photography,
            merchandising notes, and compliance packs so buyers, hoteliers, and investors say yes immediately.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden group transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/50 perspective-card ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm border border-accent/20 group-hover:border-accent/40 transition-all uppercase tracking-[0.2em]">
                      {product.category}
                    </Badge>
                    <div className="rounded-md border border-accent/40 bg-background/90 px-3 py-2 text-right text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      <span className="block text-foreground">{product.statLabel}</span>
                      <span className="text-accent text-sm font-display">{product.statValue}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-display font-semibold group-hover:text-accent transition-colors">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.scent}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.26em] text-muted-foreground">Pre-order kit includes: formula deck, retail planogram, compliance pack</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Badge className="bg-accent text-accent-foreground px-6 py-2 text-xs uppercase tracking-[0.26em]">
            Next release: Atelier Series / June 2025
          </Badge>
        </div>
      </div>
    </section>
  )
}
