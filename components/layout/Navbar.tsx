"use client"

import { usePathname } from "next/navigation";
import { useState } from "react";

import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/Logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/why-us", label: "Why Us" },
  { href: "/process", label: "Process" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="Logo" height={250} />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }, index) => {
            const isActive = href === pathname;
            
            return (
              <li key={`desktop-nav-link-${index}`}>
                <Link href={href} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${isActive ? "text-primary bg-primary-light" : "text-white hover:text-ink hover:bg-surface"}`}>
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Call to action */}
        <div className="hidden md:block">
          <Button href="/contact" variant="secondary">Book a Free Call</Button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors" onClick={() => setMenuOpen(prev => (!prev))}>
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-gray-200 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 bg-gray-200 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 bg-gray-200 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>

      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }, index) => {
            const isActive = href === pathname;

            return (
              <Link key={`mobile-nav-link-${index}`} href={href} className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? "text-primary bg-primary-light" : "text-muted hover:text-ink hover:bg-surface"}`}>
                {label}
              </Link>
            )
          })}

          <div className="mt-3 pt-3 border-t border-border">
            <Button href="/contact" fullWidth onClick={() => setMenuOpen(false)}>Book a Free Call</Button>
          </div>
        </div>
      )}
    </header>
  )
}