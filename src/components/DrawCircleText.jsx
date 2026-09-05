import { motion } from "framer-motion"

export const DrawCircleText = () => {
  return (
    <div className="max-w-2xl">
      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-snug text-foreground">
        Building modern, scalable digital solutions{" "}
        <span className="relative inline-block">
          <span className="text-gradient-animated">with the MERN stack.</span>
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1 w-full"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.4 }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#d946ef" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </h2>
      <p className="mt-5 text-base md:text-lg text-muted-foreground">
        Simplifying complex problems into elegant, intuitive, and high-performance experiences.
      </p>
    </div>
  )
}
