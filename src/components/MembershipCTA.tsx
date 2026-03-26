import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

export default function MembershipCTA() {
  return (
    <section
      className="py-24 lg:py-28"
      style={{
        background: "linear-gradient(135deg, #0A1628 0%, #1A3A6B 100%)",
      }}
    >
      <div className="max-w-content mx-auto px-6 lg:px-10 text-center">
        <ScrollAnimation>
          <h2 className="text-white text-[30px] md:text-[38px] lg:text-[42px] font-bold leading-[1.2] max-w-[700px] mx-auto mb-6">
            Are you ready to join the world&apos;s leading Balkan business
            network?
          </h2>
          <p className="text-gray-blue text-[16px] md:text-[18px] leading-[1.7] max-w-[560px] mx-auto mb-10">
            Membership gives you direct access to global events, business
            matchmaking, investment opportunities, and a thriving community of
            professionals across Southeastern Europe and beyond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/membership"
              className="bg-brand-gold text-navy text-[14px] font-semibold rounded-full px-8 py-3.5 hover:bg-[#D4B45E] transition-colors"
            >
              Explore Membership &rarr;
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
  );
}
