import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Lab & Lather",
  description: "Learn how Lab & Lather collects, uses, and protects your personal information.",
}

const sections = [
  {
    title: "Information We Collect",
    body:
      "We collect contact details, order history, and usage analytics when you interact with our waitlist, prototype requests, or marketing campaigns.",
  },
  {
    title: "How We Use Information",
    body:
      "Data supports project communication, fulfillment of scent prototypes, and product development insights. We never sell personal information.",
  },
  {
    title: "Data Retention & Security",
    body:
      "Your information is retained only as long as necessary for ongoing engagements, secured with encryption and access controls, and deleted upon request where legally permissible.",
  },
  {
    title: "Your Rights",
    body:
      "You may request access, corrections, or deletion of your personal data at any time by emailing privacy@labandlather.com.",
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">Policy</p>
            <h1 className="text-4xl font-display font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">
              Effective date: {new Date().getFullYear()} • Last updated monthly or when we introduce new services.
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
              Questions? Reach us at {" "}
              <Link href="mailto:privacy@labandlather.com" className="text-foreground underline">
                privacy@labandlather.com
              </Link>{" "}
              or submit a request through our contact form.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
