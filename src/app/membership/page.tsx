import { Metadata } from "next";
import Link from "next/link";
import { Check, HelpCircle } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { MEMBERSHIP_TIERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Membership — ABGCC",
  description: "Join the American Balkan Global Chamber of Commerce. Choose from five membership tiers.",
};

const faqs = [
  {
    q: "Who can become a member?",
    a: "Anyone with a professional interest in the Balkans — from individual entrepreneurs to multinational corporations. We welcome members from every industry and geography.",
  },
  {
    q: "How does business matchmaking work?",
    a: "Our team personally curates introductions based on your goals, industry, and target markets. Professional tier and above get direct access to our matchmaking platform.",
  },
  {
    q: "Can I upgrade my membership later?",
    a: "Absolutely. You can upgrade at any time and your remaining balance will be prorated toward the new tier.",
  },
  {
    q: "What are the summit passes?",
    a: "Summit passes grant full access to the ABGCC Annual Summit — our flagship three-day conference including all keynotes, panels, networking sessions, and the gala dinner.",
  },
  {
    q: "Is there a refund policy?",
    a: "We offer a full refund within 30 days of membership purchase if you're not satisfied.",
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[72px]">
        <div
          className="h-[400px] md:h-[480px] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-navy/75" />
          <div className="relative z-10 h-full flex items-end px-6 lg:px-16 pb-16 max-w-content mx-auto">
            <div>
              <p className="text-brand-gold text-[11px] uppercase tracking-[3px] mb-3">
                Membership
              </p>
              <h1 className="text-white text-[36px] md:text-[48px] font-bold leading-[1.15] max-w-lg">
                Join the network that moves the Balkans forward.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-gray-light py-24 lg:py-28">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <ScrollAnimation className="text-center mb-16">
            <p className="text-brand-blue text-[11px] uppercase tracking-[3px] font-medium mb-3">
              Choose Your Tier
            </p>
            <h2 className="text-navy text-[32px] md:text-[38px] font-bold">
              Membership built for every stage.
            </h2>
            <p className="text-gray-medium text-[16px] mt-4 max-w-lg mx-auto">
              From individuals exploring opportunities to enterprises shaping
              the region — there&apos;s a membership tier designed for you.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {MEMBERSHIP_TIERS.map((tier, i) => (
              <ScrollAnimation key={tier.name} delay={i * 80}>
                <div
                  className={`rounded-xl p-7 h-full flex flex-col ${
                    tier.highlighted
                      ? "bg-navy text-white shadow-[0_8px_40px_rgba(26,86,219,0.25)] ring-2 ring-brand-blue relative"
                      : "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
                  }`}
                >
                  {tier.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[11px] font-semibold uppercase tracking-[1px] px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3
                    className={`text-[18px] font-bold mb-1 ${
                      tier.highlighted ? "text-white" : "text-navy"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-[13px] mb-5 ${
                      tier.highlighted ? "text-gray-blue" : "text-gray-medium"
                    }`}
                  >
                    {tier.description}
                  </p>
                  <div className="mb-6">
                    <span
                      className={`text-[36px] font-extrabold ${
                        tier.highlighted ? "text-white" : "text-navy"
                      }`}
                    >
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span
                        className={`text-[14px] ${
                          tier.highlighted ? "text-gray-blue" : "text-gray-medium"
                        }`}
                      >
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-[13px]">
                        <Check
                          size={16}
                          className={`mt-0.5 flex-shrink-0 ${
                            tier.highlighted ? "text-brand-gold" : "text-brand-blue"
                          }`}
                        />
                        <span
                          className={
                            tier.highlighted ? "text-white/90" : "text-gray-dark"
                          }
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center text-[14px] font-semibold rounded-full px-6 py-3 transition-colors ${
                      tier.highlighted
                        ? "bg-brand-gold text-navy hover:bg-[#D4B45E]"
                        : "bg-brand-blue text-white hover:bg-cta-hover"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Note */}
      <section className="bg-white py-20">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <ScrollAnimation className="text-center">
            <p className="text-gray-medium text-[16px] max-w-2xl mx-auto leading-[1.7]">
              All memberships include access to our global member directory,
              monthly newsletter, and event notifications. Higher tiers unlock
              priority access to investment opportunities, summits, and
              one-on-one advisory services.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-light py-24 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <ScrollAnimation className="text-center mb-16">
            <p className="text-brand-blue text-[11px] uppercase tracking-[3px] font-medium mb-3">
              FAQ
            </p>
            <h2 className="text-navy text-[32px] md:text-[38px] font-bold">
              Frequently Asked Questions
            </h2>
          </ScrollAnimation>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <ScrollAnimation key={i} delay={i * 60}>
                <div className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                  <div className="flex items-start gap-3">
                    <HelpCircle
                      size={20}
                      className="text-brand-blue mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-navy text-[16px] font-semibold mb-2">
                        {faq.q}
                      </h3>
                      <p className="text-gray-medium text-[15px] leading-[1.6]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-content mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white text-[28px] md:text-[34px] font-bold mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-blue text-[16px] mb-8">
            Our membership team is ready to help you find the right fit.
          </p>
          <Link
            href="/contact"
            className="bg-brand-gold text-navy text-[14px] font-semibold rounded-full px-8 py-3.5 hover:bg-[#D4B45E] transition-colors"
          >
            Talk to Us &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
