import { useEffect, useRef, useState } from "react"

/** Counts from 0 → `end` once when scrolled into view (rAF based). */
export default function CountUp({ end, duration = 1600, suffix = "", prefix = "", className = "" }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    const node = ref.current
    if (!node) return

    const run = () => {
      if (started.current) return
      started.current = true
      if (reduce) { setVal(end); return }
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setVal(Math.round(eased * end))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.4 }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{val}{suffix}
    </span>
  )
}
