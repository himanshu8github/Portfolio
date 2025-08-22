import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Smooth scroll to section by id
  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // close menu after click
    }
  };

  // Close menu automatically on scroll
  useEffect(() => {
    if (isMenuOpen) {
      const handleScroll = () => {
        setIsMenuOpen(false);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMenuOpen]);

  const sections = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-black shadow-md backdrop-blur-sm transition-transform duration-700 ease-out">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center font-medium text-sm text-gray-700">
        {/* Logo */}
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 tracking-wide animate-pulse">
          Himanshu.dev
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 sm:gap-6">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                {section}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-500">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden px-4 pb-4 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-5 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-3 bg-white rounded-xl py-4 shadow-md">
          {sections.map((section) => (
            <li key={section} className="w-full text-center">
              <button
                onClick={() => scrollToSection(section)}
                className="block w-full px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 font-semibold hover:bg-blue-200 transition"
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
