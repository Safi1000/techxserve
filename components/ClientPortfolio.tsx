"use client";

import {
  Database, Shield, Gamepad2, Truck, Building2,
  LayoutDashboard, GraduationCap, BookOpen, Target, Briefcase,
} from "lucide-react";
import PortfolioSelector, { type SelectorItem } from "./PortfolioSelector";

// ─── Our Works ────────────────────────────────────────────────────────────────

const worksItems: SelectorItem[] = [
  {
    id: "sixthledger",
    title: "SixthLedger",
    subtitle: "UK Accounting · ACCA · MTD",
    tagline: "Your accounts handled. Your time back.",
    overview:
      "A dual-product UK accounting platform built alongside ACCA-qualified accountants. B2C: fixed-fee remote accounting for sole traders and limited companies. B2B: white-label back-office embedded in accounting practices.",
    features: [
      "Remote accounting, UK sole traders & Ltd",
      "B2B white-label for accounting practices",
      "MTD (Making Tax Digital) compliant",
      "ICO registered & UK GDPR compliant",
      "ACCA-led quality assurance",
      "Fixed-fee, no hidden charges",
    ],
    gradient: "linear-gradient(135deg, #060e00 0%, #0e1e00 55%, #040800 100%)",
    iconBg: "rgba(60,110,20,0.5)",
    icon: <BookOpen size={18} className="text-white" />,
  },
  {
    id: "ispr",
    title: "ISPR",
    subtitle: "Government · Enterprise",
    tagline: "80 years of records. Instant retrieval.",
    overview:
      "A high-performance internal platform for ingesting, organizing, and searching a deeply complex historical records database spanning nearly 80 years — fast, intuitive for non-technical staff, and secure at every layer.",
    features: [
      "Enterprise dashboard with advanced search",
      "Hierarchical navigation across 80-year archive",
      "Role-based access & granular permissions",
      "Full audit logging & activity trail",
      "Query layer optimized for large relational data",
    ],
    gradient: "linear-gradient(135deg, #000d1f 0%, #001a3d 55%, #000610 100%)",
    iconBg: "rgba(30,80,160,0.5)",
    icon: <Shield size={18} className="text-white" />,
  },
  {
    id: "xephra",
    title: "Xephra",
    subtitle: "Gaming · Technology",
    tagline: "AI-powered matchmaking. Real-time competition.",
    overview:
      "Intelligent player matching and ranking in real time, with a premium subscription experience and a dynamic UI that adapts to each player's profile, match history, and skill level.",
    features: [
      "Custom AI ranking & matching engine",
      "Integrated payments & subscriptions",
      "Real-time leaderboards with live sync",
      "Personalized player dashboard",
      "High-concurrency, low-latency architecture",
    ],
    gradient: "linear-gradient(135deg, #0e0018 0%, #200040 55%, #080010 100%)",
    iconBg: "rgba(120,40,200,0.45)",
    icon: <Gamepad2 size={18} className="text-white" />,
  },
  {
    id: "bhtd",
    title: "BHTD",
    subtitle: "Logistics · Mobile",
    tagline: "Last-mile logistics. Connected end-to-end.",
    overview:
      "A mobile-first logistics platform coordinating last-mile delivery across Bahrain — connecting dispatchers, riders, and customers in a single real-time system with live GPS and route optimization.",
    features: [
      "Cross-platform rider app with live GPS",
      "Dispatcher panel for order management",
      "Customer interface for real-time updates",
      "SMS notifications at every delivery stage",
      "Route optimization for multi-stop deliveries",
    ],
    gradient: "linear-gradient(135deg, #001810 0%, #003020 55%, #000c08 100%)",
    iconBg: "rgba(20,140,60,0.45)",
    icon: <Truck size={18} className="text-white" />,
  },
  {
    id: "police-foundation",
    title: "Police Foundation",
    subtitle: "Government · AI · Real Estate",
    tagline: "Two portals. One cohesive platform.",
    overview:
      "Two separate but cohesive web portals: an AI agricultural advisory platform with natural-language input and a real estate management portal for property listing and transaction support.",
    features: [
      "AI agricultural advisory, NLP input",
      "Personalized crop & resource recommendations",
      "Agricultural knowledge base",
      "Real estate listing & inquiry management",
      "Admin dashboard with full analytics",
    ],
    gradient: "linear-gradient(135deg, #001818 0%, #003333 55%, #000c0c 100%)",
    iconBg: "rgba(20,120,120,0.45)",
    icon: <Building2 size={18} className="text-white" />,
  },
];

// ─── Our Products ─────────────────────────────────────────────────────────────

const productsItems: SelectorItem[] = [
  {
    id: "txs-platform",
    title: "Nexus",
    subtitle: "Admin · Client · Employee Portals",
    tagline: "One platform. Every team. Every workflow.",
    overview:
      "A complete multi-portal business OS with Admin Panel, Client Portal, and Employee Portal in one unified codebase. PKR-first with multi-currency, a ⌘K command palette, AI assistant, and a live design-system gallery.",
    features: [
      "Admin panel with ⌘K command palette",
      "Client portal for account & project visibility",
      "Employee self-service HR & payroll views",
      "Token-driven design system, light/dark mode",
      "Multi-currency with live FX (PKR default)",
      "Pakistan country pack (CNIC, NTN, EOBI)",
    ],
    cta: { label: "Request a Demo", href: "/contact" },
    gradient: "linear-gradient(135deg, #1c0000 0%, #3d0000 55%, #0f0000 100%)",
    iconBg: "rgba(204,0,0,0.4)",
    icon: <LayoutDashboard size={18} className="text-white" />,
  },
  {
    id: "workforce-crm",
    title: "Workforce CRM",
    subtitle: "HR · Payroll · Operations",
    tagline: "From hire to payslip — every operation in one place.",
    overview:
      "A multi-role operations CRM for workforce-intensive industries: security, logistics, facilities. Handles the full employee lifecycle, client contracts, financial accounting, and regulatory compliance with granular RBAC.",
    features: [
      "Employee management & shift rosters",
      "Payroll engine, reliever & permanent staff",
      "Full financial accounting & P&L",
      "Client & contract management",
      "Incident reporting & compliance docs",
      "Period close, audit log & statutory reports",
    ],
    cta: { label: "Request a Demo", href: "/contact" },
    gradient: "linear-gradient(135deg, #080d18 0%, #111d33 55%, #050810 100%)",
    iconBg: "rgba(40,80,160,0.45)",
    icon: <Briefcase size={18} className="text-white" />,
  },
  {
    id: "examia",
    title: "Examia",
    subtitle: "Exams · Cohorts · Analytics",
    tagline: "Exam management that runs itself.",
    overview:
      "A production-grade, mobile-first exam and cohort portal for academies and institutions. Custom 'Almanac' identity — warm paper tones, live countdown runner, Supabase backend with RLS so answer keys never reach students.",
    features: [
      "Timed test runner with draft autosave",
      "Admin: test creation, scheduling, grading",
      "Reusable question bank, drag-drop reorder",
      "Per-question grading & bulk MCQ release",
      "Score trend charts & topic mastery bands",
      "Supabase RLS — answer keys server-only",
    ],
    cta: { label: "Request a Demo", href: "/contact" },
    gradient: "linear-gradient(135deg, #001214 0%, #002428 55%, #000a0c 100%)",
    iconBg: "rgba(20,110,120,0.5)",
    icon: <GraduationCap size={18} className="text-white" />,
  },
  {
    id: "bespoke-crm",
    title: "Bespoke CRM",
    subtitle: "Enterprise · CRM · Fintech",
    tagline: "Enterprise systems built to your exact spec.",
    overview:
      "Our flagship CRM engine adapts to any industry — security, logistics, healthcare, retail. Built alongside ACCA-qualified accountants, it carries ledger-grade accuracy into every transaction, reconciliation, and report. Ships in days, not quarters.",
    features: [
      "Unified operations dashboard",
      "Attendance-linked payroll",
      "Financial accounting & ledger",
      "Automated P&L & cashflow reports",
      "Role-based access control",
      "Statutory reporting & tax support",
    ],
    screenshots: [
      "https://placehold.co/1600x900/1c0000/ff6666?text=Dashboard+Overview",
      "https://placehold.co/1600x900/3d0000/ff6666?text=Payroll+%26+HR",
      "https://placehold.co/1600x900/2a0000/ff6666?text=Financial+Reports",
      "https://placehold.co/1600x900/0f0000/ff6666?text=Compliance+Calendar",
    ],
    cta: { label: "Request a Demo", href: "/contact" },
    gradient: "linear-gradient(135deg, #1c0000 0%, #3d0000 55%, #0f0000 100%)",
    iconBg: "rgba(204,0,0,0.4)",
    icon: <Database size={18} className="text-white" />,
  },
  {
    id: "leadintel",
    title: "LeadIntel",
    subtitle: "B2B Leads · Enrichment · SaaS",
    tagline: "Verified owner-level leads for US trades.",
    overview:
      "A multi-tenant B2B SaaS that discovers, enriches, and delivers verified owner-level lead data for US local-service trades. 5,000-row virtualized tables, live enrichment progress, and a full Phase 2/3 roadmap already scaffolded.",
    features: [
      "Enrichment run launcher with live progress",
      "Virtualized 5k-row table, filter & sort",
      "4-state confidence: Verified → Missing",
      "Multi-tenant RBAC with billing layer",
      "Admin panel: run monitoring & cost tracking",
      "JSON & CSV export with fill-rate reports",
    ],
    cta: { label: "Request Access", href: "/contact" },
    gradient: "linear-gradient(135deg, #00080e 0%, #001428 55%, #000508 100%)",
    iconBg: "rgba(20,80,160,0.5)",
    icon: <Target size={18} className="text-white" />,
  },
];

// ─── Page sections ─────────────────────────────────────────────────────────────

export default function ClientPortfolio() {
  return (
    <>
      {/* ── Our Products ── */}
      <section className="pt-4 pb-24 bg-white relative overflow-hidden">
        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="ml-0 sm:ml-[85px]">
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-3">
                What We Sell
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-charcoal tracking-tight leading-tight mb-4">
                Our Products
              </h2>
              <p className="text-mid-gray text-lg max-w-xl">
                Software products built and owned by TechxServe — available off-the-shelf or customized for your business.
              </p>
            </div>
            <PortfolioSelector items={productsItems} />
          </div>
        </div>
      </section>

      {/* ── Our Works ── */}
      <section className="py-24 bg-off-white relative overflow-hidden">
        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="ml-0 sm:ml-[85px]">
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-red mb-3">
                Client Work
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-charcoal tracking-tight leading-tight mb-4">
                Our Works
              </h2>
              <p className="text-mid-gray text-lg max-w-xl">
                Every project we take on is a problem we&apos;re determined to solve. Here&apos;s what we&apos;ve shipped for clients.
              </p>
            </div>
            <PortfolioSelector items={worksItems} />
          </div>
        </div>
      </section>
    </>
  );
}
