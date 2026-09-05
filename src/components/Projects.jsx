import { useState } from "react"
import { Github, ArrowUpRight, Calendar } from "lucide-react"
import { Section, SectionTitle, Reveal, Panel } from "./ui/Bento"
import Tilt from "./ui/Tilt"
import projects from "./DataBase/projects"

function Links({ github, demo }) {
  const isNpm = demo.includes("npmjs.com")
  return (
    <div className="flex items-center gap-2">
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="btn btn-primary !py-2 !px-3.5 text-xs"
      >
        {isNpm ? "View on npm" : "Live demo"} <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        aria-label="GitHub repository"
        className="icon-btn !h-9 !w-9"
      >
        <Github className="w-4 h-4" />
      </a>
    </div>
  )
}

function Thumb({ image, title, className = "" }) {
  const [colored, setColored] = useState(false)
  return (
    <button
      type="button"
      onClick={() => setColored((c) => !c)}
      aria-label={`${colored ? "Hide" : "Show"} color for ${title.trim()}`}
      className={`group/thumb relative block w-full overflow-hidden rounded-[10px] border border-border bg-muted ${className}`}
    >
      <img
        src={image}
        alt={`${title.trim()} — project screenshot`}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover contrast-[1.03] transition-[filter] duration-500 group-hover/thumb:grayscale-0 ${
          colored ? "grayscale-0" : "grayscale"
        }`}
      />
      <span className="pointer-events-none absolute bottom-2 right-2 rounded-md bg-background/85 px-2 py-0.5 font-mono text-[10px] text-muted-foreground backdrop-blur">
        {colored ? "tap · B&W" : "tap · color"}
      </span>
    </button>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <Section id="projects">
      <SectionTitle
        eyebrow="Selected work"
        title="Featured Projects"
        kicker="Full-stack products, tools, and open-source work I've designed and shipped."
      />

      <div className="grid grid-cols-12 gap-4">
        {/* Featured */}
        <Reveal className="col-span-12">
          <Panel className="h-full p-4 md:p-5">
            <div className="grid md:grid-cols-2 gap-5 items-stretch">
              <Thumb image={featured.image} title={featured.title} className="min-h-[240px] md:min-h-[340px]" />
              <div className="flex flex-col justify-center p-2 md:p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="tag tag-cobalt">Featured</span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" /> {featured.date}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  {featured.title.trim()}
                </h3>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-4">
                  {featured.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {featured.technologies.slice(0, 6).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="mt-6">
                  <Links github={featured.github} demo={featured.demo} />
                </div>
              </div>
            </div>
          </Panel>
        </Reveal>

        {/* Rest */}
        {rest.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 0.06} className="col-span-12 sm:col-span-6">
            <Tilt intensity={5} className="h-full">
            <Panel className="h-full p-4 flex flex-col">
              <Thumb image={p.image} title={p.title} className="h-48" />
              <div className="flex flex-col flex-1 p-2 pt-4">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-foreground leading-tight">
                    {p.title.trim()}
                  </h3>
                  <span className="font-mono text-[11px] text-muted-foreground whitespace-nowrap">{p.date}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="mt-auto pt-5">
                  <Links github={p.github} demo={p.demo} />
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
