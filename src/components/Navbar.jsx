import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Command } from "lucide-react"
import CommandPalette from "./ui/CommandPalette"

const menuItems = [
  { title: "Work", href: "#projects" },
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Stack", href: "#skills" },
  { title: "Services", href: "#services" },
  { title: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [paletteOpen, setPaletteOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
      document.querySelectorAll("section[id]").forEach((section) => {
        const top = section.offsetTop - 120
        if (window.scrollY >= top && window.scrollY < top + section.offsetHeight) {
          setActiveSection(section.getAttribute("id"))
        }
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" })
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? "border-border bg-background/80 backdrop-blur-md" : "border-transparent bg-background/0"
        }`}
      >
        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Wordmark */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick("#hero") }}
              className="flex items-center gap-2.5 shrink-0"
            >
              <img
                src="https://res.cloudinary.com/dnlrwuxxs/image/upload/f_auto,q_auto:best,dpr_2.0,c_fill,w_180,h_180,g_face,e_sharpen:40/v1754414883/RahulChoudharyPortfolio/Main_PIC_g3hsym.jpg"
                alt="Rahul Choudhary"
                className="h-9 w-9 rounded-md object-cover grayscale border border-border"
              />
              <span className="hidden sm:flex flex-col leading-tight">
                <span className="font-display font-semibold text-sm text-foreground">Rahul Choudhary</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  Full Stack &amp; AI Developer
                </span>
              </span>
            </a>

            {/* Center links */}
            <nav className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => {
                const active = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                    className={`link-underline text-sm font-medium ${active ? "text-cobalt" : "text-muted-foreground"}`}
                  >
                    {item.title}
                  </a>
                )
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPaletteOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 rounded-md border border-border px-2.5 py-1.5 text-xs text-muted-foreground hover:border-cobalt/60 hover:text-cobalt transition-colors"
                aria-label="Open command palette"
              >
                <Command className="w-3.5 h-3.5" />
                <span className="font-mono">K</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact") }}
                className="hidden sm:inline-flex btn btn-primary !py-1.5 !px-3.5 text-xs"
              >
                Hire me
              </a>
              <button
                className="lg:hidden icon-btn !h-9 !w-9"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/10 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-16 inset-x-4 z-50 lg:hidden panel bg-background p-3"
            >
              <nav className="flex flex-col">
                {menuItems.map((item) => {
                  const active = activeSection === item.href.substring(1)
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                      className={`px-3 py-3 rounded-md text-base font-medium transition-colors ${
                        active ? "text-cobalt" : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {item.title}
                    </a>
                  )
                })}
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick("#contact") }}
                  className="mt-2 btn btn-primary justify-center"
                >
                  Hire me
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />
    </>
  )
}
