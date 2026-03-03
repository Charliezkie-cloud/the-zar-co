import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "2s", label: "Page load target" },
  { value: "10+", label: "Hours saved weekly" },
  { value: "6", label: "Core services" },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      
      {/* Hero section */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="max-w-4xl">

          <Badge>Ecommerce Agency</Badge>
        
          <h1 className="mt-6 font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight text-ink text-balance">
            We build ecommerce experiences
            <span className="gradient-text"> that actually sell.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl text-balance">
            Stop losing sales to slow websites and clunky processes. The Zar
            Co. combines technical expertise with creative strategy to help
            ecommerce stores convert visitors into customers — on autopilot.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button href="/contact" size="lg">
              Book a Free Strategy Call <MoveRight className="size-4" />
            </Button>
            <Link href="/services" className="inline-flex gap-2 items-center justify-center text-sm font-semibold text-muted hover:text-ink transition-colors underline underline-offset-4 decoration-border hover:decoration-ink">
              See our services <MoveRight className="size-4" />
            </Link>
          </div>
          <p className="mt-3 text-xs text-muted/70">No pressure. Just a 20-minute chat about your goals.</p>
        </div>

        {/* Stats */}
        <div className="mt-20 flex flex-wrap gap-10 sm:gap-16">
          {stats.map(({ value, label }, index) => {
            return (
              <div key={`hero-stats-${index}`} className="flex flex-col gap-1">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-primary">{value}</span>
                <span className="text-sm text-muted">{label}</span>
              </div>
            )
          })}
        </div>
      
      </section>

      
    </div>
  );
}
