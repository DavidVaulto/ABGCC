import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

export default function OrgIntro() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left column */}
          <ScrollAnimation className="lg:w-[58%]">
            <p className="text-brand-blue text-[11px] uppercase tracking-[3px] font-medium mb-4">
              American Balkan Global Chamber of Commerce
            </p>
            <h2 className="text-navy text-[32px] md:text-[40px] lg:text-[42px] font-bold leading-[1.2] mb-6">
              A connected and prosperous Balkans for the world.
            </h2>
            <p className="text-gray-medium text-[17px] md:text-[18px] leading-[1.7] max-w-[540px] mb-8">
              From trade facilitation and investment matchmaking to cultural
              exchange and business development, we connect businesses worldwide
              with the dynamic economies of Southeastern Europe.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-brand-blue text-white text-[14px] font-medium rounded-full px-8 py-3.5 hover:bg-cta-hover transition-colors"
            >
              More about us &rarr;
            </Link>
          </ScrollAnimation>

          {/* Right column - Leadership cards */}
          <ScrollAnimation className="lg:w-[42%] flex flex-col gap-5" delay={200}>
            {/* President card */}
            <div className="bg-white rounded-lg shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-6 flex items-center gap-5">
              <div
                className="w-[72px] h-[72px] rounded-full bg-cover bg-center flex-shrink-0"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&crop=face')",
                }}
              />
              <div>
                <p className="text-gray-medium text-[10px] uppercase tracking-[2px] mb-1">
                  President
                </p>
                <p className="text-navy text-[17px] font-bold mb-1">
                  Eliza Prendzov
                </p>
                <Link
                  href="/about#president"
                  className="text-brand-blue text-[13px] font-medium hover:underline"
                >
                  Read more &rarr;
                </Link>
              </div>
            </div>

            {/* Board card */}
            <div className="bg-white rounded-lg shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-6 flex items-center gap-5">
              <div className="w-[72px] h-[72px] rounded-full bg-navy-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[20px] font-bold">BD</span>
              </div>
              <div>
                <p className="text-gray-medium text-[10px] uppercase tracking-[2px] mb-1">
                  Board of Directors
                </p>
                <p className="text-navy text-[17px] font-bold mb-1">
                  ABGCC Directors
                </p>
                <Link
                  href="/about#board"
                  className="text-brand-blue text-[13px] font-medium hover:underline"
                >
                  Find out more &rarr;
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
