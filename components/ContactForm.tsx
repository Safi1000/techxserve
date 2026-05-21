"use client";

import { useState, FormEvent } from "react";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fd.get("fullName"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          company: fd.get("company"),
          service: fd.get("service"),
          budget: fd.get("budget"),
          message: fd.get("message"),
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-red/10 flex items-center justify-center">
          <CheckCircle size={32} className="text-brand-red" />
        </div>
        <h3 className="text-xl font-bold text-charcoal">Message Sent!</h3>
        <p className="text-mid-gray">
          Thanks! Check your inbox — we&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="Jane Smith"
            className="px-4 py-3 rounded-xl border border-border-gray bg-off-white text-sm text-charcoal placeholder-mid-gray focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">
            Business Email <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@company.com"
            className="px-4 py-3 rounded-xl border border-border-gray bg-off-white text-sm text-charcoal placeholder-mid-gray focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+1 (000) 000-0000"
            className="px-4 py-3 rounded-xl border border-border-gray bg-off-white text-sm text-charcoal placeholder-mid-gray focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            placeholder="Acme Corp"
            className="px-4 py-3 rounded-xl border border-border-gray bg-off-white text-sm text-charcoal placeholder-mid-gray focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">
            Service of Interest
          </label>
          <select
            name="service"
            defaultValue=""
            className="px-4 py-3 rounded-xl border border-border-gray bg-off-white text-sm text-charcoal focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition-all"
          >
            <option value="">Select a service…</option>
            <option>Custom Software</option>
            <option>Cloud & Digital Transformation</option>
            <option>AI & Data Analytics</option>
            <option>Automation & SaaS</option>
            <option>Mobile & Web Engineering</option>
            <option>General Inquiry</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">
            Project Budget
          </label>
          <select
            name="budget"
            defaultValue=""
            className="px-4 py-3 rounded-xl border border-border-gray bg-off-white text-sm text-charcoal focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition-all"
          >
            <option value="">Select a range…</option>
            <option>Under $5K</option>
            <option>$5K – $15K</option>
            <option>$15K – $50K</option>
            <option>$50K+</option>
            <option>Let&apos;s Discuss</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">
          Tell us about your project <span className="text-brand-red">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Describe your project, goals, timeline, or anything that helps us understand what you're building…"
          className="px-4 py-3 rounded-xl border border-border-gray bg-off-white text-sm text-charcoal placeholder-mid-gray focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition-all resize-none"
        />
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-4 bg-brand-red text-white font-bold rounded-xl hover:bg-brand-red-dark transition-all disabled:opacity-70 flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(204,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(204,0,0,0.4)] hover:-translate-y-0.5 text-sm"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
