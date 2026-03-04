import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { BadgeDollarSign, Bot, ChartLine, FolderCode, LayoutTemplate, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "2s", label: "Page load target" },
  { value: "10+", label: "Hours saved weekly" },
  { value: "6", label: "Core services" },
];

const services = [
  { label: "Web Development", icon: <LayoutTemplate className="size-5" /> },
  { label: "Business Automation", icon: <Bot className="size-5" /> },
  { label: "Google & Meta Ads", icon: <BadgeDollarSign className="size-5" /> },
  { label: "Analytics & Tracking", icon: <ChartLine className="size-5" /> },
  { label: "Ecommerce Dev", icon: <FolderCode className="size-5" /> },
  { label: "Shopify Development", icon: <ShoppingBag className="size-5" /> },
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
              Book a Free Strategy Call <ArrowRight className="size-4" />
            </Button>
            <Link href="/services" className="inline-flex gap-2 items-center justify-center text-sm font-semibold text-muted hover:text-ink transition-colors underline underline-offset-4 decoration-border hover:decoration-ink">
              See our services <ArrowRight className="size-4" />
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

      {/* Services teaser section */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted mb-10">What we do</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map(({label, icon }, index) => {
              return (
                <Link key={`service-${index}`} href="/services" className="group inline-flex gap-3 items-center justify-center gap-2 p-4 rounded-xl bg-white border border-border hover:border-primary/40 hover:shadow-sm transition-all text-center">
                  <span className="text-sm font-medium text-ink/80 group-hover:text-primary transition-colors leading-snug">
                    {label}
                  </span>
                  {icon}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why us teaser section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="bg-ink rounded-3xl p-10 sm:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
          
          <div className="relative max-w-xl">

            <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-3">Tech meets creative</p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white leading-tight text-balance">
              Most agencies build pretty sites that don&apos;t sell. We build
              systems that grow your revenue.
            </h2>

          </div>
          
          <Button href="/why-us" variant="outline" size="lg">
            Why The Zar Co.
          </Button>
        </div>
      </section>

    </div>
  );
}
