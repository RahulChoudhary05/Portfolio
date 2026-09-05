import { motion } from "framer-motion"
import { cn } from "./cn"

/**
 * Animated aurora / mesh-gradient backdrop with a masked grid.
 * Drop it as the first child of a `relative` section.
 */
export default function AuroraBackground({ className, variant = "violet", grid = true }) {
  const palettes = {
    violet: ["hsl(var(--violet))", "hsl(var(--cyan))", "hsl(var(--fuchsia))"],
    cyan: ["hsl(var(--cyan))", "hsl(var(--violet))", "hsl(var(--emerald))"],
    fuchsia: ["hsl(var(--fuchsia))", "hsl(var(--violet))", "hsl(var(--cyan))"],
  }
  const [c1, c2, c3] = palettes[variant] || palettes.violet

  return (
    <div className={cn("absolute inset-0 overflow-hidden -z-0", className)}>
      <div className="absolute inset-0 bg-background" />

      <motion.div
        className="aurora-blob w-[42rem] h-[42rem] -top-40 -left-32"
        style={{ background: c1 }}
        animate={{ x: [0, 60, -20, 0], y: [0, -30, 40, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora-blob w-[38rem] h-[38rem] top-10 -right-32"
        style={{ background: c2 }}
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -30, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora-blob w-[34rem] h-[34rem] -bottom-40 left-1/3"
        style={{ background: c3 }}
        animate={{ x: [0, 40, -30, 0], y: [0, -20, 20, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {grid && <div className="absolute inset-0 bg-grid-pattern opacity-70" />}

      {/* Fade edges into the page background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
    </div>
  )
}
