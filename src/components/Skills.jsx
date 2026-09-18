export default function Skills() {
  return (
    <section className="section" id="stack">
      <div className="shell">
        <div className="sec-head">
          <div>
            <p className="sec-marker">Stack</p>
            <h2 className="sec-title rv">The toolkit, and how deep it goes</h2>
          </div>
          <p className="sec-lede rv">Sharpened on production projects - pixel-accurate interfaces, resilient backends, and LLM-powered automation that holds up outside a demo.</p>
        </div>

        <div className="skill-wrap">
          <div style={{display:'grid',gap:'1.7rem'}}>
            <p className="rv" style={{color:'var(--dim)',fontSize:'var(--step-1)',fontWeight:300,maxWidth:'50ch'}}>I build end-to-end products across MERN and PERN - clean APIs, efficient data models, and Agentic AI woven into systems that stay reliable as they scale.</p>
            <div className="meters rv" id="meters">
              <div className="meter" data-v="94"><div className="meter-top"><b>Full-stack engineering</b><i>94</i></div><div className="meter-track"><span className="meter-fill"></span></div></div>
              <div className="meter" data-v="90"><div className="meter-top"><b>System &amp; API design</b><i>90</i></div><div className="meter-track"><span className="meter-fill"></span></div></div>
              <div className="meter" data-v="88"><div className="meter-top"><b>AI &amp; LLM integration</b><i>88</i></div><div className="meter-track"><span className="meter-fill"></span></div></div>
              <div className="meter" data-v="85"><div className="meter-top"><b>Databases &amp; query tuning</b><i>85</i></div><div className="meter-track"><span className="meter-fill"></span></div></div>
              <div className="meter" data-v="82"><div className="meter-top"><b>Cloud, Docker &amp; CI/CD</b><i>82</i></div><div className="meter-track"><span className="meter-fill"></span></div></div>
            </div>
          </div>

          <div className="stack-cols rv">
            <div className="stack-col"><h3>Languages <em>05</em></h3><ul><li className="tag">Java</li><li className="tag">JavaScript</li><li className="tag">TypeScript</li><li className="tag">Python</li><li className="tag">SQL</li></ul></div>
            <div className="stack-col"><h3>Frontend <em>06</em></h3><ul><li className="tag">React.js</li><li className="tag">Next.js</li><li className="tag">HTML</li><li className="tag">CSS</li><li className="tag">Tailwind</li><li className="tag">Framer Motion</li></ul></div>
            <div className="stack-col"><h3>Backend <em>06</em></h3><ul><li className="tag">Node.js</li><li className="tag">Express</li><li className="tag">FastAPI</li><li className="tag">REST</li><li className="tag">WebSockets</li><li className="tag">Auth</li></ul></div>
            <div className="stack-col"><h3>Data &amp; cloud <em>07</em></h3><ul><li className="tag">PostgreSQL</li><li className="tag">MongoDB</li><li className="tag">SQL Server</li><li className="tag">Firebase</li><li className="tag">Supabase</li><li className="tag">Azure</li><li className="tag">Databricks</li></ul></div>
            <div className="stack-col"><h3>AI &amp; automation <em>05</em></h3><ul><li className="tag">Agentic AI</li><li className="tag">LLM integration</li><li className="tag">Gemini</li><li className="tag">Claude</li><li className="tag">Prompt engineering</li></ul></div>
            <div className="stack-col"><h3>Tools &amp; DevOps <em>07</em></h3><ul><li className="tag">Docker</li><li className="tag">Git</li><li className="tag">GitHub</li><li className="tag">CI/CD</li><li className="tag">Postman</li><li className="tag">PostHog</li><li className="tag">Vercel</li></ul></div>
          </div>
        </div>
      </div>
    </section>
  )
}
