import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center font-medium text-sm text-gray-700">
        <div className="text-lg font-bold text-blue-600"></div>
        <ul className="flex gap-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors duration-200"
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
