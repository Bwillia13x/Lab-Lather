"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Flame, Leaf, Heart, Timer, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const credentials = [
  { text: "Hand-poured with premium soy-coconut wax blend", icon: Heart },
  { text: "IFRA-certified luxury fragrance oils", icon: CheckCircle2 },
  { text: "Lead-free cotton wicks for clean burning", icon: Flame },
  { text: "Phthalate-free and cruelty-free formulations", icon: Leaf },
  { text: "60+ hour burn time for lasting luxury", icon: Timer },
  { text: "Sustainable packaging and eco-conscious sourcing", icon: Leaf },
]

const turnaround = [
  { label: "Burn time per candle", value: "60+ hrs", icon: Timer },
  { label: "Signature scents", value: "12+", icon: Sparkles },
]

export function ScienceSection() {
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
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="science"
      ref={sectionRef}
      className="border-b border-border/40 py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium backdrop-blur-sm">
              <Flame className="h-3.5 w-3.5 text-accent" />
              <span className="text-accent">Artisan Craftsmanship</span>
            </div>

            <h2 className="mb-6 text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
              Luxury candles crafted with <span className="text-gradient-accent">scientific precision</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every Lab & Lather candle is hand-poured using premium ingredients and rigorously tested for quality. We
              combine artisan techniques with modern fragrance science to create candles that burn cleanly and fill your
              space with captivating scents.
              <span className="text-accent font-semibold"> Luxury you can trust.</span>
            </p>
            <div className="space-y-3">
              {credentials.map((credential, index) => {
                const Icon = credential.icon
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-3 rounded-md transition-all duration-700 hover:bg-accent/5 group ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent/10 border border-accent/20 flex-shrink-0 transition-all group-hover:bg-accent/20 group-hover:scale-110">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground pt-1">{credential.text}</span>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {turnaround.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-md border border-border/60 bg-background/80 p-4 text-sm text-foreground shadow-sm"
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-accent/30 bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-base font-semibold text-foreground">{item.value}</p>
                      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{item.label}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-xl overflow-hidden group">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/luxury-candle-craftsmanship-artisan-process.jpg"
                    alt="Premium candle craftsmanship - hand-poured luxury scented candles"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-6 left-6 space-y-3">
                    <div className="bg-background/95 backdrop-blur-md border border-accent/40 rounded-sm px-5 py-3 shadow-xl">
                      <p className="text-2xl font-display font-bold text-accent">Premium</p>
                      <p className="text-xs text-muted-foreground">Hand-Poured Quality</p>
                    </div>
                    <div className="rounded-md border border-accent/30 bg-background/90 px-4 py-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      <span className="block text-foreground">Clean Burning</span>
                      <span>60+ Hour Burn Time</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
