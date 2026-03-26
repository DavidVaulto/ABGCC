"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Building2, Check, CreditCard } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { MEMBERSHIP_TIERS } from "@/lib/constants";

const businessTier = MEMBERSHIP_TIERS[2]; // Business tier

export default function ProfilePage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-secondary/50 to-navy" />
        <div className="relative max-w-content mx-auto px-6 lg:px-10 text-center">
          <p className="text-brand-gold text-[11px] uppercase tracking-[3px] font-medium mb-3">
            Almost There
          </p>
          <h1 className="text-white text-[36px] md:text-[44px] lg:text-[48px] font-bold leading-[1.15]">
            Your profile is ready.
          </h1>
          <p className="text-gray-blue text-[17px] mt-4 max-w-[520px] mx-auto">
            Review your membership details and proceed to payment to activate
            your ABGCC business membership.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[680px] mx-auto px-6 py-5">
          <div className="flex items-center justify-center gap-3 text-[13px]">
            <span className="flex items-center gap-2">
              <span className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center">
                <Check size={14} />
              </span>
              <span className="text-green-600 font-semibold">Registration</span>
            </span>
            <span className="w-8 h-px bg-green-300" />
            <span className="flex items-center gap-2">
              <span className="w-7 h-7 bg-brand-blue text-white rounded-full flex items-center justify-center text-[12px] font-bold">
                2
              </span>
              <span className="text-navy font-semibold">Profile</span>
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

      {/* Content */}
      <section className="bg-gray-light py-16 lg:py-20">
        <div className="max-w-[680px] mx-auto px-6">
          <ScrollAnimation>
            <div className="space-y-8">
              {/* Profile Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center shrink-0">
                    <Building2 size={28} className="text-brand-gold" />
                  </div>
                  <div>
                    <h2 className="text-navy text-[22px] font-bold">
                      Your Company
                    </h2>
                    <p className="text-gray-medium text-[14px] mt-1">
                      Business Member
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-[12px] bg-blue-50 text-brand-blue font-medium px-3 py-1 rounded-full">
                        Technology & IT
                      </span>
                      <span className="text-[12px] bg-gray-100 text-gray-medium font-medium px-3 py-1 rounded-full">
                        United States
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Membership Plan */}
              <div className="bg-white rounded-2xl border-2 border-brand-blue p-8 shadow-[0_4px_24px_rgba(26,86,219,0.08)]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-brand-blue text-[11px] uppercase tracking-[2px] font-semibold mb-1">
                      Selected Plan
                    </p>
                    <h3 className="text-navy text-[24px] font-bold">
                      {businessTier.name} Membership
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-navy text-[32px] font-bold">
                      {businessTier.price}
                    </span>
                    <span className="text-gray-medium text-[15px]">
                      {businessTier.period}
                    </span>
                  </div>
                </div>

                <p className="text-gray-medium text-[15px] mb-5">
                  {businessTier.description}
                </p>

                <div className="border-t border-gray-100 pt-5">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {businessTier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check
                          size={16}
                          className="text-brand-blue mt-0.5 shrink-0"
                        />
                        <span className="text-gray-medium text-[14px]">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Payment Button */}
              <button
                onClick={() => {
                  setSubmitting(true);
                  setTimeout(() => {
                    router.push("/portal/register/payment");
                  }, 400);
                }}
                disabled={submitting}
                className="w-full flex items-center justify-center gap-3 bg-brand-gold text-white text-[16px] font-semibold rounded-xl py-4 hover:bg-brand-gold/90 transition-colors disabled:opacity-60"
              >
                <CreditCard size={20} />
                {submitting
                  ? "Redirecting to payment..."
                  : `Proceed to Payment — ${businessTier.price}${businessTier.period}`}
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
