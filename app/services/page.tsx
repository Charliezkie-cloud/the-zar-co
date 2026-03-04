import { ChartColumnBig, Settings, ShoppingCart, SquareCode, Store, Zap } from "lucide-react";

import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    title: "Web Development",
    problem:
      "Your site might look good, but if it loads slow, confuses visitors, or isn't mobile-ready — you're leaving money on the table.",
    benefits: [
      "Sites that load in under 2 seconds",
      "Mobile-first, flawless on any device",
      "Built to scale as your business grows",
      "Clean code, zero bloat",
    ],
    icon: <SquareCode className="size-6" />
  },
  {
    title: "Business Automation",
    problem:
      "You're wasting hours copying data between spreadsheets, sending manual follow-ups, or juggling tools that don't talk to each other.",
    benefits: [
      "Reclaim 10+ hours per week",
      "Reduce human errors in order processing",
      "Seamless integration: store, email, CRM, ads",
      "Workflows that run while you sleep",
    ],
    icon: <Settings className="size-6" />
  },
  {
    title: "Online Advertising",
    problem:
      "You're spending on ads but the return isn't there. Or you're not running ads while competitors capture your audience.",
    benefits: [
      "Campaigns built around ROAS, not just clicks",
      "Audience targeting for buyers, not browsers",
      "Creative + ad copy that stops the scroll",
      "Constant optimization to protect budget",
    ],
    icon: <Zap className="size-6" />
  },
  {
    title: "Analytics & Tracking",
    problem:
      "You're flying blind. You don't know which ads work, where people drop off, or why some products sell better.",
    benefits: [
      "Clear visibility into your customer journey",
      "Know exactly which channel delivers the best ROI",
      "Data-backed decisions, not gut feelings",
      "Track conversions accurately to scale what works",
    ],
    icon: <ChartColumnBig className="size-6" />
  },
  {
    title: "Ecommerce Development",
    problem:
      "Your store has high traffic but low conversions, or you're launching a new brand and need it done right the first time.",
    benefits: [
      "Product pages designed to drive add-to-cart",
      "Streamlined checkout — every click counts",
      "Inventory, payment, and shipping handled",
      "Built for upsells and repeat purchases",
    ],
    icon: <ShoppingCart className="size-6" />
  },
  {
    title: "Shopify Development",
    problem:
      "Your Shopify store feels generic, limited by templates, or lacks the features your business needs to stand out.",
    benefits: [
      "Custom Shopify stores that don't look like everyone else",
      "App integrations: subscriptions, bundles, memberships",
      "Speed optimization — pass Core Web Vitals",
      "Expert setup so you can manage confidently",
    ],
    icon: <Store className="size-6" />
  },
];

export default function Services() {
  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <SectionHeading eyebrow="What we offer"
                        title="Everything your ecommerce store needs to grow."
                        subtitle="Six core capabilities, all engineered to work together. Whether you need one service or all of them, we build solutions that move the needle." />
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <ServiceCard key={`service-card-${index}`} {...item} />
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          
          <h2 className="font-heading font-bold text-2xl text-ink">Not sure which services you need?</h2>
          <p className="text-muted mt-1">Book a free call — we&apos;ll figure it out together.</p>

          <Button href="/contact" size="lg">Book a Free Strategy Call</Button>

        </div>
      </section>

    </div>
  )
}