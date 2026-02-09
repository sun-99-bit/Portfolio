"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
  type: "dot" | "circle"
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generated: Particle[] = []
    for (let i = 0; i < 30; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 5,
        type: Math.random() > 0.7 ? "circle" : "dot",
      })
    }
    setParticles(generated)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Large decorative circles */}
      <div
        className="absolute left-12 top-20 h-32 w-32 rounded-full border border-primary/10 animate-pulse-glow"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-40 left-24 h-40 w-40 rounded-full border border-primary/10 animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute right-16 top-1/3 h-48 w-48 rounded-full border border-primary/5 animate-pulse-glow"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-20 right-32 h-36 w-36 rounded-full border border-primary/10 animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      {/* Small floating dots */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `float-slow ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
