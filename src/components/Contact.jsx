import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import axios from "axios"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const Contact = () => {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  })
  const [submittedData, setSubmittedData] = useState(null) // New state for submitted data
  const [errors, setErrors] = useState({})
  const [typing, setTyping] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const questions = ["your email?", "your name?", "your message?"]
  const prompts = [
    "Hey there! We're excited to link.",
    "To start, could you give us",
    "Great! Now, what's",
    "Finally, what's",
    "Thanks! Here's what we got:",
  ]

  const validate = (field) => {
    const newErrors = { ...errors }

    if (field === "email" || field === "all") {
      if (!formData.email) {
        newErrors.email = "Email is required."
      } else if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
        newErrors.email = "Invalid email address."
      } else {
        delete newErrors.email
      }
    }

    if (field === "name" || field === "all") {
      if (!formData.name.trim()) {
        newErrors.name = "Name cannot be empty."
      } else {
        delete newErrors.name
      }
    }

    if (field === "message" || field === "all") {
      if (!formData.message.trim()) {
        newErrors.message = "Message cannot be empty."
      } else {
        delete newErrors.message
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault()

      const currentField = Object.keys(formData)[step]
      const isValid = validate(currentField)

      if (isValid) {
        if (step < 2) {
          setStep(step + 1)
          setTyping(true)
          setTimeout(() => {
            document.getElementById(`input-${step + 1}`)?.focus()
          }, 100)
        } else {
          await handleSubmit(e)
        }
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate("all")) {
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const response = await axios.post("https://portfolio-4ra3.onrender.com/api/contact", formData)
      setSuccessMessage(response.data.message || "Message sent successfully!")
      setSubmittedData(formData) // Store submitted data
      setStep(3)

      setTimeout(() => {
        setFormData({ email: "", name: "", message: "" })
      }, 3000)
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    setTyping(true)
    const timeout = setTimeout(() => setTyping(false), 1000)
    return () => clearTimeout(timeout)
  }, [step])

  useEffect(() => {
    // Only focus on the input when the step changes, not on initial render
    if (step > 0) {
      const input = document.getElementById(` input-${step}`)
      if (input) {
        setTimeout(() => {
          input.focus()
        }, 500)
      }
    }
  }, [step])

  const getInputProps = (fieldName, index) => {
    return {
      id: `input-${index}`,
      name: fieldName,
      value: formData[fieldName] || "",
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      className: `bg-transparent border-none outline-none flex-1 text-gray-100 ${
        errors[fieldName] ? "border-b border-red-500" : "border-none"
      }`,
      placeholder: `Enter ${questions[index]}`,
      disabled: step !== index || isSubmitting,
      "aria-describedby": errors[fieldName] ? `error-${index}` : undefined,
      autoComplete: fieldName === "email" ? "email" : fieldName === "name" ? "name" : "off",
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSectionHeader title="Get In Touch" />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl"
          >
            <div className="flex items-center px-4 py-3 bg-[#2D2D2D] border-b border-[#3D3D3D]">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto text-gray-400 text-sm font-mono">contact@rahulchoudhary.com</div>
            </div>

            <div className="p-6 font-mono text-gray-100 min-h-[250px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div>
                    <span className="text-green-400">➜</span> {prompts[0]}
                  </div>

                  {step <= 2 && (
                    <div>
                      <span className="text-purple-400">?</span> {prompts[step + 1]} {questions[step]}
                    </div>
                  )}

                  {step === 0 && (
                    <div className="flex items-center">
                      <span className="text-blue-400 mr-2">~</span>
                      <input type="email" {...getInputProps("email", 0)} />
                      {typing && step === 0 && <span className="animate-pulse">▋</span>}
                    </div>
                  )}

                  {errors.email && step === 0 && (
                    <p id="error-0" className="text-xs text-red-500 ml-6">
                      {errors.email}
                    </p>
                  )}

                  {step >= 1 && (
                    <div>
                      <span className="text-blue-400 mr-2">~</span> Email: {submittedData?.email || formData.email}
                    </div>
                  )}

                  {step === 1 && (
                    <div className="flex items-center">
                      <span className="text-blue-400 mr-2">~</span>
                      <input type="text" {...getInputProps("name", 1)} />
                      {typing && step === 1 && <span className="animate-pulse">▋</span>}
                    </div>
                  )}

                  {errors.name && step === 1 && (
                    <p id="error-1" className="text-xs text-red-500 ml-6">
                      {errors.name}
                    </p>
                  )}

                  {step >= 2 && (
                    <div>
                      <span className="text-blue-400 mr-2">~</span> Name: {submittedData?.name || formData.name}
                    </div>
                  )}

                  {step === 2 && (
                    <div className="flex items-center">
 <span className="text-blue-400 mr-2">~</span>
                      <input type="text" {...getInputProps("message", 2)} />
                      {typing && step === 2 && <span className="animate-pulse">▋</span>}
                    </div>
                  )}

                  {errors.message && step === 2 && (
                    <p id="error-2" className="text-xs text-red-500 ml-6">
                      {errors.message}
                    </p>
                  )}

                  {step === 3 && (
                    <>
                      <div>
                        <span className="text-blue-400 mr-2">~</span> Message: {submittedData?.message || formData.message}
                      </div>
                      <div className="mt-6 p-4 bg-[#2D2D2D] rounded-lg">
                        <div className="text-green-400 mb-2">✓ {successMessage || "Form submitted successfully!"}</div>
                        <div className="text-gray-400">
                          <div>Email: {submittedData?.email}</div>
                          <div>Name: {submittedData?.name}</div>
                          <div>Message: {submittedData?.message}</div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-6 left-6 right-6 p-3 bg-red-900/50 border border-red-500 rounded text-red-200 text-sm"
                >
                  {errorMessage}
                </motion.div>
              )}

              {step === 2 && !isSubmitting && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6"
                >
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 flex items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Submit Message"
                    )}
                  </button>
                </motion.div>
              )}

              {step < 3 && (
                <div className="absolute bottom-6 right-6 text-gray-500 text-sm">
                  Press <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Enter</kbd> to continue
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact