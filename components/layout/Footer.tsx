import { ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/Logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/why-us", label: "Why Us" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">

              <Image src={Logo} alt="Logo" height={250} />

            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Ecommerce experiences engineered to sell. Tech meets creative,
              strategy meets execution.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Navigation</p>
            <ul className="flex flex-col gap-2">
              {links.map(({ href, label }, index) => {
                return (
                  <li key={`footer-nav-link-${index}`}>
                    <Link href={href} className="text-sm text-white/60 hover:text-white transition-colors">{label}</Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Call to action */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Ready to grow?</p>
            <p className="text-sm text-white/60 mb-4 max-w-xs">Book a free 20-minute strategy call. No pressure, no contracts.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-mid text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
              Book a Free Call <ArrowRight className="size-4" />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  )
}