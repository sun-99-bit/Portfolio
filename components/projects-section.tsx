"use client"

import { useState } from "react"
import { ArrowRight, X } from "lucide-react"
import { BmiCalculator } from "@/components/projects/bmi-calculator"
import { WeatherApp } from "@/components/projects/weather-app"
import { QuizApp } from "@/components/projects/quiz-app"
import { NumberGuessing } from "@/components/projects/number-guessing"
import { ResumeBuilder } from "@/components/projects/resume-builder"
import { MovieSearch } from "@/components/projects/movie-search"

const projects = [
  {
    id: "bmi",
    title: "BMI Calculator",
    description: "Calculate Body Mass Index with health analysis",
    icon: "&#x2696;&#xFE0F;",
    component: BmiCalculator,
  },
  {
    id: "weather",
    title: "Simple Weather App",
    description: "Real-time weather data using API",
    icon: "&#x1F326;&#xFE0F;",
    component: WeatherApp,
  },
  {
    id: "quiz",
    title: "Quiz App",
    description: "Interactive quiz with scoring system",
    icon: "&#x1F4DD;",
    component: QuizApp,
  },
  {
    id: "number",
    title: "Number Guessing Game",
    description: "Fun number guessing with hints",
    icon: "&#x1F3B2;",
    component: NumberGuessing,
  },
  {
    id: "resume",
    title: "Resume Builder",
    description: "Create professional resumes easily",
    icon: "&#x1F4C4;",
    component: ResumeBuilder,
  },
  {
    id: "movie",
    title: "Movie Search App",
    description: "Search movies using OMDB API",
    icon: "&#x1F3AC;",
    component: MovieSearch,
  },
]

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null)

  const ActiveComponent = activeProject
    ? projects.find((p) => p.id === activeProject)?.component
    : null

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold gradient-text inline-block mb-4">
            My Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interactive web applications built with modern technologies
          </p>
        </div>

        {/* Project Modal */}
        {activeProject && ActiveComponent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card glow-border rounded-2xl p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors z-10"
                aria-label="Close project"
              >
                <X className="w-5 h-5" />
              </button>
              <ActiveComponent />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card glow-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-center">
                <span
                  className="text-4xl mb-4 block"
                  dangerouslySetInnerHTML={{ __html: project.icon }}
                  aria-hidden="true"
                />
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
                <button
                  type="button"
                  onClick={() => setActiveProject(project.id)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full btn-gradient text-foreground font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group-hover:gap-3"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
