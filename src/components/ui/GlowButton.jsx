import { motion } from "framer-motion"
import { cn } from "./cn"

/**
 * Reusable glowing button. Renders <a> when `href` provided, else <button>.
 * variant: "primary" (filled gradient) | "ghost" (glass outline)
 */
export default function GlowButton({
  children,
  href,
  variant = "primary",
  className,
  icon: Icon,
  iconRight: IconRight,
  ...props
}) {
  const Comp = href ? motion.a : motion.button

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm md:text-base font-semibold overflow-hidden transition-colors"

  const variants = {
    primary:
      "text-white shadow-[0_10px_40px_-10px_hsl(var(--violet)/0.7)]",
    ghost:
      "glass gradient-border text-foreground hover:text-primary",
  }

  return (
    <Comp
      href={href}
      className={cn(base, variants[variant], className)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {variant === "primary" && (
        <>
          <span className="absolute inset-0 bg-gradient-to-r from-violet via-fuchsia to-cyan bg-[length:200%_auto] animate-text-gradient" />
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />
        </>
      )}
      {Icon && <Icon className="relative z-10 w-5 h-5" />}
      <span className="relative z-10">{children}</span>
      {IconRight && (
        <IconRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Comp>
  )
}
