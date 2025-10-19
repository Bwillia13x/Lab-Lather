"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Beaker, Menu } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled ? "border-border/60 bg-background/95 backdrop-blur-xl shadow-sm" : "border-transparent bg-background/0"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10 border border-accent/20 transition-all group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
            <Beaker className="h-5 w-5 text-accent transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xl font-display font-semibold tracking-tight transition-colors group-hover:text-accent">
            Lab & Lather
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:scale-105 relative group"
          >
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </Link>
          <Link
            href="#build-a-set"
            className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:scale-105 relative group"
          >
            Build-a-Set
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </Link>
          <Link
            href="#science"
            className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:scale-105 relative group"
          >
            Science
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </Link>
          <Link
            href="#subscribe"
            className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:scale-105 relative group"
          >
            Subscribe
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex transition-all hover:scale-105">
            Shop
          </Button>
          <Button size="sm" className="transition-all hover:scale-105 hover:shadow-lg shadow-accent/20">
            Join Waitlist
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
