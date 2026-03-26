"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Handshake, Globe, TrendingUp, Building2, Plus, Minus } from "lucide-react";
import { SERVICE_PILLARS } from "@/lib/constants";
import ScrollAnimation from "./ScrollAnimation";

const iconMap: Record<string, (active: boolean) => React.ReactNode> = {
  Handshake: (active) => (
    <Handshake size={22} className={active ? "text-brand-blue" : "text-gray-medium"} />
  ),
  Globe: (active) => (
    <Globe size={22} className={active ? "text-brand-blue" : "text-gray-medium"} />
  ),
  TrendingUp: (active) => (
    <TrendingUp size={22} className={active ? "text-brand-blue" : "text-gray-medium"} />
  ),
  Building2: (active) => (
    <Building2 size={22} className={active ? "text-brand-blue" : "text-gray-medium"} />
  ),
};

export default function ServicePillars() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gray-light py-24 lg:py-28">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        {/* Header */}
        <ScrollAnimation className="text-center mb-14">
          <p className="text-brand-blue text-[11px] uppercase tracking-[3px] font-medium mb-3">
            What We Do
          </p>
          <h2 className="text-navy text-[32px] md:text-[38px] lg:text-[40px] font-bold">
            Four pillars of global impact.
          </h2>
        </ScrollAnimation>

        {/* Accordion */}
        <div className="space-y-3">
          {SERVICE_PILLARS.map((pillar, i) => {
            const isActive = activeIndex === i;
            return (
              <ScrollAnimation key={pillar.number} delay={i * 80}>
                <div
                  className={`rounded-xl overflow-hidden transition-all duration-500 ${
                    isActive
                      ? "bg-white shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
                      : "bg-white/70 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)]"
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setActiveIndex(isActive ? -1 : i)}
                    className="w-full flex items-center gap-4 px-6 py-5 lg:px-8 lg:py-6 text-left cursor-pointer group"
                  >
                    {/* Icon */}
                    <div
                      className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isActive ? "bg-blue-50" : "bg-gray-100 group-hover:bg-blue-50/60"
                      }`}
                    >
                      {iconMap[pillar.icon](isActive)}
                    </div>

                    {/* Number + Title */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span
                        className={`text-[12px] font-semibold uppercase tracking-[2px] shrink-0 transition-colors duration-300 ${
                          isActive ? "text-brand-gold" : "text-gray-blue"
                        }`}
                      >
                        {pillar.number}
                      </span>
                      <h3
                        className={`text-[18px] lg:text-[20px] font-bold transition-colors duration-300 ${
                          isActive ? "text-navy" : "text-navy/70"
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Toggle Icon */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-brand-blue text-white rotate-0"
                          : "bg-gray-100 text-gray-medium group-hover:bg-gray-200 rotate-0"
                      }`}
                    >
                      {isActive ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 lg:px-8 lg:pb-8">
                        <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
                          {/* Image */}
                          <div className="relative w-full md:w-[340px] lg:w-[400px] h-[220px] md:h-[240px] rounded-xl overflow-hidden shrink-0">
                            <Image
                              src={pillar.image}
                              alt={pillar.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 400px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                          </div>

                          {/* Text Content */}
                          <div className="flex flex-col justify-center flex-1">
                            <p className="text-gray-medium text-[15px] lg:text-[16px] leading-[1.7] mb-5">
                              {pillar.description}
                            </p>
                            <Link
                              href={`/services#${pillar.title.toLowerCase().replace(" ", "-")}`}
                              className="inline-flex items-center gap-2 text-brand-blue text-[14px] font-semibold hover:gap-3 transition-all duration-200 group/link"
                            >
                              Learn more
                              <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                                &rarr;
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
