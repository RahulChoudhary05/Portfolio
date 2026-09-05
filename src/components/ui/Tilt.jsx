import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion"
import { cn } from "./cn"

/**
 * Subtle monochrome 3D tilt. Reacts to cursor with a soft white glare
 * and depth. Respects reduced-motion (springs settle to 0). B&W only.
 */
export default function Tilt({ children, className, intensity = 8, glare = true, ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const cfg = { stiffness: 250, damping: 22, mass: 0.5 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), cfg)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), cfg)
  const gx = useTransform(x, [-0.5, 0.5], ["0%", "100%"])
  const gy = useTransform(y, [-0.5, 0.5], ["0%", "100%"])
  const glareBg = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, hsl(0 0% 100% / 0.10), transparent 55%)`

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("group relative will-change-transform [perspective:1000px]", className)}
      {...props}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBg }}
        />
      )}
    </motion.div>
  )
}
