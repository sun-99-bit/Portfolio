"use client"

import Image from "next/image"
import { Code2, Monitor, Rocket } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center pt-20">
      {/* Decorative circles */}
      <div className="absolute left-8 top-24 hidden h-32 w-32 rounded-full border border-primary/10 animate-pulse-glow lg:block" aria-hidden="true" />
      <div className="absolute bottom-32 left-12 hidden h-40 w-40 rounded-full border border-primary/10 animate-pulse-glow lg:block" style={{ animationDelay: "1.5s" }} aria-hidden="true" />
      <div className="absolute right-0 top-1/3 hidden h-72 w-72 rounded-full border border-primary/5 lg:block" aria-hidden="true" />
      <div className="absolute bottom-20 right-20 hidden h-24 w-24 rounded-full border border-primary/10 lg:block" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="text-sm font-medium text-foreground/80">Full Stack Developer</span>
            </div>

            <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-foreground">Crafting </span>
              <span className="gradient-text-hero">Digital Journeys</span>
              <br />
              <span className="text-foreground">from </span>
              <span className="gradient-text">Simple Ideas</span>
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              {"Hi, I'm Sunanda \u2014 a passionate Full Stack Developer focused on building clean, responsive, and high-performance web applications. From idea to deployment, I create solutions that actually work."}
            </p>

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-8 py-3 font-medium text-foreground transition-all duration-300 hover:bg-primary/10"
            >
              Learn more
            </a>
          </div>

          {/* Right content - Profile */}
          <div className="relative flex-shrink-0">
            {/* Floating badges */}
            <div className="absolute -right-4 -top-4 z-10 hidden animate-float sm:block lg:-right-16" style={{ animationDelay: "0s" }}>
              <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 px-4 py-2 shadow-lg backdrop-blur-md">
                <Code2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Full Stack</span>
              </div>
            </div>
            <div className="absolute -right-8 top-1/2 z-10 hidden animate-float sm:block lg:-right-20" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 px-4 py-2 shadow-lg backdrop-blur-md">
                <Monitor className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Responsive</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 z-10 hidden animate-float sm:block lg:-right-12" style={{ animationDelay: "4s" }}>
              <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 px-4 py-2 shadow-lg backdrop-blur-md">
                <Rocket className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Fast</span>
              </div>
            </div>

            {/* Profile image with glow */}
            <div className="relative h-64 w-64 rounded-full sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/60 to-accent p-1">
                <div className="h-full w-full overflow-hidden rounded-full bg-background">
                  <Image
                    src="/placeholder.png"
                    alt="Sunanda Maiti - Full Stack Developer"
                    width={320}
                    height={320}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="profile-glow absolute inset-0 rounded-full opacity-40" aria-hidden="true" />
            </div>

            {/* Quote */}
            <div className="mx-auto mt-8 max-w-sm text-center">
              <p className="text-sm italic leading-relaxed text-muted-foreground/70">
                {'"Engineering is not only study of 45 subjects but it is moral studies of intellectual life."'}
              </p>
              <p className="mt-2 text-sm font-medium text-foreground/60">{"\u2014 Prakhar Srivastav"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
