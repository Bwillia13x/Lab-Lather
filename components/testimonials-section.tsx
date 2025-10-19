"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    quote:
      "We presented Lab & Lather prototypes on Monday and had the hospitality group sign off by Thursday. The deck, photography, and compliance pack were turnkey—our team looked world-class.",
    author: "Sarah Mitchell",
    role: "Principal, Studio Halcyon",
    location: "Seattle, WA",
    avatar: "/professional-woman-short-hair.png",
    initials: "SM",
  },
  {
    quote:
      "The Forest Compound candle increased dwell time in our flagship by 37%. Guests kept asking what fragrance we were using, and the GM immediately booked a rollout for Q3.",
    author: "Marcus Chen",
    role: "Experience Architect, Meridian Hotels",
    location: "Portland, OR",
    avatar: "/professional-asian-man-glasses.png",
    initials: "MC",
  },
  {
    quote:
      "Every formula comes with talking points, testing, and sustainable packaging options. It&apos;s the only fragrance partner that lets us focus on storytelling instead of paperwork.",
    author: "Elena Rodriguez",
    role: "Partner, Kinfolk Studios",
    location: "San Francisco, CA",
    avatar: "/professional-latina-woman-smiling.png",
    initials: "ER",
  },
]

export function TestimonialsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => [...new Set([...prev, index])])
            }
          })
        },
        { threshold: 0.2 },
      )

      observer.observe(card)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section
      id="testimonials"
      className="border-b border-border/40 bg-background py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-accent">
            Proof from design partners
          </div>
          <h2 className="mb-4 text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
            Clients call it a &ldquo;no-notes&rdquo; launch experience
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed mb-4">
            Hospitality groups, architects, and experiential studios rely on Lab & Lather to deliver high-impact scent
            concepts with zero revisions and polished documentation.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-semibold text-accent">4.9/5.0</span>
            <span className="text-muted-foreground">based on 847 post-launch surveys</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`transition-all duration-700 ${visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm h-full transition-all hover:shadow-xl hover:scale-105 hover:border-accent/30 group">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Quote icon */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-accent/20 transition-all group-hover:text-accent/40" />
                  </div>

                  <blockquote className="mb-6 text-sm leading-relaxed flex-grow">&ldquo;{testimonial.quote}&rdquo;</blockquote>

                  <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                    <Avatar className="h-12 w-12 border-2 border-accent/20">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                      <AvatarFallback className="bg-accent/10 text-accent font-display font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-display font-semibold">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-accent/20" />
              ))}
            </div>
            <span>500+ happy customers</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span>4.9/5 average rating</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span>Featured in Dwell, Kinfolk, and Dezeen</span>
          </div>
        </div>
      </div>
    </section>
  )
}
