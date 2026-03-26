import Hero from "@/components/Hero";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import OrgIntro from "@/components/OrgIntro";
import ServicePillars from "@/components/ServicePillars";
import GlobeSection from "@/components/GlobeSection";
import StatsCounter from "@/components/StatsCounter";
import ConferencePhoto from "@/components/ConferencePhoto";
import ValuePillars from "@/components/ValuePillars";
import MembershipCTA from "@/components/MembershipCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AnnouncementBanner />
      <OrgIntro />
      <ServicePillars />
      <GlobeSection />
      <StatsCounter />
      <ConferencePhoto />
      <ValuePillars />
      <MembershipCTA />
    </>
  );
}
