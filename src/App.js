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
import { ThemeProvider } from "./components/ThemeProvider"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
      window.location.hash = "#hero"
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div key="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <Loader />
            </motion.div>
          ) : (
            <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
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
    </ThemeProvider>
  )
}

export default App
