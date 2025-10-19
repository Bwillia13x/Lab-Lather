import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Accessibility Statement | Lab & Lather",
  description: "Our commitment to accessible experiences across Lab & Lather digital and physical products.",
}

const commitments = [
  {
    title: "Digital Accessibility",
    body:
      "We design our web experiences to meet WCAG 2.1 AA guidelines, including color contrast, keyboard navigation, and descriptive alt text for imagery.",
  },
  {
    title: "Product Experience",
    body:
      "Packaging and collateral incorporate tactile cues, large-type labeling, and QR-enabled audio descriptions where applicable.",
  },
  {
    title: "Continuous Improvement",
    body:
      "Lab & Lather reviews accessibility feedback quarterly and partners with inclusive design specialists to improve our launches.",
  },
]

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">Commitment</p>
            <h1 className="text-4xl font-display font-bold tracking-tight">Accessibility Statement</h1>
            <p className="text-sm text-muted-foreground">
              Updated: {new Date().getFullYear()} • Reviewed with each major product release.
            </p>
          </div>

          <div className="space-y-6 rounded-xl border border-border/50 bg-card/80 p-8 shadow-lg">
            {commitments.map((item) => (
              <section key={item.title} className="space-y-2">
                <h2 className="text-xl font-display font-semibold">{item.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </section>
            ))}
          </div>

          <div className="rounded-lg border border-accent/40 bg-accent/10 p-6 text-sm text-muted-foreground">
            <p>
              Need accommodations or have feedback? Email {" "}
              <Link href="mailto:accessibility@labandlather.com" className="text-foreground underline">
                accessibility@labandlather.com
              </Link>{" "}
              or call +1 (555) 010-2040.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
