import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5faff] via-[#e0f2fe] to-[#dbeafe] px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Hello, I'm <span className="text-blue-600">Himanshu</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Final-year Computer Science student who loves turning ideas into full-stack web apps.
          I build interactive, responsive, real-world solutions using the MERN stack, Java, and cloud tools like AWS.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
          >
            📬 Contact Me
          </a>
          <a
            href="#projects"
            className="bg-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-purple-700 transition"
          >
            🚀 View Projects
          </a>
          <a
            href="/Himanshu_Resume.pdf"
            download="Himanshu_Resume.pdf"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-2xl font-semibold hover:bg-blue-50 transition"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
