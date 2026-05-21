import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Lightbulb, Shield, TrendingUp,
  Target, Clock, Layers, HeartHandshake,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CounterStat from "@/components/CounterStat";
import WorldMap from "@/components/WorldMap";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "TechxServe was founded in 2022 to eliminate technological barriers holding great businesses back.",
};

const values = [
  { icon: Lightbulb, title: "Innovation",  desc: "We build with what's next, not what's safe.",                           color: "bg-brand-red/8",  iconColor: "text-brand-red" },
  { icon: Shield,    title: "Integrity",   desc: "We say what we'll do, and we do what we say.",                           color: "bg-brand-red/8",  iconColor: "text-brand-red" },
  { icon: TrendingUp, title: "Impact",     desc: "We measure our success by the results we create for you.",               color: "bg-brand-red/8",  iconColor: "text-brand-red" },
];

const steps = [
  { n: "01", title: "Deep Discovery",       desc: "We align on your exact vision and goals from day one."             },
  { n: "02", title: "Thoughtful Design",    desc: "User-focused interfaces built on rock-solid architecture."          },
  { n: "03", title: "Agile Development",    desc: "Building your product fast and right with the best modern tech."    },
  { n: "04", title: "Seamless Deployment",  desc: "Rigorous testing to guarantee a smooth, zero-stress launch."        },
  { n: "05", title: "Ongoing Support",      desc: "Continuous maintenance so your tech never falls behind."            },
];

const whyPoints = [
  { icon: Target,          title: "No Black Boxes",               desc: "Regular updates and fast adaptation. No surprises, ever."                                       },
  { icon: Clock,           title: "A Track Record You Can Trust", desc: "Premium results delivered on time, without hidden costs."                                       },
  { icon: Shield,          title: "Ironclad Security",            desc: "Enterprise-grade security baked into every system from day one."                                 },
  { icon: Layers,          title: "Built to Scale",               desc: "Flexible, future-proof architectures that grow effortlessly alongside your business."           },
  { icon: HeartHandshake,  title: "Always On, Always Here",       desc: "Round-the-clock global support, no matter your time zone."                                      },
];

const aboutStats = [
  { value: "2022", label: "Year Founded"    },
  { value: "25+",  label: "Team Members"    },
  { value: "98%",  label: "Satisfaction"    },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden mesh-bg">
        <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
        <div className="absolute top-16 right-[6%] w-80 h-80 bg-brand-red/5 blob rounded-full pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedSection className="ml-0 sm:ml-[85px]">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-5">
                Our Story
              </p>
              <h1 className="text-[58px] sm:text-[72px] font-black text-charcoal leading-[0.92] tracking-[-2px] mb-7">
                Built to Build<br />the <span className="gradient-text">Future.</span>
              </h1>
              <p className="text-xl text-mid-gray leading-relaxed max-w-xl">
                We&apos;re a team of engineers, designers, and problem-solvers on a mission to eliminate the
                technological barriers holding great businesses back.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-red via-brand-red/30 to-transparent rounded-full" />
                <blockquote className="pl-8 text-4xl md:text-5xl font-black text-charcoal leading-tight">
                  &ldquo;A lot can happen in just a few short years.&rdquo;
                </blockquote>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <div className="space-y-5 text-charcoal/80 leading-relaxed text-[15px]">
                <p>
                  TechxServe was founded in 2022 because we saw too many great businesses being held back
                  by clunky, outdated technology. We wanted to change that.
                </p>
                <p>
                  Our approach is hands-on and direct: we sit down with you, understand exactly what&apos;s
                  slowing you down or where you want to go, and then we build the custom tools to get you
                  there. We don&apos;t do one-size-fits-all.
                </p>
                <p>
                  From smart automation to massive enterprise platforms, everything we build is designed to
                  be fast, secure, and scalable. That&apos;s how we&apos;ve grown to serve a diverse
                  global clientele with a 98% satisfaction rate.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Key Stats ── */}
      <section className="py-16 bg-off-white border-y border-border-gray">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border-gray">
            {aboutStats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 90} className="px-12 py-4 text-center min-w-[200px]">
                <CounterStat value={s.value} label={s.label} labelRed />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="mb-14 ml-0 sm:ml-[85px]">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-2">Purpose</p>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal tracking-tight">Vision &amp; Mission</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                heading: "Our Vision",
                body: "To redefine what's possible with technology on a global scale, building with brilliant innovation, operating with uncompromising integrity, and measuring success entirely by the impact we deliver on your bottom line.",
                accent: "from-brand-red/15 to-transparent",
              },
              {
                num: "02",
                heading: "Our Mission",
                body: "To equip companies around the world with smart, scalable digital tools that actually drive growth and open up new opportunities. We don't aim to meet expectations. We build to exceed them, every single time.",
                accent: "from-brand-red/8 to-transparent",
              },
            ].map((card, i) => (
              <AnimatedSection key={card.heading} delay={i * 120}>
                <div className="relative overflow-hidden bg-off-white rounded-3xl border border-border-gray p-10 h-full">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.accent}`} />
                  <span className="text-7xl font-black text-brand-red leading-none block mb-4 select-none">{card.num}</span>
                  <h3 className="text-xl font-bold text-charcoal mb-3">{card.heading}</h3>
                  <p className="text-mid-gray leading-relaxed">{card.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Presence Map ── */}
      <section className="py-24 bg-off-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="mb-12 ml-0 sm:ml-[85px]">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-2">
              Global Presence
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal tracking-tight mb-4">
              We Build Everywhere
            </h2>
            <p className="text-mid-gray text-lg max-w-xl">
              Headquartered in Sheridan, WY with a development hub in Islamabad, serving clients globally.
            </p>
          </AnimatedSection>
          <AnimatedSection className="ml-0 sm:ml-[85px]">
            <WorldMap />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="mb-14 ml-0 sm:ml-[85px]">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-2">Values</p>
            <h2 className="text-4xl font-black text-charcoal tracking-tight">What Drives Us</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 100}>
                <div className="card-lift card-line bg-off-white rounded-2xl border border-border-gray p-8 flex flex-col gap-5 h-full cursor-default">
                  <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center`}>
                    <v.icon size={22} className={v.iconColor} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">{v.title}</h3>
                    <p className="text-mid-gray leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="py-24 bg-off-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="mb-16 ml-0 sm:ml-[85px]">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-2">Process</p>
            <h2 className="text-4xl font-black text-charcoal tracking-tight">How We Work</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((step, i) => (
              <AnimatedSection key={step.n} delay={i * 80}>
                <div className="relative bg-white rounded-2xl border border-border-gray p-6 h-full flex flex-col gap-3 hover:border-brand-red/30 hover:shadow-[var(--shadow-md)] transition-all duration-300">
                  <span className="text-[42px] font-black text-brand-red leading-none">{step.n}</span>
                  <h3 className="font-bold text-charcoal text-sm">{step.title}</h3>
                  <p className="text-mid-gray text-xs leading-relaxed flex-1">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="mb-14 ml-0 sm:ml-[85px]">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-2">Why Us</p>
            <h2 className="text-4xl font-black text-charcoal tracking-tight">Why Choose TechxServe</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPoints.slice(0, 3).map((pt, i) => (
              <AnimatedSection key={pt.title} delay={i * 70}>
                <div className="card-lift card-line flex gap-4 p-6 bg-off-white rounded-2xl border border-border-gray h-full">
                  <div className="w-9 h-9 rounded-xl bg-brand-red/8 flex items-center justify-center shrink-0 mt-0.5">
                    <pt.icon size={16} className="text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal text-sm mb-1.5">{pt.title}</h3>
                    <p className="text-mid-gray text-xs leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-5">
            {whyPoints.slice(3).map((pt, i) => (
              <AnimatedSection key={pt.title} delay={(i + 3) * 70} className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)]">
                <div className="card-lift card-line flex gap-4 p-6 bg-off-white rounded-2xl border border-border-gray h-full">
                  <div className="w-9 h-9 rounded-xl bg-brand-red/8 flex items-center justify-center shrink-0 mt-0.5">
                    <pt.icon size={16} className="text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal text-sm mb-1.5">{pt.title}</h3>
                    <p className="text-mid-gray text-xs leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
