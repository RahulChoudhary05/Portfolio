import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

// Dev-only client render (see src/index.js). App's effect runs initPortfolio.
export default function renderApp(container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
