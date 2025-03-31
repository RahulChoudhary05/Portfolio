import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: GitHub, href: "https://github.com/RahulChoudhary05/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rahulchoudhary210505/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/krahul_21/", label: "Twitter" },
    { icon: Mail, href: "mailto:rahulchoudhary.sk@gmail.com", label: "Email" },
  ]

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-white dark:bg-gray-900 py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rahul Choudhary
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm">
              Crafting exceptional digital experiences with modern web technologies.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Experience", "Skills", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400"
        >
          <p>© {new Date().getFullYear()} Rahul Choudhary. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
