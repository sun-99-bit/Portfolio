"use client"

import { ParticlesBackground } from "@/components/particles-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { ResumeSection } from "@/components/resume-section"
import { Footer } from "@/components/footer"

export function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <ResumeSection />
      </main>
      <Footer />
    </div>
  )
}
