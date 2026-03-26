"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, ChevronDown } from "lucide-react";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? "bg-navy shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-container mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between relative">
          {/* Left: Hamburger + Search */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
            >
              <Menu size={20} strokeWidth={1.5} />
              <span className="text-[11px] font-medium tracking-[2px] uppercase hidden sm:inline">
                Menu
              </span>
            </button>
            <button className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
              <Search size={18} strokeWidth={1.5} />
              <span className="text-[11px] font-medium tracking-[2px] uppercase hidden sm:inline">
                Search
              </span>
            </button>
          </div>

          {/* Center: Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group"
          >
            <div className="relative">
              {/* Circle motif */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className="absolute -top-1 left-1/2 -translate-x-1/2"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="none"
                  stroke="rgba(201,168,76,0.4)"
                  strokeWidth="1"
                />
              </svg>
              <span className="text-white text-[22px] font-bold tracking-[1px] relative z-10">
                ABGCC
              </span>
            </div>
            <span className="text-brand-gold text-[9px] uppercase tracking-[3px] mt-0.5 whitespace-nowrap hidden md:block">
              American Balkan Global Chamber of Commerce
            </span>
          </Link>

          {/* Right: Language + Member Portal */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-1 text-white text-[12px] tracking-[1px] border border-white/40 rounded-full px-3 py-1.5 hover:bg-white/10 transition-colors">
              EN
              <ChevronDown size={12} />
            </button>
            <Link
              href="/portal"
              className="hidden md:flex items-center gap-1 text-white text-[12px] tracking-[1px] uppercase border border-white/40 rounded-full px-4 py-1.5 hover:bg-white hover:text-navy transition-all"
            >
              Member Portal
              <span className="ml-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </nav>

      <MegaMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
