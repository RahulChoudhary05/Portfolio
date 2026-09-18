export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-mesh" aria-hidden="true"></div>

      <div className="hero-shell">

        <div className="hero-copy">
          <p className="status"><span className="pulse" /> Available for freelance &amp; full-time · India · Remote friendly</p>

          <h1 className="wordmark">
            <span className="ln"><span>Rahul</span></span>
            <span className="ln"><span>Choudhary</span></span>
          </h1>

          <p className="role rv">Full Stack &amp; AI Developer · Software Engineer</p>

          <p className="hero-say rv">I build <b>production-grade platforms</b> and <b>Agentic{' '}AI / LLM systems</b> on the MERN and PERN stacks - owning them from architecture through deployment.</p>

          <div className="hero-cta rv">
            <a className="btn" href="#contact" data-cur="hire">Start a project</a>
            <a className="btn btn-ghost" href="https://drive.google.com/file/d/1Jj0pxIaMYz1qWwOoHxd5HTJwZhQR41Di/view?usp=sharing" target="_blank" rel="noopener" data-cur="open">Download CV</a>
            <a className="btn btn-ghost" href="#work" data-cur="view">See the work</a>
          </div>

          <dl className="tally rv">
            <div><dt data-count="7" data-suffix="+">0</dt><dd>Products shipped to production</dd></div>
            <div><dt data-count="400" data-suffix="+">0</dt><dd>DSA problems solved</dd></div>
            <div><dt data-count="1000" data-suffix="+">0</dt><dd>GitHub contributions</dd></div>
          </dl>
        </div>

        <div className="hero-stage rv">
          <div className="stage slab">
            <canvas id="field" aria-hidden="true"></canvas>
            <span className="stage-corner tl" aria-hidden="true"></span>
            <span className="stage-corner br" aria-hidden="true"></span>

            <figure className="portrait">
              <img
                src="https://res.cloudinary.com/dnlrwuxxs/image/upload/c_fill,w_760,h_760,g_face,q_auto:best,f_auto/v1754414883/RahulChoudharyPortfolio/Main_PIC_g3hsym.jpg"
                width={760}
                height={760}
                decoding="async"
                alt="Rahul Choudhary, Full Stack and AI Developer based in India"
              />
              <figcaption className="portrait-tag"><span>Rahul Choudhary</span><span>India</span></figcaption>
            </figure>

            <ul className="stage-meta" aria-hidden="true">
              <li><em>stack</em><span>MERN · PERN</span></li>
              <li><em>focus</em><span>Agentic AI · LLM</span></li>
              <li><em>status</em><span>open to work</span></li>
            </ul>
          </div>

          <div className="term" role="img" aria-label="Code snippet describing Rahul Choudhary's role and stack">
            <div className="term-bar"><span>developer.ts</span><span className="term-dots"><i /><i /><i /></span></div>
            <div className="term-body" aria-hidden="true">
              <div><em>1</em><span><span className="t-dim">const</span> <span className="t-key">rahul</span>: Developer = {'{'}</span></div>
              <div><em>2</em><span>{'  '}stack: [<span className="t-str">"React"</span>, <span className="t-str">"Next"</span>, <span className="t-str">"Node"</span>],</span></div>
              <div><em>3</em><span>{'  '}data:  [<span className="t-str">"PostgreSQL"</span>, <span className="t-str">"MongoDB"</span>],</span></div>
              <div><em>4</em><span>{'  '}ai:    [<span className="t-str">"Agentic"</span>, <span className="t-str">"LLM"</span>, <span className="t-str">"RAG"</span>],</span></div>
              <div><em>5</em><span>{'  '}openToWork: <span className="t-key">true</span>,</span></div>
              <div><em>6</em><span>{'}'}<span className="caret"></span></span></div>
            </div>
            <div className="term-foot"><span>200 OK</span><span>replies within a day</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
