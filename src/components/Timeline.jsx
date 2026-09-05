import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform, motion } from "framer-motion"

export const Timeline = ({ data }) => {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full bg-transparent font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full glass-strong flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="h-4 w-4 rounded-full bg-gradient-to-br from-violet to-cyan shadow-[0_0_12px_hsl(var(--violet))]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.div>
              <motion.h3
                className="hidden md:block text-xl md:pl-20 md:text-4xl font-display font-bold text-gradient"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {item.title}
              </motion.h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <motion.h3
                className="md:hidden block text-2xl mb-4 text-left font-display font-bold text-gradient"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {item.title}
              </motion.h3>
              {item.content}
            </div>
          </motion.div>
        ))}
        <motion.div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-border to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-violet via-cyan to-fuchsia rounded-full shadow-[0_0_10px_hsl(var(--violet))]"
          />
        </motion.div>
      </div>
    </div>
  )
}
