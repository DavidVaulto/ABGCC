"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { NAV_COLUMNS } from "@/lib/constants";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  return (
    <div
      className={`mega-menu-overlay fixed inset-0 z-[2000] bg-navy ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <div className="max-w-container mx-auto px-6 lg:px-10 py-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity mb-16"
        >
          <X size={20} strokeWidth={1.5} />
          <span className="text-[11px] font-medium tracking-[2px] uppercase">
            Close
          </span>
        </button>

        {/* Navigation columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          {NAV_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-white text-[15px] font-semibold mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-gray-blue text-[14px] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: social + contact */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-blue text-[13px] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-blue text-[13px] hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-blue text-[13px] hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
          <a
            href="mailto:info@gccb.org"
            className="text-gray-blue text-[13px] hover:text-white transition-colors"
          >
            info@gccb.org
          </a>
        </div>
      </div>
    </div>
  );
}
