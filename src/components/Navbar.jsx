import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "Home", href: "#hero" },
    { title: "About", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Services", href: "#services" },
    { title: "Education", href: "#education" },
    { title: "Contact", href: "#contact" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: 1,
        when: "beforeChildren",
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  const handleNavClick = (href) => {
    setIsOpen(false);

    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg" : "py-4 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#hero"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#hero")
              }}
            >
              RC
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className={`px-3 py-2 rounded-md transition-colors relative ${
                    activeSection === item.href.substring(1)
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1 * i, duration: 0.3 },
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                >
                  {item.title}
                  {activeSection === item.href.substring(1) && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}

              {mounted && (
                <motion.button
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark")
                  }}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={theme}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {theme === "dark" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-900 shadow-lg z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <motion.a
                  href="#hero"
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick("#hero")
                    setIsOpen(false)
                  }}
                >
                  RC
                </motion.a>

                {mounted && (
                  <motion.button
                    onClick={() => {
                      setTheme(theme === "dark" ? "light" : "dark")
                    }}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  >
                    {theme === "dark" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                    )}
                  </motion.button>
                )}
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-4">
                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      className={`py-2 px-4 rounded-lg transition-colors ${
                        activeSection === item.href.substring(1)
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                      variants={menuItemVariants}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                    >
                      {item.title}
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  &copy; {new Date().getFullYear()} Rahul Choudhary
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
