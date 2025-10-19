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
    features: [
      "2 soaps + 1 candle in signature finishes",
      "Monthly delivery with adaptive scent rotation",
      "Free carbon-neutral shipping",
      "Member-only discovery drops",
    ],
    price: "$45",
  },
  {
    name: "Signature",
    description: "Our most popular subscription",
    features: [
      "3 soaps + 2 candles curated to your client roster",
      "Bi-weekly delivery with white-glove merchandising notes",
      "Priority access to lab-only scent studies",
      "15% off wholesale reorders + gifting",
    ],
    popular: true,
    price: "$75",
  },
  {
    name: "Luxe",
    description: "The complete Lab & Lather experience",
    features: [
      "5 soaps + 3 candles, limited atelier editions",
      "Weekly delivery with on-site styling guidelines",
      "Exclusive access to seasonal installations",
      "20% off + quarterly experiential kits",
    ],
    price: "$120",
  },
]

const perks = [
  "Founding pricing held through 2026",
  "Dedicated formulator consult every quarter",
  "Pre-built compliance packets for investor decks",
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
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "-2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-sm bg-accent/10 border border-accent/20 shadow-lg transition-all hover:scale-110 hover:bg-accent/20 hover:rotate-3 magnetic-button">
              <Mail className="h-8 w-8 text-accent" />
            </div>
            <h2 className="mb-4 text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
              Secure your spot in the <span className="text-gradient-accent">Lab Circle</span>
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              Founding members receive concierge onboarding, launch-ready documentation, and a guaranteed
              <span className="text-accent font-semibold"> 20% savings on their first three concept rollouts.</span>
              Limited placements ensure our lab can white-glove every experience.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-accent mb-6">
              <Sparkles className="h-4 w-4" />
              Limited to first 5,000 members
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
                className={`border-border/50 bg-card/80 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl relative group ${tier.popular ? "border-accent/50 shadow-lg ring-2 ring-accent/20" : ""
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
                      You&apos;re on the list!
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Secure founding access
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We&apos;ll notify you when subscriptions launch. No spam, just launch intel and behind-the-scenes lab notes.
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 rounded-lg border border-accent/30 bg-accent/10 px-6 py-4 text-center text-sm text-muted-foreground">
            <strong className="text-foreground">Guarantee:</strong> If your client isn&apos;t impressed after the first delivery,
            we&apos;ll refund the cycle and ship a fresh creative direction on us.
          </div>
        </div>
      </div>
    </section>
  )
}
