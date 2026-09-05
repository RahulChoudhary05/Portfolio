import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion"
import { cn } from "./cn"

/**
 * 3D tilt card that reacts to cursor position with a glare/spotlight
 * and subtle depth. Children can use `translateZ` via style for pop-out.
 */
export default function TiltCard({
  children,
  className,
  intensity = 12,
  glare = true,
  glow = true,
  ...props
}) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springCfg = { stiffness: 250, damping: 20, mass: 0.5 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), springCfg)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), springCfg)

  const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"])
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, hsl(var(--violet) / 0.25), transparent 55%)`

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={glow ? { boxShadow: "0 30px 80px -30px hsl(var(--violet) / 0.55)" } : undefined}
      className={cn(
        "group relative rounded-2xl will-change-transform perspective-1000",
        className
      )}
      {...props}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBg, transform: "translateZ(1px)" }}
        />
      )}
    </motion.div>
  )
}
