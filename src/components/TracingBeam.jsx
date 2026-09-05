import { useEffect, useRef, useState } from "react"
import { motion, useTransform, useScroll, useSpring } from "framer-motion"

export const TracingBeam = ({ children, className = "" }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const contentRef = useRef(null)
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight)
    }
  }, [])

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  })

  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), {
    stiffness: 500,
    damping: 90,
  })

  return (
    <motion.div ref={ref} className={`relative w-full max-w-4xl mx-auto h-full ${className}`}>
      <div className="absolute -left-6 md:-left-16 top-0">
        <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="ml-2 block" aria-hidden="true">
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.5"
            className="motion-reduce:hidden"
          />
          <defs>
            <motion.linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1} y2={y2}>
              <stop stopColor="#22d3ee" stopOpacity="0" />
              <stop stopColor="#22d3ee" />
              <stop offset="0.325" stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#d946ef" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      <div ref={contentRef} className="ml-12 lg:ml-20">{children}</div>
    </motion.div>
  )
}
