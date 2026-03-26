import Link from "next/link";
import { NAV_COLUMNS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-20">
        {/* Top: Logo + Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          <div>
            <div className="mb-2">
              <span className="text-[22px] font-bold tracking-[1px]">ABGCC</span>
            </div>
            <p className="text-brand-gold text-[9px] uppercase tracking-[3px]">
              American Balkan Global Chamber of Commerce
            </p>
            <p className="text-gray-blue text-[14px] mt-4 max-w-sm leading-relaxed">
              The premier platform for international business and investment
              in Southeastern Europe.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <h4 className="text-[13px] font-semibold uppercase tracking-[2px] mb-3">
              Stay Updated
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border border-white/20 text-white text-[14px] px-4 py-2.5 rounded-l-lg focus:outline-none focus:border-brand-blue w-64 placeholder:text-gray-blue"
              />
              <button className="bg-brand-blue text-white text-[13px] font-medium px-5 py-2.5 rounded-r-lg hover:bg-cta-hover transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Navigation columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {NAV_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-semibold uppercase tracking-[1px] mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-blue text-[13px] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-blue text-[12px]">
            &copy; {new Date().getFullYear()} American Balkan Global Chamber of Commerce.
            All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-blue text-[12px] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-blue text-[12px] hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-blue text-[12px] hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
