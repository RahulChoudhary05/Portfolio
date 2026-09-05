import { GraduationCap, Award, Check, ScrollText, BadgeCheck, Code2, GitCommitHorizontal } from "lucide-react"
import { Section, SectionTitle, Reveal, Panel } from "./ui/Bento"
import CountUp from "./ui/CountUp"
import Tilt from "./ui/Tilt"

const education = [
  {
    chip: "chip-blue",
    degree: "B.E. in Computer Science & Engineering",
    institution: "Chandigarh University (CU), Mohali",
    year: "Aug 2022 — Jun 2026",
    achievements: [
      "CGPA: 7.56",
      "Solid foundation in DSA, System Design, DBMS, OS & Networks",
      "Continuous focus on shipping production-grade software",
    ],
  },
  {
    chip: "chip-violet",
    degree: "Senior Secondary (High School)",
    institution: "St D. R. Public Senior Secondary School",
    year: "2020 — 2022",
    achievements: ["Intermediate percentage: 70.3%", "High school percentage: 74.8%"],
  },
]

const certs = [
  { icon: BadgeCheck, title: "Advanced SQL & Database Design", issuer: "AWS Training & Certification", meta: "Mar 2026", chip: "chip-amber" },
  { icon: BadgeCheck, title: "Full-Stack Web Development", issuer: "IBM · Udemy", meta: "Certified", chip: "chip-emerald" },
]

export default function Education() {
  return (
    <Section id="education">
      <SectionTitle
        eyebrow="Background"
        title="Education & Achievements"
        kicker="Academic foundation, certifications, and recognition backing the work."
      />

      {/* Education */}
      <div className="grid grid-cols-12 gap-4">
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.06} className="col-span-12 lg:col-span-6">
            <Tilt intensity={4} className="h-full">
            <Panel className="h-full p-6 md:p-7 flex flex-col">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-muted-foreground">{edu.year}</span>
                <span className={`chip ${edu.chip} h-10 w-10`}>
                  <GraduationCap className="w-5 h-5" />
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground leading-snug">
                {edu.degree}
              </h3>
              <p className="mt-1 text-muted-foreground">{edu.institution}</p>
              <div className="mt-5 flex items-center gap-2 text-foreground">
                <Award className="w-4 h-4 text-cobalt" />
                <span className="font-mono text-xs uppercase tracking-widest">Highlights</span>
              </div>
              <ul className="mt-3 space-y-2.5">
                {edu.achievements.map((a, idx) => (
                  <li key={idx} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-cobalt" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Panel>
            </Tilt>
          </Reveal>
        ))}
      </div>

      {/* Patent — cobalt-accented hairline */}
      <Reveal className="mt-4">
        <Panel className="relative overflow-hidden p-6 md:p-8">
          <span className="absolute left-0 top-0 h-full w-1 bg-cobalt" aria-hidden />
          <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8 pl-2">
            <span className="chip chip-rose h-14 w-14">
              <ScrollText className="w-7 h-7" />
            </span>
            <div className="flex-1">
              <span className="eyebrow inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cobalt" /> Patent · Published
              </span>
              <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground">
                AI-Enhanced Neuroadaptive VR Therapy System
              </h3>
              <p className="mt-1 text-muted-foreground text-sm font-mono">
                Indian Government Patent Portal · Application No. 202511113779
              </p>
            </div>
          </div>
        </Panel>
      </Reveal>

      {/* Certs + stats */}
      <div className="grid grid-cols-12 gap-4 mt-4">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05} className="col-span-12 sm:col-span-6 lg:col-span-4">
            <Panel className="h-full p-5 flex items-start gap-4">
              <span className={`chip ${c.chip} h-10 w-10`}>
                <c.icon className="w-5 h-5" />
              </span>
              <div>
                <h4 className="font-display font-semibold text-foreground leading-tight">{c.title}</h4>
                <p className="text-sm text-muted-foreground mt-0.5">{c.issuer}</p>
                <span className="mt-2 inline-block font-mono text-[11px] uppercase tracking-widest text-cobalt">{c.meta}</span>
              </div>
            </Panel>
          </Reveal>
        ))}

        <Reveal delay={0.1} className="col-span-12 lg:col-span-4">
          <Panel className="h-full p-6 grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-center">
              <Code2 className="w-4 h-4 text-cobalt mb-2" />
              <span className="font-display text-3xl font-semibold text-foreground">
                <CountUp end={400} suffix="+" />
              </span>
              <span className="font-mono text-[11px] text-muted-foreground mt-1">DSA on LeetCode</span>
            </div>
            <div className="flex flex-col justify-center border-l border-border pl-4">
              <GitCommitHorizontal className="w-4 h-4 text-cobalt mb-2" />
              <span className="font-display text-3xl font-semibold text-foreground">
                <CountUp end={1000} suffix="+" />
              </span>
              <span className="font-mono text-[11px] text-muted-foreground mt-1">GitHub Contributions</span>
            </div>
          </Panel>
        </Reveal>
      </div>
    </Section>
  )
}
