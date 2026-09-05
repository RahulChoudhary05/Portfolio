import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import axios from "axios"
import { Mail, Linkedin, Github, Twitter, ArrowUpRight, Check, Loader2, Send, CalendarClock, Phone } from "lucide-react"
import { Section, SectionTitle, Reveal, Panel } from "./ui/Bento"
import Tilt from "./ui/Tilt"

const API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:4000"
    : "https://portfolio-4ra3.onrender.com")

const tiles = [
  { icon: Github, label: "GitHub", value: "RahulChoudhary05", href: "https://github.com/RahulChoudhary05/", chip: "chip-violet" },
  { icon: Linkedin, label: "LinkedIn", value: "in/rahulchoudhary210505", href: "https://www.linkedin.com/in/rahulchoudhary210505/", chip: "chip-blue" },
  { icon: Twitter, label: "Twitter / X", value: "@krahul_21", href: "https://twitter.com/krahul_21/", chip: "chip-sky" },
  { icon: Mail, label: "Email", value: "rahulchoudhary.sk@gmail.com", href: "mailto:rahulchoudhary.sk@gmail.com", chip: "chip-rose" },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")
  const [serverError, setServerError] = useState("")

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = "Name is required."
    if (!form.email.trim()) e.email = "Email is required."
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email."
    if (!form.message.trim()) e.message = "Message can't be empty."
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onChange = (k) => (ev) => {
    setForm((f) => ({ ...f, [k]: ev.target.value }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }))
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus("loading")
    setServerError("")
    try {
      await axios.post(
        `${API_BASE_URL}/api/contact`,
        { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() },
        { headers: { "Content-Type": "application/json" }, timeout: 45000 }
      )
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      setStatus("error")
      setServerError(
        err.code === "ECONNABORTED"
          ? "Request timed out. Please try again."
          : err.response?.data?.error || "Something went wrong. Please try again."
      )
    }
  }

  const inputCls = (k) =>
    `w-full rounded-md border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-faint outline-none transition-colors focus:border-cobalt ${
      errors[k] ? "border-destructive" : "border-border"
    }`

  return (
    <Section id="contact">
      <SectionTitle
        eyebrow="Say hello"
        title="Get In Touch"
        kicker="Have a project in mind, a freelance brief, or a role to discuss? I usually reply within a day."
      />

      <div className="grid grid-cols-12 gap-4">
        {/* CTA */}
        <Reveal className="col-span-12 lg:col-span-7">
          <Panel className="h-full p-6 md:p-8 flex flex-col justify-between min-h-[240px]">
            <div>
              <span className="eyebrow inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cobalt" /> Let's collaborate
              </span>
              <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.1]">
                Let's build something great together.
              </h3>
              <p className="mt-4 text-muted-foreground max-w-md">
                Open to freelance projects, contract work, and full-time roles. Name the endpoint, the command, or the
                idea — I'll help you ship it.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="mailto:rahulchoudhary.sk@gmail.com" className="btn btn-primary">
                <CalendarClock className="w-4 h-4" /> Book a call
              </a>
              <a href="tel:+918628032512" className="btn btn-ghost">
                <Phone className="w-4 h-4" /> +91 86280 32512
              </a>
              <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
                </span>
                Available now
              </span>
            </div>
          </Panel>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.06} className="col-span-12 lg:col-span-5">
          <Panel className="h-full p-7 md:p-8">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full py-10"
                >
                  <div className="grid place-items-center h-14 w-14 rounded-full border border-cobalt/40 mb-5 text-cobalt">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">Message sent</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                    Thanks for reaching out — I'll get back to you soon.
                  </p>
                  <button onClick={() => setStatus("idle")} className="mt-6 link-underline text-sm font-medium text-cobalt">
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={onSubmit} className="space-y-4">
                  <span className="eyebrow">Message me</span>
                  <div>
                    <input type="text" value={form.name} onChange={onChange("name")} placeholder="Your name" disabled={status === "loading"} className={inputCls("name")} />
                    {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <input type="email" value={form.email} onChange={onChange("email")} placeholder="you@example.com" disabled={status === "loading"} className={inputCls("email")} />
                    {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div>
                    <textarea value={form.message} onChange={onChange("message")} placeholder="Tell me about your project…" rows={4} disabled={status === "loading"} className={`${inputCls("message")} resize-none`} />
                    {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
                  </div>
                  {status === "error" && serverError && (
                    <p className="rounded-md border border-destructive/40 bg-destructive/5 px-3 py-2 text-xs text-destructive">{serverError}</p>
                  )}
                  <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full justify-center">
                    {status === "loading" ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>) : (<>Send message <Send className="w-4 h-4" /></>)}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Panel>
        </Reveal>

        {/* Social tiles */}
        {tiles.map(({ icon: Icon, label, value, href, chip }, i) => (
          <Reveal key={label} delay={i * 0.05} className="col-span-6 lg:col-span-3">
            <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
              <Tilt intensity={6} className="h-full">
                <Panel className="group h-full p-5 flex flex-col justify-between min-h-[120px]">
                  <div className="flex items-start justify-between">
                    <span className={`chip ${chip} h-10 w-10`} style={{ transform: "translateZ(20px)" }}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
                    <p className="mt-1 text-sm font-medium text-foreground truncate">{value}</p>
                  </div>
                </Panel>
              </Tilt>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
