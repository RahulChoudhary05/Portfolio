const ITEMS = ["React", "Next.js", "TypeScript", "Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB",
  "Python", "Java", "Docker", "Azure", "Databricks", "Tailwind", "Framer Motion", "Agentic AI",
  "LLM", "RAG", "Kotlin", "GraphQL", "WebSockets", "CI/CD"];

export default function Ticker() {
  // The list is rendered twice so the CSS marquee can loop seamlessly.
  return (
    <div className="ticker slab" aria-hidden="true">
      <div className="ticker-run" id="ticker">
        {ITEMS.concat(ITEMS).map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}
