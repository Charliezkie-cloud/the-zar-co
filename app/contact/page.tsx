import { Check } from "lucide-react";

import ContactForm from "@/components/form/ContactForm";

const trustItems = [
  "No contracts",
  "No hidden fees",
  "20 minutes of your time",
  "Actionable advice guaranteed",
];


export default function ContactPage() {
  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/4 blur-3xl translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
              <span className="w-4 h-px bg-primary" />
              Free Strategy Call
              <span className="w-4 h-px bg-primary" />
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3rem] leading-[1.1] tracking-tight text-ink text-balance">
              Ready to turn your store into a consistent
              <span className="gradient-text"> sales machine?</span>
            </h1>
            <p className="mt-5 text-lg text-muted leading-relaxed max-w-md">
              Book a free strategy call. We&apos;ll review your current setup and
              give you actionable advice — no strings attached.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {trustItems.map((item, index) => (
                <li key={`trust-item-${index}`} className="flex items-center gap-3 text-sm font-medium text-ink/80">
                  <div className="size-6 rounded-full bg-primary-light flex items-center justify-center">
                    <Check className="size-4 text-primary" />
                  </div>
                  {item}
                </li>
              ))}

              <p className="mt-8 text-xs text-muted/60 border-t border-border pt-6 max-w-xs">
                Just honest talk about growing your business. We work with
                brands at any stage — from first store to scaling past 7 figures.
              </p>
            </ul>
          </div>

          {/* Right */}
          <div className="bg-white border border-border rounded-3xl p-8 sm:p-10 shadow-xl shadow-ink/5">
            <h2 className="font-heading font-bold text-xl text-ink mb-6">Book your free call</h2>

            <ContactForm />
          </div>
       
        </div>
      </div>
    </div>
  )
}