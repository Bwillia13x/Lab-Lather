"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Flame, Sparkles, Check } from "lucide-react"
import { useState } from "react"

const tiers = [
  {
    name: "Essential",
    description: "Perfect for discovering our signature scents",
    features: [
      "1 luxury candle per month",
      "Rotating seasonal scent selections",
      "Free shipping on all deliveries",
      "Exclusive member-only fragrances",
    ],
    price: "$32",
  },
  {
    name: "Signature",
    description: "Our most popular candle subscription",
    features: [
      "2 luxury candles per month",
      "Curated scent pairings for your home",
      "Priority access to limited editions",
      "15% off additional purchases",
    ],
    popular: true,
    price: "$58",
  },
  {
    name: "Luxe",
    description: "The complete luxury candle experience",
    features: [
      "3 luxury candles per month",
      "Exclusive atelier collection access",
      "Complimentary wick trimmer & snuffer",
      "20% off + quarterly gift sets",
    ],
    price: "$85",
  },
]

const perks = [
  "Lock in founding member pricing forever",
  "First access to new scent launches",
  "Complimentary candle care guide",
]

export function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail("")
      setName("")
    }, 3000)
  }

  return (
    <section id="subscribe" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "-2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-sm bg-accent/10 border border-accent/20 shadow-lg transition-all hover:scale-110 hover:bg-accent/20 hover:rotate-3 magnetic-button">
              <Flame className="h-8 w-8 text-accent" />
            </div>
            <h2 className="mb-4 text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
              Join the <span className="text-gradient-accent">Luxury Candle Club</span>
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              Become a founding member and enjoy hand-selected luxury candles delivered to your door each month. Lock in
              exclusive pricing and get
              <span className="text-accent font-semibold"> 25% off your first subscription box</span>
              —plus complimentary candle care essentials with your first delivery.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-accent mb-6">
              <Sparkles className="h-4 w-4" />
              Limited to first 1,000 founding members
            </div>
          </div>

          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {perks.map((perk) => (
              <div
                key={perk}
                className="rounded-md border border-border/60 bg-background/80 p-4 text-sm text-muted-foreground shadow-sm"
              >
                {perk}
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {tiers.map((tier, index) => (
              <Card
                key={index}
                className={`border-border/50 bg-card/80 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl relative group ${
                  tier.popular ? "border-accent/50 shadow-lg ring-2 ring-accent/20" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground shadow-lg">
                      <Sparkles className="h-3 w-3" />
                      Most Popular
                    </div>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="mb-1 text-xl font-display font-semibold">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{tier.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-display font-bold text-accent">{tier.price}</span>
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 border border-accent/20 flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-accent" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="waitlist-name" className="text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="waitlist-name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-background transition-all focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="waitlist-email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="waitlist-email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-background transition-all focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full group transition-all hover:scale-105 hover:shadow-xl shadow-accent/20 bg-gradient-to-r from-accent to-accent/80"
                  disabled={submitted}
                >
                  {submitted ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Welcome to the Club!
                    </>
                  ) : (
                    <>
                      <Flame className="mr-2 h-4 w-4" />
                      Claim Your Founding Member Discount
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Join now to lock in exclusive pricing and be first to experience our luxury candle collection.
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 rounded-lg border border-accent/30 bg-accent/10 px-6 py-4 text-center text-sm text-muted-foreground">
            <strong className="text-foreground">100% Satisfaction Guarantee:</strong> If you're not completely delighted
            with your first candle delivery, we'll refund your subscription and send you a complimentary candle of your
            choice.
          </div>
        </div>
      </div>
    </section>
  )
}
