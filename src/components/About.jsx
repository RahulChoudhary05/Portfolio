export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="sec-head">
          <div>
            <p className="sec-marker">About</p>
            <h2 className="sec-title rv">Engineering that survives contact with real users</h2>
          </div>
          <p className="sec-lede rv">Architecture, API design, data modelling and deployment - I take responsibility for the whole path a feature travels before anyone calls it done.</p>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p className="rv">I'm a <strong>Full Stack &amp; AI Developer</strong> at Omnithrive Technologies. Most of my work sits where a clean interface meets a system that has to stay correct under load - type-safe REST APIs, real-time services, and <strong>Agentic AI workflows</strong> that call tools and reason across several steps instead of guessing once.</p>
            <p className="rv">My range covers the <strong>MERN and PERN stacks</strong>, system design, and cloud deployment on <strong>Azure and Databricks</strong>. I'm finishing a <strong>B.E. in Computer Science at Chandigarh University</strong>, and I keep shipping open source - most recently <strong>durabolt</strong>, a library that makes risky backend operations exactly-once using only the Postgres you already run.</p>
            <p className="rv">Right now I'm open to freelance briefs, contract work, and full-time engineering roles.</p>
            <p className="pull rv">Reliability isn't a feature you add at the end. It's the shape of the system you chose on day one.</p>
          </div>

          <div className="rv">
            <div className="cells">
              <div className="cell"><h3>Frontend</h3><p>React, Next.js, TypeScript, Tailwind, Framer Motion</p></div>
              <div className="cell"><h3>Backend</h3><p>Node.js, Express, FastAPI, REST, WebSockets, auth</p></div>
              <div className="cell"><h3>Data &amp; cloud</h3><p>PostgreSQL, MongoDB, SQL Server, Azure, Databricks</p></div>
              <div className="cell"><h3>AI systems</h3><p>Agentic workflows, LLM integration, RAG, evals</p></div>
              <div className="cell"><h3>Delivery</h3><p>Docker, CI/CD, Vercel, PostHog, Postman</p></div>
              <div className="cell"><h3>Foundations</h3><p>DSA, system design, DBMS, operating systems, networks</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
