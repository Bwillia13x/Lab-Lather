"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    quote:
      "The Citrus Laboratory soap is incredible. Clean ingredients, beautiful packaging, and the scent is perfectly balanced—not overpowering at all. This is luxury done right.",
    author: "Sarah Mitchell",
    role: "Interior Designer",
    location: "Seattle, WA",
    avatar: "/professional-woman-short-hair.png",
    initials: "SM",
  },
  {
    quote:
      "I'm obsessed with the Forest Compound candle. The scent fills my entire studio without being artificial. You can tell these are made with real care and scientific precision.",
    author: "Marcus Chen",
    role: "Architect",
    location: "Portland, OR",
    avatar: "/professional-asian-man-glasses.png",
    initials: "MC",
  },
  {
    quote:
      "Finally, a brand that takes clean beauty seriously. IFRA-compliant, phthalate-free, and the scents are sophisticated. Lab & Lather has become my go-to gift for clients.",
    author: "Elena Rodriguez",
    role: "Wellness Coach",
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
          <h2 className="mb-4 text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
            Loved by modern minimalists
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
            See what our customers have to say about Lab & Lather products
          </p>
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
                  {/* Quote icon */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-accent/20 transition-all group-hover:text-accent/40" />
                  </div>

                  <blockquote className="mb-6 text-sm leading-relaxed flex-grow">"{testimonial.quote}"</blockquote>

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
            <span>Featured in Dwell & Kinfolk</span>
          </div>
        </div>
      </div>
    </section>
  )
}
