import { useEffect, useRef, useState } from "react"

/** Animated SVG proficiency ring — strokes to `value`% when scrolled in. */
export default function SkillRing({ value = 90, label = "Proficiency", size = 168 }) {
  const [p, setP] = useState(0)
  const ref = useRef(null)
  const r = (size - 18) / 2
  const c = 2 * Math.PI * r

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    const node = ref.current
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setP(value) }),
      { threshold: 0.4 }
    )
    if (node) io.observe(node)
    if (reduce) setP(value)
    return () => io.disconnect()
  }, [value])

  return (
    <div ref={ref} className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="9" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="hsl(var(--cobalt))"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (p / 100) * c}
          style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <span className="font-display text-3xl font-extrabold text-foreground">{p}%</span>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">{label}</p>
        </div>
      </div>
    </div>
  )
}
