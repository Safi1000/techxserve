"use client";

import { useState, useEffect, FormEvent } from "react";
import { CheckCircle, Send } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

const inputClass =
  "px-4 py-3 rounded-xl border border-border-gray bg-off-white text-sm text-charcoal placeholder-mid-gray " +
  "focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition-all";

export default function CareerForm({ role = "" }: { role?: string }) {
  const [position, setPosition] = useState(role);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (role) {
      setPosition(role);
      setSubmitted(false);
      setError("");
    }
  }, [role]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          position: fd.get("position"),
          portfolio: fd.get("portfolio"),
          coverLetter: fd.get("coverLetter"),
        }),
      });
      if (!res.ok) throw new Error("send failed");
      trackEvent("job_application_submitted", {
        position: String(fd.get("position") || "unspecified"),
      });
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
        <h3 className="text-xl font-bold text-charcoal">Application Sent!</h3>
        <p className="text-mid-gray max-w-sm">
          Thanks for applying! We&apos;ll review your application and be in touch if you&apos;re a strong fit.
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
          <input type="text" name="name" required placeholder="Jane Smith" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">
            Email <span className="text-brand-red">*</span>
          </label>
          <input type="email" name="email" required placeholder="jane@gmail.com" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">Phone</label>
          <input type="tel" name="phone" placeholder="+1 (000) 000-0000" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">
            Position Applying For <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            name="position"
            required
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="e.g. Full-Stack Engineer"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">
          LinkedIn / Portfolio URL
        </label>
        <input
          type="url"
          name="portfolio"
          placeholder="https://linkedin.com/in/yourname"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">
          Why TechxServe? <span className="text-brand-red">*</span>
        </label>
        <textarea
          name="coverLetter"
          required
          rows={5}
          placeholder="Tell us about yourself, why you want to join TechxServe, and what you'd bring to the team…"
          className={`${inputClass} resize-none`}
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
            Submitting…
          </>
        ) : (
          <>
            <Send size={15} />
            Submit Application
          </>
        )}
      </button>
    </form>
  );
}
