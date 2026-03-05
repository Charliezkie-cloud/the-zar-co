import { SyntheticEvent } from "react"

type props = {
  className?: string
  rows?: number
  placeholder?: string
  required?: boolean
  value?: string
  onChange?: (event: SyntheticEvent) => void
}

export default function Textarea({ className = "", rows = 5, placeholder, required = false, value, onChange }: props) {
  const classes = [
    "w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm font-body text-ink placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none",
    className
  ].join(" ");

  return <textarea rows={rows} className={classes} placeholder={placeholder} required={required} value={value} onChange={onChange} />
}