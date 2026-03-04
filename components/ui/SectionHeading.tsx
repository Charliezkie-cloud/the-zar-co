type props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

const alignClasses = {
  left: "text-left items-start",
  center: "text-center items-center"
};

export default function SectionHeading({ eyebrow, title, subtitle, align = "center", className = "" }: props) {
  const classes = [alignClasses[align]].join(" ");

  return (
    <div className={`flex flex-col gap-3 ${classes} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
          <span className="w-4 h-px bg-primary" />
          {eyebrow}
          <span className="w-4 h-px bg-primary" />
        </span>
      )}

      <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-ink text-balance">{title}</h2>

      {subtitle && (
        <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl text-balance">{subtitle}</p>
      )}
    </div>
  )
}