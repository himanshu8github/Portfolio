import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    gsap.from(navbarRef.current, {
      y: -9,
      opacity: 100,
      duration: 1,
     delay: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <header
      ref={navbarRef}
      className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm"
    >
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center font-medium text-sm text-gray-700">
        {/* Logo / Title */}
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 tracking-wide animate-pulse">
          Himanshu.dev
        </div>

        {/* Menu Links */}
        <ul className="flex gap-4 sm:gap-6">
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
      </nav>
    </header>
  );
};

export default Navbar;
