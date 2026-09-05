import { motion, useScroll, useSpring } from "framer-motion"

/** Thin gradient progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-cobalt"
      style={{ scaleX }}
    />
  )
}
