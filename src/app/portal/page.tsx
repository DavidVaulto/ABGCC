"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogIn, UserPlus, Building2, Check, AlertCircle } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

const WHITELISTED_EMAILS = [
  "david@vaulto.ai",
  "nick@mdnfreightinc.com",
  "eprend@gmail.com",
  "ta2130@nyu.edu",
];
const PASSWORD = "123";

export default function PortalPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const normalizedEmail = email.trim().toLowerCase();
    if (
      WHITELISTED_EMAILS.includes(normalizedEmail) &&
      password === PASSWORD
    ) {
      setLoading(true);
      localStorage.setItem("gccb_member", normalizedEmail);
      setTimeout(() => {
        router.push("/portal/dashboard");
      }, 400);
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  const benefits = [
    "Company listing in ABGCC member directory",
    "2 annual summit passes included",
    "Quarterly Balkan market reports",
    "Dedicated account manager",
    "Partner introduction program",
    "Priority event registration",
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-secondary/50 to-navy" />
        <div className="relative max-w-content mx-auto px-6 lg:px-10 text-center">
          <p className="text-brand-blue text-[11px] uppercase tracking-[3px] font-medium mb-3">
            Member Portal
          </p>
          <h1 className="text-white text-[36px] md:text-[44px] lg:text-[48px] font-bold leading-[1.15]">
            Welcome back.
          </h1>
          <p className="text-gray-blue text-[17px] mt-4 max-w-[500px] mx-auto">
            Sign in to access your member dashboard, or join ABGCC as a business
            member.
          </p>
        </div>
      </section>

      {/* Login Section */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[480px] mx-auto px-6">
          <ScrollAnimation>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <LogIn size={20} className="text-brand-blue" />
                </div>
                <h2 className="text-navy text-[22px] font-bold">
                  Member Sign In
                </h2>
              </div>

              {error && (
                <div className="flex items-center gap-2 bg-red-50 text-red-600 text-[14px] rounded-lg px-4 py-3 mb-4">
                  <AlertCircle size={16} className="shrink-0" />
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-navy text-[13px] font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-navy text-[13px] font-medium mb-1.5">
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-brand-blue text-[13px] font-medium hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-blue text-white text-[15px] font-semibold rounded-lg py-3.5 hover:bg-cta-hover transition-colors disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* New Member Section */}
      <section className="bg-gray-light py-20 lg:py-24">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <ScrollAnimation>
            <div className="max-w-[800px] mx-auto">
              <div className="flex flex-col md:flex-row gap-10 lg:gap-14 items-start">
                {/* Left: Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                      <UserPlus size={20} className="text-brand-gold" />
                    </div>
                    <p className="text-brand-gold text-[11px] uppercase tracking-[3px] font-semibold">
                      New Member
                    </p>
                  </div>
                  <h2 className="text-navy text-[28px] lg:text-[32px] font-bold leading-[1.2] mb-4">
                    Join ABGCC as a Business Member.
                  </h2>
                  <p className="text-gray-medium text-[16px] leading-[1.7] mb-6">
                    Get your company connected to the Balkans&apos; most
                    influential business network. Our Business membership gives
                    you everything you need to establish and grow your presence
                    in Southeastern Europe.
                  </p>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-navy text-[36px] font-bold">
                      $999
                    </span>
                    <span className="text-gray-medium text-[15px]">/year</span>
                  </div>

                  <Link
                    href="/portal/register"
                    className="inline-flex items-center gap-2 bg-brand-gold text-white text-[15px] font-semibold rounded-lg px-8 py-3.5 hover:bg-brand-gold/90 transition-colors"
                  >
                    <Building2 size={18} />
                    Join as a Business Member
                  </Link>
                </div>

                {/* Right: Benefits */}
                <div className="flex-1">
                  <h3 className="text-navy text-[15px] font-semibold mb-4 uppercase tracking-[1px]">
                    What&apos;s included
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="text-brand-gold mt-0.5 shrink-0"
                        />
                        <span className="text-gray-medium text-[15px]">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
