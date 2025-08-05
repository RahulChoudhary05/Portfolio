import { GraduationCap, Calendar, Award } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { motion } from "framer-motion"

export default function Education() {
  const education = [
    {
      degree: "High School",
      institution: "St D. R. Public Senior Secondary School",
      period: "March 2020 – March 2022",
      achievements: ["Intermediate percentage: 70.3%", "High school percentage: 74.8%"],
    },
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Chandigarh University",
      period: "August 2022 – Present",
      achievements: [
        "Current CGPA: 7.44",
        "Proven ability to work collaboratively in team projects",
        "Commitment to continuous learning and self-improvement",
      ],
    },
  ]

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Education" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl relative transition-all duration-300 overflow-hidden"
              
            >
              <div className="absolute top-0 left-0 w-32 h-32 rounded-br-full bg-purple-200  dark:bg-purple-700 opacity-50"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  {edu.degree}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.period}
                </p>
                <h4 className="text-lg font-medium mb-2 dark:text-gray-200 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <div className="w-full h-full bg-purple-500 rounded-full"></div>
      </div>
    </section>
  )
}
