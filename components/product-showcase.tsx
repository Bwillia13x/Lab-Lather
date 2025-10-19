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
  },
  {
    name: "Forest Compound",
    category: "Candle",
    scent: "Cedar • Moss • Rain",
    image: "/natural-organic-ingredients-in-glass-containers--c.jpg",
  },
  {
    name: "Coastal Elements",
    category: "Soap Bar",
    scent: "Sea Salt • Driftwood • Sage",
    image: "/sustainable-eco-friendly-packaging-with-natural-el.jpg",
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
            Featured formulations
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Each product is meticulously crafted with clean ingredients and modern scent profiles designed for the
            contemporary home.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden group transition-all duration-700 hover:scale-105 hover:shadow-xl ${
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
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm border border-accent/20">
                      {product.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-display font-semibold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.scent}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
