import Link from "next/link";

export default function AnnouncementBanner() {
  return (
    <Link
      href="/events"
      className="block w-full bg-brand-blue hover:bg-[#1445B8] transition-colors py-3.5 px-6 text-center"
    >
      <p className="text-brand-gold text-[13px] md:text-[14px] font-medium tracking-[0.5px]">
        Latest news: Global Chamber officially expands operations to Asia-Pacific
        and Gulf regions &rarr;
      </p>
    </Link>
  );
}
