export default function Footer() {
  return (
    <footer className="foot slab">
      <div className="shell">
        <p className="foot-huge" aria-hidden="true"><span>RAHUL</span></p>
        <div className="foot-cols">
          <div>
            <h4>Rahul Choudhary</h4>
            <p>Full Stack &amp; AI Developer building production-grade platforms and Agentic AI / LLM systems. Open to freelance projects and full-time roles.</p>
          </div>
          <div>
            <h4>Navigate</h4>
            <ul>
              <li><a href="#work">Work</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#stack">Stack</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <ul>
              <li><a href="https://github.com/RahulChoudhary05" target="_blank" rel="noopener me">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/rahulchoudhary210505/" target="_blank" rel="noopener me">LinkedIn</a></li>
              <li><a href="https://twitter.com/krahul_21" target="_blank" rel="noopener me">X / Twitter</a></li>
              <li><a href="https://www.npmjs.com/package/@rahulchoudhary05/durabolt" target="_blank" rel="noopener">durabolt on npm</a></li>
              <li><a href="https://drive.google.com/file/d/1Jj0pxIaMYz1qWwOoHxd5HTJwZhQR41Di/view?usp=sharing" target="_blank" rel="noopener">Curriculum vitae</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-end">
          <span>© <span id="yr">2026</span> Rahul Choudhary</span>
          <span>Built with React, Tailwind &amp; WebGL · India</span>
          <span><button id="toTop" style={{cursor:'pointer',fontFamily:'inherit',color:'inherit'}} data-cur="top">Back to top</button></span>
        </div>
      </div>
    </footer>
  )
}
