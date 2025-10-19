"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Award } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4">
        <div
          className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-5 py-2 text-sm backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-accent/10 hover:scale-105 cursor-default shadow-sm">
            <Sparkles className="h-4 w-4 text-accent animate-pulse-glow" />
            <span className="text-foreground font-medium">IFRA-Compliant • Phthalate-Free • Science-First</span>
            <Award className="h-4 w-4 text-accent/70" />
          </div>

          <h1 className="mb-6 text-balance text-5xl font-display font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Modern scents,{" "}
            <span className="relative inline-block">
              <span className="text-accent">laboratory precision</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            </span>
          </h1>

          <p className="mb-10 text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed max-w-2xl mx-auto">
            Handcrafted soaps and candles designed with scientific rigor. Clean ingredients, crisp geometry, and scents
            that transform your daily ritual into a moment of mindful luxury.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="w-full sm:w-auto group transition-all hover:scale-105 hover:shadow-xl shadow-accent/20"
            >
              Build Your Set
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-background/50 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-md hover:bg-background/80"
            >
              Explore Scents
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              <span>Sulfate-free</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              <span>Cruelty-free</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              <span>Sustainably sourced</span>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 md:mt-24 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mx-auto max-w-5xl">
            <div className="relative rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-8 md:p-12 shadow-2xl overflow-hidden group">
              {/* Hero product image */}
              <div className="relative aspect-[16/9] rounded-md overflow-hidden">
                <Image
                  src="/minimalist-lab-glassware-with-modern-soap-bars-and.jpg"
                  alt="Lab & Lather products - modern soaps and candles with laboratory precision"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>

              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/30 rounded-tl-lg transition-all duration-500 group-hover:border-accent/60 group-hover:w-24 group-hover:h-24" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/30 rounded-br-lg transition-all duration-500 group-hover:border-accent/60 group-hover:w-24 group-hover:h-24" />

              <div className="absolute top-12 right-12 bg-background/95 backdrop-blur-md border border-accent/40 rounded-sm px-5 py-3 shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
                <p className="text-sm font-display font-semibold text-accent flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Laboratory Tested
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-accent/5 via-accent/2 to-transparent animate-pulse-glow" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
    </section>
  )
}
