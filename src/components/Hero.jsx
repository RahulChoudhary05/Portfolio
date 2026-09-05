import { GitlabIcon as GitHub, Linkedin, Mail, ArrowRight, Package } from "lucide-react"
import { FaEye } from "react-icons/fa"
import { Reveal } from "./ui/Bento"
import CountUp from "./ui/CountUp"
import TypingText from "./ui/TypingText"
import Tilt from "./ui/Tilt"
import Magnetic from "./ui/Magnetic"

const socials = [
  { icon: GitHub, href: "https://github.com/RahulChoudhary05/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rahulchoudhary210505/", label: "LinkedIn" },
  { icon: Package, href: "https://www.npmjs.com/package/@rahulchoudhary05/durabolt", label: "npm" },
  { icon: Mail, href: "mailto:rahulchoudhary.sk@gmail.com", label: "Email" },
]

const stats = [
  { end: 7, suffix: "+", label: "Projects shipped" },
  { end: 400, suffix: "+", label: "DSA solved" },
  { end: 1000, suffix: "+", label: "Contributions" },
]

/* Graphite code card — the focal element (real code, no fake browser chrome). */
function CodeCard() {
  const L = ({ n, children }) => (
    <div className="grid grid-cols-[1.6rem_1fr] gap-3">
      <span className="text-right text-white/25 select-none">{n}</span>
      <span className="[overflow-wrap:anywhere]">{children}</span>
    </div>
  )
  return (
    <div className="card-code text-[13px] leading-[1.9]">
      <div className="flex items-center justify-between border-b px-4 py-2.5" style={{ borderColor: "hsl(var(--graphite-2))" }}>
        <span className="font-mono text-xs text-white/50">developer.ts</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-white/50">
          <span className="h-2 w-2 rounded-full bg-white/70" /> live
        </span>
      </div>
      <div className="p-4 font-mono">
        <L n="1"><span className="tok-key">const</span> <span className="tok-fn">rahul</span><span className="tok-punc">: Developer = {"{"}</span></L>
        <L n="2">
          <span className="pl-4 tok-str">role</span><span className="tok-punc">: </span>
          <span className="tok-str">"<TypingText words={["Full Stack & AI Developer"]} loop={false} typeSpeed={55} />"</span><span className="tok-punc">,</span>
        </L>
        <L n="3"><span className="pl-4 tok-str">stack</span><span className="tok-punc">: [</span><span className="tok-str">"React"</span><span className="tok-punc">, </span><span className="tok-str">"Next"</span><span className="tok-punc">, </span><span className="tok-str">"Node"</span><span className="tok-punc">, </span><span className="tok-str">"FastAPI"</span><span className="tok-punc">],</span></L>
        <L n="4"><span className="pl-4 tok-str">ai</span><span className="tok-punc">: [</span><span className="tok-str">"Agentic AI"</span><span className="tok-punc">, </span><span className="tok-str">"LLM"</span><span className="tok-punc">],</span></L>
        <L n="5"><span className="pl-4 tok-str">open</span><span className="tok-punc">: </span><span className="tok-num">true</span><span className="tok-punc">,</span></L>
        <L n="6"><span className="tok-punc">{"}"}</span></L>
      </div>
      <div className="flex items-center gap-2 border-t px-4 py-2.5" style={{ borderColor: "hsl(var(--graphite-2))" }}>
        <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[11px] font-medium text-white">200 OK</span>
        <span className="font-mono text-[11px] text-white/50">available for freelance &amp; full-time</span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 md:pt-28 pb-8 overflow-hidden">
      <div className="bw-grid pointer-events-none absolute inset-0 -z-0" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-5 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left — title / lede */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
                </span>
                Available for freelance &amp; full-time
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-[4.5rem] font-semibold tracking-[-0.03em] leading-[0.98] text-foreground [overflow-wrap:anywhere]">
                Rahul Choudhary
                <span className="sr-only"> — Full Stack &amp; AI Developer</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Full Stack &amp; AI Developer</span> building
                production-grade platforms and Agentic AI / LLM systems with the MERN &amp; PERN stacks —
                from architecture to deployment.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Magnetic strength={0.4}>
                  <a href="#contact" className="btn btn-primary">
                    Hire me <ArrowRight className="w-4 h-4" />
                  </a>
                </Magnetic>
                <Magnetic strength={0.4}>
                  <a
                    href="https://drive.google.com/file/d/1Jj0pxIaMYz1qWwOoHxd5HTJwZhQR41Di/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <FaEye /> View CV
                  </a>
                </Magnetic>
                <div className="flex items-center gap-2">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-btn">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* hairline stats */}
            <Reveal delay={0.2}>
              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-5">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                      <CountUp end={s.end} suffix={s.suffix} />
                    </dt>
                    <dd className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground mt-1">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Right — code card */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <Tilt intensity={7}>
              <CodeCard />
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
