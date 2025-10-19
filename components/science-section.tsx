"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Microscope, Shield, FileCheck } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const credentials = [
  { text: "IFRA-certified fragrance formulations", icon: FileCheck },
  { text: "Third-party tested for purity and safety", icon: Shield },
  { text: "Transparent ingredient sourcing", icon: CheckCircle2 },
  { text: "Batch tracking and quality control", icon: Microscope },
  { text: "Compliance documentation available", icon: FileCheck },
  { text: "Dermatologist-approved formulations", icon: Shield },
]

export function ScienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="science"
      ref={sectionRef}
      className="border-b border-border/40 py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium backdrop-blur-sm">
              <Microscope className="h-3.5 w-3.5 text-accent" />
              <span className="text-accent">Scientific Validation</span>
            </div>

            <h2 className="mb-6 text-balance text-3xl font-display font-bold tracking-tight md:text-4xl lg:text-5xl">
              Laboratory precision meets modern design
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every Lab & Lather product undergoes rigorous testing and quality control. We believe in transparency,
              scientific validation, and clean formulations that you can trust with complete confidence.
            </p>
            <div className="space-y-3">
              {credentials.map((credential, index) => {
                const Icon = credential.icon
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-3 rounded-md transition-all duration-700 hover:bg-accent/5 group ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent/10 border border-accent/20 flex-shrink-0 transition-all group-hover:bg-accent/20 group-hover:scale-110">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground pt-1">{credential.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-xl overflow-hidden group">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/laboratory-beakers-and-test-tubes-with-clear-liqui.jpg"
                    alt="Laboratory equipment and testing - IFRA certified formulations"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-md border border-accent/40 rounded-sm px-5 py-3 shadow-xl">
                    <p className="text-2xl font-display font-bold text-accent">IFRA</p>
                    <p className="text-xs text-muted-foreground">Certified Formulations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
