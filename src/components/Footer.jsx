import { GitlabIcon as GitHub, Linkedin, Mail, Twitter, Package, ArrowUp } from "lucide-react"

const socialLinks = [
  { icon: GitHub, href: "https://github.com/RahulChoudhary05/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rahulchoudhary210505/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/krahul_21/", label: "Twitter" },
  { icon: Package, href: "https://www.npmjs.com/package/@rahulchoudhary05/durabolt", label: "npm" },
  { icon: Mail, href: "mailto:rahulchoudhary.sk@gmail.com", label: "Email" },
]

const quickLinks = [
  { title: "Work", href: "#projects" },
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Stack", href: "#skills" },
  { title: "Services", href: "#services" },
  { title: "Contact", href: "#contact" },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="https://res.cloudinary.com/dnlrwuxxs/image/upload/f_auto,q_auto:best,dpr_2.0,c_fill,w_180,h_180,g_face,e_sharpen:40/v1754414883/RahulChoudharyPortfolio/Main_PIC_g3hsym.jpg"
                alt="Rahul Choudhary"
                className="h-10 w-10 rounded-md object-cover grayscale border border-border"
              />
              <span className="font-display text-lg font-semibold text-foreground">Rahul Choudhary</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Full Stack &amp; AI Developer building production-grade platforms and Agentic AI / LLM systems.
              Open to freelance projects and full-time roles.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Navigate</h4>
            <ul className="grid grid-cols-2 gap-2.5">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <a href={item.href} className="link-underline text-sm text-muted-foreground">{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Connect</h4>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-btn">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-muted-foreground text-center">
            © {new Date().getFullYear()} Rahul Choudhary · Built with React &amp; Tailwind
          </p>
          <button onClick={scrollTop} className="icon-btn" aria-label="Back to top">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
