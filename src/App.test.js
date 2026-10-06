/**
 * @jest-environment jsdom
 */
import { act } from "react"
import { renderToString } from "react-dom/server"
import { hydrateRoot } from "react-dom/client"
import App from "./App"

// The DOM effects engine (WebGL, GSAP, observers) isn't under test here.
jest.mock("./lib/portfolioEffects", () => () => {})

// Mirrors scripts/prerender.js + src/index.js: production HTML is server-rendered,
// then hydrated. A mismatch would make React throw the markup away and re-render.
test("prerendered markup hydrates without mismatches", () => {
  const errors = jest.spyOn(console, "error").mockImplementation(() => {})
  const container = document.createElement("div")
  container.innerHTML = renderToString(<App />)
  document.body.appendChild(container)
  const prerendered = container.innerHTML

  act(() => { hydrateRoot(container, <App />) })

  expect(errors).not.toHaveBeenCalled()
  expect(container.querySelector("h1").textContent).toBe("Rahul Choudhary")
  expect(container.innerHTML.length).toBeGreaterThan(prerendered.length * 0.9)
  errors.mockRestore()
})
