import { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Search, CornerDownLeft, ArrowRight, Github, Linkedin, Mail, FileText, Package } from "lucide-react"

const sections = [
  { label: "Work", hint: "Projects", anchor: "#projects" },
  { label: "About", hint: "Background", anchor: "#about" },
  { label: "Experience", hint: "Career", anchor: "#experience" },
  { label: "Stack", hint: "Skills", anchor: "#skills" },
  { label: "Services", hint: "What I do", anchor: "#services" },
  { label: "Contact", hint: "Get in touch", anchor: "#contact" },
]

const links = [
  { label: "GitHub", hint: "RahulChoudhary05", href: "https://github.com/RahulChoudhary05", icon: Github },
  { label: "LinkedIn", hint: "in/rahulchoudhary210505", href: "https://www.linkedin.com/in/rahulchoudhary210505/", icon: Linkedin },
  { label: "npm — durabolt", hint: "@rahulchoudhary05/durabolt", href: "https://www.npmjs.com/package/@rahulchoudhary05/durabolt", icon: Package },
  { label: "Email", hint: "rahulchoudhary.sk@gmail.com", href: "mailto:rahulchoudhary.sk@gmail.com", icon: Mail },
  { label: "Résumé", hint: "View CV", href: "https://drive.google.com/file/d/1Jj0pxIaMYz1qWwOoHxd5HTJwZhQR41Di/view?usp=sharing", icon: FileText },
]

export default function CommandPalette({ open, setOpen }) {
  const [query, setQuery] = useState("")
  const [active, setActive] = useState(0)
  const inputRef = useRef(null)

  const items = useMemo(() => {
    const all = [
      ...sections.map((s) => ({ ...s, type: "section" })),
      ...links.map((l) => ({ ...l, type: "link" })),
    ]
    const q = query.trim().toLowerCase()
    if (!q) return all
    return all.filter((i) => (i.label + " " + (i.hint || "")).toLowerCase().includes(q))
  }, [query])

  // Global ⌘K / Ctrl+K toggle
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [setOpen])

  useEffect(() => {
    if (open) {
      setQuery("")
      setActive(0)
      setTimeout(() => inputRef.current?.focus(), 40)
    }
  }, [open])

  useEffect(() => setActive(0), [query])

  const run = (item) => {
    setOpen(false)
    if (item.type === "section") {
      const el = document.querySelector(item.anchor)
      if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" })
    } else {
      window.open(item.href, item.href.startsWith("mailto") ? "_self" : "_blank", "noopener,noreferrer")
    }
  }

  const onListKey = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, items.length - 1)) }
    if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)) }
    if (e.key === "Enter" && items[active]) { e.preventDefault(); run(items[active]) }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-[2px]" onClick={() => setOpen(false)} />
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg card-code"
            onKeyDown={onListKey}
          >
            <div className="flex items-center gap-3 border-b border-graphite-2/60 px-4 py-3" style={{ borderColor: "hsl(var(--graphite-2))" }}>
              <Search className="w-4 h-4 text-white/50" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section or link…"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 outline-none font-sans"
              />
              <kbd className="font-mono text-[10px] text-white/40 border border-white/15 rounded px-1.5 py-0.5">ESC</kbd>
            </div>

            <ul className="max-h-[320px] overflow-y-auto py-2">
              {items.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-white/40 font-mono">No matches.</li>
              )}
              {items.map((item, i) => {
                const Icon = item.icon
                return (
                  <li key={item.label}>
                    <button
                      onMouseEnter={() => setActive(i)}
                      onClick={() => run(item)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                        i === active ? "bg-white/10" : ""
                      }`}
                    >
                      <span className="grid place-items-center h-8 w-8 rounded-md border border-white/10 text-white/70">
                        {Icon ? <Icon className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm text-white truncate">{item.label}</span>
                        <span className="block font-mono text-[11px] text-white/40 truncate">{item.hint}</span>
                      </span>
                      {i === active && <CornerDownLeft className="w-3.5 h-3.5 text-white/40" />}
                    </button>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
