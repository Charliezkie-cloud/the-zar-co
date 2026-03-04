import SectionHeading from "@/components/ui/SectionHeading";
import { BadgeCheck, Globe, Store, TrendingUp } from "lucide-react";

const differentiators = [
  {
    icon: <Store className="size-6" />,
    title: "Ecommerce-first approach",
    description:
      "We live in your world. Every decision — from site architecture to ad creative — is made with one question in mind: will this convert?",
  },
  {
    icon: <BadgeCheck className="size-6" />,
    title: "Transparent, package-based pricing",
    description:
      "No hidden surprises. You'll know exactly what you're getting and what it costs before we start. No vague retainers, no scope creep.",
  },
  {
    icon: <Globe className="size-6" />,
    title: "International experience",
    description:
      "We work with brands anywhere. Our systems, tools, and strategy are built for global ecommerce — wherever your customers are.",
  },
  {
    icon: <TrendingUp className="size-6" />,
    title: "We measure success by your sales",
    description:
      "Not by deliverables, launch dates, or vanity metrics. If your revenue isn't growing, we're not done. That's the standard we hold ourselves to.",
  },
];

export default function WhyUsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <SectionHeading eyebrow="Why The Zar Co."
                        title="Tech meets creative. Strategy meets execution."
                        subtitle="Most agencies either build pretty websites that don't sell, or run ads with no understanding of your tech stack. We bridge that gap." />
      </section>

      {/* Body paragraph */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted leading-relaxed">
            We&apos;re ecommerce specialists who understand that sales don&apos;t happen
            by accident. They happen when your site loads fast, your ads hit
            the right audience, and your backend runs smoothly — all working
            together. Whether you&apos;re a startup launching your first store or
            an established brand ready to scale, we build systems that grow
            your revenue and free up your time.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {differentiators.map(({ icon, title, description }, index) => {
              return (
                <div key={`differentiators-item-${index}`} className="flex gap-5 group">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-ink mb-2">{title}</h3>
                    <p className="text-muted leading-relaxed text-sm">{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}