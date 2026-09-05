import { Code2, Layout, Server, Database, BrainCircuit, Wrench } from "lucide-react"
import { Section, SectionTitle, Reveal, Panel } from "./ui/Bento"
import SkillRing from "./ui/SkillRing"
import Tilt from "./ui/Tilt"

const marquee = ["React", "Next.js", "TypeScript", "Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Python", "Docker", "Azure", "Databricks", "Tailwind CSS", "Framer Motion", "Agentic AI", "LLM", "RAG", "Kotlin", "GraphQL", "WebSockets"]

const categories = [
  { icon: Code2, name: "Languages", chip: "chip-blue", items: ["Java", "JavaScript", "TypeScript", "Python", "SQL"] },
  { icon: Layout, name: "Frontend", chip: "chip-violet", items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Framer Motion"] },
  { icon: Server, name: "Backend", chip: "chip-emerald", items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "Auth"] },
  { icon: Database, name: "Databases & Cloud", chip: "chip-amber", items: ["PostgreSQL", "MongoDB", "SQL Server", "Firebase", "Supabase", "Azure", "Databricks"] },
  { icon: BrainCircuit, name: "AI & Automation", chip: "chip-fuchsia", items: ["Agentic AI", "LLM Integration", "Gemini AI", "Claude AI", "Prompt Eng."] },
  { icon: Wrench, name: "Tools & DevOps", chip: "chip-cyan", items: ["Docker", "Git", "GitHub", "CI/CD", "Postman", "PostHog", "Vercel"] },
]

const soft = ["Problem Solving", "System Design", "Ownership", "Collaboration", "Communication"]

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle
        eyebrow="What I do"
        title="Skills & Expertise"
        kicker="A full-stack + AI toolkit refined across production projects — from pixel-perfect UI to resilient backends and LLM-powered automation."
      />

      <div className="grid grid-cols-12 gap-4">
        <Reveal className="col-span-12 md:col-span-8">
          <Panel className="h-full p-7">
            <span className="eyebrow">Expertise</span>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              I specialize in building end-to-end web products across the MERN and PERN stacks — architecting clean APIs,
              designing efficient data models, and integrating Agentic AI / LLM workflows into reliable, scalable systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {soft.map((s, i) => (
                <span key={s} className={i === 0 ? "tag tag-cobalt" : "tag"}>{s}</span>
              ))}
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={0.06} className="col-span-12 md:col-span-4">
          <Panel className="h-full p-7 grid place-items-center">
            <SkillRing value={92} label="Full-Stack" />
          </Panel>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {categories.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 0.05}>
            <Tilt intensity={5} className="h-full">
              <Panel className="h-full p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`chip ${c.chip} h-10 w-10`} style={{ transform: "translateZ(22px)" }}>
                    <c.icon className="w-5 h-5" />
                  </span>
                  <h4 className="font-display font-semibold text-foreground leading-tight">{c.name}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.items.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </Panel>
            </Tilt>
          </Reveal>
        ))}
      </div>

      {/* Sliding tech marquee */}
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee pause-on-hover gap-3">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="whitespace-nowrap tag">{t}</span>
          ))}
        </div>
      </div>
    </Section>
  )
}
