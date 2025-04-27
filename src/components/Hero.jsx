import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Mail, Download, ArrowRight } from "lucide-react"
import { DrawCircleText } from "./DrawCircleText"
import { FaEye } from 'react-icons/fa';

export default function Hero() {
  const socialLinks = [
    { icon: GitHub, href: "https://github.com/RahulChoudhary05/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rahulchoudhary210505/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:rahulchoudhary.sk@gmail.com", label: "Email" },
  ]

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] dark:opacity-[0.1]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm font-medium">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Rahul Choudhary
              </span>
            </motion.h1>

            <DrawCircleText />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8"
            >
          <motion.a
              href="https://drive.google.com/file/d/1yGmRR1Je-v3xwucBwCuJJuHDDywIS1LC/view?usp=sharing"
              target="_blank"
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <FaEye className="w-5 h-5 mr-2" />
            View CV
          </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex justify-center lg:justify-start space-x-4"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-3xl transform rotate-6 opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-600 rounded-3xl transform -rotate-6 opacity-50"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dnlrwuxxs/image/upload/fl_preserve_transparency/v1741251967/RahulChoudharyPortfolio/ProtfolioPic_i4sml0.jpg?_s=public-apps"
                  alt="Rahul Choudhary"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
      </motion.div>
    </section>
  )
}

