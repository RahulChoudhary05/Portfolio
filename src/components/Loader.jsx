import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer)
          if (onLoadingComplete) setTimeout(() => onLoadingComplete(), 400)
          return 100
        }
        return Math.min(old + Math.random() * 16, 100)
      })
    }, 150)
    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background">
      <div className="flex flex-col items-center px-8 w-full max-w-xs">
        <motion.img
          src="https://res.cloudinary.com/dnlrwuxxs/image/upload/f_auto,q_auto:best,dpr_2.0,c_fill,w_240,h_240,g_face,e_sharpen:40/v1754414883/RahulChoudharyPortfolio/Main_PIC_g3hsym.jpg"
          alt="Rahul Choudhary"
          className="h-16 w-16 rounded-xl object-cover grayscale border border-border mb-6"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="font-display text-xl font-semibold text-foreground"
        >
          Rahul Choudhary
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground mt-1 mb-7"
        >
          Full Stack &amp; AI Developer
        </motion.p>

        <div className="w-full">
          <div className="relative h-1 bg-muted rounded-full overflow-hidden">
            <motion.div className="absolute inset-y-0 left-0 rounded-full bg-cobalt" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex justify-between mt-2 text-muted-foreground text-xs font-mono">
            <span>Loading</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
