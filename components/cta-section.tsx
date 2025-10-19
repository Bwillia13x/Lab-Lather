import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/50 bg-gradient-to-br from-accent/10 to-accent/5 p-8 text-center md:p-12">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Ready to streamline your workflow?
          </h2>
          <p className="mb-8 text-pretty text-lg text-muted-foreground">
            Join thousands of teams already automating their work with StreamLine. Start your free trial today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">No credit card required • 14-day free trial</p>
        </div>
      </div>
    </section>
  )
}
