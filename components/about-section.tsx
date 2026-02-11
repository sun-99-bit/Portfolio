"use client"

import { GraduationCap, School, BookOpen } from "lucide-react"

const education = [
  {
    icon: GraduationCap,
    level: "Graduation",
    institution: "Haldia Institute of Technology, MAKAUT",
    year: "2027",
    score: "CGPA: 9.05 / 10",
  },
  {
    icon: School,
    level: "Intermediate",
    institution: "Lakshya High School",
    year: "Completed",
    score: "Percentage: 83.4%",
  },
  {
    icon: BookOpen,
    level: "Matriculation",
    institution: "Vivekananda Mission Asram Sikshayatan (High School)",
    year: "Completed",
    score: "Percentage: 92%",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold gradient-text inline-block mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My educational journey and academic achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {education.map((edu) => (
            <div
              key={edu.level}
              className="glass-card glow-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <edu.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">{edu.level}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{edu.institution}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground/60 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                  {edu.year}
                </span>
                <span className="text-sm font-semibold gradient-text">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
