import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { cn } from "./cn"

const EASE = [0.16, 1, 0.3, 1]

/* Composed reveal — fade + ~10px rise, ease-out ~600ms. */
export function Reveal({ children, className, delay = 0, y = 10, as = "div", ...rest }) {
  const M = motion[as] || motion.div
  return (
    <M
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </M>
  )
}

/**
 * Surface. variant: "plain" (hairline, default) | "band" (dark graphite).
 * Hairlines carry the page — no glass, no drop-shadow.
 */
export function Panel({ variant = "plain", hover = true, className, children, ...rest }) {
  const base = variant === "band" ? "band" : "panel"
  return (
    <div className={cn(base, hover && variant !== "band" && "panel-hover", className)} {...rest}>
      {children}
    </div>
  )
}

/** Panel header row: eyebrow/title left, circular action button right. */
export function PanelHeader({ eyebrow, title, action = true, onDark = false, className }) {
  return (
    <div className={cn("flex items-start justify-between gap-4 mb-5", className)}>
      <div>
        {eyebrow && <span className={cn("eyebrow block mb-2", onDark && "text-white/60")}>{eyebrow}</span>}
        {title && (
          <h3 className={cn("font-display text-lg md:text-xl font-semibold tracking-tight", onDark ? "text-white" : "text-foreground")}>
            {title}
          </h3>
        )}
      </div>
      {action && (
        <span className="panel-action" aria-hidden>
          <ArrowUpRight className="w-4 h-4" />
        </span>
      )}
    </div>
  )
}

/** Section shell with anchor id + centered max-width container. */
export function Section({ id, children, className }) {
  return (
    <section id={id} className={cn("relative py-9 md:py-14 scroll-mt-20", className)}>
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-6">{children}</div>
    </section>
  )
}

/** Editorial section heading — cobalt tick eyebrow + Space Grotesk title. */
export function SectionTitle({ eyebrow, title, kicker, align = "left", className }) {
  return (
    <Reveal
      className={cn(
        "mb-7 md:mb-9 flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="eyebrow mb-4 inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-tight text-foreground [overflow-wrap:anywhere] [min-width:0]">
        {title}
      </h2>
      {kicker && (
        <p className={cn("mt-4 max-w-2xl text-base md:text-lg text-muted-foreground", align === "center" && "mx-auto")}>
          {kicker}
        </p>
      )}
    </Reveal>
  )
}
