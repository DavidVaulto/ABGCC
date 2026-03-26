"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, Lock, Shield, Check, ArrowLeft } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { MEMBERSHIP_TIERS } from "@/lib/constants";

const businessTier = MEMBERSHIP_TIERS[2];

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors";
const labelClass = "block text-navy text-[13px] font-medium mb-1.5";

function formatCardNumber(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length > 2) return digits.slice(0, 2) + "/" + digits.slice(2);
  return digits;
}

export default function PaymentPage() {
  const [paid, setPaid] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaid(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-secondary/50 to-navy" />
        <div className="relative max-w-content mx-auto px-6 lg:px-10 text-center">
          <p className="text-brand-gold text-[11px] uppercase tracking-[3px] font-medium mb-3">
            Final Step
          </p>
          <h1 className="text-white text-[36px] md:text-[44px] lg:text-[48px] font-bold leading-[1.15]">
            {paid ? "Welcome to ABGCC." : "Complete your payment."}
          </h1>
          <p className="text-gray-blue text-[17px] mt-4 max-w-[520px] mx-auto">
            {paid
              ? "Your business membership is now active."
              : "Enter your payment details to activate your ABGCC business membership."}
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
              <span className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center">
                <Check size={14} />
              </span>
              <span className="text-green-600 font-semibold">Profile</span>
            </span>
            <span className="w-8 h-px bg-green-300" />
            <span className="flex items-center gap-2">
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold ${
                  paid
                    ? "bg-green-500 text-white"
                    : "bg-brand-blue text-white"
                }`}
              >
                {paid ? <Check size={14} /> : "3"}
              </span>
              <span
                className={`font-semibold ${
                  paid ? "text-green-600" : "text-navy"
                }`}
              >
                Payment
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-light py-16 lg:py-20">
        <div className="max-w-[680px] mx-auto px-6">
          <ScrollAnimation>
            {paid ? (
              /* Success State */
              <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-[0_2px_16px_rgba(0,0,0,0.04)] text-center">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={40} className="text-green-500" />
                </div>
                <h2 className="text-navy text-[28px] font-bold mb-3">
                  Payment Successful
                </h2>
                <p className="text-gray-medium text-[16px] max-w-[420px] mx-auto mb-3">
                  Your ABGCC Business Membership is now active. Welcome to the
                  American Balkan Global Chamber of Commerce.
                </p>
                <p className="text-gray-medium text-[14px] mb-8">
                  A confirmation email has been sent with your membership
                  details and login credentials.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white text-[15px] font-semibold rounded-lg px-8 py-3.5 hover:bg-cta-hover transition-colors"
                  >
                    Go to Dashboard
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 text-brand-blue text-[14px] font-semibold hover:underline px-4 py-3.5"
                  >
                    <ArrowLeft size={16} />
                    Return to homepage
                  </Link>
                </div>
              </div>
            ) : (
              /* Payment Form */
              <div className="space-y-6">
                {/* Order Summary */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                  <h3 className="text-navy text-[13px] font-semibold uppercase tracking-[1.5px] mb-4">
                    Order Summary
                  </h3>
                  <div className="flex items-center justify-between py-3 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <CreditCard size={18} className="text-brand-blue" />
                      </div>
                      <div>
                        <p className="text-navy text-[15px] font-semibold">
                          {businessTier.name} Membership
                        </p>
                        <p className="text-gray-medium text-[13px]">
                          Annual subscription
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-navy text-[20px] font-bold">
                        {businessTier.price}
                      </span>
                      <span className="text-gray-medium text-[13px]">
                        {businessTier.period}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-navy text-[15px] font-semibold">
                      Total due today
                    </span>
                    <span className="text-navy text-[22px] font-bold">
                      {businessTier.price}
                    </span>
                  </div>
                </div>

                {/* Card Form */}
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-gray-200 p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                      <CreditCard size={18} className="text-brand-blue" />
                    </div>
                    <h3 className="text-navy text-[18px] font-bold">
                      Payment Details
                    </h3>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className={labelClass}>Cardholder Name</label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="Name on card"
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          className={`${inputClass} pr-14`}
                          placeholder="1234 5678 9012 3456"
                          value={cardNumber}
                          onChange={(e) =>
                            setCardNumber(formatCardNumber(e.target.value))
                          }
                          maxLength={19}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                          <div className="w-8 h-5 bg-[#1A1F71] rounded-[3px] flex items-center justify-center">
                            <span className="text-white text-[7px] font-bold italic">
                              VISA
                            </span>
                          </div>
                          <div className="w-8 h-5 bg-gray-800 rounded-[3px] flex items-center justify-center">
                            <div className="flex -space-x-1">
                              <div className="w-3 h-3 bg-red-500 rounded-full opacity-80" />
                              <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-80" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Expiry Date</label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="MM/YY"
                          value={expiry}
                          onChange={(e) =>
                            setExpiry(formatExpiry(e.target.value))
                          }
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>CVV</label>
                        <div className="relative">
                          <input
                            type="text"
                            className={`${inputClass} pr-10`}
                            placeholder="123"
                            value={cvv}
                            onChange={(e) =>
                              setCvv(
                                e.target.value.replace(/\D/g, "").slice(0, 3)
                              )
                            }
                            maxLength={3}
                          />
                          <Lock
                            size={14}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-brand-gold text-white text-[16px] font-semibold rounded-xl py-4 mt-8 hover:bg-brand-gold/90 transition-colors"
                  >
                    <Lock size={16} />
                    Pay {businessTier.price}
                  </button>
                </form>

                {/* Security Badges */}
                <div className="flex items-center justify-center gap-8 py-4">
                  <div className="flex items-center gap-2 text-gray-medium">
                    <Lock size={14} />
                    <span className="text-[12px]">256-bit SSL Encryption</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-medium">
                    <Shield size={14} />
                    <span className="text-[12px]">Secure Payment</span>
                  </div>
                </div>
              </div>
            )}
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
