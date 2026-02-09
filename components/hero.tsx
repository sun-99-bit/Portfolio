"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Code2, Smartphone, Rocket } from "lucide-react"

const badges = [
  { icon: Code2, label: "Full Stack", delay: "0s", position: "right-0 top-4 lg:right-[-40px]" },
  { icon: Smartphone, label: "Responsive", delay: "1s", position: "right-[-20px] top-1/2 lg:right-[-60px]" },
  { icon: Rocket, label: "Fast", delay: "2s", position: "right-0 bottom-8 lg:right-[-40px]" },
]

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:gap-16 lg:py-24">
        {/* Left Content */}
        <div
          className={`flex-1 transition-all duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="text-sm font-medium text-primary">Full Stack Developer</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {"Crafting "}
            <span className="gradient-text-hero">Digital Journeys</span>
            <br />
            {"from "}
            <span className="gradient-text">Simple Ideas</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {"Hi, I'm Sunanda \u2014 a passionate Full Stack Developer focused on building clean, responsive, and high-performance web applications. From idea to deployment, I create solutions that actually work."}
          </p>

          <a
            href="#about"
            className="btn-gradient mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3 font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Learn more
          </a>
        </div>

        {/* Right Content - Profile Image */}
        <div
          className={`relative flex-1 transition-all delay-300 duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative mx-auto w-fit">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-60 blur-2xl" />
            
            {/* Profile image */}
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-primary/50 profile-glow sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <Image
                src="/profile.jpg"
                alt="Sunanda Maiti - Full Stack Developer"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Badges */}
            {badges.map((badge) => (
              <div
                key={badge.label}
                className={`absolute ${badge.position} z-10 animate-float`}
                style={{ animationDelay: badge.delay }}
              >
                <div className="glass-card glow-border flex items-center gap-2 rounded-full px-4 py-2">
                  <badge.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{badge.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-8 text-center">
            <p className="italic text-muted-foreground">
              {'“Deciding what not to do is as important as deciding what to do.”'}
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">{"— Steve Jobs"}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
