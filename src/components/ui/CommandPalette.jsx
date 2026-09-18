export default function CommandPalette() {
  return (
    <div className="cmdk" id="cmdk" role="dialog" aria-modal="true" aria-label="Command menu">
      <div className="cmdk-veil" data-close=""></div>
      <div className="cmdk-box">
        <div className="cmdk-in">
          <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            style={{ color: "var(--faint)" }}
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4.5 4.5" />
          </svg>
          <input
            id="cmdkInput"
            type="text"
            placeholder="Jump to a section, project or channel…"
            aria-label="Search"
            autoComplete="off"
          />
          <kbd style={{ fontFamily: "var(--mono)", fontSize: ".62rem", color: "var(--faint)" }}>esc</kbd>
        </div>
        <ul className="cmdk-list" id="cmdkList" role="listbox"></ul>
        <div className="cmdk-foot">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  )
}
