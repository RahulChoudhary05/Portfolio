import { useState, useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
// import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Loader from "./components/Loader"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <ThemeProvider defaultTheme="system" enableSystem>
        {loading ? (
          <Loader onLoadingComplete={() => setLoading(false)} />
        ) : (
          <div className="relative">
            <Navbar />
            <Hero />
            <About />
            {/* <Experience /> */}
            <Skills />
            <Projects />
            <Services />
            <Education />
            <Contact />
            <Footer />
          </div>
        )}
      </ThemeProvider>
    </Router>
  )
}

export default App

