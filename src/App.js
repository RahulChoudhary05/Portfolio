import { useEffect } from "react"
import initPortfolio from "./lib/portfolioEffects"

import Loader from "./components/Loader"
import Grain from "./components/ui/Grain"
import ScrollProgress from "./components/ui/ScrollProgress"
import Cursor from "./components/ui/Cursor"
import Rail from "./components/ui/Rail"
import CommandPalette from "./components/ui/CommandPalette"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Ticker from "./components/Ticker"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  useEffect(() => {
    initPortfolio()
  }, [])

  return (
    <div>
      <a className="skip" href="#main">Skip to content</a>

      <Loader />
      <Grain />
      <ScrollProgress />
      <Cursor />

      <Navbar />
      <Rail />

      <main id="main">
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Education />
        <Contact />
      </main>

      <Footer />
      <CommandPalette />

      <button id="toTop" className="to-top" aria-label="Back to top" data-cur="top">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
      </button>

      <div className="toast" id="toast" role="status" aria-live="polite"></div>
    </div>
  )
}
