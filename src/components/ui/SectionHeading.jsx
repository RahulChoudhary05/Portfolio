import { motion } from "framer-motion"
import { cn } from "./cn"

/**
 * Code-styled section heading:
 *  - eyebrow rendered as a `// comment` mono label
 *  - title rendered as a `const <name>()` declaration with syntax tokens
 *  - an underline that draws in on view
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = "center", className }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center"

  // camelCase identifier from the title, e.g. "My Projects Journey" -> "myProjectsJourney"
  const ident = title
    .split(" ")
    .map((w, i) => (i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join("")
    .replace(/[^a-zA-Z0-9]/g, "")

  return (
    <div className={cn("flex flex-col mb-14", alignment, className)}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3 inline-flex items-center gap-2 font-mono text-xs md:text-sm text-muted-foreground"
        >
          <span className="token-comment">{"//"}</span>
          <span className="token-comment">{eyebrow}</span>
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
      >
        <span className="font-mono text-xl md:text-2xl lg:text-3xl align-middle token-key">const </span>
        <span className="text-gradient-animated">{ident}</span>
        <span className="font-mono text-xl md:text-2xl lg:text-3xl align-middle token-punc">()</span>
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={cn(
          "mt-5 h-[3px] w-24 rounded-full bg-gradient-to-r from-cyan via-fuchsia to-emerald",
          align === "left" ? "origin-left" : "origin-center"
        )}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
