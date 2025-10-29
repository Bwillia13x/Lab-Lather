"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, Flame, ShoppingBag } from "lucide-react"
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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-border/60 bg-background/95 backdrop-blur-xl shadow-[0_20px_60px_-40px_rgba(47,94,235,0.45)]" : "bg-background/10"}
        `}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/lab-lather-logo.jpg"
            alt="Lab & Lather logo"
            width={44}
            height={44}
            priority
            className="h-10 w-10 rounded-sm border border-accent/20 shadow-sm transition-all group-hover:scale-105 group-hover:shadow-accent/30"
          />
          <span className="text-xl font-display font-semibold tracking-tight transition-colors group-hover:text-accent">
            Lab & Lather
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#products"
            className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:scale-105 relative group"
          >
            Candles
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </Link>
          <Link
            href="#lookbook"
            className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:scale-105 relative group"
          >
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </Link>
          <Link
            href="#build-a-set"
            className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:scale-105 relative group"
          >
            Collections
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </Link>
          <Link
            href="#science"
            className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:scale-105 relative group"
          >
            Our Craft
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:scale-105 relative group"
          >
            Reviews
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex items-center gap-1 text-muted-foreground transition-all hover:scale-105 hover:text-foreground"
          >
            <Link href="#lookbook">
              <Flame className="h-4 w-4" />
              Explore Scents
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex items-center gap-1 bg-gradient-to-r from-accent to-accent/80 shadow-lg shadow-accent/30 transition-all hover:from-accent/90 hover:to-accent/70"
          >
            <Link href="#subscribe">
              <ShoppingBag className="h-4 w-4" />
              Shop Now
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
