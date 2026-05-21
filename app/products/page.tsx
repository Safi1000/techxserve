import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ProductsGrid from "@/components/ProductsGrid";

export const metadata: Metadata = {
  title: "Products & Work",
  description:
    "Case studies: Bespoke CRM Software, ISPR enterprise dashboard, Xephra gaming platform, BHTD logistics app, Police Foundation portals.",
};

export default function ProductsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden mesh-bg">
        <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
        <div className="absolute bottom-10 right-[5%] w-64 h-64 bg-brand-red/5 blob rounded-full pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="max-w-3xl ml-0 sm:ml-[85px]">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-5">Our Work</p>
            <h1 className="text-[58px] sm:text-[72px] font-black text-charcoal leading-[0.92] tracking-[-2px] mb-7">
              Work That Speaks<br />for <span className="gradient-text">Itself.</span>
            </h1>
            <p className="text-xl text-mid-gray max-w-xl">
              Every project we take on is a problem we&apos;re determined to solve. Here&apos;s a look at some of
              what we&apos;ve built.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Project Grid ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection>
            <ProductsGrid />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
