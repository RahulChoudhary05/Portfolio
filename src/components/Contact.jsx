export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="shell">
        <div className="sec-head">
          <div>
            <p className="sec-marker">Contact</p>
            <h2 className="sec-title rv">Tell me what you're building</h2>
          </div>
          <p className="sec-lede rv">A project brief, a freelance engagement, or a role you're hiring for - send it over. I usually reply within a day.</p>
        </div>

        <div className="contact">
          <div>
            <p className="call rv">Let's build something that stays built.</p>
            <p className="rv" style={{color:'var(--dim)',maxWidth:'46ch',marginTop:'1.2rem'}}>Open to freelance projects, contract work and full-time roles. Name the endpoint, the workflow or the idea - I'll help you ship it.</p>

            <div className="channels rv">
              <a className="chan" href="mailto:rahulchoudhary.sk@gmail.com" data-cur="mail">
                <span className="chan-k">Email</span><span className="chan-v">rahulchoudhary.sk@gmail.com</span>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>
              </a>
              <a className="chan" href="tel:+918628032512" data-cur="call">
                <span className="chan-k">Phone</span><span className="chan-v">+91 86280 32512</span>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>
              </a>
              <a className="chan" href="https://github.com/RahulChoudhary05" target="_blank" rel="noopener noreferrer me" data-cur="open">
                <span className="chan-k">GitHub</span><span className="chan-v">RahulChoudhary05</span>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>
              </a>
              <a className="chan" href="https://www.linkedin.com/in/rahulchoudhary210505/" target="_blank" rel="noopener noreferrer me" data-cur="open">
                <span className="chan-k">LinkedIn</span><span className="chan-v">in/rahulchoudhary210505</span>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>
              </a>
              <a className="chan" href="https://twitter.com/krahul_21" target="_blank" rel="noopener noreferrer me" data-cur="open">
                <span className="chan-k">X</span><span className="chan-v">@krahul_21</span>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>
              </a>
            </div>
          </div>

          <form id="msgForm" className="rv" noValidate>
            <div className="field">
              <label htmlFor="f-name">Your name</label>
              <input id="f-name" name="name" type="text" autoComplete="name" placeholder="Jane Mehta" required />
              <span className="err" data-for="f-name"></span>
            </div>
            <div className="field">
              <label htmlFor="f-mail">Email</label>
              <input id="f-mail" name="email" type="email" autoComplete="email" placeholder="jane@company.com" required />
              <span className="err" data-for="f-mail"></span>
            </div>
            <div className="field">
              <label htmlFor="f-sub">What is it about</label>
              <input id="f-sub" name="subject" type="text" placeholder="Agentic AI workflow for our ops team" />
              <span className="err" data-for="f-sub"></span>
            </div>
            <div className="field">
              <label htmlFor="f-msg">Brief</label>
              <textarea id="f-msg" name="message" rows="5" placeholder="Scope, timeline, budget range - however much you have so far." required></textarea>
              <span className="err" data-for="f-msg"></span>
            </div>
            <div style={{display:'flex',flexWrap:'wrap',gap:'.7rem',alignItems:'center'}}>
              <button className="btn" type="submit" id="sendBtn" data-cur="send">Send message</button>
              <button className="btn btn-ghost btn-sm" type="button" id="copyMail" data-cur="copy">Copy email address</button>
            </div>
            <p className="form-note" id="formNote">Sends straight to rahulchoudhary.sk@gmail.com. Nothing is stored in the browser.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
