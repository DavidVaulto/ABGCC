"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[72px]">
        <div
          className="h-[360px] md:h-[420px] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-navy/75" />
          <div className="relative z-10 h-full flex items-end px-6 lg:px-16 pb-16 max-w-content mx-auto">
            <div>
              <p className="text-brand-gold text-[11px] uppercase tracking-[3px] mb-3">
                Get in Touch
              </p>
              <h1 className="text-white text-[36px] md:text-[48px] font-bold leading-[1.15]">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            {/* Form */}
            <ScrollAnimation className="lg:w-[60%]">
              <h2 className="text-navy text-[28px] md:text-[32px] font-bold mb-2">
                Send us a message
              </h2>
              <p className="text-gray-medium text-[16px] mb-8">
                Have a question about membership, events, or partnerships?
                We&apos;d love to hear from you.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-navy text-[20px] font-bold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-medium text-[15px]">
                    Thank you for reaching out. Our team will get back to you
                    within 1-2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-navy text-[13px] font-medium mb-1.5">
                        First Name *
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-navy text-[13px] font-medium mb-1.5">
                        Last Name *
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-navy text-[13px] font-medium mb-1.5">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-navy text-[13px] font-medium mb-1.5">
                      Organization
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                      placeholder="Your company or organization"
                    />
                  </div>
                  <div>
                    <label className="block text-navy text-[13px] font-medium mb-1.5">
                      Subject *
                    </label>
                    <select
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors bg-white"
                    >
                      <option value="">Select a topic</option>
                      <option>Membership Inquiry</option>
                      <option>Partnership Opportunity</option>
                      <option>Event Information</option>
                      <option>Investment & Trade</option>
                      <option>Media & Press</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-navy text-[13px] font-medium mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-brand-blue text-white text-[14px] font-semibold rounded-full px-8 py-3.5 hover:bg-cta-hover transition-colors flex items-center gap-2"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
              )}
            </ScrollAnimation>

            {/* Contact Info */}
            <ScrollAnimation className="lg:w-[40%]" delay={200}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-navy text-[18px] font-bold mb-4">
                    Our Offices
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        city: "New York",
                        address: "One World Trade Center, Suite 8500",
                        address2: "New York, NY 10007, USA",
                      },
                      {
                        city: "Skopje",
                        address: "Macedonia Street 12",
                        address2: "1000 Skopje, North Macedonia",
                      },
                      {
                        city: "London",
                        address: "1 Canada Square, Canary Wharf",
                        address2: "London E14 5AB, United Kingdom",
                      },
                    ].map((office) => (
                      <div key={office.city} className="flex items-start gap-3">
                        <MapPin
                          size={18}
                          className="text-brand-blue mt-1 flex-shrink-0"
                        />
                        <div>
                          <p className="text-navy text-[15px] font-semibold">
                            {office.city}
                          </p>
                          <p className="text-gray-medium text-[14px]">
                            {office.address}
                          </p>
                          <p className="text-gray-medium text-[14px]">
                            {office.address2}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-start gap-3 mb-4">
                    <Mail
                      size={18}
                      className="text-brand-blue mt-1 flex-shrink-0"
                    />
                    <div>
                      <p className="text-navy text-[15px] font-semibold mb-0.5">
                        Email
                      </p>
                      <a
                        href="mailto:info@gccb.org"
                        className="text-brand-blue text-[14px] hover:underline"
                      >
                        info@gccb.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone
                      size={18}
                      className="text-brand-blue mt-1 flex-shrink-0"
                    />
                    <div>
                      <p className="text-navy text-[15px] font-semibold mb-0.5">
                        Phone
                      </p>
                      <p className="text-gray-medium text-[14px]">
                        +1 (212) 555-0190
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-xl overflow-hidden bg-gray-light h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="text-gray-medium mx-auto mb-2" />
                    <p className="text-gray-medium text-[14px]">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
}
