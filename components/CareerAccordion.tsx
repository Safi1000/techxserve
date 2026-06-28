"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Clock, Briefcase } from "lucide-react";

interface Role {
  title: string;
  type: string;
  location: string;
  desc: string;
  requirements: string[];
}

const roles: Role[] = [
  {
    title: "Full-Stack Engineer (React + Node.js)",
    type: "Full-time",
    location: "Islamabad, PK",
    desc: "Build and maintain scalable web applications across the full stack. You'll work directly with product and design to ship features fast, write clean APIs, and architect systems that can grow with our clients.",
    requirements: [
      "3+ years with React and Node.js",
      "Experience with PostgreSQL or MongoDB",
      "Familiar with cloud deployment (AWS / GCP)",
      "Strong TypeScript skills",
      "Ability to own features end-to-end",
    ],
  },
  {
    title: "Mobile Developer (React Native / Flutter)",
    type: "Contract",
    location: "Remote",
    desc: "Design and build high-performance cross-platform mobile applications for iOS and Android. You'll work on client-facing products that need to look and perform flawlessly.",
    requirements: [
      "2+ years React Native or Flutter",
      "Published app on App Store or Play Store",
      "Comfortable with REST APIs and state management",
      "Eye for detail in UI/UX",
      "Strong communication for remote work",
    ],
  },
  {
    title: "AI/ML Engineer",
    type: "Full-time",
    location: "Islamabad, PK",
    desc: "Build and integrate intelligent ML systems into real-world products. From model development to production pipelines, you'll turn data into actionable outcomes for our clients.",
    requirements: [
      "Solid Python + ML framework experience (TF/PyTorch)",
      "Experience building and deploying models to production",
      "Familiar with LLMs and prompt engineering",
      "Data pipeline and ETL experience",
      "Strong analytical thinking",
    ],
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    desc: "Create beautiful, intuitive interfaces for web and mobile products. You'll work closely with engineers to ensure designs are feasible, consistent, and user-centric.",
    requirements: [
      "Figma proficiency (component systems, auto-layout)",
      "Portfolio of shipped web/mobile products",
      "Understanding of accessibility standards",
      "Experience in design systems",
      "Ability to iterate quickly based on feedback",
    ],
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Islamabad or Remote",
    desc: "Own the infrastructure that powers our clients' products. You'll build CI/CD pipelines, manage cloud environments, and ensure reliability, security, and performance at scale.",
    requirements: [
      "AWS or GCP experience (IaC with Terraform/Pulumi)",
      "Docker and Kubernetes in production",
      "CI/CD pipeline configuration (GitHub Actions)",
      "Security hardening and monitoring setup",
      "Strong documentation and incident response",
    ],
  },
];

function RoleItem({ role, onApply }: { role: Role; onApply: (title: string) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border border-border-gray rounded-2xl overflow-hidden transition-all duration-300 ${open ? "bg-white shadow-md" : "bg-white hover:border-brand-red/30"}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full px-7 py-5 flex items-center justify-between text-left gap-4"
      >
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-charcoal text-base truncate">{role.title}</h3>
          <div className="flex flex-wrap items-center gap-3 mt-1.5">
            <span className="flex items-center gap-1.5 text-xs text-mid-gray">
              <Clock size={12} /> {role.type}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-mid-gray">
              <MapPin size={12} /> {role.location}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-mid-gray">
              <Briefcase size={12} /> TechxServe
            </span>
          </div>
        </div>
        <ChevronDown
          size={18}
          className={`text-mid-gray shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-7 pb-7 border-t border-border-gray pt-5">
          <p className="text-mid-gray text-sm leading-relaxed mb-5">{role.desc}</p>
          <p className="text-xs font-semibold uppercase tracking-widest text-charcoal mb-3">
            Requirements
          </p>
          <ul className="space-y-2 mb-6">
            {role.requirements.map((req) => (
              <li key={req} className="flex items-start gap-2.5 text-sm text-charcoal">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
                {req}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => onApply(role.title)}
            className="inline-flex items-center px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded-lg hover:bg-brand-red-dark transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CareerAccordion({ onApply }: { onApply: (title: string) => void }) {
  return (
    <div className="space-y-4">
      {roles.map((role) => (
        <RoleItem key={role.title} role={role} onApply={onApply} />
      ))}
    </div>
  );
}
