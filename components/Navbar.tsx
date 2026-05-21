"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Careers",  href: "/careers" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname                   = usePathname();
  const menuRef                    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_24px_rgba(0,0,0,0.08)]"
          : "bg-white/80 backdrop-blur-sm border-b border-border-gray/40"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 z-10">
          <img src="/logo.png" alt="TechxServe" className="w-8 h-8 object-contain" />
          <span className="font-bold text-[17px] text-charcoal tracking-tight">
            Tech<span className="text-brand-red font-black">x</span>Serve
          </span>
        </Link>

        {/* Desktop Nav — hidden until lg */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "text-brand-red bg-brand-red/6"
                  : "text-charcoal/80 hover:text-charcoal hover:bg-charcoal/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3 z-10">
          <Link
            href="/contact"
            className="hidden lg:inline-flex btn-glow items-center gap-1.5 px-4 py-2 bg-brand-red text-white text-sm font-semibold rounded-lg shadow-[0_2px_12px_rgba(204,0,0,0.35)] hover:bg-brand-red-dark hover:shadow-[0_4px_20px_rgba(204,0,0,0.45)] transition-all duration-200 hover:-translate-y-0.5"
          >
            Free Consultation
          </Link>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center bg-charcoal/5 hover:bg-charcoal/10 text-charcoal transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown — compact, no scroll needed */}
      <div
        ref={menuRef}
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border-gray/40 bg-white/95 backdrop-blur-md ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "bg-brand-red/8 text-brand-red"
                  : "text-charcoal hover:bg-off-white"
              }`}
            >
              {link.label}
              <ChevronRight size={14} className="opacity-40" />
            </Link>
          ))}
        </nav>
        <div className="px-4 pb-4">
          <Link
            href="/contact"
            className="flex items-center justify-center w-full py-3 bg-brand-red text-white text-sm font-bold rounded-xl shadow-[0_4px_16px_rgba(204,0,0,0.3)] hover:bg-brand-red-dark transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
