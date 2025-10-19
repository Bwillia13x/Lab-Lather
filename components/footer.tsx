import Link from "next/link"
import { Beaker, Instagram, Twitter, Facebook, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-3 group w-fit">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10 border border-accent/20 transition-all group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-3">
                <Beaker className="h-5 w-5 text-accent transition-transform group-hover:scale-110" />
              </div>
              <span className="text-xl font-display font-semibold transition-colors group-hover:text-accent">
                Lab & Lather
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Modern soaps and candles crafted with laboratory precision. IFRA-compliant, phthalate-free, and designed
              for contemporary rituals.
            </p>

            <div className="mb-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:hello@labandlather.com" className="hover:text-foreground transition-colors">
                  hello@labandlather.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Portland, Oregon</span>
              </div>
            </div>

          <div className="flex gap-3">
            <Link
              href="https://instagram.com/labandlather"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-border/50 bg-background/50 text-muted-foreground transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:scale-110"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://x.com/labandlather"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-border/50 bg-background/50 text-muted-foreground transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:scale-110"
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://facebook.com/labandlather"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-border/50 bg-background/50 text-muted-foreground transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:scale-110"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-display font-semibold">Studio</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#case-studies"
                  className="inline-block text-muted-foreground transition-all hover:translate-x-1 hover:text-foreground"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="inline-block text-muted-foreground transition-all hover:translate-x-1 hover:text-foreground"
                >
                  Services & Process
                </Link>
              </li>
              <li>
                <Link
                  href="#lookbook"
                  className="inline-block text-muted-foreground transition-all hover:translate-x-1 hover:text-foreground"
                >
                  Lookbook Preview
                </Link>
              </li>
              <li>
                <Link
                  href="#science"
                  className="inline-block text-muted-foreground transition-all hover:translate-x-1 hover:text-foreground"
                >
                  Compliance Lab
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-display font-semibold">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#testimonials"
                  className="inline-block text-muted-foreground transition-all hover:translate-x-1 hover:text-foreground"
                >
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="#build-a-set"
                  className="inline-block text-muted-foreground transition-all hover:translate-x-1 hover:text-foreground"
                >
                  Prototype Portal
                </Link>
              </li>
              <li>
                <Link
                  href="#subscribe"
                  className="inline-block text-muted-foreground transition-all hover:translate-x-1 hover:text-foreground"
                >
                  Waitlist Access
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:hello@labandlather.com"
                  className="inline-block text-muted-foreground transition-all hover:translate-x-1 hover:text-foreground"
                >
                  Press & Media Kit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-display font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="mailto:projects@labandlather.com"
                  className="inline-block text-muted-foreground transition-all hover:translate-x-1 hover:text-foreground"
                >
                  projects@labandlather.com
                </Link>
              </li>
              <li>
                <span className="block text-muted-foreground">Mon–Fri • 9am–6pm PT</span>
              </li>
              <li>
                <span className="block text-muted-foreground">Private studio tours by appointment</span>
              </li>
              <li>
                <Link
                  href="#subscribe"
                  className="inline-block text-muted-foreground transition-all hover:translate-x-1 hover:text-foreground"
                >
                  Request Formulator Kit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>© {new Date().getFullYear()} Lab & Lather. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="transition-colors hover:text-foreground">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
