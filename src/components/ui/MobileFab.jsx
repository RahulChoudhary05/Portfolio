import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquarePlus } from "lucide-react"

/** Fixed cobalt round button (mobile only) that smooth-scrolls to Contact. */
export default function MobileFab() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const go = () => {
    const el = document.getElementById("contact")
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          onClick={go}
          aria-label="Message me"
          className="md:hidden fixed bottom-5 right-5 z-40 grid place-items-center h-14 w-14 rounded-full bg-cobalt text-white shadow-cobalt"
          whileTap={{ scale: 0.9 }}
        >
          <MessageSquarePlus className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
