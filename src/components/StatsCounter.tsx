"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  inView,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const startTime = performance.now();
    const isDecimal = value % 1 !== 0;

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setDisplay(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [inView, value]);

  const formatted = value % 1 !== 0 ? display.toFixed(1) : display.toString();

  return (
    <span className="counter-number">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-navy py-20 lg:py-24">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${
                i < STATS.length - 1
                  ? "lg:border-r lg:border-white/10"
                  : ""
              }`}
            >
              <div className="text-white text-[40px] md:text-[48px] lg:text-[56px] font-extrabold leading-none mb-2">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <p className="text-gray-blue text-[12px] md:text-[13px] uppercase tracking-[2px] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
