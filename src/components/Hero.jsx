import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-blue-50 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Hello I'm <span className="text-blue-600">Himanshu</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
          Software Developer
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          I turn ideas into responsive, interactive web experiences ✨. Passionate about frontend magic,
          backend logic, and building full-stack apps that solve real-world problems.
          Exploring Java, MERN, Python and AI to level up my craft.
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
            className="bg-gray-800 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-900 transition"
          >
            🚀 View Work
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
