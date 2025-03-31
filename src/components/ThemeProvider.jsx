import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme", ...props }) {
  const [theme, setTheme] = useState(() => {
    // Check if theme is stored in localStorage
    const storedTheme = localStorage.getItem(storageKey)
    if (storedTheme) {
      return storedTheme
    }

    // If not, check system preference
    if (defaultTheme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }

    return defaultTheme
  })

  useEffect(() => {
    const root = window.document.documentElement

    // Remove both classes first
    root.classList.remove("light", "dark")

    // Apply the appropriate class based on theme
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    // Store the theme preference
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  // Listen for system theme changes
  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

      const handleChange = () => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(mediaQuery.matches ? "dark" : "light")
      }

      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme)
    },
  }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
