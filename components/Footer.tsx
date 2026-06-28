import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Custom Software", href: "/services#custom-software" },
  { label: "Cloud & Transformation", href: "/services#cloud" },
  { label: "AI & Data Analytics", href: "/services#ai-data" },
  { label: "Automation & SaaS", href: "/services#automation" },
  { label: "Mobile & Web", href: "/services#mobile-web" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-white border-t border-[#1e1e1e]">
      <div className="max-w-[1280px] mx-auto px-6 py-10">
        <div className="ml-0 sm:ml-[85px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">

          {/* Brand & Contact */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="TechxServe" className="w-7 h-7 object-contain" />
              <span className="font-bold text-[15px] tracking-tight">Tech<span className="text-brand-red">x</span>Serve</span>
            </Link>
            <p className="text-[#a1a1aa] text-xs italic mb-5 max-w-[240px]">Tomorrow&apos;s Reality, Today. We build technology that works, so you can focus on building your business.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <a href="tel:+13072939151" className="flex items-center gap-2 text-[#a1a1aa] text-xs hover:text-white transition-colors">
                <Phone size={12} className="text-brand-red" />+1 (307) 293-9151
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=techxserve@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#a1a1aa] text-xs hover:text-white transition-colors">
                <Mail size={12} className="text-brand-red" />info@techxserve.com
              </a>
              <span className="flex items-center gap-2 text-[#a1a1aa] text-xs">
                <MapPin size={12} className="text-brand-red" />WY, USA · PK
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#d4d4d8] mb-4">Company</p>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#a1a1aa] text-xs hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#d4d4d8] mb-4">Services</p>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#a1a1aa] text-xs hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#d4d4d8] mb-4">Connect</p>
            <div className="flex gap-2">
              {[
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/company/techxserve",
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/techxserve?igsh=ZWNvbnVvZXFjN243",
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-[#222] flex items-center justify-center text-[#a1a1aa] hover:text-white hover:border-brand-red/50 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#181818]">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="ml-0 sm:ml-[85px] w-full flex items-center justify-between">
            <p className="text-[#71717a] text-[11px]">© 2025 TechxServe Enterprise LLC. All rights reserved.</p>
            <div className="flex items-center gap-1.5">
              <span className="red-dot w-1.5 h-1.5" />
              <span className="text-[#71717a] text-[11px]">Live & Building</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
