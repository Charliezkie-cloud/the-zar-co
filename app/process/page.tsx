import { Check } from "lucide-react";

import ProcessStep from "@/components/ui/ProcessStep";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const steps = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "We hop on a 20-minute call to understand your goals, current setup, and where you're getting stuck. No sales pitch — just listening.",
  },
  {
    step: 2,
    title: "Strategy & Proposal",
    description:
      "We map out a customized package that addresses your biggest gaps — whether that's a new site, automation, ads, or a mix. You'll see exactly what we'll do and what it costs.",
  },
  {
    step: 3,
    title: "Build & Implement",
    description:
      "We get to work. You'll have a dedicated point of contact, regular updates, and zero tech jargon overload. We handle the heavy lifting so you don't have to.",
  },
  {
    step: 4,
    title: "Launch & Optimize",
    description:
      "We go live, monitor performance, and continue optimizing. Your success doesn't stop at launch — we're here to help you scale.",
  },
];

const aside = [
  {
    title: "No contracts",
    desc: "We earn your trust with results, not lock-in clauses.",
  },
  {
    title: "No hidden fees",
    desc: "Every cost is mapped out before we start.",
  },
  {
    title: "Dedicated contact",
    desc: "One point of contact who knows your business.",
  },
  {
    title: "Regular updates",
    desc: "You're never left in the dark about progress.",
  },
];

export default function ProcessPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <SectionHeading eyebrow="How We Work"
                        title="From confusion to clarity."
                        subtitle="A simple, transparent 4-step process built around your goals — not ours." />
      </section>

      {/* Steps and aside */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Steps */}
          <div>
            {steps.map(({ step, title, description }, index) => {
              return (
                <ProcessStep key={`process-step-item-${index}`}
                              step={step}
                              title={title}
                              description={description}
                              isLast={index === steps.length - 1} />
              )
            })}
          </div>

          {/* Sticky aside */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-ink text-white rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/25 blur-2xl" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-4">What to expect</p>

                <ul className="flex flex-col gap-5">
                  {aside.map(({ title, desc }, index) => {
                    return (
                      <li key={`aside-item-${index}`} className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5"><Check className="size-3" /></div>
                        <div>
                          <p className="font-semibold text-sm text-white">{title}</p>
                          <p className="text-xs text-white/50 mt-0.5">{desc}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                
                <div className="mt-8 pt-8 border-t border-white/10">
                  <Button href="/contact" size="md">Start with a Free Call</Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}