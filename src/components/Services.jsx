export default function Services() {
  return (
    <section className="section" id="services">
      <div className="shell">
        <div className="sec-head">
          <div>
            <p className="sec-marker">Services</p>
            <h2 className="sec-title rv">What you can hire me to build</h2>
          </div>
          <p className="sec-lede rv">Full-stack web and mobile, AI agents, LLM integration, cloud and data - end-to-end product engineering, available for freelance and contract work.</p>
        </div>

        <div className="svc-grid rv" id="svcGrid">
          <article className="svc"><p className="svc-n">01</p><h3>Full-stack web development</h3><p>End-to-end apps on MERN and PERN - React, Next.js, Node, Express and FastAPI. Type-safe, fast, and production-ready from architecture to deployment.</p><div className="tags"><span className="tag">React</span><span className="tag">Next.js</span><span className="tag">Node</span><span className="tag">FastAPI</span></div></article>
          <article className="svc"><p className="svc-n">02</p><h3>AI &amp; LLM engineering</h3><p>Put Gemini, Claude or GPT inside your product properly - RAG pipelines, prompt engineering, streaming responses and evaluation you can measure.</p><div className="tags"><span className="tag">LLM</span><span className="tag">RAG</span><span className="tag">Evals</span></div></article>
          <article className="svc"><p className="svc-n">03</p><h3>AI agents &amp; automation</h3><p>Agentic workflows with tool-calling and multi-step reasoning that take real operational work off your team's hands.</p><div className="tags"><span className="tag">Agentic AI</span><span className="tag">Tool-calling</span></div></article>
          <article className="svc"><p className="svc-n">04</p><h3>Cloud &amp; DevOps</h3><p>Ship and scale on Azure and Databricks with Docker, CI/CD and Vercel - releases that are reliable and observable.</p><div className="tags"><span className="tag">Azure</span><span className="tag">Docker</span><span className="tag">CI/CD</span></div></article>
          <article className="svc"><p className="svc-n">05</p><h3>Database design</h3><p>Schema design, indexing and query optimisation across PostgreSQL, MongoDB and SQL Server - including rescuing queries that have quietly got slow.</p><div className="tags"><span className="tag">PostgreSQL</span><span className="tag">MongoDB</span><span className="tag">SQL Server</span></div></article>
          <article className="svc"><p className="svc-n">06</p><h3>APIs &amp; integrations</h3><p>REST, GraphQL and WebSocket APIs, plus third-party work - ABHA healthcare interoperability, Google Maps, SMTP and payments.</p><div className="tags"><span className="tag">REST</span><span className="tag">GraphQL</span><span className="tag">WebSockets</span></div></article>
          <article className="svc"><p className="svc-n">07</p><h3>App &amp; mobile</h3><p>Cross-platform apps and installable PWAs with Kotlin and responsive, offline-capable frontends.</p><div className="tags"><span className="tag">Kotlin</span><span className="tag">PWA</span><span className="tag">Responsive</span></div></article>
          <article className="svc"><p className="svc-n">08</p><h3>Interface &amp; motion</h3><p>Mobile-first, accessible interfaces with micro-interactions, 3D tilt and motion design that makes a product feel considered.</p><div className="tags"><span className="tag">Tailwind</span><span className="tag">Framer Motion</span><span className="tag">a11y</span></div></article>
        </div>
      </div>
    </section>
  )
}
