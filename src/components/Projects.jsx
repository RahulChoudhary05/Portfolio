import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GitlabIcon as GitHub, ExternalLink, X } from "lucide-react"
import { Timeline } from "./Timeline"
import projects from "../components/DataBase/projects"

const ProjectCard = ({ project, onClick }) => {
  const cardRef = useRef(null)

  return (
    <motion.div
      ref={cardRef}
      onClick={() => onClick(project)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg cursor-pointer overflow-hidden group"
      whileHover={{ y: -10 }}
      layoutId={`project-card-${project.id}`}
    >
      <motion.div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </motion.div>
      <motion.div className="p-5">
        <motion.h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{project.title}</motion.h3>
        <motion.p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
          {project.description}
        </motion.p>
        <motion.div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    onClick={onClose}
  >
    <motion.div
      layoutId={`project-card-${project.id}`}
      className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full overflow-hidden relative"
      onClick={(e) => e.stopPropagation()}
    >
      <motion.button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 dark:text-gray-300 hover:text-gray-600 z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <X size={24} />
      </motion.button>
      <motion.div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          layoutId={`project-image-${project.id}`}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
      </motion.div>
      <motion.div className="p-8">
        <motion.h2
          className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4"
          layoutId={`project-title-${project.id}`}
        >
          {project.title}
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {project.description}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {project.technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded-full text-gray-800 dark:text-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitHub size={20} /> GitHub
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={20} /> Live Demo
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.div>
)

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const data = projects.map((project) => ({
    title: project.date,
    content: <ProjectCard project={project} onClick={setSelectedProject} />,
  }))

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects Journey
        </motion.h2>
        <Timeline data={data} />
      </div>
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  )
}
