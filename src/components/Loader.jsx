export default function Loader() {
  return (
    <div id="boot" role="status" aria-live="polite" aria-label="Loading portfolio">
      <div className="boot-core">
        <div className="boot-mark" aria-hidden="true">
          <span>R</span>
          <span>A</span>
          <span>H</span>
          <span>U</span>
          <span>L</span>
        </div>
        <p className="boot-sub">Full Stack &amp; AI Developer</p>
      </div>
      <div className="boot-foot">
        <span id="bootLog">initialising</span>
        <span className="boot-count" id="bootNum">00</span>
      </div>
      <i className="boot-bar" id="bootBar"></i>
    </div>
  )
}
