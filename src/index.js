import "./fonts.css"
import "./index.css"
import initPortfolio from "./lib/portfolioEffects"

const container = document.getElementById("root")

// Production HTML is fully prerendered by scripts/prerender.js, and every interaction
// is plain DOM code in portfolioEffects - so the static markup is enhanced in place and
// no React runtime is downloaded or hydrated. The dev server has an empty root, so it
// renders the React tree (a separate chunk that production never loads).
if (container.hasChildNodes()) {
  initPortfolio()
} else {
  import("./renderApp").then((m) => m.default(container))
}
