# PageSpeed / Lighthouse audit — fixes (2026-10-23)

Baseline (PageSpeed, live site): Mobile 77 / 95 / 100 / 100, Desktop 96 / 92 / 100 / 100.
Same Lighthouse 12 run on one machine: live site **43** mobile → new build **91–97** mobile, desktop **98–99**,
Accessibility / Best Practices / SEO **100** on both.

| PageSpeed issue | Root cause | Fix |
|---|---|---|
| FCP 3.8 s, render-blocking CSS + Google Fonts (1,350 ms) | External `main.css` + `fonts.googleapis.com` stylesheet in the critical path | Fonts self-hosted via `@fontsource` (`src/fonts.css`); CSS inlined into `index.html` at build (`scripts/prerender.js`). Zero render-blocking requests. |
| LCP 3.8 s, element render delay 3.5 s | Hero text hidden until the loader finished, loader waited for `window.load` (three.js, GSAP) | Loader no longer waits for load; hero copy painted on first frame under the loader. |
| three.js / GSAP / ScrollTrigger in critical chain, 90 KiB unused JS, forced reflow 135 ms | Three sync CDN `<script>`s | Removed. GSAP + three now npm, code-split, loaded on first scroll/pointer/touch/key (`src/lib/motion.js`, `src/lib/heroField.js`). |
| Long main-thread tasks / TBT | React hydration of the whole page (only one `useState` existed) | Production no longer ships or hydrates React: prerendered HTML + vanilla `portfolioEffects`. `main.js` 63 KB → 6.7 KB gz. Dev server still renders React (`src/renderApp.js`). |
| Style/layout cost | Whole page laid out at load; full-screen SVG grain animation | `content-visibility:auto` on off-screen sections; grain disabled on phones; cursor rAF loop idles. |
| Non-composited animations (`#prog` width, boot bar) | Animating `width` | Now `transform: scaleX()`. |
| Image delivery (760 px served at 346 px) | Single fixed-size portrait | `srcset` 360/480/640/760 + `sizes`, `q_auto`. Preload removed (img is in prerendered HTML). |
| CLS 0.008 (boot mark) | Font swap + counter width changes in loader | Metric-matched fallback fonts (Capsize), Syne `font-display:block`, loader text revealed after its fonts load, fixed-width counter. |
| Contrast failures (section markers, footer) | `--faint` greys ~3:1 | Raised to ≥4.5:1 (`#686C73` light, `#8E9197` dark). |
| Heading order | Footer `h4` after `h2` | Footer headings → `h2`. |
| Identical links, different purpose | Repeated "Source"/"Live demo" | Visually-hidden project name added to each link. |
| `aria-hidden` element contains focusable (Agentic browsing 2/3) | Rail links focusable | `tabIndex=-1`. Closed mobile drawer now `visibility:hidden` (was focusable while hidden). |
| Label/name mismatch | Brand + search button `aria-label`s | Removed; visible text is the name. |
| No CSP `script-src`, no COOP, no Trusted Types | Missing headers | Build injects a hash-based CSP `<meta>` (script-src, Trusted Types with a strict default policy); `vercel.json` adds COOP, CORP, HSTS, TT, form-action. All `innerHTML` removed (also fixed a self-XSS in the contact-form success message). |

Not code-fixable / unscored: "DOM size" (896 elements of real content), "cache TTL" (Vercel already serves `/static` immutable),
"unused JS" for three.js (only loaded after interaction). PageSpeed varies run-to-run by a few points.
