import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

const container = document.getElementById("root")
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Production builds ship prerendered markup (scripts/prerender.js) - hydrate it
// in place so crawlers and users get the same DOM. Dev server has an empty root.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app)
} else {
  ReactDOM.createRoot(container).render(app)
}
