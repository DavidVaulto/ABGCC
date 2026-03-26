import { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { UPCOMING_EVENTS, PAST_EVENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Events — ABGCC",
  description: "Discover upcoming ABGCC events, summits, and networking receptions around the world.",
};

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[72px]">
        <div
          className="h-[400px] md:h-[480px] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-navy/75" />
          <div className="relative z-10 h-full flex items-end px-6 lg:px-16 pb-16 max-w-content mx-auto">
            <div>
              <p className="text-brand-gold text-[11px] uppercase tracking-[3px] mb-3">
                Events
              </p>
              <h1 className="text-white text-[36px] md:text-[48px] font-bold leading-[1.15] max-w-lg">
                Where global business meets the Balkans.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <ScrollAnimation className="mb-16">
            <p className="text-brand-blue text-[11px] uppercase tracking-[3px] font-medium mb-3">
              Upcoming
            </p>
            <h2 className="text-navy text-[32px] md:text-[38px] font-bold">
              Upcoming Events
            </h2>
          </ScrollAnimation>

          {/* Featured Event */}
          {UPCOMING_EVENTS.filter((e) => e.featured).map((event) => (
            <ScrollAnimation key={event.title} className="mb-12">
              <div className="relative rounded-xl overflow-hidden">
                <div
                  className="h-[360px] md:h-[420px] bg-cover bg-center"
                  style={{ backgroundImage: `url('${event.image}')` }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(10, 22, 40, 0.85) 0%, rgba(10, 22, 40, 0.4) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-end p-8 md:p-12">
                  <div>
                    <span className="inline-block bg-brand-gold text-navy text-[11px] font-semibold uppercase tracking-[1px] px-3 py-1 rounded-full mb-4">
                      Featured &middot; {event.type}
                    </span>
                    <h3 className="text-white text-[28px] md:text-[36px] font-bold mb-3">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-white/80 text-[14px] mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={15} />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={15} />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-white/75 text-[15px] max-w-lg mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-brand-blue text-white text-[14px] font-medium rounded-full px-7 py-3 hover:bg-cta-hover transition-colors"
                    >
                      Register Now <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}

          {/* Other Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UPCOMING_EVENTS.filter((e) => !e.featured).map((event, i) => (
              <ScrollAnimation key={event.title} delay={i * 100}>
                <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-250 h-full flex flex-col">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url('${event.image}')` }}
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block text-brand-blue text-[11px] font-semibold uppercase tracking-[1px] mb-3">
                      {event.type}
                    </span>
                    <h3 className="text-navy text-[18px] font-bold mb-3">
                      {event.title}
                    </h3>
                    <div className="flex flex-col gap-1.5 text-gray-medium text-[13px] mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-gray-medium text-[14px] leading-[1.6] mb-5 flex-1">
                      {event.description}
                    </p>
                    <Link
                      href="/contact"
                      className="text-brand-blue text-[14px] font-medium hover:underline inline-flex items-center gap-1"
                    >
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section id="past" className="bg-gray-light py-24 lg:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <ScrollAnimation className="mb-16">
            <p className="text-brand-blue text-[11px] uppercase tracking-[3px] font-medium mb-3">
              Past Events
            </p>
            <h2 className="text-navy text-[32px] md:text-[38px] font-bold">
              Where we&apos;ve been.
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PAST_EVENTS.map((event, i) => (
              <ScrollAnimation key={event.title} delay={i * 100}>
                <div className="relative rounded-xl overflow-hidden group">
                  <div
                    className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${event.image}')` }}
                  />
                  <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/50 transition-colors" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <p className="text-white/70 text-[13px] mb-1">
                      {event.date} &middot; {event.location}
                    </p>
                    <h3 className="text-white text-[17px] font-bold">
                      {event.title}
                    </h3>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section id="host" className="bg-white py-24 lg:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <ScrollAnimation>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-brand-blue text-[11px] uppercase tracking-[3px] font-medium mb-3">
                Partner With Us
              </p>
              <h2 className="text-navy text-[32px] md:text-[38px] font-bold mb-4">
                Host an event with ABGCC
              </h2>
              <p className="text-gray-medium text-[16px] leading-[1.7] mb-8">
                Looking to co-host a conference, roundtable, or networking event
                focused on Southeastern Europe? We partner with organizations
                worldwide to create impactful business events.
              </p>
              <Link
                href="/contact"
                className="bg-brand-blue text-white text-[14px] font-medium rounded-full px-8 py-3.5 hover:bg-cta-hover transition-colors"
              >
                Get in Touch &rarr;
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
