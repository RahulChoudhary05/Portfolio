import { Briefcase, MapPin, Check, Sparkles } from "lucide-react"
import { Section, SectionTitle, Reveal, Panel } from "./ui/Bento"
import Tilt from "./ui/Tilt"

const featured = {
  company: "Omnithrive Technologies",
  location: "Remote / Hybrid",
  period: "Jun 2026 — Present",
  role: "Full Stack AI Developer",
  responsibilities: [
    "Developed and deployed full-stack AI solutions using Next.js and TypeScript, owning end-to-end production features, testing, QA, and reliable CI/CD deployment pipelines.",
    "Built Agentic AI and LLM-powered automation workflows that streamline business operations through Generative AI, with tool-calling and multi-step reasoning.",
    "Integrated ABHA (Ayushman Bharat) healthcare interoperability APIs with consent-driven, secure data exchange across services.",
    "Architected type-safe REST APIs and real-time services, improving reliability, observability, and developer velocity across the platform.",
    "Collaborated cross-functionally to turn product requirements into scalable, maintainable features shipped on schedule.",
  ],
}

const experiences = [
  {
    company: "S RAJ INFRA PROJECTS PVT. LTD.",
    location: "Freelancing",
    period: "Dec 2024 — 2025",
    role: "MERN Stack Developer",
    responsibilities: [
      "Architected and shipped a responsive enterprise SaaS platform end-to-end with React, Tailwind CSS, and a component-driven design system.",
      "Engineered dynamic, animated UIs with Framer Motion, achieving 40% improved user-engagement metrics.",
      "Integrated backend services with Firebase and SMTP automation; owned CI and production deployment.",
    ],
  },
  {
    company: "R K TECHNICAL SUPPORT",
    location: "Freelancing",
    period: "Dec 2023 — Jan 2024",
    role: "Frontend Developer",
    responsibilities: [
      "Led development of a professional healthcare clinic website with HTML, CSS, and JavaScript.",
      "Built a fully responsive design integrating dynamic Google Maps API for real-time tracking.",
      "Deployed by the client for real-world use across mobile, desktop, and tablet.",
    ],
  },
]

export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle
        eyebrow="Career"
        title="Experience"
        kicker="Building production-grade platforms and AI-integrated systems — from architecture through deployment."
      />

      {/* Current role — the page's one dark band */}
      <Reveal>
        <Panel variant="band" className="relative overflow-hidden p-6 md:p-8">
          <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="relative grid md:grid-cols-3 gap-6 md:gap-8 items-start">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-xs font-medium text-white">
                <Sparkles className="w-3.5 h-3.5" /> Current role
              </span>
              <h3 className="mt-4 font-display text-2xl md:text-3xl font-semibold tracking-tight text-white">
                {featured.company}
              </h3>
              <p className="mt-2 text-white/80 font-medium">{featured.role}</p>
              <div className="mt-4 flex flex-col gap-1.5 font-mono text-xs text-white/50">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {featured.location}</span>
                <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> {featured.period}</span>
              </div>
            </div>
            <ul className="md:col-span-2 space-y-4">
              {featured.responsibilities.map((r, idx) => (
                <li key={idx} className="flex gap-3 text-sm md:text-[15px] text-white/80 leading-relaxed">
                  <Check className="w-4 h-4 mt-1 shrink-0 text-white/70" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </Panel>
      </Reveal>

      {/* Freelance roles */}
      <div className="grid grid-cols-12 gap-4 mt-4">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.06} className="col-span-12 lg:col-span-6">
            <Tilt intensity={4} className="h-full">
            <Panel className="h-full p-6 md:p-7 flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt">
                  <Briefcase className="w-4 h-4" /> {exp.role}
                </span>
                <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">{exp.period}</span>
              </div>
              <h3 className="font-mono text-sm uppercase tracking-wider text-foreground font-semibold">{exp.company}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-cobalt" /> {exp.location}
              </p>
              <ul className="mt-5 space-y-3 flex-1">
                {exp.responsibilities.map((r, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-cobalt" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </Panel>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
