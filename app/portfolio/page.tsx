import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ClientPortfolio from "@/components/ClientPortfolio";

export const metadata: Metadata = {
  title: "Portfolio — TechxServe",
  description:
    "Our products and client work: Bespoke CRM, ISPR, Xephra, BHTD, Police Foundation, and more.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden mesh-bg">
        <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
        <div className="absolute bottom-10 right-[5%] w-64 h-64 bg-brand-red/5 blob rounded-full pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="max-w-3xl ml-0 sm:ml-[85px]">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-5">
              Portfolio
            </p>
            <h1 className="text-[58px] sm:text-[72px] font-black text-charcoal leading-[0.92] tracking-[-2px] mb-7">
              What We&apos;ve<br />
              <span className="gradient-text">Built.</span>
            </h1>
            <p className="text-xl text-mid-gray max-w-xl">
              Our own products and the solutions we&apos;ve shipped for clients around the world.
              Every project, a problem we were determined to solve.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Interactive sections (client component) ── */}
      <ClientPortfolio />
    </>
  );
}
