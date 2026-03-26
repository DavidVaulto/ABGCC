"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { HERO_HEADLINES, HERO_CARDS } from "@/lib/constants";

export default function Hero() {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % HERO_HEADLINES.length);
        setIsAnimating(false);
      }, 800);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero-bg.jpg')",
        }}
      />

      {/* Gradient overlay - dark on left, transparent on right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10, 22, 40, 0.82) 0%, rgba(10, 22, 40, 0.55) 50%, rgba(10, 22, 40, 0.18) 100%)",
        }}
      />

      {/* Content - lower left */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-16 pb-[260px] md:pb-[200px] lg:pb-[160px] pt-[180px] md:pt-[220px] lg:pt-[260px]">
        <div className="max-w-[640px]">
          {/* Overline */}
          <p className="text-white text-[11px] tracking-[4px] uppercase opacity-70 mb-4">
            American Balkan Global Chamber of Commerce
          </p>

          {/* Rotating headline */}
          <div className="min-h-[130px] md:min-h-[170px] lg:min-h-[130px] mb-4">
            <h1
              className={`text-white text-[36px] md:text-[48px] lg:text-[52px] font-bold leading-[1.15] transition-opacity duration-700 ease-in-out ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              {HERO_HEADLINES[currentHeadline]}
            </h1>
          </div>

          {/* Body */}
          <p className="text-white text-[16px] md:text-[18px] opacity-85 max-w-[500px] leading-relaxed mb-8">
            The world&apos;s premier platform for international business and
            investment in Southeastern Europe.
          </p>

          {/* CTA */}
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white text-[14px] border border-white/50 rounded-full px-7 py-3 hover:bg-white hover:text-navy transition-all duration-300"
          >
            Read More
            <span>&rarr;</span>
          </Link>
        </div>
      </div>

      {/* Bottom news cards */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {HERO_CARDS.map((card, i) => (
            <Link
              key={i}
              href={card.href}
              className={`group flex items-center gap-4 px-6 lg:px-8 py-5 bg-[rgba(10,22,40,0.88)] hover:bg-[rgba(10,22,40,0.95)] transition-colors ${
                i < HERO_CARDS.length - 1
                  ? "md:border-r md:border-white/10"
                  : ""
              }`}
            >
              <div
                className="w-[52px] h-[52px] rounded flex-shrink-0 bg-cover bg-center hidden sm:block"
                style={{ backgroundImage: `url('${card.image}')` }}
              />
              <p className="text-white text-[13px] md:text-[14px] font-semibold leading-snug flex-1">
                {card.title}
              </p>
              <span className="text-brand-blue text-[18px] group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          ))}
        </div>

        {/* Bounce chevron */}
        <div className="flex justify-center py-3 bg-transparent">
          <ChevronDown
            size={24}
            className="text-white/60 animate-bounce-slow"
          />
        </div>
      </div>
    </section>
  );
}
