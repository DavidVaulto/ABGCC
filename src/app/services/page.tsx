import { Metadata } from "next";
import Link from "next/link";
import { Handshake, Globe, TrendingUp, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Services — ABGCC",
  description: "Explore ABGCC's four pillars: Invest Connect, Market Entry, Growth Network, and Business Bridge.",
};

const services = [
  {
    id: "invest-connect",
    icon: <Handshake size={32} className="text-brand-blue" />,
    number: "01",
    title: "Invest Connect",
    subtitle: "Facilitating cross-border investment and trade",
    description:
      "We connect global investors and businesses with Balkan stakeholders, facilitating cross-border trade, capital deployment, and impactful international partnerships.",
    features: [
      "Direct investor-to-opportunity matching",
      "Cross-border trade facilitation",
      "Due diligence and market intelligence",
      "Investment roadshows and summits",
      "Capital deployment advisory",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
  {
    id: "market-entry",
    icon: <Globe size={32} className="text-brand-blue" />,
    number: "02",
    title: "Market Entry",
    subtitle: "Your guide to Balkan markets and beyond",
    description:
      "We guide businesses worldwide into Balkan markets — and Balkan companies onto the global stage — with tailored strategies, local intelligence, and key partner introductions.",
    features: [
      "Tailored market entry strategies",
      "Regulatory and legal guidance",
      "Local partner introductions",
      "Market research and intelligence",
      "Go-to-market support",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  },
  {
    id: "growth-network",
    icon: <TrendingUp size={32} className="text-brand-blue" />,
    number: "03",
    title: "Growth Network",
    subtitle: "Resources and mentorship for global growth",
    description:
      "We provide Balkan-connected entrepreneurs and professionals with access to international mentorship, industry networks, and resources to grow and thrive globally.",
    features: [
      "International mentorship programs",
      "Industry-specific networking events",
      "Professional development workshops",
      "Founder-to-founder connections",
      "Access to global talent pools",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    id: "business-bridge",
    icon: <Building2 size={32} className="text-brand-blue" />,
    number: "04",
    title: "Business Bridge",
    subtitle: "Bridging Southeastern Europe and the world",
    description:
      "We are the vital connection between Southeastern Europe and the global business community, driving collaboration through events, programs, and lasting partnerships.",
    features: [
      "High-profile business forums",
      "Public-private partnership facilitation",
      "Cultural exchange programs",
      "Government relations and advocacy",
      "Media and PR support for members",
    ],
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[72px]">
        <div
          className="h-[400px] md:h-[480px] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-navy/75" />
          <div className="relative z-10 h-full flex items-end px-6 lg:px-16 pb-16 max-w-content mx-auto">
            <div>
              <p className="text-brand-gold text-[11px] uppercase tracking-[3px] mb-3">
                What We Do
              </p>
              <h1 className="text-white text-[36px] md:text-[48px] font-bold leading-[1.15] max-w-lg">
                Four pillars of global impact.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <ScrollAnimation className="max-w-2xl">
            <p className="text-gray-medium text-[18px] leading-[1.7]">
              The ABGCC delivers measurable impact through four interconnected
              service pillars, each designed to strengthen the bridge between
              the Balkans and the global business community.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 lg:py-28 ${i % 2 === 0 ? "bg-white" : "bg-gray-light"}`}
        >
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <div
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-20`}
            >
              {/* Image */}
              <ScrollAnimation className="lg:w-1/2">
                <div
                  className="w-full aspect-[3/2] rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
              </ScrollAnimation>

              {/* Content */}
              <ScrollAnimation className="lg:w-1/2" delay={150}>
                <span className="text-brand-gold text-[11px] font-semibold uppercase tracking-[2px]">
                  {service.number}
                </span>
                <div className="flex items-center gap-3 mt-2 mb-2">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h2 className="text-navy text-[28px] md:text-[32px] font-bold">
                    {service.title}
                  </h2>
                </div>
                <p className="text-brand-blue text-[15px] font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-gray-medium text-[16px] leading-[1.7] mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-3 text-gray-dark text-[15px]"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-brand-blue mt-0.5 flex-shrink-0"
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-brand-blue text-[14px] font-medium hover:underline"
                >
                  Get started <ArrowRight size={16} />
                </Link>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #1A3A6B 100%)",
        }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-10 text-center">
          <ScrollAnimation>
            <h2 className="text-white text-[30px] md:text-[38px] font-bold mb-4">
              Ready to leverage the power of the Balkans?
            </h2>
            <p className="text-gray-blue text-[16px] mb-8 max-w-lg mx-auto">
              Whether you&apos;re looking to invest, expand, or connect — we&apos;re
              here to help you succeed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/membership"
                className="bg-brand-gold text-navy text-[14px] font-semibold rounded-full px-8 py-3.5 hover:bg-[#D4B45E] transition-colors"
              >
                Join ABGCC &rarr;
              </Link>
              <Link
                href="/contact"
                className="text-white text-[14px] font-medium border border-white/40 rounded-full px-8 py-3.5 hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
