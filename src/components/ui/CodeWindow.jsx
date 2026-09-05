import { cn } from "./cn"

/**
 * Editor / terminal window chrome frame.
 *
 * variant="editor"   → filename tab + soft editor surface
 * variant="terminal" → single title in the title bar, darker surface
 *
 * Props:
 *  - filename   text shown in the tab / title bar
 *  - lang       small language pill on the right of the tab
 *  - actions    optional node rendered on the far right of the title bar
 *  - dots       show traffic-light dots (default true)
 *  - bodyClassName  className for the inner body wrapper
 */
export default function CodeWindow({
  children,
  variant = "editor",
  filename,
  lang,
  actions,
  dots = true,
  className,
  bodyClassName,
  ...props
}) {
  const isTerminal = variant === "terminal"

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 shadow-glow",
        "bg-[hsl(var(--code-bg))]",
        className
      )}
      {...props}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        {dots && (
          <span className="window-dots shrink-0">
            <span className="d-r" />
            <span className="d-y" />
            <span className="d-g" />
          </span>
        )}

        {isTerminal ? (
          <span className="mx-auto truncate font-mono text-xs text-muted-foreground">
            {filename || "bash"}
          </span>
        ) : (
          filename && (
            <span className="ml-1 inline-flex items-center gap-2 rounded-t-md rounded-b-sm bg-white/[0.05] px-3 py-1 font-mono text-xs text-foreground/90">
              <span className="h-2 w-2 rounded-full bg-cyan/80" />
              {filename}
              {lang && <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{lang}</span>}
            </span>
          )
        )}

        {actions && <span className="ml-auto flex items-center gap-2">{actions}</span>}
      </div>

      {/* Body */}
      <div className={cn(isTerminal ? "font-mono" : "", bodyClassName)}>{children}</div>
    </div>
  )
}
