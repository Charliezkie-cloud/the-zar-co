"use client"

import { ArrowRight } from "lucide-react";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      {/* Full name */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-ink/70 uppercase tracking-wide">Full Name</label>
        <Input type="text" placeholder="Jane Smith" required />
      </div>

      {/* Email address */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-ink/70 uppercase tracking-wide">Email Address</label>
        <Input type="email" placeholder="example@email.com" required />
      </div>

      {/* Your store URL */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-ink/70 uppercase tracking-wide">Your Store URL</label>
        <Input type="url" placeholder="https://yourstore.com" required />
      </div>
      
      {/* What's your biggest challenge right now? */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-ink/70 uppercase tracking-wide">What&apos;s your biggest challenge right now?</label>
        <Textarea placeholder="e.g. Low conversion rate, poor ROAS on ads, manual processes taking up too much time..." required></Textarea>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Book my Free Call <ArrowRight className="size-4" /></Button>
      </div>
    </form>
  )
}