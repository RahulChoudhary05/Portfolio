// Decorative duplicate of the primary nav: hidden from assistive tech, so its
// links are also taken out of the tab order (aria-hidden content must not be focusable).
const SECTIONS = [
  ["hero", "Intro"], ["about", "About"], ["experience", "Experience"], ["stack", "Stack"],
  ["work", "Work"], ["services", "Services"], ["background", "Background"], ["contact", "Contact"],
]

export default function Rail() {
  return (
    <div className="rail" id="rail" aria-hidden="true">
      {SECTIONS.map(([id, label]) => (
        <a key={id} href={`#${id}`} tabIndex={-1}><i></i><span>{label}</span></a>
      ))}
    </div>
  )
}
