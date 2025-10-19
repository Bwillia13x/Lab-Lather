"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Sparkles, Check } from "lucide-react"
import { useState } from "react"

const tiers = [
  {
    name: "Essential",
    description: "Perfect for trying our core collection",
    features: ["2 soaps + 1 candle", "Monthly delivery", "Free shipping", "Member-only scents"],
    price: "$45",
  },
  {
    name: "Signature",
    description: "Our most popular subscription",
    features: ["3 soaps + 2 candles", "Bi-weekly delivery", "Priority access to new scents", "15% off all purchases"],
    popular: true,
    price: "$75",
  },
  {
    name: "Luxe",
    description: "The complete Lab & Lather experience",
    features: ["5 soaps + 3 candles", "Weekly delivery", "Exclusive limited editions", "20% off + free gifts"],
    price: "$120",
  },
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

      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-sm bg-accent/10 border border-accent/20 shadow-lg transition-all hover:scale-110 hover:bg-accent/20">
              <Mail className="h-8 w-8 text-accent" />
            </div>
            <h2 className="mb-4 text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
              Join the subscription waitlist
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Be the first to access our curated subscription service. Choose your tier and never run out of your
              favorite scents. Launch expected Q2 2025.
            </p>
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
                  className="w-full group transition-all hover:scale-105 hover:shadow-xl shadow-accent/20"
                  disabled={submitted}
                >
                  {submitted ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      You're on the list!
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Join Waitlist
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We'll notify you when subscriptions launch. No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
