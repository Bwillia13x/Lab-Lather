"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Package, Check } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const scentFamilies = [
  {
    id: "citrus",
    label: "Fresh Citrus",
    description: "Bright, energizing, clean",
    image: "/fresh-citrus-fruits-and-essential-oils-in-minimal-.jpg",
  },
  {
    id: "floral",
    label: "Modern Floral",
    description: "Delicate, sophisticated, airy",
    image: "/delicate-white-flowers-in-modern-glass-vase--minim.jpg",
  },
  {
    id: "woody",
    label: "Warm Woods",
    description: "Grounding, rich, comforting",
    image: "/natural-wood-elements-and-warm-amber-tones--minima.jpg",
  },
  {
    id: "herbal",
    label: "Herbal Green",
    description: "Crisp, natural, refreshing",
    image: "/fresh-green-herbs-in-laboratory-beakers--clean-sci.jpg",
  },
  {
    id: "amber",
    label: "Amber & Spice",
    description: "Deep, warm, inviting",
    image: "/warm-amber-liquid-in-elegant-glass-containers--ric.jpg",
  },
]

export function BuildASetSection() {
  const [selectedScents, setSelectedScents] = useState<string[]>([])
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Build-a-Set submission:", { name, email, selectedScents })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const toggleScent = (id: string) => {
    setSelectedScents((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  return (
    <section id="build-a-set" className="border-b border-border/40 py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-20 left-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "-2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-sm bg-accent/10 border border-accent/20 transition-all hover:scale-110 hover:bg-accent/20">
              <Package className="h-8 w-8 text-accent" />
            </div>
            <h2 className="mb-4 text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
              Prototype your <span className="text-gradient-accent">signature set</span> in minutes
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Select the moods that mirror your project and our formulators build a tactile storyline for you—complete with
              sample-ready bars, candles, and merchandising notes.
              <span className="text-accent font-semibold"> Save 15% on custom sets</span> while slots remain.
            </p>
          </div>

          <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <Label className="text-base font-display font-semibold">
                    Choose your scent families (select 2-3 for a cohesive capsule)
                  </Label>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {scentFamilies.map((scent) => (
                      <div
                        key={scent.id}
                        onClick={() => toggleScent(scent.id)}
                        className={`relative rounded-sm border cursor-pointer transition-all overflow-hidden group ${selectedScents.includes(scent.id)
                          ? "border-accent bg-accent/5 shadow-lg scale-105"
                          : "border-border hover:border-accent/50 hover:bg-accent/5 hover:scale-102"
                          }`}
                      >
                        <div className="relative aspect-[3/2] overflow-hidden">
                          <Image
                            src={scent.image || "/placeholder.svg"}
                            alt={scent.label}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                          {/* Selection indicator */}
                          {selectedScents.includes(scent.id) && (
                            <div className="absolute top-3 right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
                              <Check className="h-5 w-5 text-accent-foreground" />
                            </div>
                          )}
                        </div>

                        <div className="p-4">
                          <div className="font-display font-semibold mb-1">{scent.label}</div>
                          <div className="text-sm text-muted-foreground">{scent.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact information */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-background transition-all focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-background transition-all focus:scale-105"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full group transition-all hover:scale-105 hover:shadow-lg"
                  disabled={selectedScents.length === 0 || submitted}
                >
                  {submitted ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Submitted!
                    </>
                  ) : (
                    <>
                      Submit Your Selections
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>

                {selectedScents.length > 0 && (
                  <p className="text-sm text-center text-muted-foreground">
                    {selectedScents.length} scent {selectedScents.length === 1 ? "family" : "families"} selected — we&apos;ll
                    translate them into full-formula prototypes and a mood-aligned palette.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
