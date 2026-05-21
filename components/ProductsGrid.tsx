"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ExternalLink, CheckCircle } from "lucide-react";

interface Project {
  id: string;
  name: string;
  initials: string;
  tag: string;
  oneLine: string;
  overview: string;
  built: string[];
  photos: string[];
  liveLink: string | null;
}

const projects: Project[] = [
  {
    id: "bespoke-crm",
    name: "Bespoke CRM",
    initials: "BC",
    tag: "Enterprise · CRM · Fintech",
    oneLine: "Built for how you actually work. You handle the business. We handle the tech and the numbers.",
    overview: "We build bespoke CRM software for businesses that have outgrown spreadsheets and off-the-shelf SaaS. Our flagship engine adapts to any industry—from security and logistics to healthcare and retail. Built alongside SixthLedger (ACCA-affiliate accountants), the system carries accountant-level accuracy into every transaction, reconciliation, and report. Deployment ships in days, not quarters.",
    built: [
      "Unified Operations Dashboard with live compliance alerts",
      "Role-Based Access Control & Granular Permissions",
      "Attendance-Linked Payroll & Full HR Management",
      "Financial Accounting (Receivables, Payables, Bank Ledgers)",
      "Automated P&L, Cashflow & Client-Wise Profitability Reports",
      "Inventory & Asset Logistics with serial number tracking",
      "Privacy-First Ledger Sharing with SixthLedger accounting team",
      "Automated Statutory Reporting & Tax Filing Support",
    ],
    photos: ["Unified Dashboard", "Payroll Interface", "P&L Statement", "Inventory Logistics", "Compliance Calendar"],
    liveLink: null,
  },
  {
    id: "ispr",
    name: "ISPR",
    initials: "IS",
    tag: "Government · Enterprise",
    oneLine: "A multi-layered enterprise dashboard managing a historical database spanning nearly 80 years.",
    overview: "ISPR required a high-performance internal platform capable of ingesting, organizing, and searching a deeply complex historical records database spanning nearly 80 years. The system needed to be fast, intuitive for non-technical staff, and secure at every layer.",
    built: [
      "Custom enterprise dashboard with advanced filtering and search",
      "Hierarchical navigation across 80 years of records",
      "Role-based access control and granular permissions",
      "Audit logging and full activity trail",
      "Lightning-fast query layer optimized for large-scale relational data",
    ],
    photos: ["Dashboard Overview", "Data Table View", "Search & Filter"],
    liveLink: null,
  },
  {
    id: "xephra",
    name: "Xephra",
    initials: "XP",
    tag: "Gaming · Technology",
    oneLine: "A next-gen gaming platform with an AI-driven ranking system and fully adaptive interface.",
    overview: "Xephra needed a platform that could intelligently match and rank players in real time while providing a premium subscription experience and a dynamic UI that adapted to each player's profile and history.",
    built: [
      "Custom AI ranking engine with real-time player matching",
      "Integrated payment and subscription management",
      "Real-time leaderboards with live data sync",
      "Personalized player dashboard and profile system",
      "High-concurrency architecture engineered for minimal latency",
    ],
    photos: ["Platform Homepage", "Player Dashboard", "Ranking Interface"],
    liveLink: null,
  },
  {
    id: "bhtd",
    name: "BHTD",
    initials: "BH",
    tag: "Logistics · Mobile",
    oneLine: "An end-to-end mobile delivery platform in Bahrain connecting riders, dispatchers, and customers.",
    overview: "BHTD needed a mobile-first logistics platform to coordinate last-mile delivery operations across Bahrain, connecting dispatchers, riders, and customers in a single, real-time system.",
    built: [
      "Cross-platform rider app with live GPS tracking",
      "Dispatcher web panel for order management and routing",
      "Customer interface for real-time delivery updates",
      "SMS notifications integrated at every delivery stage",
      "Route optimization logic for multi-stop deliveries",
    ],
    photos: ["Rider App", "Dispatcher Panel", "Customer Tracking"],
    liveLink: null,
  },
  {
    id: "police-foundation",
    name: "Police Foundation",
    initials: "PF",
    tag: "Government · AI · Real Estate",
    oneLine: "Two purpose-built portals: an AI-powered agriculture advisory and a seamless real estate management platform.",
    overview: "The Police Foundation required two separate but cohesive web portals serving entirely different audiences: an AI agricultural advisory portal and a real estate management portal for property listing and transaction support.",
    built: [
      "AI agricultural advisory platform with natural language input",
      "Personalized crop and resource recommendation engine",
      "Agricultural knowledge base with categorized resources",
      "Real estate listing and inquiry management system",
      "Admin dashboard for property teams with full analytics",
    ],
    photos: ["Agricultural Portal", "AI Advisory Interface", "Real Estate Dashboard"],
    liveLink: null,
  },
];

function TagBadge({ tag }: { tag: string }) {
  return (
    <span className="inline-flex px-2 py-0.5 rounded-md text-[11px] font-semibold tracking-wide border border-border-gray bg-off-white text-mid-gray">
      {tag}
    </span>
  );
}

function ProjectCard({
  project,
  isActive,
  onClick,
}: {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative w-full text-left bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${
        isActive
          ? "border-brand-red/30 shadow-[0_4px_24px_rgba(204,0,0,0.07)]"
          : "border-border-gray hover:border-brand-red/20 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)]"
      }`}
    >
      {/* Left accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-200 ${
          isActive ? "bg-brand-red" : "bg-transparent group-hover:bg-brand-red/30"
        }`}
      />

      <div className="px-6 py-5 pl-8">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className={`font-black text-[20px] transition-colors duration-200 ${isActive ? "text-brand-red" : "text-charcoal group-hover:text-charcoal"}`}>
            {project.name}
          </h3>
          <ChevronDown
            size={15}
            className={`shrink-0 mt-0.5 text-mid-gray transition-transform duration-300 ${isActive ? "rotate-180 text-brand-red" : ""}`}
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tag.split(" · ").map((t) => <TagBadge key={t} tag={t} />)}
        </div>

        {/* One-liner */}
        <p className="text-mid-gray text-[18px] leading-relaxed">{project.oneLine}</p>
      </div>
    </button>
  );
}

function CaseStudyDetail({ project }: { project: Project }) {
  return (
    <div className="rounded-3xl bg-white overflow-hidden border-2 border-brand-red shadow-[0_20px_50px_rgba(204,0,0,0.18)]">
      <div>

        {/* Top bar */}
        <div className="flex items-center justify-between px-10 py-6 border-b border-border-gray bg-off-white/50">
          <p className="text-[15px] font-bold uppercase tracking-widest text-charcoal">
            {project.name} Case Study
          </p>
          <p className="text-xs text-mid-gray font-medium hidden sm:block">{project.tag}</p>
        </div>

        <div className="p-10 lg:p-14 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Overview + screenshots */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">Overview</p>
              <p className="text-charcoal/70 text-[19px] leading-relaxed">{project.overview}</p>
            </div>

            {/* Screenshot placeholders */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">Screenshots</p>
              <div className="grid grid-cols-3 gap-3">
                {project.photos.map((ph) => (
                  <div
                    key={ph}
                    className="aspect-video rounded-xl bg-off-white border border-border-gray flex flex-col items-center justify-center gap-1.5"
                  >
                    <div className="w-7 h-7 rounded-md bg-border-gray/60 flex items-center justify-center">
                      <span className="text-[9px] font-bold text-mid-gray">IMG</span>
                    </div>
                    <span className="text-[11px] text-mid-gray text-center leading-tight px-1">{ph}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: What we built + link */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">What We Built</p>
              <ul className="space-y-4">
                {project.built.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-brand-red mt-[2px] shrink-0" />
                    <span className="text-charcoal/75 text-[19px] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 border-t border-border-gray flex flex-wrap items-center gap-4">
              {project.id === "bespoke-crm" ? (
                <>
                  <a
                    href="mailto:info@techxserve.com?subject=CRM Demo"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white text-sm font-semibold rounded-xl hover:bg-brand-red-dark transition-all shadow-[var(--shadow-red)]"
                  >
                    Book Free Demo <ExternalLink size={13} />
                  </a>
                  <div className="px-4 py-3 rounded-xl bg-brand-red/8 border border-brand-red/20">
                    <p className="text-brand-red text-xs font-black uppercase tracking-widest">Launch Offer: 50% OFF</p>
                    <p className="text-mid-gray text-[10px] mt-0.5">Full integration & bonuses included</p>
                  </div>
                </>
              ) : project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white text-sm font-semibold rounded-xl hover:bg-brand-red-dark transition-colors"
                >
                  Visit Live <ExternalLink size={13} />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-off-white border border-border-gray">
                  <div className="w-1.5 h-1.5 rounded-full bg-mid-gray/40" />
                  <p className="text-mid-gray text-sm">
                    {project.id === "ispr" || project.id === "police-foundation"
                      ? "Internal system, not publicly accessible"
                      : "Live link coming soon"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsGrid() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const detailRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const toggle = (id: string) =>
    setActiveId((prev) => (prev === id ? null : id));

  useEffect(() => {
    if (!activeId) return;
    const el = detailRefs.current.get(activeId);
    if (!el) return;
    // Wait for expand animation to start, then scroll the detail into view
    const t = setTimeout(() => {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
    return () => clearTimeout(t);
  }, [activeId]);

  // Group into rows of 2
  const rows: Project[][] = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <div className="space-y-4">
      {rows.map((row) => {
        const active = row.find((p) => p.id === activeId) ?? null;
        return (
          <div key={row[0].id} className="space-y-3">
            {/* Card row */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {row.map((proj) => (
                <div key={proj.id} className="w-full sm:w-[calc(50%-0.5rem)]">
                  <ProjectCard
                    project={proj}
                    isActive={proj.id === activeId}
                    onClick={() => toggle(proj.id)}
                  />
                </div>
              ))}
            </div>

            {/* Inline dropdown detail */}
            <div
              ref={(el) => {
                if (active && el) detailRefs.current.set(active.id, el);
              }}
              className="overflow-hidden px-1 pb-10 pt-2 transition-all duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                maxHeight: active ? "1000px" : "0px",
                opacity: active ? 1 : 0,
              }}
            >
              {active && <CaseStudyDetail project={active} />}
            </div>
          </div>
        );
      })}

    </div>
  );
}
