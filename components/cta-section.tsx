import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/50 bg-gradient-to-br from-accent/10 to-accent/5 p-8 text-center md:p-12 relative overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Limited Launch Offer
            </div>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Transform your space with <span className="text-gradient-accent">luxury scents</span>
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground leading-relaxed">
              Join our exclusive waitlist and be the first to experience our hand-poured, premium scented candles.
              Founding members receive 20% off their first order.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto group shadow-lg shadow-accent/30">
                <Link href="#subscribe">
                  Claim Your Discount
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                <Link href="#products">Explore Our Candles</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Free shipping on orders over $75 • 30-day satisfaction guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
