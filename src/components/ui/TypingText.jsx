import { useEffect, useMemo, useRef, useState } from "react"

/**
 * Typewriter that cycles through `words`, typing and deleting each.
 * Falls back to the first word instantly when reduced-motion is preferred.
 *
 * Props:
 *  - words      string | string[]  text(s) to type
 *  - typeSpeed  ms per typed char (default 70)
 *  - deleteSpeed ms per deleted char (default 40)
 *  - pause      ms to hold a completed word (default 1400)
 *  - loop       cycle through words repeatedly (default true)
 *  - caret      render a blinking caret (default true)
 */
export default function TypingText({
  words,
  typeSpeed = 70,
  deleteSpeed = 40,
  pause = 1400,
  loop = true,
  caret = true,
  className = "",
}) {
  const list = useMemo(() => (Array.isArray(words) ? words : [words]), [words])
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

  const [text, setText] = useState(reduce ? list[0] : "")
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const timeout = useRef()

  useEffect(() => {
    if (reduce) return
    const current = list[wordIdx % list.length]

    if (!deleting && text === current) {
      // finished typing → pause, then delete (unless single non-looping word)
      if (list.length === 1 && !loop) return
      timeout.current = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === "") {
      // finished deleting → next word
      setDeleting(false)
      setWordIdx((i) => (i + 1) % list.length)
    } else {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1)
      timeout.current = setTimeout(() => setText(next), deleting ? deleteSpeed : typeSpeed)
    }

    return () => clearTimeout(timeout.current)
  }, [text, deleting, wordIdx, list, loop, pause, typeSpeed, deleteSpeed, reduce])

  return (
    <span className={className}>
      {text}
      {caret && !reduce && <span className="caret" aria-hidden />}
    </span>
  )
}
