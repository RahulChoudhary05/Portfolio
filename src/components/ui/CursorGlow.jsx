import { useEffect } from "react"
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"

/**
 * A soft spotlight that follows the cursor across the whole page.
 * Disabled on touch / small screens for performance.
 */
export default function CursorGlow() {
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 })
  const bg = useMotionTemplate`radial-gradient(400px circle at ${sx}px ${sy}px, hsl(var(--violet) / 0.12), transparent 60%)`

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [x, y])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] hidden md:block"
      style={{ background: bg }}
    />
  )
}
