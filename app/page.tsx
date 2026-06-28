import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Code2, Cloud, Brain, Smartphone, Zap,
  CheckCircle, Layers, Shield, TrendingUp, Users,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingPaths from "@/components/FloatingPaths";
import CounterStat from "@/components/CounterStat";
import LogoCarousel from "@/components/LogoCarousel";
import QuickForm from "@/components/QuickForm";

export const metadata: Metadata = {
  title: "TechxServe: Tomorrow's Reality, Today.",
  description:
    "Fast, secure, and scalable digital products, custom-crafted for businesses that refuse to be held back by outdated technology.",
};

const services = [
  { icon: Code2,    title: "Custom Software",        desc: "High-performance tools like our Bespoke CRM, built for your exact workflows and scale.",   href: "/services#custom-software" },
  { icon: Cloud,    title: "Cloud & Transformation", desc: "Migrate, modernize, and manage your stack in the cloud, built for scale.",               href: "/services#cloud"           },
  { icon: Brain,    title: "AI & Data Analytics",    desc: "Turn raw data into sharp decisions with AI-powered pipelines and dashboards.",           href: "/services#ai-data"         },
  { icon: Zap,      title: "Automation & SaaS",      desc: "Intelligent systems that eliminate repetitive work and free your team to focus on growth.", href: "/services#automation"    },
  { icon: Smartphone, title: "Mobile & Web",         desc: "Pixel-perfect apps and sites that load fast and perform on every device.",               href: "/services#mobile-web"      },
];

const stats = [
  { value: "25+", label: "Global Clients",      icon: Users   },
  { value: "98%", label: "Satisfaction Rate",   icon: TrendingUp },
  { value: "3+",  label: "Years Delivering",    icon: Shield  },
];

const differentiators = [
  { icon: Shield,     title: "Enterprise Security",    desc: "Security baked in from day one, not bolted on." },
  { icon: Layers,     title: "End-to-End Delivery",    desc: "From idea to production. We own the whole journey." },
  { icon: TrendingUp, title: "Built to Scale",          desc: "Architectures that grow with you, no rewrites needed." },
  { icon: CheckCircle, title: "Transparent Process",   desc: "Weekly updates, no black boxes, no surprises ever." },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════
          HERO — split layout, light bg
      ══════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
        {/* Floating path lines */}
        <FloatingPaths />
        {/* Soft fade at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/60 pointer-events-none z-[1]" />

        {/* Hero content area — pointer-events-none on wrappers so boxes receive hover */}
        <div className="relative flex-1 flex flex-col justify-center">

        <div className="relative z-[2] max-w-[1280px] mx-auto px-6 pt-28 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

            {/* ── Left: Text ── */}
            <div className="ml-0 sm:ml-[85px]">
              <AnimatedSection delay={0}>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-brand-red/15 badge-shimmer mb-8">
                  <span className="red-dot" />
                  <span className="text-brand-red text-[11px] font-semibold uppercase tracking-widest">
                    Trusted by 25+ global clients
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={80}>
                <h1 className="text-[38px] sm:text-[56px] md:text-[68px] lg:text-[76px] font-black text-charcoal leading-[0.95] tracking-[-2px] mb-6">
                  Tomorrow&apos;s<br />
                  <span className="gradient-text">Reality,</span><br />
                  Today.
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={160}>
                <p className="text-lg text-mid-gray leading-relaxed max-w-xl mb-8">
                  We build fast, secure, and scalable digital products, custom-crafted for businesses
                  that refuse to be held back by outdated technology.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={240}>
                <div className="flex flex-wrap gap-3 mb-12">
                  <Link
                    href="/contact"
                    className="btn-glow inline-flex items-center gap-2 px-6 py-3.5 bg-brand-red text-white font-bold rounded-xl text-sm shadow-[var(--shadow-red)] hover:bg-brand-red-dark hover:shadow-[0_12px_40px_rgba(204,0,0,0.4)] transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Start a Project <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-charcoal font-semibold rounded-xl text-sm border border-border-gray hover:border-charcoal/30 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                  >
                    See Our Work
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={320}>
                <div className="flex flex-wrap gap-5">
                  {["Free consultation", "No lock-in contracts", "Global team, local focus"].map((pt) => (
                    <span key={pt} className="flex items-center gap-1.5 text-xs text-mid-gray">
                      <CheckCircle size={13} className="text-brand-red" /> {pt}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right column placeholder — robot is absolutely positioned outside the grid */}
            <div className="hidden lg:block" aria-hidden />
          </div>
        </div>
        </div>

        {/* ── Trusted By carousel (in hero) ── */}
        <div className="relative z-[2] w-full border-t border-border-gray/60 mt-6 pt-8 pb-10 overflow-hidden bg-white/80 backdrop-blur-sm">
          <div className="max-w-[1280px] mx-auto px-6 mb-5 flex items-center gap-4">
            <div className="ml-0 sm:ml-[85px] w-full flex items-center gap-4">

            <div className="h-px flex-1 bg-border-gray" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal whitespace-nowrap">
              Trusted By
            </p>
            <div className="h-px flex-1 bg-border-gray" />
            </div>
          </div>

          <div className="ml-0 sm:ml-[85px]">
            <LogoCarousel />
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════
          SERVICES — bento grid
      ══════════════════════════════════ */}
      <section className="py-24 bg-off-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="ml-0 sm:ml-[85px]">

          <AnimatedSection className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-2">
                  What We Build
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-charcoal tracking-tight leading-tight">
                  Five disciplines.<br />One focused team.
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:gap-3 transition-all shrink-0"
              >
                All Services <ArrowRight size={15} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-5">
            {services.slice(0, 3).map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 70} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)]">
                <Link href={s.href} className="group card-line card-lift block bg-white rounded-2xl border border-border-gray p-7 h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-brand-red/8 flex items-center justify-center group-hover:bg-brand-red/14 transition-colors">
                      <s.icon size={21} className="text-brand-red" />
                    </div>
                    <span className="text-[10px] font-bold text-border-gray group-hover:text-brand-red/40 transition-colors">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-charcoal text-base mb-2 group-hover:text-brand-red transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-mid-gray text-sm leading-relaxed">{s.desc}</p>
                  <div className="flex items-center gap-1 mt-5 text-xs font-semibold text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={12} />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
            {services.slice(3).map((s, i) => (
              <AnimatedSection key={s.title} delay={(i + 3) * 70} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)]">
                <Link href={s.href} className="group card-line card-lift block bg-white rounded-2xl border border-border-gray p-7 h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-brand-red/8 flex items-center justify-center group-hover:bg-brand-red/14 transition-colors">
                      <s.icon size={21} className="text-brand-red" />
                    </div>
                    <span className="text-[10px] font-bold text-border-gray group-hover:text-brand-red/40 transition-colors">
                      0{i + 4}
                    </span>
                  </div>
                  <h3 className="font-bold text-charcoal text-base mb-2 group-hover:text-brand-red transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-mid-gray text-sm leading-relaxed">{s.desc}</p>
                  <div className="flex items-center gap-1 mt-5 text-xs font-semibold text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={12} />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
      </section>

      {/* ══════════════════════════════════
          STATS — dark strip
      ══════════════════════════════════ */}
      <section className="py-20 bg-[#0e0e0e] relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-[0.06] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-brand-red/60 to-transparent" />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="ml-0 sm:ml-[85px]">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-[#222]">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 90} className="flex flex-col items-start text-left px-4 md:px-12">
                <div className="w-10 h-10 rounded-xl bg-brand-red/12 flex items-center justify-center mb-4">
                  <s.icon size={18} className="text-brand-red" />
                </div>
                <CounterStat value={s.value} label={s.label} dark />
              </AnimatedSection>
            ))}
            <AnimatedSection delay={270} className="flex flex-col items-start text-left px-4 md:px-12">
               <div className="w-10 h-10 rounded-xl bg-brand-red/12 flex items-center justify-center mb-4">
                  <ArrowRight size={18} className="text-brand-red" />
                </div>
               <p className="text-white/40 text-[10px] font-semibold uppercase tracking-widest mb-1">Impact</p>
               <p className="text-white text-xl font-bold">Driving Real Growth</p>
            </AnimatedSection>
            </div>
        </div>

        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-brand-red/40 to-transparent" />
      </section>

      {/* ══════════════════════════════════
          DIFFERENTIATORS + FORM
      ══════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="ml-0 sm:ml-[85px]">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <AnimatedSection direction="right">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-3">
                Why TechxServe
              </p>
              <h2 className="text-4xl font-black text-charcoal tracking-tight mb-6">
                Built Different.<br />Delivered Better.
              </h2>
              <p className="text-mid-gray leading-relaxed mb-10 text-lg">
                Whether you&apos;re starting from scratch or scaling an existing system, we sit down, understand
                exactly what you need, and build it. No fluff, no surprises.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {differentiators.map((d, i) => (
                  <div
                    key={d.title}
                    className="flex items-start gap-3.5 p-4 rounded-xl border border-border-gray hover:border-brand-red/25 hover:shadow-sm transition-all duration-200"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-red/8 flex items-center justify-center shrink-0">
                      <d.icon size={15} className="text-brand-red" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm">{d.title}</p>
                      <p className="text-mid-gray text-xs mt-0.5 leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right — Quick Form */}
            <AnimatedSection direction="left">
              <div className="relative">
                {/* Decorative corner */}
                <div className="absolute -top-3 -right-3 w-24 h-24 rounded-full bg-brand-red/5 blur-2xl pointer-events-none" />
                <div className="relative bg-white rounded-3xl border border-border-gray p-8 shadow-[var(--shadow-lg)]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center shadow-[0_4px_12px_rgba(204,0,0,0.35)]">
                      <ArrowRight size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal text-base leading-tight">Quick Enquiry</h3>
                      <p className="text-mid-gray text-xs">We reply within 1 business day</p>
                    </div>
                  </div>
                  <QuickForm />
                </div>
              </div>
            </AnimatedSection>
          </div>
          </div>
        </div>

      </section>
    </>
  );
}
