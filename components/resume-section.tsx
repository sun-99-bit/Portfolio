"use client"

import { Download, FileText } from "lucide-react"

export function ResumeSection() {
  return (
    <section id="resume" className="relative py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card glow-border rounded-2xl p-10 sm:p-16">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
            <FileText className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold gradient-text inline-block mb-6">
            My Resume
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Thank you for your interest in my professional background. My resume provides a comprehensive overview of my skills, education, and experience. Feel free to download it for a detailed look at my qualifications.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full btn-gradient text-foreground font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
