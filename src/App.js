import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import ScrollProgress from "./components/ui/ScrollProgress"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // force light theme only
    document.documentElement.classList.remove("dark")
    const timer = setTimeout(() => {
      setLoading(false)
      if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: "smooth" })
    }, 1900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Loader />
          </motion.div>
        ) : (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <ScrollProgress />
            <Navbar />
            <main>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Services />
              <Education />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
