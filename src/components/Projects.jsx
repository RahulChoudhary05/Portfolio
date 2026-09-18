import projects from './DataBase/projects.js'

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="sec-head">
          <div>
            <p className="sec-marker">Selected work</p>
            <h2 className="sec-title rv">Seven things I designed, built and shipped</h2>
          </div>
          <p className="sec-lede rv">Open source, healthcare, commerce and developer tooling. Images are held in monochrome until you hover - then they show their real colours.</p>
        </div>

        <div className="work">

          <article className="proj rv">
            <a className="proj-art" href="https://www.npmjs.com/package/@rahulchoudhary05/durabolt" target="_blank" rel="noopener noreferrer" data-cur="open" aria-label="durabolt on npm"><span className="win"><span className="win-bar"><i></i><i></i><i></i><b>npmjs.com</b></span><span className="win-shot"><span className="shade" aria-hidden="true"></span><img src={projects[0].image} width={1600} height={1000} loading="eager" decoding="async" alt="durabolt open-source Node.js library by Rahul Choudhary" style={{background:'#111',padding:'12%'}} /></span></span><span className="proj-hint" aria-hidden="true">hover · colour</span></a>
            <div className="proj-body">
              <p className="proj-meta"><span className="proj-idx">01</span><span>2026</span><span className="proj-flag">Open source</span><span className="proj-flag">Featured</span></p>
              <h3>durabolt</h3>
              <p>A zero-dependency Node.js library that makes risky backend operations - charges, emails, third-party calls, webhooks - safe and self-healing using only the Postgres you already run. Three composable primitives: <em>once()</em> for exactly-once idempotency, a transactional outbox so a write and its event commit or roll back together, and signed, retried, dead-lettered webhooks you can trust.</p>
              <div className="tags"><span className="tag">Node.js</span><span className="tag">TypeScript</span><span className="tag">PostgreSQL</span><span className="tag">npm</span></div>
              <p className="proj-links">
                <a className="lnk" href="https://www.npmjs.com/package/@rahulchoudhary05/durabolt" target="_blank" rel="noopener noreferrer">View on npm <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
                <a className="lnk" href="https://github.com/RahulChoudhary05/durabolt" target="_blank" rel="noopener noreferrer">Source <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
              </p>
            </div>
          </article>

          <article className="proj rv">
            <a className="proj-art" href="https://ciphersqlschool.vercel.app/" target="_blank" rel="noopener noreferrer" data-cur="open" aria-label="CipherSQL Studio live demo"><span className="win"><span className="win-bar"><i></i><i></i><i></i><b>ciphersqlschool.vercel.app</b></span><span className="win-shot"><span className="shade" aria-hidden="true"></span><img src={projects[1].image} width={1400} height={788} loading="lazy" decoding="async" alt="CipherSQL Studio, an interactive SQL learning platform built by Rahul Choudhary" /></span></span><span className="proj-hint" aria-hidden="true">hover · colour</span></a>
            <div className="proj-body">
              <p className="proj-meta"><span className="proj-idx">02</span><span>March 2026</span><span className="proj-flag">Full-stack</span></p>
              <h3>CipherSQL Studio</h3>
              <p>An interactive SQL learning platform with 20–30 real-world dataset challenges, instant query feedback, PK/FK schema visualisation and an AI hint engine. I cut multi-user workspace provisioning from over 60 seconds to under one, so concurrent learners each get an isolated execution environment without waiting.</p>
              <div className="tags"><span className="tag">JavaScript</span><span className="tag">PostgreSQL</span><span className="tag">SQL Server</span><span className="tag">AI hints</span></div>
              <p className="proj-links">
                <a className="lnk" href="https://ciphersqlschool.vercel.app/" target="_blank" rel="noopener noreferrer">Live demo <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
                <a className="lnk" href="https://github.com/RahulChoudhary05/CipherSchools" target="_blank" rel="noopener noreferrer">Source <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
              </p>
            </div>
          </article>

          <article className="proj rv">
            <a className="proj-art" href="https://medoshieldai.vercel.app/" target="_blank" rel="noopener noreferrer" data-cur="open" aria-label="MEDO Shield AI live demo"><span className="win"><span className="win-bar"><i></i><i></i><i></i><b>medoshieldai.vercel.app</b></span><span className="win-shot"><span className="shade" aria-hidden="true"></span><img src={projects[2].image} width={1400} height={788} loading="lazy" decoding="async" alt="MEDO Shield AI telemedicine platform with doctor and patient portals, built by Rahul Choudhary" /></span></span><span className="proj-hint" aria-hidden="true">hover · colour</span></a>
            <div className="proj-body">
              <p className="proj-meta"><span className="proj-idx">03</span><span>January 2026</span><span className="proj-flag">Healthcare AI</span></p>
              <h3>MEDO Shield AI</h3>
              <p>A telemedicine platform with separate doctor and patient portals, appointment management, real-time WebSocket chat and AI symptom guidance. Its privacy-first video engine converts patient uploads into 33-point skeletal data without storing raw footage, detecting tremors in the 4–12 Hz band and gait anomalies for neurological risk classification.</p>
              <div className="tags"><span className="tag">React</span><span className="tag">FastAPI</span><span className="tag">Python</span><span className="tag">MongoDB</span><span className="tag">Gemini AI</span><span className="tag">Docker</span></div>
              <p className="proj-links">
                <a className="lnk" href="https://medoshieldai.vercel.app/" target="_blank" rel="noopener noreferrer">Live demo <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
                <a className="lnk" href="https://github.com/RahulChoudhary05/MEDO_SHIELD_AI" target="_blank" rel="noopener noreferrer">Source <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
              </p>
            </div>
          </article>

          <article className="proj rv">
            <a className="proj-art" href="https://combofinder.vercel.app/" target="_blank" rel="noopener noreferrer" data-cur="open" aria-label="ComboFinder live demo"><span className="win"><span className="win-bar"><i></i><i></i><i></i><b>combofinder.vercel.app</b></span><span className="win-shot"><span className="shade" aria-hidden="true"></span><img src={projects[3].image} width={1400} height={600} loading="lazy" decoding="async" alt="ComboFinder data file processing tool built with React and Node.js by Rahul Choudhary" /></span></span><span className="proj-hint" aria-hidden="true">hover · colour</span></a>
            <div className="proj-body">
              <p className="proj-meta"><span className="proj-idx">04</span><span>March 2025</span><span className="proj-flag">Tooling</span></p>
              <h3>ComboFinder</h3>
              <p>A web tool for uploading and reshaping data files fast. Pick the columns that matter - product name, price, anything - and generate a refined output. Built with React, Tailwind and Node.js with secure file handling, for e-commerce catalogues, analysis and reporting.</p>
              <div className="tags"><span className="tag">React</span><span className="tag">Node.js</span><span className="tag">Express</span><span className="tag">Vercel</span></div>
              <p className="proj-links">
                <a className="lnk" href="https://combofinder.vercel.app/" target="_blank" rel="noopener noreferrer">Live demo <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
                <a className="lnk" href="https://github.com/RahulChoudhary05/ComboFinder" target="_blank" rel="noopener noreferrer">Source <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
              </p>
            </div>
          </article>

          <article className="proj rv">
            <a className="proj-art" href="https://srajinfra.vercel.app/" target="_blank" rel="noopener noreferrer" data-cur="open" aria-label="S Raj Infra Projects live site"><span className="win"><span className="win-bar"><i></i><i></i><i></i><b>srajinfra.vercel.app</b></span><span className="win-shot"><span className="shade" aria-hidden="true"></span><img src={projects[4].image} width={1400} height={788} loading="lazy" decoding="async" alt="S Raj Infra Projects enterprise SaaS platform built by Rahul Choudhary" /></span></span><span className="proj-hint" aria-hidden="true">hover · colour</span></a>
            <div className="proj-body">
              <p className="proj-meta"><span className="proj-idx">05</span><span>Dec 2024 - present</span><span className="proj-flag">Client work</span></p>
              <h3>S Raj Infra Projects</h3>
              <p>An enterprise SaaS platform in React and Tailwind, with Framer Motion interfaces that lifted engagement by 40%. Now in production as the company's primary client-acquisition and service showcase, backed by Firebase and SMTP automation.</p>
              <div className="tags"><span className="tag">React</span><span className="tag">Node.js</span><span className="tag">Express</span><span className="tag">Firebase</span></div>
              <p className="proj-links">
                <a className="lnk" href="https://srajinfra.vercel.app/" target="_blank" rel="noopener noreferrer">Live site <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
                <a className="lnk" href="https://github.com/RahulChoudhary05/S-RAJ-INFRA" target="_blank" rel="noopener noreferrer">Source <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
              </p>
            </div>
          </article>

          <article className="proj rv">
            <a className="proj-art" href="https://github.com/RahulChoudhary05/BharatMarket-EcommerceWebsite" target="_blank" rel="noopener noreferrer" data-cur="open" aria-label="BharatMarket source"><span className="win"><span className="win-bar"><i></i><i></i><i></i><b>github.com</b></span><span className="win-shot"><span className="shade" aria-hidden="true"></span><img src={projects[5].image} width={1400} height={788} loading="lazy" decoding="async" alt="BharatMarket e-commerce website built with React, Node.js and Firebase by Rahul Choudhary" /></span></span><span className="proj-hint" aria-hidden="true">hover · colour</span></a>
            <div className="proj-body">
              <p className="proj-meta"><span className="proj-idx">06</span><span>Mar - Apr 2024</span><span className="proj-flag">E-commerce</span></p>
              <h3>BharatMarket</h3>
              <p>A full e-commerce build in React, Node.js, Express and Tailwind on Firebase - authentication, real-time database updates and a checkout that doesn't stumble. Docker and Jenkins drive the CI/CD pipeline for automated testing, building and release.</p>
              <div className="tags"><span className="tag">React</span><span className="tag">Node.js</span><span className="tag">Firebase</span><span className="tag">Docker</span><span className="tag">Jenkins</span></div>
              <p className="proj-links">
                <a className="lnk" href="https://github.com/RahulChoudhary05/BharatMarket-EcommerceWebsite" target="_blank" rel="noopener noreferrer">Source <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
              </p>
            </div>
          </article>

          <article className="proj rv">
            <a className="proj-art" href="https://www.rktechs.co/" target="_blank" rel="noopener noreferrer" data-cur="open" aria-label="R K Technical Support live site"><span className="win"><span className="win-bar"><i></i><i></i><i></i><b>rktechs.co</b></span><span className="win-shot"><span className="shade" aria-hidden="true"></span><img src={projects[6].image} width={1400} height={884} loading="lazy" decoding="async" alt="R K Technical Support healthcare clinic website built by Rahul Choudhary" /></span></span><span className="proj-hint" aria-hidden="true">hover · colour</span></a>
            <div className="proj-body">
              <p className="proj-meta"><span className="proj-idx">07</span><span>Dec 2023 - Jan 2024</span><span className="proj-flag">Client work</span></p>
              <h3>R K Technical Support</h3>
              <p>A healthcare clinic website in plain HTML, CSS and JavaScript - fully responsive across phone, tablet and desktop, with a dynamic Google Maps integration for live tracking. Deployed by the client and still in real-world use.</p>
              <div className="tags"><span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">JavaScript</span><span className="tag">Google Maps API</span></div>
              <p className="proj-links">
                <a className="lnk" href="https://www.rktechs.co/" target="_blank" rel="noopener noreferrer">Live site <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
                <a className="lnk" href="https://github.com/RahulChoudhary05/RKTECHNICALSUPPORT" target="_blank" rel="noopener noreferrer">Source <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}
