import Link from "next/link";

export default function ConferencePhoto() {
  return (
    <section className="relative w-full h-[480px] md:h-[520px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=800&fit=crop')",
        }}
      />

      {/* Gradient overlay on left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10, 22, 40, 0.85) 0%, rgba(10, 22, 40, 0.5) 50%, rgba(10, 22, 40, 0.15) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-16 pb-16 max-w-content mx-auto">
        <p className="text-brand-gold text-[11px] uppercase tracking-[3px] font-medium mb-3">
          ABGCC Annual Summit
        </p>
        <h2 className="text-white text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.2] max-w-[560px] mb-4">
          The premier international Balkans business conference.
        </h2>
        <p className="text-white text-[15px] md:text-[16px] opacity-80 mb-6">
          June 2026 &middot; Skopje, North Macedonia
        </p>
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-white text-[14px] border border-white/50 rounded-full px-7 py-3 hover:bg-white hover:text-navy transition-all duration-300 w-fit"
        >
          Register for Summit &rarr;
        </Link>
      </div>
    </section>
  );
}
