export default function Navbar() {
  const isMac =
    typeof navigator !== "undefined" &&
    /Mac|iPod|iPhone|iPad/.test(navigator.platform || navigator.userAgent || "");
  return (
    <>
      <header className="top" id="top">
        <div className="top-in">
          <a className="brand" href="#hero" aria-label="Rahul Choudhary, home">
            <span className="brand-glyph">
              <img
                src="https://res.cloudinary.com/dnlrwuxxs/image/upload/c_fill,w_120,h_120,g_face,q_auto:best,f_auto/v1754414883/RahulChoudharyPortfolio/Main_PIC_g3hsym.jpg"
                width={120}
                height={120}
                loading="eager"
                decoding="async"
                alt=""
              />
            </span>
            <span className="brand-name">Rahul <small>Full Stack &amp; AI Developer</small></span>
          </a>
          <nav className="nav" id="nav" aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#stack">Stack</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="top-act">
            <button className="kbd-btn" id="openCmd" aria-label="Open command menu">Search <kbd>{isMac ? "⌘" : "Ctrl"}</kbd><kbd>K</kbd></button>
            <a className="btn btn-ghost btn-sm nav-hire" href="#contact" data-cur="hire">Hire<span className="hire-tail">&nbsp;me</span></a>
            <button className="burger" id="burger" aria-label="Open menu" aria-expanded="false"><i /><i /><i /></button>
          </div>
        </div>
      </header>

      <div className="drawer" id="drawer">
        <nav aria-label="Mobile">
          <a href="#work"><em>01</em> Work</a>
          <a href="#about"><em>02</em> About</a>
          <a href="#experience"><em>03</em> Experience</a>
          <a href="#stack"><em>04</em> Stack</a>
          <a href="#services"><em>05</em> Services</a>
          <a href="#background"><em>06</em> Background</a>
          <a href="#contact"><em>07</em> Contact</a>
          <a href="#contact" className="drawer-hire" data-cur="hire">Hire me</a>
        </nav>
        <div className="drawer-foot">
          <span>rahulchoudhary.sk@gmail.com</span>
          <span>+91 86280 32512</span>
        </div>
      </div>
    </>
  );
}
