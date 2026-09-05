import { Layout, BrainCircuit, Bot, Cloud, Database, Webhook, Smartphone, Sparkles, ArrowUpRight } from "lucide-react"
import { Section, SectionTitle, Reveal, Panel } from "./ui/Bento"
import Tilt from "./ui/Tilt"

const services = [
  {
    icon: Layout,
    title: "Full-Stack Web Development",
    desc: "End-to-end web apps on the MERN & PERN stacks — React, Next.js, Node, Express, and FastAPI. Type-safe, performant, and production-ready from architecture to deployment.",
    tags: ["React", "Next.js", "Node", "FastAPI", "TypeScript"],
    span: "lg:col-span-7",
  },
  {
    icon: BrainCircuit,
    title: "AI & LLM Engineering",
    desc: "Bring LLMs (Gemini, Claude, GPT) into your product — RAG pipelines, prompt engineering, streaming, and evals.",
    tags: ["LLM", "RAG", "Prompt Eng."],
    span: "lg:col-span-5",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    desc: "Agentic AI workflows with tool-calling and multi-step reasoning that automate real business operations.",
    tags: ["Agentic AI", "Tool-calling"],
    span: "lg:col-span-4",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Deploy and scale on Azure & Databricks with Docker, CI/CD, and Vercel — reliable, observable releases.",
    tags: ["Azure", "Docker", "CI/CD"],
    span: "lg:col-span-4",
  },
  {
    icon: Database,
    title: "Database Design & Management",
    desc: "Schema design, indexing, and query optimization across PostgreSQL, MongoDB, and SQL Server.",
    tags: ["PostgreSQL", "MongoDB", "SQL Server"],
    span: "lg:col-span-4",
  },
  {
    icon: Webhook,
    title: "API Development & Integrations",
    desc: "REST, GraphQL, and WebSocket APIs, plus third-party integrations — ABHA healthcare, Google Maps, SMTP, and payments.",
    tags: ["REST", "GraphQL", "WebSockets"],
    span: "lg:col-span-6",
  },
  {
    icon: Smartphone,
    title: "App & Mobile Development",
    desc: "Cross-platform apps and installable PWAs with Kotlin and responsive, offline-capable frontends.",
    tags: ["Kotlin", "PWA", "Responsive"],
    span: "lg:col-span-6",
  },
  {
    icon: Sparkles,
    title: "Responsive UI/UX & Motion",
    desc: "Mobile-first, accessible interfaces with polished micro-interactions, 3D tilt, and motion design that feels alive.",
    tags: ["Tailwind CSS", "Framer Motion", "Accessibility"],
    span: "lg:col-span-12",
  },
]

export default function Services() {
  return (
    <Section id="services">
      <SectionTitle
        eyebrow="How I help"
        title="Services"
        kicker="From full-stack web and mobile apps to AI agents, LLM integrations, cloud, and data — end-to-end product engineering. Available for freelance and contract work."
      />

      <div className="grid grid-cols-12 gap-4 perspective-1000">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.05} className={`col-span-12 md:col-span-6 ${s.span}`}>
            <Tilt intensity={5} className="h-full">
              <Panel className="group h-full p-6 md:p-7 flex items-start gap-4 min-h-[150px]">
                <span className="chip chip-blue h-12 w-12" style={{ transform: "translateZ(24px)" }}>
                  <s.icon className="w-6 h-6" />
                </span>
                <div className="flex-1" style={{ transform: "translateZ(16px)" }}>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg md:text-xl font-semibold tracking-tight text-foreground">{s.title}</h3>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform shrink-0 mt-1" />
                  </div>
                  <p className="mt-2 text-sm md:text-[15px] text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </Panel>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
