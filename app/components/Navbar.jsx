'use client';

import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  // Scroll with offset (so sticky navbar doesn't cover the target)
  const scrollWithOffset = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerH = headerRef.current?.offsetHeight ?? 0;
    const y = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Click handler for both desktop & mobile
  const handleNavClick = (name) => {
    const id = name.toLowerCase();
    // Close menu first, then scroll on next frames (mobile-safe)
    setIsMenuOpen(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollWithOffset(id));
    });
  };

  // Auto-close on page scroll
  useEffect(() => {
    if (!isMenuOpen) return;
    const onScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 tracking-wide hover:scale-105 transition cursor-pointer"
          onClick={() => scrollWithOffset("home")}
        >
          Himanshu.dev
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {sections.map((section) => (
            <li key={section}>
              <button
                type="button"
                onClick={() => handleNavClick(section)}
                className="text-gray-300 hover:text-blue-400 font-medium text-sm transition-colors duration-300 relative group"
              >
                {section}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            type="button" 
            onClick={toggleMenu} 
            className="text-gray-300 hover:text-blue-400 transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50 px-4 py-4 animate-slideDown">
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section}>
                <button
                  type="button"
                  onClick={() => handleNavClick(section)}
                  className="w-full text-left px-4 py-2.5 rounded-lg text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 font-medium text-sm transition-all duration-300"
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
