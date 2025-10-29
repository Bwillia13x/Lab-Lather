"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    quote:
      "These candles are absolutely stunning! The Forest Compound scent fills my entire living room with the most incredible woodsy aroma. They burn evenly and last forever. Worth every penny.",
    author: "Jessica Martinez",
    role: "Interior Designer",
    location: "Seattle, WA",
    avatar: "/professional-woman-short-hair.png",
    initials: "JM",
  },
  {
    quote:
      "I've tried countless luxury candle brands, and Lab & Lather is hands down the best. The scents are sophisticated without being overwhelming, and the quality is unmatched. My guests always ask where I got them!",
    author: "David Chen",
    role: "Home Enthusiast",
    location: "Portland, OR",
    avatar: "/professional-asian-man-glasses.png",
    initials: "DC",
  },
  {
    quote:
      "Finally, a candle brand that delivers on both aesthetics and performance. The Citrus Atelier scent is my morning ritual—it's energizing and clean. Plus, the minimalist design looks perfect in my home.",
    author: "Sofia Rodriguez",
    role: "Wellness Coach",
    location: "San Francisco, CA",
    avatar: "/professional-latina-woman-smiling.png",
    initials: "SR",
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
            Customer Love
          </div>
          <h2 className="mb-4 text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
            Loved by candle enthusiasts everywhere
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed mb-4">
            Our customers rave about the quality, scent, and ambiance our luxury candles bring to their homes. Discover
            why Lab & Lather is becoming the go-to choice for discerning candle lovers.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-semibold text-accent">4.9/5.0</span>
            <span className="text-muted-foreground">from 2,400+ verified reviews</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`transition-all duration-700 ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm h-full transition-all hover:shadow-xl hover:scale-105 hover:border-accent/30 group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-accent/20 transition-all group-hover:text-accent/40" />
                  </div>

                  <blockquote className="mb-6 text-sm leading-relaxed flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

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
            <span>5,000+ happy customers</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span>4.9/5 average rating</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span>Featured in Vogue, Architectural Digest & Elle Decor</span>
          </div>
        </div>
      </div>
    </section>
  )
}
