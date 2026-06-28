import type { Metadata } from "next";
import { Rocket, Crown, Globe } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CareersInteractive from "@/components/CareersInteractive";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join TechxServe. We're always looking for sharp minds who care about quality, move fast, and want to work on problems that actually matter.",
};

const culture = [
  {
    icon: Rocket,
    title: "Move Fast, Build Right",
    desc: "We operate with speed and precision. No endless meetings, no bureaucracy. Just a focused team shipping excellent work.",
    color: "bg-brand-red/8",
    iconColor: "text-brand-red",
  },
  {
    icon: Crown,
    title: "Ownership Mentality",
    desc: "Every person on our team owns their work from start to finish. We hire people who take pride in what they build.",
    color: "bg-brand-red/8",
    iconColor: "text-brand-red",
  },
  {
    icon: Globe,
    title: "Global, Ambitious, Grounded",
    desc: "We work with clients globally and think at a global scale, but we stay focused on doing things the right way.",
    color: "bg-brand-red/8",
    iconColor: "text-brand-red",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden mesh-bg">
        <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
        <div className="absolute top-16 right-[6%] w-72 h-72 bg-brand-red/5 blob rounded-full pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="max-w-3xl ml-0 sm:ml-[85px]">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-5">Join Us</p>
            <h1 className="text-[58px] sm:text-[72px] font-black text-charcoal leading-[0.92] tracking-[-2px] mb-7">
              Build the Future<br /><span className="gradient-text">With Us.</span>
            </h1>
            <p className="text-xl text-mid-gray max-w-xl">
              We&apos;re always looking for sharp minds who care about quality, move fast, and want to work on
              problems that actually matter. If that&apos;s you, let&apos;s talk.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Culture ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="mb-14 ml-0 sm:ml-[85px]">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-2">Culture</p>
            <h2 className="text-4xl font-black text-charcoal tracking-tight">Life at TechxServe</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {culture.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 90}>
                <div className="card-lift card-line bg-off-white rounded-2xl border border-border-gray p-8 flex flex-col gap-5 h-full cursor-default">
                  <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center`}>
                    <c.icon size={22} className={c.iconColor} />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal">{c.title}</h3>
                  <p className="text-mid-gray leading-relaxed text-sm">{c.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section className="py-24 bg-off-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="mb-12 ml-0 sm:ml-[85px]">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-2">Positions</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="text-4xl font-black text-charcoal tracking-tight">Open Roles</h2>
              <p className="text-mid-gray text-sm">Islamabad, PK · Remote options available</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <CareersInteractive />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Open Application ── */}
      <section className="py-20 bg-white border-t border-border-gray">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-red/8 mb-6">
              <Rocket size={28} className="text-brand-red" />
            </div>
            <h2 className="text-3xl font-black text-charcoal tracking-tight mb-3">
              Don&apos;t See Your Role?
            </h2>
            <p className="text-mid-gray mb-8 max-w-md mx-auto">
              We hire for talent, not just titles. Reach out and tell us what you&apos;re great at.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=techxserve@gmail.com&su=CV%20Submission%20%E2%80%94%20TechxServe&body=Hi%20TechxServe%20Team%2C%0A%0APlease%20find%20my%20CV%20attached.%0A%0AName%3A%20%0ARole%20of%20Interest%3A%20%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 bg-brand-red text-white font-bold rounded-xl text-sm shadow-[var(--shadow-red)] hover:bg-brand-red-dark transition-all hover:-translate-y-0.5"
            >
              Send Us Your CV
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
