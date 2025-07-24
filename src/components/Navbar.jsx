import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(navbarRef.current, {
      y: -10,
      opacity: 1,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      ref={navbarRef}
      className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center font-medium text-sm text-gray-700">
        {/* Logo */}
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 tracking-wide animate-pulse">
          Himanshu.dev
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 sm:gap-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-600">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col items-center gap-3 bg-white rounded-xl py-4 shadow-md">
            {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
              <li key={section} className="w-full text-center">
                <a
                  href={`#${section.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 font-semibold hover:bg-blue-200 transition"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
