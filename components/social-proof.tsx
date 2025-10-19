"use client"

import { Users, Package, Award, Building2, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

const partners = ["The Line Hotel", "Kinfolk Studio", "Atelier 92", "Everlane Flagship", "Lumen Spas", "Haus Series"]

const metrics = [
  {
    icon: Users,
    value: "3,200+",
    label: "design leads in active pipeline",
  },
  {
    icon: Package,
    value: "68",
    label: "custom scent architectures delivered",
  },
  {
    icon: Award,
    value: "100%",
    label: "IFRA + CPSR compliant batches",
  },
]

export function SocialProof() {
  const [mounted, setMounted] = useState(false)
  const [count, setCount] = useState(0)
  const targetCount = 3200

  useEffect(() => {
    setMounted(true)

    const duration = 2200
    const steps = 60
    const increment = targetCount / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetCount) {
        setCount(targetCount)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  return (
    <section className="border-b border-border/40 bg-muted/15 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-accent">
            <Building2 className="h-3.5 w-3.5" />
            Trusted by design-led hospitality & retail
          </div>
          <p className="max-w-3xl text-pretty text-base text-muted-foreground">
            Studio partners leverage Lab & Lather to present launch-ready scent concepts that pair visual direction with
            compliance documentation on day one.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-all hover:border-accent/50 hover:text-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              {partner}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div
                key={metric.label}
                className="group relative overflow-hidden rounded-lg border border-border/50 bg-background/80 p-6 text-center shadow-sm transition-all hover:scale-[1.03] hover:border-accent/50 hover:shadow-accent/20 animate-reveal-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-sm bg-accent/10 border border-accent/20 transition-all group-hover:bg-accent/20">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <p className="text-3xl font-display font-semibold text-foreground">
                  {index === 0 ? `${count.toLocaleString()}+` : metric.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
