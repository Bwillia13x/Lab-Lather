"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Flame, ShieldCheck, FlaskConical } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 animate-gradient-shift bg-[linear-gradient(135deg,rgba(44,120,255,0.2)_0%,rgba(15,23,42,0.1)_45%,rgba(44,120,255,0.15)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(44,120,255,0.18),transparent_55%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center transition-all duration-700 ${
            mounted ? "opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-accent/90 backdrop-blur-sm shadow-lg">
              <Flame className="h-3.5 w-3.5" />
              High-Grade Scented Candles
            </div>

            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-display font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-[3.5rem]">
                Luxury Scented Candles That Transform Every Space Into a Sanctuary
              </h1>
              <p className="text-pretty text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Experience the art of premium fragrance with our hand-poured, IFRA-certified candles. Each candle
                features complex, perfume-grade scent profiles crafted from the finest essential oils and fragrance
                compounds—phthalate-free, sulfate-free, and designed to elevate your everyday moments.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-md border border-border/60 bg-background/80 p-3 backdrop-blur">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <p className="text-sm leading-relaxed text-foreground">
                  Premium soy-coconut wax blend with 60+ hour burn time and exceptional scent throw.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-md border border-border/60 bg-background/80 p-3 backdrop-blur">
                <FlaskConical className="h-5 w-5 text-accent" />
                <p className="text-sm leading-relaxed text-foreground">
                  Complex fragrance architecture with top, heart, and base notes that evolve beautifully.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="group w-full sm:w-auto bg-gradient-to-r from-accent to-accent/80 shadow-2xl shadow-accent/30 transition-all hover:from-accent/90 hover:to-accent/70 hover:shadow-accent/50 hover:scale-105"
              >
                <span className="flex items-center">
                  Shop Luxury Candles
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto border-accent/30 bg-background/70 backdrop-blur-sm text-foreground transition-all hover:border-accent/60 hover:bg-background/90 hover:scale-[1.02]"
              >
                <span className="flex items-center">
                  Explore Scent Collection
                  <Sparkles className="ml-2 h-4 w-4 text-accent transition-transform group-hover:rotate-12" />
                </span>
              </Button>
            </div>

            <div
              className={`grid gap-4 sm:grid-cols-3 transition-all duration-700 ${mounted ? "animate-reveal-up" : "opacity-0 translate-y-4"}`}
              style={{ animationDelay: "300ms" }}
            >
              <div className="rounded-md border border-border/50 bg-background/70 p-4 text-center shadow-sm">
                <p className="text-2xl font-display font-semibold text-accent">60+</p>
                <p className="text-xs text-muted-foreground">hours of clean, even burn</p>
              </div>
              <div className="rounded-md border border-border/50 bg-background/70 p-4 text-center shadow-sm">
                <p className="text-2xl font-display font-semibold text-accent">100%</p>
                <p className="text-xs text-muted-foreground">phthalate & paraben free</p>
              </div>
              <div className="rounded-md border border-border/50 bg-background/70 p-4 text-center shadow-sm">
                <p className="text-2xl font-display font-semibold text-accent">4.9/5</p>
                <p className="text-xs text-muted-foreground">customer satisfaction rating</p>
              </div>
            </div>
          </div>

          <div
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full max-w-[28rem]">
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
              <div className="group relative rounded-xl border border-accent/20 bg-card/80 p-4 shadow-[0_40px_80px_-40px_rgba(48,93,235,0.4)] backdrop-blur">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/luxury-scented-candles-in-elegant-modern-interior.jpg"
                    alt="Lab & Lather luxury scented candles"
                    width={900}
                    height={900}
                    className="h-auto w-full object-cover transition-all duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>

                <div className="mt-4 flex items-center justify-between rounded-md border border-accent/30 bg-background/80 p-4 text-sm">
                  <div>
                    <p className="font-display text-sm font-semibold text-foreground">Signature Collection</p>
                    <p className="text-xs text-muted-foreground">Bergamot • Smoked Cedar • Amber</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/15 text-accent">
                    <Flame className="h-5 w-5" />
                  </div>
                </div>

                <div className="absolute -bottom-10 right-6 w-48 rounded-lg border border-accent/40 bg-background/90 p-4 shadow-xl backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Customer Review</p>
                  <p className="mt-2 text-lg font-display font-semibold text-foreground">"Absolutely divine"</p>
                  <p className="text-xs text-muted-foreground">Best candles I've ever owned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-accent/10 via-transparent to-transparent" />
    </section>
  )
}
