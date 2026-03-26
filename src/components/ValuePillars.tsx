import Link from "next/link";
import { VALUE_PILLARS } from "@/lib/constants";
import ScrollAnimation from "./ScrollAnimation";

export default function ValuePillars() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        {VALUE_PILLARS.map((pillar, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div
              key={pillar.overline}
              className={`flex flex-col ${
                imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-20 ${
                i < VALUE_PILLARS.length - 1 ? "mb-20 lg:mb-28" : ""
              }`}
            >
              {/* Image */}
              <ScrollAnimation className="lg:w-1/2" delay={imageLeft ? 0 : 150}>
                <div
                  className="w-full aspect-[3/2] rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url('${pillar.image}')` }}
                />
              </ScrollAnimation>

              {/* Text */}
              <ScrollAnimation className="lg:w-1/2" delay={imageLeft ? 150 : 0}>
                <p className="text-brand-blue text-[11px] uppercase tracking-[3px] font-medium mb-3">
                  {pillar.overline}
                </p>
                <h3 className="text-navy text-[26px] md:text-[30px] lg:text-[32px] font-bold leading-[1.2] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-medium text-[16px] leading-[1.7] mb-6">
                  {pillar.body}
                </p>
                <Link
                  href="/services"
                  className="text-brand-blue text-[14px] font-medium hover:underline inline-flex items-center gap-1"
                >
                  {pillar.cta} &rarr;
                </Link>
              </ScrollAnimation>
            </div>
          );
        })}
      </div>
    </section>
  );
}
