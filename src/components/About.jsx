import { Code, Server, Database, BrainCircuit } from "lucide-react"
import { Section, SectionTitle, Reveal, Panel } from "./ui/Bento"
import Tilt from "./ui/Tilt"

const focus = [
  { icon: Code, title: "Frontend", desc: "React, Next.js, TypeScript", chip: "chip-blue" },
  { icon: Server, title: "Backend", desc: "Node.js, Express, FastAPI", chip: "chip-emerald" },
  { icon: Database, title: "Databases & Cloud", desc: "PostgreSQL, MongoDB, Azure", chip: "chip-violet" },
  { icon: BrainCircuit, title: "AI & Automation", desc: "Agentic AI, LLM Integration", chip: "chip-amber" },
]

export default function About() {
  return (
    <Section id="about">
      <SectionTitle eyebrow="Who I am" title="About" />

      <div className="grid grid-cols-12 gap-4">
        {/* Portrait */}
        <Reveal className="col-span-12 sm:col-span-5 lg:col-span-4">
          <Tilt intensity={6} className="h-full">
          <Panel className="h-full overflow-hidden p-2">
            <div className="relative overflow-hidden rounded-[10px] h-full min-h-[240px]">
              <img
                src="https://res.cloudinary.com/dnlrwuxxs/image/upload/f_auto,q_auto:best,dpr_2.0,w_900,e_sharpen:60/v1754414883/RahulChoudharyPortfolio/Main_PIC_g3hsym.jpg"
                srcSet="https://res.cloudinary.com/dnlrwuxxs/image/upload/f_auto,q_auto:best,w_600,e_sharpen:60/v1754414883/RahulChoudharyPortfolio/Main_PIC_g3hsym.jpg 600w, https://res.cloudinary.com/dnlrwuxxs/image/upload/f_auto,q_auto:best,w_1200,e_sharpen:60/v1754414883/RahulChoudharyPortfolio/Main_PIC_g3hsym.jpg 1200w"
                sizes="(max-width: 640px) 90vw, 400px"
                alt="Rahul Choudhary, Full Stack & AI Developer"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.03]"
              />
              <span className="absolute left-3 top-3 rounded-md bg-background/85 px-2.5 py-1 font-mono text-[11px] text-foreground backdrop-blur">
                India · Remote friendly
              </span>
            </div>
          </Panel>
          </Tilt>
        </Reveal>

        {/* Intro */}
        <Reveal delay={0.06} className="col-span-12 sm:col-span-7 lg:col-span-8">
          <Panel className="h-full p-6 md:p-7">
            <span className="eyebrow">Introduction</span>
            <h3 className="mt-3 font-display text-2xl md:text-[1.7rem] font-semibold tracking-tight text-foreground leading-snug">
              I build production-grade platforms and AI-integrated systems, from architecture through deployment.
            </h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">Full Stack &amp; AI Developer</span> with expertise across the
              <span className="text-foreground font-medium"> MERN and PERN stacks</span>, building
              <span className="text-foreground font-medium"> Agentic AI / LLM-integrated</span> systems. I'm proficient in
              system design, RESTful API architecture, and cloud deployment on Azure and Databricks.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Currently completing my <span className="text-foreground font-medium">B.E. in Computer Science</span> at
              Chandigarh University, and <span className="text-cobalt font-medium">open to freelance projects and full-time roles</span>.
            </p>

            <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-3">
              {focus.map((f) => (
                <div key={f.title} className="rounded-[10px] border border-border p-4 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25">
                  <span className={`chip ${f.chip} h-9 w-9`}>
                    <f.icon className="w-4 h-4" />
                  </span>
                  <h4 className="mt-3 font-display font-semibold text-foreground text-sm">{f.title}</h4>
                  <p className="mt-0.5 text-xs text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </Panel>
        </Reveal>
      </div>
    </Section>
  )
}
