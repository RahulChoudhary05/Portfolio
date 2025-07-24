
import { motion } from "framer-motion"

export const DrawCircleText = () => {
  return (
    <div className="grid place-content-center px-4 py-9 text-gray-800 dark:text-gray-200">
      <h2 className="max-w-2xl text-center text-2xl md:text-3xl lg:text-4xl leading-snug">
        Building modern, scalable digital solutions {" "} 
        <span className="relative">
          with the MERN stack.
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1 w-full"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="url(#gradient)"
              strokeWidth="3"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </h2>
      <p className="mt-4 text-center text-lg md:text-xl text-gray-600 dark:text-gray-400">
        Simplifying complex problems into elegant and intuitive designs.
      </p>
    </div>
  )
}
