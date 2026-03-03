import React from "react"

type props = {
  variant?: "primary" | "neutral",
  children: React.ReactNode
};

const variants = {
  primary: "bg-primary-light text-primary",
  neutral: "bg-surface text-muted"
};

export default function Badge({ variant = "primary", children }: props) {
  const classes = [
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide",
    variants[variant]
  ].join(" ");
  
  return <span className={classes}>{children}</span>
}