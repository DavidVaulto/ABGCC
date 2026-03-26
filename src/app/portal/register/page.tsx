"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Building2, User, MessageSquare } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

const INDUSTRIES = [
  "Technology & IT",
  "Finance & Banking",
  "Manufacturing",
  "Energy & Infrastructure",
  "Real Estate & Construction",
  "Agriculture & Food",
  "Healthcare & Pharma",
  "Tourism & Hospitality",
  "Legal & Consulting",
  "Trade & Logistics",
  "Education & Research",
  "Other",
];

const COUNTRIES = [
  "Albania", "Australia", "Austria", "Belgium", "Bosnia and Herzegovina",
  "Bulgaria", "Canada", "Croatia", "Cyprus", "Czech Republic", "Denmark",
  "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy",
  "Kosovo", "Montenegro", "Netherlands", "North Macedonia", "Norway",
  "Poland", "Portugal", "Romania", "Serbia", "Slovakia", "Slovenia",
  "Spain", "Sweden", "Switzerland", "Turkey", "United Arab Emirates",
  "United Kingdom", "United States", "Other",
];

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors";
const labelClass = "block text-navy text-[13px] font-medium mb-1.5";
const selectClass =
  "w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors";

export default function RegisterPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      router.push("/portal/register/profile");
    }, 600);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-secondary/50 to-navy" />
        <div className="relative max-w-content mx-auto px-6 lg:px-10 text-center">
          <p className="text-brand-gold text-[11px] uppercase tracking-[3px] font-medium mb-3">
            Business Membership
          </p>
          <h1 className="text-white text-[36px] md:text-[44px] lg:text-[48px] font-bold leading-[1.15]">
            Register your business.
          </h1>
          <p className="text-gray-blue text-[17px] mt-4 max-w-[520px] mx-auto">
            Complete the form below to create your ABGCC business profile and
            join our global network.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[680px] mx-auto px-6 py-5">
          <div className="flex items-center justify-center gap-3 text-[13px]">
            <span className="flex items-center gap-2">
              <span className="w-7 h-7 bg-brand-blue text-white rounded-full flex items-center justify-center text-[12px] font-bold">
                1
              </span>
              <span className="text-navy font-semibold">Registration</span>
            </span>
            <span className="w-8 h-px bg-gray-200" />
            <span className="flex items-center gap-2">
              <span className="w-7 h-7 bg-gray-100 text-gray-medium rounded-full flex items-center justify-center text-[12px] font-bold">
                2
              </span>
              <span className="text-gray-medium">Profile</span>
            </span>
            <span className="w-8 h-px bg-gray-200" />
            <span className="flex items-center gap-2">
              <span className="w-7 h-7 bg-gray-100 text-gray-medium rounded-full flex items-center justify-center text-[12px] font-bold">
                3
              </span>
              <span className="text-gray-medium">Payment</span>
            </span>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-gray-light py-16 lg:py-20">
        <div className="max-w-[680px] mx-auto px-6">
          <ScrollAnimation>
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Company Info */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Building2 size={18} className="text-brand-blue" />
                  </div>
                  <h2 className="text-navy text-[18px] font-bold">
                    Company Information
                  </h2>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>Company Name *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Acme Corporation"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Company Website</label>
                    <input
                      type="url"
                      className={inputClass}
                      placeholder="https://www.example.com"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Industry Sector *</label>
                      <select className={selectClass}>
                        <option value="">Select industry</option>
                        {INDUSTRIES.map((ind) => (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Country *</label>
                      <select className={selectClass}>
                        <option value="">Select country</option>
                        {COUNTRIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Info */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                    <User size={18} className="text-brand-blue" />
                  </div>
                  <h2 className="text-navy text-[18px] font-bold">
                    Your Information
                  </h2>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Position / Title *</label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="CEO, Director, etc."
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input
                        type="email"
                        className={inputClass}
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input
                        type="tel"
                        className={inputClass}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Interest */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                    <MessageSquare size={18} className="text-brand-blue" />
                  </div>
                  <h2 className="text-navy text-[18px] font-bold">
                    About Your Interest
                  </h2>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>
                      Brief Description of Your Business *
                    </label>
                    <textarea
                      rows={3}
                      className={inputClass}
                      placeholder="Tell us about your company, products, or services..."
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Why Are You Interested in Joining ABGCC? *
                    </label>
                    <textarea
                      rows={3}
                      className={inputClass}
                      placeholder="What are your goals for connecting with the Balkan business community?"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-brand-blue text-white text-[16px] font-semibold rounded-xl py-4 hover:bg-cta-hover transition-colors disabled:opacity-60"
              >
                {submitting ? "Creating your profile..." : "Continue to Profile"}
              </button>
            </form>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
