import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | Lab & Lather",
  description: "Understand the terms that govern your use of Lab & Lather products and services.",
}

const sections = [
  {
    title: "Scope of Services",
    body:
      "Lab & Lather provides scent formulation, prototyping, marketing assets, and subscription deliveries for approved partners. All services are documented in individual statements of work.",
  },
  {
    title: "Client Responsibilities",
    body:
      "You agree to supply accurate project information, approve deliverables in a timely manner, and respect production schedules. Any regulatory requirements beyond our standard documentation must be requested in writing.",
  },
  {
    title: "Intellectual Property",
    body:
      "Lab & Lather retains rights to core formulations, brand assets, and proprietary processes. Clients receive usage rights as specified in their agreements for commercial use in agreed territories.",
  },
  {
    title: "Liability",
    body:
      "We maintain product safety testing and compliance documentation; however, Lab & Lather is not liable for indirect or consequential damages. Liability is limited to the fees paid for the services in question.",
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">Agreement</p>
            <h1 className="text-4xl font-display font-bold tracking-tight">Terms of Service</h1>
            <p className="text-sm text-muted-foreground">
              Effective date: {new Date().getFullYear()} • Please review prior to engaging with Lab & Lather.
            </p>
          </div>

          <div className="space-y-6 rounded-xl border border-border/50 bg-card/80 p-8 shadow-lg">
            {sections.map((section) => (
              <section key={section.title} className="space-y-2">
                <h2 className="text-xl font-display font-semibold">{section.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="rounded-lg border border-accent/40 bg-accent/10 p-6 text-sm text-muted-foreground">
            <p>
              Questions about these terms? Email us at {" "}
              <Link href="mailto:legal@labandlather.com" className="text-foreground underline">
                legal@labandlather.com
              </Link>{" "}
              or contact your Lab & Lather representative.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
