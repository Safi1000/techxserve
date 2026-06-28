"use client";

import { useState, useRef } from "react";
import { Send } from "lucide-react";
import CareerAccordion from "./CareerAccordion";
import CareerForm from "./CareerForm";

export default function CareersInteractive() {
  const [selectedRole, setSelectedRole] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const handleApply = (role: string) => {
    setSelectedRole(role);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      <CareerAccordion onApply={handleApply} />

      <div ref={formRef} id="career-form" className="mt-14 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-border-gray p-8 md:p-10 shadow-[var(--shadow-lg)]">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-xl bg-brand-red flex items-center justify-center shadow-[0_4px_14px_rgba(204,0,0,0.35)]">
              <Send size={18} className="text-white" />
            </div>
            <div>
              <h2 className="font-bold text-charcoal text-lg leading-tight">Apply for a Role</h2>
              <p className="text-mid-gray text-xs">We&apos;ll review your application and be in touch</p>
            </div>
          </div>
          <CareerForm role={selectedRole} />
        </div>
      </div>
    </>
  );
}
