import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Cloud, Brain, Smartphone, Zap, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Five core practice areas: Custom Software, Cloud, AI & Data, Mobile & Web, and Automation.",
};

const services = [
  {
    id: "custom-software",
    icon: Code2,
    num: "01",
    title: "Custom Software Development",
    tagline: "Built for you. Not anyone else.",
    desc: "We don't sell templates or off-the-shelf tools. Every product we build starts with a deep understanding of how your business actually operates, then we engineer a solution from the ground up, tailored to your workflows, your users, and your growth plan.",
    included: [
      "Requirements discovery and scoping",
      "System architecture and technical planning",
      "Full-stack development (frontend + backend)",
      "API design and third-party integrations",
      "QA, testing, and iterative delivery",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    num: "02",
    title: "Cloud & Digital Transformation",
    tagline: "Modernize. Scale. Dominate.",
    desc: "Legacy systems and on-premise infrastructure are a liability. We migrate, modernize, and manage your technology stack in the cloud, building scalable, resilient setups that give your business the foundation it needs to grow without limits.",
    included: [
      "Cloud migration strategy and execution",
      "Infrastructure setup (AWS, Azure, GCP)",
      "CI/CD pipeline configuration",
      "Security hardening and compliance",
      "Ongoing cloud management and optimization",
    ],
  },
  {
    id: "ai-data",
    icon: Brain,
    num: "03",
    title: "AI and Data Analytics",
    tagline: "Turn data into your edge.",
    desc: "Your data is one of your most valuable assets, and if you know how to use it, it becomes your edge. We build AI-powered tools and data pipelines that transform raw numbers into real insight, helping you make sharper decisions and stay ahead of the curve.",
    included: [
      "Data pipeline architecture and ETL",
      "Machine learning model development",
      "Predictive analytics and reporting dashboards",
      "Natural language processing integrations",
      "AI feature integration into existing platforms",
    ],
  },
  {
    id: "automation",
    icon: Zap,
    num: "04",
    title: "Automation & SaaS Solutions",
    tagline: "Work smarter. Not harder.",
    desc: "Time spent on repetitive tasks is time not spent growing. We design and build intelligent automation systems and SaaS platforms that remove friction from your operations, so your team can focus on the work that actually moves the needle.",
    included: [
      "Business process automation (RPA, workflow tools)",
      "SaaS product architecture and development",
      "Third-party integration and API orchestration",
      "Subscription and billing system integration",
      "Admin dashboards and reporting modules",
    ],
  },
  {
    id: "mobile-web",
    icon: Smartphone,
    num: "05",
    title: "Mobile & Web Engineering",
    tagline: "Your first impression, perfected.",
    desc: "Your digital presence is your first impression. We build high-performance, pixel-perfect web and mobile applications that work flawlessly on every device: fast to load, intuitive to use, and built to represent your brand at its best.",
    included: [
      "React, Next.js, and Vue.js web development",
      "iOS and Android mobile app development",
      "Cross-platform development (React Native / Flutter)",
      "UI/UX design and prototyping",
      "Performance optimization and accessibility compliance",
    ],
  },
];

const techStack = [
  { category: "Frontend",      items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend",       items: ["Node.js", "Python", "Django", "FastAPI", "PHP / Laravel"] },
  { category: "Mobile",        items: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { category: "Cloud & DevOps",items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions"] },
  { category: "AI & Data",     items: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "PostgreSQL", "MongoDB"] },
  { category: "Other",         items: ["Stripe", "Twilio", "Firebase", "Redis", "GraphQL"] },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden mesh-bg">
        <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
        <div className="absolute top-20 right-[5%] w-72 h-72 bg-brand-red/5 blob rounded-full pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="max-w-3xl ml-0 sm:ml-[85px]">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-5">What We Do</p>
            <h1 className="text-[58px] sm:text-[72px] font-black text-charcoal leading-[0.92] tracking-[-2px] mb-7">
              Everything You Need<br />to <span className="gradient-text">Build, Scale,</span><br />and Dominate.
            </h1>
            <p className="text-xl text-mid-gray max-w-lg">
              Five core practice areas. One focused team. Outcomes that move the needle.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Service Detail Blocks ── */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          {services.map((svc, i) => {
            const flip = i % 2 !== 0;
            return (
              <AnimatedSection key={svc.id}>
                <div
                  id={svc.id}
                  className={`py-20 border-b border-border-gray last:border-0 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
                    flip ? "lg:[&>*:first-child]:order-last" : ""
                  }`}
                >
                  {/* Text */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[11px] font-black text-brand-red/30 tracking-widest">{svc.num}</span>
                      <div className="w-9 h-9 rounded-xl bg-brand-red/8 flex items-center justify-center">
                        <svc.icon size={17} className="text-brand-red" />
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-mid-gray mb-2 italic">{svc.tagline}</p>
                    <h2 className="text-3xl font-black text-charcoal tracking-tight mb-5">{svc.title}</h2>
                    <p className="text-mid-gray leading-relaxed mb-7">{svc.desc}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-brand-red text-sm font-bold hover:gap-3 transition-all"
                    >
                      Start This Service <ArrowRight size={15} />
                    </Link>
                  </div>

                  {/* Included card */}
                  <div className="relative overflow-hidden bg-off-white rounded-3xl border border-border-gray p-8">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red/40 to-transparent pointer-events-none" />
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-mid-gray mb-5 relative">
                      What&apos;s Included
                    </p>
                    <ul className="space-y-3.5 relative">
                      {svc.included.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle size={15} className="text-brand-red mt-0.5 shrink-0" />
                          <span className="text-charcoal text-sm leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-24 bg-off-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="mb-14 ml-0 sm:ml-[85px]">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-2">Stack</p>
            <h2 className="text-4xl font-black text-charcoal tracking-tight">Technologies We Work With</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((cat, i) => (
              <AnimatedSection key={cat.category} delay={i * 70}>
                <div className="bg-white rounded-2xl border border-border-gray p-7 h-full">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-red mb-5">
                    {cat.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag px-3 py-1.5 text-xs font-medium text-charcoal bg-off-white rounded-lg border border-border-gray cursor-default select-none"
                      >
                        {tech}
                      </span>
                    ))}
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
