import { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Heart, Users } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { TEAM_MEMBERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About — ABGCC",
  description: "Learn about the American Balkan Global Chamber of Commerce, our mission, vision, and leadership team.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[72px]">
        <div
          className="h-[400px] md:h-[480px] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-navy/75" />
          <div className="relative z-10 h-full flex items-end px-6 lg:px-16 pb-16 max-w-content mx-auto">
            <div>
              <p className="text-brand-gold text-[11px] uppercase tracking-[3px] mb-3">
                Who We Are
              </p>
              <h1 className="text-white text-[36px] md:text-[48px] font-bold leading-[1.15]">
                About the ABGCC
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="bg-white py-24 lg:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollAnimation>
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target size={28} className="text-brand-blue" />
                </div>
                <div>
                  <h2 className="text-navy text-[28px] md:text-[32px] font-bold mb-4">
                    Our Mission
                  </h2>
                  <p className="text-gray-medium text-[16px] leading-[1.7]">
                    To serve as the premier platform connecting businesses,
                    investors, and professionals worldwide with the dynamic and
                    growing economies of Southeastern Europe. Through trade
                    facilitation, investment matchmaking, and strategic
                    partnerships, we drive economic growth and international
                    collaboration across the Balkan region.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={150}>
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye size={28} className="text-brand-blue" />
                </div>
                <div>
                  <h2 id="vision" className="text-navy text-[28px] md:text-[32px] font-bold mb-4">
                    Our Vision
                  </h2>
                  <p className="text-gray-medium text-[16px] leading-[1.7]">
                    A connected, prosperous, and globally integrated Balkans —
                    where businesses thrive across borders, talent flows freely,
                    and the region&apos;s vast potential is fully realized on the
                    world stage. We envision the Balkans as a cornerstone of
                    European and global commerce.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-light py-24 lg:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <ScrollAnimation className="text-center mb-16">
            <p className="text-brand-blue text-[11px] uppercase tracking-[3px] font-medium mb-3">
              What Drives Us
            </p>
            <h2 className="text-navy text-[32px] md:text-[38px] font-bold">
              Our Core Values
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart size={28} className="text-brand-blue" />,
                title: "Integrity",
                body: "We operate with the highest standards of transparency, ethics, and accountability in every partnership and initiative.",
              },
              {
                icon: <Users size={28} className="text-brand-blue" />,
                title: "Collaboration",
                body: "We believe in the power of partnership — bridging cultures, industries, and borders to create lasting value for all stakeholders.",
              },
              {
                icon: <Target size={28} className="text-brand-blue" />,
                title: "Impact",
                body: "Every initiative we undertake is measured by its tangible contribution to economic growth, job creation, and regional prosperity.",
              },
            ].map((val, i) => (
              <ScrollAnimation key={val.title} delay={i * 100}>
                <div className="bg-white rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)] text-center h-full">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-5">
                    {val.icon}
                  </div>
                  <h3 className="text-navy text-[20px] font-bold mb-3">
                    {val.title}
                  </h3>
                  <p className="text-gray-medium text-[15px] leading-[1.6]">
                    {val.body}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* President Spotlight */}
      <section id="president" className="bg-white py-24 lg:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <ScrollAnimation>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div
                className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-cover bg-center flex-shrink-0"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face')",
                }}
              />
              <div>
                <p className="text-brand-gold text-[11px] uppercase tracking-[3px] mb-2">
                  President
                </p>
                <h2 className="text-navy text-[32px] font-bold mb-4">
                  Eliza Prendzov
                </h2>
                <p className="text-gray-medium text-[16px] leading-[1.7] max-w-lg">
                  With over two decades of experience in international business
                  development and diplomacy, Eliza Prendzov leads the ABGCC with
                  a vision to transform how the world engages with the Balkans.
                  Under her leadership, the chamber has grown from a regional
                  initiative to a global platform spanning 40+ countries.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team Grid */}
      <section id="team" className="bg-gray-light py-24 lg:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <ScrollAnimation className="text-center mb-16">
            <p className="text-brand-blue text-[11px] uppercase tracking-[3px] font-medium mb-3">
              Our Team
            </p>
            <h2 className="text-navy text-[32px] md:text-[38px] font-bold">
              Leadership & Team
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <ScrollAnimation key={member.name} delay={i * 80}>
                <div className="bg-white rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)] text-center">
                  <div
                    className="w-24 h-24 rounded-full bg-cover bg-center mx-auto mb-5"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  />
                  <h3 className="text-navy text-[18px] font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-blue text-[13px] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-medium text-[14px] leading-[1.6]">
                    {member.bio}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section id="board" className="bg-white py-24 lg:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <ScrollAnimation className="text-center mb-16">
            <p className="text-brand-blue text-[11px] uppercase tracking-[3px] font-medium mb-3">
              Governance
            </p>
            <h2 className="text-navy text-[32px] md:text-[38px] font-bold">
              Board of Directors
            </h2>
            <p className="text-gray-medium text-[16px] mt-4 max-w-xl mx-auto leading-[1.7]">
              Our board comprises distinguished leaders from business, finance,
              and diplomacy who guide ABGCC&apos;s strategic direction.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Eliza Prendzov", role: "President & Chair" },
              { name: "Marko Stefanovic", role: "Vice President" },
              { name: "Dr. Sofia Alexiou", role: "Independent Director" },
              { name: "James Morrison", role: "Independent Director" },
              { name: "Anja Kovac", role: "Secretary General" },
              { name: "Robert Vasic", role: "Treasurer" },
            ].map((director, i) => (
              <ScrollAnimation key={director.name} delay={i * 60}>
                <div className="flex items-center gap-4 bg-gray-light rounded-lg p-5">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[14px] font-bold">
                      {director.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-navy text-[16px] font-semibold">
                      {director.name}
                    </p>
                    <p className="text-gray-medium text-[13px]">
                      {director.role}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-content mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white text-[28px] md:text-[34px] font-bold mb-4">
            Want to learn more about our work?
          </h2>
          <p className="text-gray-blue text-[16px] mb-8 max-w-md mx-auto">
            Explore our services, upcoming events, or get in touch directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="bg-brand-blue text-white text-[14px] font-medium rounded-full px-7 py-3 hover:bg-cta-hover transition-colors"
            >
              Our Services &rarr;
            </Link>
            <Link
              href="/contact"
              className="text-white text-[14px] font-medium border border-white/40 rounded-full px-7 py-3 hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
