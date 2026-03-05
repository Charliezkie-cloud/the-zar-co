import Link from "next/link";

type props = {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

const variants = {
  primary: "bg-primary text-white hover:bg-primary-mid shadow-sm hover:shadow-md hover:shadow-primary/20 active:scale-[0.98]",
  secondary: "bg-gray-200 text-primary hover:bg-gray-300 shadow-sm hover:shadow-md hover:shadow-gray-300/20 active:scale-[0.98]",
  outline: "border border-primary text-primary hover:bg-primary-light active:scale-[0.98]",
  ghost: "text-primary hover:bg-primary-light active:scale-[0.98]"
};

export default function Button({ type = "button", variant = "primary", size = "md", href, fullWidth, disabled, children, onClick}: props) {
  const classes = [
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150 font-heading",
    sizes[size],
    variants[variant],
    fullWidth ? "w-full" : "",
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
  ].join(" ");

  if (href) return <Link href={href} className={classes}>{children}</Link>
  
  return <button type={type} className={classes} disabled={disabled} onClick={onClick}>{children}</button>
}