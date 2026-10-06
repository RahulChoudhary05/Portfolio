/*
 * Post-build prerender.
 *
 * Renders <App /> to static HTML and writes it into build/index.html, so the
 * full portfolio text (projects, experience, skills, contact) is present in the
 * raw HTML response. Googlebot renders JavaScript, but many crawlers and AI
 * answer engines (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Bing's first
 * pass, link-preview bots) read only the raw HTML. src/index.js hydrates this
 * markup instead of re-rendering it.
 *
 * Runs automatically after `npm run build` (npm "postbuild" hook).
 */
const fs = require("fs")
const path = require("path")
const Module = require("module")

process.env.NODE_ENV = "production"
process.env.BABEL_ENV = "production"

const babel = require("@babel/core")
const ROOT = path.resolve(__dirname, "..")
const SRC = path.join(ROOT, "src")
const BUILD = path.join(ROOT, "build")
const INDEX = path.join(BUILD, "index.html")

// Map imported assets (images, fonts) to the hashed URLs webpack emitted.
const manifest = JSON.parse(fs.readFileSync(path.join(BUILD, "asset-manifest.json"), "utf8")).files
const assetUrl = (file) => {
  const base = path.basename(file)
  const key = Object.keys(manifest).find((k) => path.basename(k) === base)
  if (!key) throw new Error(`prerender: no built asset found for ${file}`)
  return manifest[key]
}
for (const ext of [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".avif", ".woff", ".woff2"]) {
  Module._extensions[ext] = (m, filename) => { m.exports = assetUrl(filename); m.exports.default = m.exports }
}
for (const ext of [".css", ".scss"]) Module._extensions[ext] = () => {}

// Transpile src/ JSX on the fly with the same Babel preset CRA uses.
const loadJs = Module._extensions[".js"]
const transpile = (m, filename) => {
  if (!filename.startsWith(SRC)) return loadJs(m, filename)
  const { code } = babel.transformFileSync(filename, {
    babelrc: false,
    configFile: false,
    presets: [[require.resolve("babel-preset-react-app"), { runtime: "automatic" }]],
  })
  m._compile(code, filename)
}
Module._extensions[".js"] = transpile
Module._extensions[".jsx"] = transpile

const React = require("react")
const { renderToString } = require("react-dom/server")
const App = require(path.join(SRC, "App.js")).default

const markup = renderToString(React.createElement(App))
const html = fs.readFileSync(INDEX, "utf8")
const EMPTY_ROOT = '<div id="root"></div>'
if (!html.includes(EMPTY_ROOT)) throw new Error("prerender: empty #root not found in build/index.html")

fs.writeFileSync(INDEX, html.replace(EMPTY_ROOT, `<div id="root">${markup}</div>`))
console.log(`prerender: wrote ${(markup.length / 1024).toFixed(1)} KB of static markup into build/index.html`)
