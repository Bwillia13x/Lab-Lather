"use client"

import { useEffect, useState } from "react"

export function BackgroundAnimation() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>(
    [],
  )

  useEffect(() => {
    // Generate floating particles inspired by lab bubbles/molecules
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 200 + 100,
      delay: Math.random() * 20,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated floating orbs inspired by lab glassware and bubbles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-accent/5 blur-3xl animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `-${particle.delay}s`,
            animationDuration: `${20 + Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Precision grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,var(--background)_100%)]" />

      {/* Animated light rays */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent animate-pulse-glow" />
      <div
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent animate-pulse-glow"
        style={{ animationDelay: "-2s" }}
      />
    </div>
  )
}
