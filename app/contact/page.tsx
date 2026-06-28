import type { Metadata } from "next";
import { Phone, Mail, Globe, MapPin, Clock, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TechxServe. Whether you have a project brief ready or just an idea, we want to hear from you.",
};

const contactDetails = [
  { icon: Phone,    label: "Phone",           value: "+1 (307) 293-9151",               href: "tel:+13072939151",             color: "bg-brand-red/8", iconColor: "text-brand-red" },
  { icon: Mail,     label: "Email",            value: "info@techxserve.com",             href: "https://mail.google.com/mail/?view=cm&fs=1&to=techxserve@gmail.com", color: "bg-brand-red/8", iconColor: "text-brand-red" },
  { icon: Globe,    label: "Website",          value: "www.techxserve.com",              href: null,                           color: "bg-brand-red/8", iconColor: "text-brand-red" },
  { icon: MapPin,   label: "Headquarters",     value: "30 N Gould St Ste N\nSheridan, WY 82801, USA", href: null,            color: "bg-brand-red/8", iconColor: "text-brand-red" },
  { icon: MapPin,   label: "Development HQ",   value: "Islamabad, Pakistan",             href: null,                           color: "bg-brand-red/8", iconColor: "text-brand-red" },
  { icon: Clock,    label: "Response Time",    value: "Within 1 business day",           href: null,                           color: "bg-brand-red/8", iconColor: "text-brand-red" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden mesh-bg">
        <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-[5%] w-80 h-80 bg-brand-red/5 blob rounded-full pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="max-w-3xl ml-0 sm:ml-[85px]">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-5">
              Get in Touch
            </p>
            <h1 className="text-[58px] sm:text-[72px] font-black text-charcoal leading-[0.92] tracking-[-2px] mb-7">
              Let&apos;s Build the<br />Future of <span className="gradient-text">Digital.</span>
            </h1>
            <p className="text-xl text-mid-gray max-w-xl">
              Whether you have a project brief ready or just an idea, we want to hear from you. Reach
              out and we&apos;ll get back to you within one business day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Contact layout ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left — contact info */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              <div className="sticky top-24 space-y-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-1">
                    Contact Details
                  </p>
                  <h2 className="text-2xl font-black text-charcoal tracking-tight mb-6">
                    We&apos;re here to talk.
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {contactDetails.map((d) =>
                    d.href ? (
                      <a
                        key={d.label}
                        href={d.href}
                        target={d.href.startsWith("http") ? "_blank" : undefined}
                        rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-3.5 p-4 rounded-2xl bg-off-white border border-border-gray hover:border-brand-red/20 hover:shadow-sm transition-all duration-200"
                      >
                        <div className={`w-9 h-9 rounded-xl ${d.color} flex items-center justify-center shrink-0`}>
                          <d.icon size={15} className={d.iconColor} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-mid-gray mb-0.5">
                            {d.label}
                          </p>
                          <span className="text-charcoal text-sm font-medium hover:text-brand-red transition-colors leading-snug block whitespace-pre-line">
                            {d.value}
                          </span>
                        </div>
                      </a>
                    ) : (
                      <div
                        key={d.label}
                        className="flex items-start gap-3.5 p-4 rounded-2xl bg-off-white border border-border-gray"
                      >
                        <div className={`w-9 h-9 rounded-xl ${d.color} flex items-center justify-center shrink-0`}>
                          <d.icon size={15} className={d.iconColor} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-mid-gray mb-0.5">
                            {d.label}
                          </p>
                          <p className="text-charcoal text-sm font-medium leading-snug whitespace-pre-line">{d.value}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Social */}
                <div className="pt-2">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-mid-gray mb-3">Follow Us</p>
                  <div className="flex gap-2">
                    {[
                      { label: "LinkedIn",  href: "https://linkedin.com/company/techxserve",                           icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
                      { label: "Instagram", href: "https://www.instagram.com/techxserve?igsh=ZWNvbnVvZXFjN243", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-9 h-9 rounded-xl border border-border-gray flex items-center justify-center text-mid-gray hover:text-brand-red hover:border-brand-red/40 transition-all"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right — form */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-border-gray p-8 md:p-10 shadow-[var(--shadow-lg)]">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-brand-red flex items-center justify-center shadow-[0_4px_14px_rgba(204,0,0,0.35)]">
                    <MessageSquare size={18} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-charcoal text-lg leading-tight">Send Us a Message</h2>
                    <p className="text-mid-gray text-xs">We&apos;ll reply within one business day</p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  );
}
