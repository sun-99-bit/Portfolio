"use client"

import { useState } from "react"
import { FileText, Plus, Trash2 } from "lucide-react"

interface ResumeData {
  name: string
  email: string
  phone: string
  summary: string
  skills: string[]
  experience: { title: string; company: string; duration: string }[]
  education: { degree: string; school: string; year: string }[]
}

export function ResumeBuilder() {
  const [resume, setResume] = useState<ResumeData>({
    name: "",
    email: "",
    phone: "",
    summary: "",
    skills: [""],
    experience: [{ title: "", company: "", duration: "" }],
    education: [{ degree: "", school: "", year: "" }],
  })
  const [showPreview, setShowPreview] = useState(false)

  const updateField = (field: keyof ResumeData, value: string) => {
    setResume((r) => ({ ...r, [field]: value }))
  }

  const addSkill = () => setResume((r) => ({ ...r, skills: [...r.skills, ""] }))
  const removeSkill = (i: number) => setResume((r) => ({ ...r, skills: r.skills.filter((_, idx) => idx !== i) }))
  const updateSkill = (i: number, v: string) => {
    const skills = [...resume.skills]
    skills[i] = v
    setResume((r) => ({ ...r, skills }))
  }

  const addExp = () => setResume((r) => ({ ...r, experience: [...r.experience, { title: "", company: "", duration: "" }] }))
  const removeExp = (i: number) => setResume((r) => ({ ...r, experience: r.experience.filter((_, idx) => idx !== i) }))

  const addEdu = () => setResume((r) => ({ ...r, education: [...r.education, { degree: "", school: "", year: "" }] }))
  const removeEdu = (i: number) => setResume((r) => ({ ...r, education: r.education.filter((_, idx) => idx !== i) }))

  const inputClass = "w-full px-3 py-2 rounded-lg bg-primary/5 border border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors text-sm"

  if (showPreview) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-display font-bold gradient-text">Resume Preview</h3>
          <button type="button" onClick={() => setShowPreview(false)} className="px-4 py-2 rounded-lg border border-primary/20 text-foreground text-sm hover:bg-primary/10 transition-colors">
            Edit
          </button>
        </div>
        <div className="p-8 rounded-xl bg-card border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-1">{resume.name || "Your Name"}</h2>
          <p className="text-sm text-muted-foreground mb-4">{[resume.email, resume.phone].filter(Boolean).join(" | ")}</p>
          {resume.summary && (
            <div className="mb-4">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider border-b border-border pb-1 mb-2">Summary</h4>
              <p className="text-sm text-muted-foreground">{resume.summary}</p>
            </div>
          )}
          {resume.skills.filter(Boolean).length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider border-b border-border pb-1 mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {resume.skills.filter(Boolean).map((s) => (
                  <span key={s} className="px-2 py-1 rounded bg-primary/10 text-foreground text-xs">{s}</span>
                ))}
              </div>
            </div>
          )}
          {resume.experience.some((e) => e.title) && (
            <div className="mb-4">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider border-b border-border pb-1 mb-2">Experience</h4>
              {resume.experience.filter((e) => e.title).map((exp) => (
                <div key={`${exp.title}-${exp.company}`} className="mb-2">
                  <p className="text-foreground font-semibold text-sm">{exp.title}</p>
                  <p className="text-muted-foreground text-xs">{exp.company} {exp.duration && `| ${exp.duration}`}</p>
                </div>
              ))}
            </div>
          )}
          {resume.education.some((e) => e.degree) && (
            <div>
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider border-b border-border pb-1 mb-2">Education</h4>
              {resume.education.filter((e) => e.degree).map((edu) => (
                <div key={`${edu.degree}-${edu.school}`} className="mb-2">
                  <p className="text-foreground font-semibold text-sm">{edu.degree}</p>
                  <p className="text-muted-foreground text-xs">{edu.school} {edu.year && `| ${edu.year}`}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-display font-bold gradient-text">Resume Builder</h3>
        <button type="button" onClick={() => setShowPreview(true)} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg btn-gradient text-foreground text-sm font-semibold">
          <FileText className="w-4 h-4" />
          Preview
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {/* Personal Info */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Personal Info</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input type="text" placeholder="Full Name" value={resume.name} onChange={(e) => updateField("name", e.target.value)} className={inputClass} />
            <input type="email" placeholder="Email" value={resume.email} onChange={(e) => updateField("email", e.target.value)} className={inputClass} />
            <input type="tel" placeholder="Phone" value={resume.phone} onChange={(e) => updateField("phone", e.target.value)} className={inputClass} />
          </div>
          <textarea placeholder="Professional summary..." value={resume.summary} onChange={(e) => updateField("summary", e.target.value)} rows={3} className={`${inputClass} mt-3`} />
        </div>

        {/* Skills */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Skills</h4>
            <button type="button" onClick={addSkill} className="text-primary hover:text-primary/80 transition-colors"><Plus className="w-4 h-4" /></button>
          </div>
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-1">
                <input type="text" placeholder="Skill" value={skill} onChange={(e) => updateSkill(i, e.target.value)} className="px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/20 text-foreground text-sm w-28 focus:outline-none focus:border-primary/50" />
                {resume.skills.length > 1 && (
                  <button type="button" onClick={() => removeSkill(i)} className="text-muted-foreground hover:text-red-400 transition-colors">
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Experience</h4>
            <button type="button" onClick={addExp} className="text-primary hover:text-primary/80 transition-colors"><Plus className="w-4 h-4" /></button>
          </div>
          {resume.experience.map((exp, i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
              <input type="text" placeholder="Job Title" value={exp.title} onChange={(e) => { const ex = [...resume.experience]; ex[i] = { ...ex[i], title: e.target.value }; setResume((r) => ({ ...r, experience: ex })) }} className={inputClass} />
              <input type="text" placeholder="Company" value={exp.company} onChange={(e) => { const ex = [...resume.experience]; ex[i] = { ...ex[i], company: e.target.value }; setResume((r) => ({ ...r, experience: ex })) }} className={inputClass} />
              <div className="flex gap-1">
                <input type="text" placeholder="Duration" value={exp.duration} onChange={(e) => { const ex = [...resume.experience]; ex[i] = { ...ex[i], duration: e.target.value }; setResume((r) => ({ ...r, experience: ex })) }} className={inputClass} />
                {resume.experience.length > 1 && (
                  <button type="button" onClick={() => removeExp(i)} className="text-muted-foreground hover:text-red-400 transition-colors flex-shrink-0 self-center"><Trash2 className="w-4 h-4" /></button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Education</h4>
            <button type="button" onClick={addEdu} className="text-primary hover:text-primary/80 transition-colors"><Plus className="w-4 h-4" /></button>
          </div>
          {resume.education.map((edu, i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
              <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => { const ed = [...resume.education]; ed[i] = { ...ed[i], degree: e.target.value }; setResume((r) => ({ ...r, education: ed })) }} className={inputClass} />
              <input type="text" placeholder="School" value={edu.school} onChange={(e) => { const ed = [...resume.education]; ed[i] = { ...ed[i], school: e.target.value }; setResume((r) => ({ ...r, education: ed })) }} className={inputClass} />
              <div className="flex gap-1">
                <input type="text" placeholder="Year" value={edu.year} onChange={(e) => { const ed = [...resume.education]; ed[i] = { ...ed[i], year: e.target.value }; setResume((r) => ({ ...r, education: ed })) }} className={inputClass} />
                {resume.education.length > 1 && (
                  <button type="button" onClick={() => removeEdu(i)} className="text-muted-foreground hover:text-red-400 transition-colors flex-shrink-0 self-center"><Trash2 className="w-4 h-4" /></button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
