"use client"

import { GraduationCap, School, BookOpen } from "lucide-react"

const education = [
  {
    icon: GraduationCap,
    level: "Graduation",
    institution: "Haldia Institute of Technology, MAKAUT",
    year: "Year: 2027",
    score: "CGPA: 9.05 / 10",
  },
  {
    icon: School,
    level: "Intermediate",
    institution: "Lakshya High School",
    year: "",
    score: "Percentage: 83.4%",
  },
  {
    icon: BookOpen,
    level: "Matriculation",
    institution: "Vivekananda Mission Asram Sikshayatan (High School)",
    year: "",
    score: "Percentage: 92%",
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold gradient-text sm:text-5xl">About Me</h2>
          <p className="mt-4 text-lg text-muted-foreground">My educational background and journey</p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {education.map((edu) => (
            <div
              key={edu.level}
              className="glass-card glow-border group rounded-2xl p-6 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <edu.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{edu.level}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{edu.institution}</p>
              {edu.year && (
                <p className="mt-1 text-sm text-accent">{edu.year}</p>
              )}
              <p className="mt-1 text-sm font-semibold text-primary">{edu.score}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
