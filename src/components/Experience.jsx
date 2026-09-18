export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <div className="sec-head">
          <div>
            <p className="sec-marker">Experience</p>
            <h2 className="sec-title rv">Where the work has been done</h2>
          </div>
          <p className="sec-lede rv">Three years of shipping - from a client's first clinic website to agentic automation inside a healthcare platform.</p>
        </div>

        <div className="tl" id="tl">
          <div className="tl-line" aria-hidden="true"><i id="tlFill"></i></div>

          <article className="job rv">
            <div className="job-when">
              <b>Jun 2026 - Present</b>
              <span>Remote / Hybrid</span>
              <span className="job-chip">Current role</span>
            </div>
            <div className="job-what">
              <h3>Full Stack AI Developer</h3>
              <p className="org">Omnithrive Technologies</p>
              <ul>
                <li>Develop and deploy full-stack AI features in Next.js and TypeScript, owning testing, QA and the CI/CD path to production.</li>
                <li>Build Agentic AI and LLM automation with tool-calling and multi-step reasoning that removes manual steps from business operations.</li>
                <li>Integrate ABHA (Ayushman Bharat) healthcare interoperability APIs with consent-driven, secure data exchange between services.</li>
                <li>Architect type-safe REST APIs and real-time services, improving reliability and observability across the platform.</li>
                <li>Translate product requirements into scalable features with the design and product teams, shipped on schedule.</li>
              </ul>
              <div className="tags"><span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">Agentic AI</span><span className="tag">LLM</span><span className="tag">ABHA APIs</span><span className="tag">CI/CD</span></div>
            </div>
          </article>

          <article className="job rv">
            <div className="job-when">
              <b>Dec 2024 - 2025</b>
              <span>Freelance</span>
            </div>
            <div className="job-what">
              <h3>MERN Stack Developer</h3>
              <p className="org">S Raj Infra Projects Pvt. Ltd.</p>
              <ul>
                <li>Architected and shipped a responsive enterprise SaaS platform end to end with React, Tailwind CSS and a component-driven design system.</li>
                <li>Engineered animated interfaces with Framer Motion, lifting user-engagement metrics by 40%.</li>
                <li>Connected Firebase services and SMTP automation, then owned CI and the production deployment.</li>
              </ul>
              <div className="tags"><span className="tag">React</span><span className="tag">Tailwind</span><span className="tag">Framer Motion</span><span className="tag">Firebase</span><span className="tag">SMTP</span></div>
            </div>
          </article>

          <article className="job rv">
            <div className="job-when">
              <b>Dec 2023 - Jan 2024</b>
              <span>Freelance</span>
            </div>
            <div className="job-what">
              <h3>Frontend Developer</h3>
              <p className="org">R K Technical Support</p>
              <ul>
                <li>Led development of a healthcare clinic website in HTML, CSS and JavaScript for a real client.</li>
                <li>Built a fully responsive layout with a dynamic Google Maps integration for live location tracking.</li>
                <li>Handed over to the client and deployed for day-to-day use across mobile, tablet and desktop.</li>
              </ul>
              <div className="tags"><span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">JavaScript</span><span className="tag">Google Maps API</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
