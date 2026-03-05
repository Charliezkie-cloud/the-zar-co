import { SyntheticEvent } from "react";

type props = {
  type?: "text" | "file" | "email" | "password" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "color" | "range" | "checkbox" | "radio" | "hidden" | "submit" | "reset" | "button"
  className?: string
  placeholder?: string
  required?: boolean
  value?: string | number
  onChange?: (event: SyntheticEvent) => void
};

export default function Input({ type = "text", className = "", required = false, placeholder, value, onChange }: props) {
  const classes = [
    "w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm font-body text-ink placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all",
    className
  ].join(" ");

  return <input type={type} className={classes} placeholder={placeholder} value={value} onChange={onChange} required={required} />
}