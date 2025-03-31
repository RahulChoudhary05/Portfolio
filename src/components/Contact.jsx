import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

const Contact = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [typing, setTyping] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const questions = ["your email?", "your name?", "your message?"];
  const prompts = [
    "Hey there! We're excited to link.",
    "To start, could you give us",
    "Great! Now, what's",
    "Finally, what's",
    "Thanks! Here's what we got:",
  ];

  const validate = () => {
    const errors = {};
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      errors.email = "Invalid email address.";
    }
    if (!formData.name.trim()) {
      errors.name = "Name cannot be empty.";
    }
    if (!formData.message.trim()) {
      errors.message = "Message cannot be empty.";
    }
    return errors;
  };

  const handleKeyDown = async (e) => {
    const newErrors = validate();
    setErrors(newErrors);

    if (e.key === "Enter" && !Object.keys(newErrors).length) {
      if (step < 2) {
        setStep(step + 1);
      } else {
        await handleSubmit(e);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post("https://portfolio-4ra3.onrender.com/api/contact", formData);
        setSuccessMessage("Form submitted successfully!");
        setErrorMessage(null);
        setFormData({ email: "", name: "", message: "" });
      } catch (error) {
        setErrorMessage(error.response?.data?.error || "Something went wrong. Please try again.");
        setSuccessMessage("");
      }
    }
  };

  useEffect(() => {
    setTyping(true);
    const timeout = setTimeout(() => setTyping(false), 1000);
    return () => clearTimeout(timeout);
  }, [step]);

  return (
    <div id="contact" className="w-full max-w-1xl mx-auto p-4">
      <AnimatedSectionHeader title="Contact Us" />
      <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl">
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 bg-[#2D2D2D] border-b border-[#3D3D3D]">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto text-gray-400 text-sm font-mono">rahulchoudhary@gmail.com</div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-gray-100 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-4">
                <span className="text-green-400">➜</span> {prompts[0]}
              </div>

              <div className="mb-4">
                <span className="text-purple-400">?</span> {prompts[step + 1]} {questions[step]}
              </div>

              <div className="flex items-center mb-2">
                <span className="text-blue-400 mr-2">~</span>
                <input
                  id={`input-${step}`}
                  type={step === 0 ? "email" : "text"}
                  value={formData[Object.keys(formData)[step]] || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [Object.keys(formData)[step]]: e.target.value,
                    })
                  }
                  onKeyDown={handleKeyDown}
                  className={`bg-transparent border-none outline-none flex-1 text-gray-100 ${
                    errors[Object.keys(formData)[step]]
                      ? "border-b border-red-500"
                      : "border-none"
                  }`}
                  placeholder={`Enter ${questions[step]}`}
                  disabled={step > 2}
                  aria-describedby={`error-${step}`}
                />
                {typing && <span className="animate-pulse">▋</span>}
              </div>
              {errors[Object.keys(formData)[step]] && (
                <p id={`error-${step}`} className="text-xs text-red-500 ml-6">
                  {errors[Object.keys(formData)[step]]}
                </p>
              )}

              {step === 4 && (
                <div className="mt-6 p-4 bg-[#2D2D2D] rounded-lg">
                  <div className="text-green-400 mb-2">✓ Form submitted successfully!</div>
                  <div className="text-gray-400">
                    <div>Email: {formData.email}</div>
                    <div>Name: {formData.name}</div>
                    <div>Message: {formData.message}</div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
