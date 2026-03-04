import { Check } from "lucide-react";

type props = {
  icon: React.ReactNode;
  title: string;
  problem: string;
  benefits: string[];
};

export default function ServiceCard({ icon, title, problem, benefits }: props) {
  return (
    <article className="group relative bg-white border border-border rounded-2xl p-7 flex flex-col gap-5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden">

      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      {/* Icon */}
      <div className="relative w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">{icon}</div>

      {/* Content */}
      <div className="relative flex flex-col gap-3">
        <h3 className="font-heading font-bold text-xl text-ink">{title}</h3>
        <p className="text-sm text-muted leading-relaxed">{problem}</p>
      </div>

      {/* Benefits */}
      <ul className="relative flex flex-col gap-2 mt-auto">
        {benefits.map((item, index) => {
          return (
            <li key={`service-card-benefits-${index}`} className="flex items-start gap-2.5 text-sm text-ink/80">
              <Check className="size-4 text-primary" />
              {item}
            </li>
          )
        })}
      </ul>
      
    </article>
  )
}