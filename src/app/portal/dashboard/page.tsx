"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LogOut,
  Calendar,
  Users,
  Building2,
  CreditCard,
  Bell,
  Settings,
  HelpCircle,
  ChevronRight,
  MapPin,
  Clock,
  Star,
  FileText,
  Globe,
} from "lucide-react";
import { UPCOMING_EVENTS, MEMBERSHIP_TIERS } from "@/lib/constants";

const businessTier = MEMBERSHIP_TIERS[2];

const MEMBER_PROFILES: Record<
  string,
  { name: string; company: string; role: string }
> = {
  "david@vaulto.ai": {
    name: "David Andonovski",
    company: "Vaulto AI",
    role: "CEO & Founder",
  },
  "nick@mdnfreightinc.com": {
    name: "Nick Markovic",
    company: "MDN Freight Inc.",
    role: "Managing Director",
  },
  "eprend@gmail.com": {
    name: "Eliza Prendzov",
    company: "ABGCC",
    role: "President",
  },
  "ta2130@nyu.edu": {
    name: "Tara Andric",
    company: "NYU",
    role: "Research Associate",
  },
};

const ANNOUNCEMENTS = [
  {
    title: "ABGCC Annual Summit 2026 Registration Now Open",
    date: "March 15, 2026",
    description:
      "Early bird registration is now available for Business members. Secure your spot at the premier Balkan business event in Skopje.",
    tag: "Event",
  },
  {
    title: "New Partnership: European Bank for Reconstruction",
    date: "March 10, 2026",
    description:
      "ABGCC has signed a strategic cooperation agreement with EBRD to facilitate investment in Western Balkans infrastructure.",
    tag: "Partnership",
  },
  {
    title: "Q1 2026 Balkan Market Report Available",
    date: "March 5, 2026",
    description:
      "The latest quarterly market analysis covering trade flows, FDI trends, and sector opportunities is now in your resources.",
    tag: "Report",
  },
];

const DIRECTORY_MEMBERS = [
  {
    company: "Balkan Energy Group",
    industry: "Energy & Infrastructure",
    country: "Serbia",
  },
  {
    company: "Adriatic Logistics",
    industry: "Trade & Logistics",
    country: "Croatia",
  },
  {
    company: "TechHub Sofia",
    industry: "Technology & IT",
    country: "Bulgaria",
  },
  {
    company: "Aegean Capital Partners",
    industry: "Finance & Banking",
    country: "Greece",
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const [memberEmail, setMemberEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("gccb_member");
    if (!stored) {
      router.replace("/portal");
      return;
    }
    setMemberEmail(stored);
    setLoading(false);
  }, [router]);

  if (loading || !memberEmail) {
    return (
      <main className="min-h-screen bg-gray-light flex items-center justify-center">
        <div className="text-gray-medium text-[15px]">Loading dashboard...</div>
      </main>
    );
  }

  const profile = MEMBER_PROFILES[memberEmail] || {
    name: memberEmail.split("@")[0],
    company: "ABGCC Member",
    role: "Member",
  };

  const handleSignOut = () => {
    localStorage.removeItem("gccb_member");
    router.push("/portal");
  };

  return (
    <main className="min-h-screen bg-gray-light">
      {/* Dashboard Header */}
      <section className="bg-navy pt-28 pb-10 lg:pt-32 lg:pb-12">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-brand-gold text-[11px] uppercase tracking-[3px] font-medium mb-2">
                Member Dashboard
              </p>
              <h1 className="text-white text-[28px] md:text-[34px] font-bold">
                Welcome, {profile.name.split(" ")[0]}.
              </h1>
              <p className="text-gray-blue text-[15px] mt-1">
                {profile.company} &middot; {profile.role}
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 text-white/70 text-[14px] hover:text-white transition-colors border border-white/20 rounded-lg px-4 py-2.5 hover:border-white/40"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="max-w-content mx-auto px-6 lg:px-10 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content — 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Membership Status */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <CreditCard size={20} className="text-brand-blue" />
                  </div>
                  <h2 className="text-navy text-[18px] font-bold">
                    Membership Status
                  </h2>
                </div>
                <span className="text-[12px] bg-green-50 text-green-600 font-semibold px-3 py-1 rounded-full">
                  Active
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-gray-medium text-[12px] uppercase tracking-[1px] mb-1">
                    Plan
                  </p>
                  <p className="text-navy text-[16px] font-bold">
                    {businessTier.name}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-gray-medium text-[12px] uppercase tracking-[1px] mb-1">
                    Member Since
                  </p>
                  <p className="text-navy text-[16px] font-bold">
                    March 2025
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-gray-medium text-[12px] uppercase tracking-[1px] mb-1">
                    Renewal
                  </p>
                  <p className="text-navy text-[16px] font-bold">
                    March 2027
                  </p>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Calendar size={20} className="text-brand-blue" />
                  </div>
                  <h2 className="text-navy text-[18px] font-bold">
                    Upcoming Events
                  </h2>
                </div>
                <Link
                  href="/events"
                  className="text-brand-blue text-[13px] font-medium hover:underline flex items-center gap-1"
                >
                  View all <ChevronRight size={14} />
                </Link>
              </div>
              <div className="space-y-4">
                {UPCOMING_EVENTS.slice(0, 3).map((event) => (
                  <div
                    key={event.title}
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-brand-blue/20 hover:bg-blue-50/30 transition-colors"
                  >
                    <div
                      className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0 hidden sm:block"
                      style={{ backgroundImage: `url('${event.image}')` }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-navy text-[15px] font-semibold">
                            {event.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 mt-1.5">
                            <span className="flex items-center gap-1 text-gray-medium text-[13px]">
                              <Clock size={12} />
                              {event.date}
                            </span>
                            <span className="flex items-center gap-1 text-gray-medium text-[13px]">
                              <MapPin size={12} />
                              {event.location}
                            </span>
                          </div>
                        </div>
                        <span className="text-[11px] bg-brand-blue/10 text-brand-blue font-semibold px-2.5 py-1 rounded-full shrink-0">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Bell size={20} className="text-brand-blue" />
                </div>
                <h2 className="text-navy text-[18px] font-bold">
                  Recent Announcements
                </h2>
              </div>
              <div className="space-y-4">
                {ANNOUNCEMENTS.map((a) => (
                  <div
                    key={a.title}
                    className="p-4 rounded-xl border border-gray-100"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] bg-brand-gold/10 text-brand-gold font-semibold px-2.5 py-1 rounded-full">
                        {a.tag}
                      </span>
                      <span className="text-gray-medium text-[12px]">
                        {a.date}
                      </span>
                    </div>
                    <h3 className="text-navy text-[15px] font-semibold mb-1">
                      {a.title}
                    </h3>
                    <p className="text-gray-medium text-[13px] leading-[1.6]">
                      {a.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Member Card */}
            <div className="bg-navy rounded-2xl p-6 text-white shadow-[0_4px_24px_rgba(10,22,40,0.3)]">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                  <Building2 size={24} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-[16px] font-bold">{profile.name}</p>
                  <p className="text-white/60 text-[13px]">
                    {profile.company}
                  </p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-[13px]">
                  <span className="text-white/50">Role</span>
                  <span className="font-medium">{profile.role}</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-white/50">Tier</span>
                  <span className="font-medium flex items-center gap-1">
                    <Star size={12} className="text-brand-gold" />
                    {businessTier.name}
                  </span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-white/50">Email</span>
                  <span className="font-medium text-[12px]">
                    {memberEmail}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
              <h3 className="text-navy text-[15px] font-bold mb-4">
                Quick Links
              </h3>
              <div className="space-y-1">
                {[
                  { icon: Calendar, label: "Events", href: "/events" },
                  { icon: Users, label: "Member Directory", href: "#" },
                  { icon: FileText, label: "Market Reports", href: "#" },
                  { icon: Globe, label: "Services", href: "/services" },
                  { icon: Settings, label: "Account Settings", href: "#" },
                  { icon: HelpCircle, label: "Contact Support", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-medium text-[14px] hover:bg-blue-50 hover:text-brand-blue transition-colors"
                  >
                    <link.icon size={16} />
                    {link.label}
                    <ChevronRight size={14} className="ml-auto opacity-40" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Member Directory Preview */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-navy text-[15px] font-bold">
                  Member Directory
                </h3>
                <span className="text-gray-medium text-[12px]">
                  500+ members
                </span>
              </div>
              <div className="space-y-3">
                {DIRECTORY_MEMBERS.map((m) => (
                  <div
                    key={m.company}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-100"
                  >
                    <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                      <Building2 size={16} className="text-gray-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-navy text-[13px] font-semibold truncate">
                        {m.company}
                      </p>
                      <p className="text-gray-medium text-[11px]">
                        {m.industry} &middot; {m.country}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
