import React from "react";
import { Github, Mail, ExternalLink } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black text-white px-4 py-16">
      <div className="text-center max-w-2xl animate-fadeIn">
       

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight animate-slideDown" style={{animationDelay: "0.1s"}}>
          Hey, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Himanshu
          </span>
        </h1>

        {/* Subheading */}
        <h2 className="text-base md:text-lg font-semibold text-gray-300 mb-3 animate-slideDown" style={{animationDelay: "0.2s"}}>
          Full-Stack Developer | AI Enthusiast
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed max-w-xl mx-auto animate-slideDown" style={{animationDelay: "0.3s"}}>
          I build production-ready web applications using Nest.js, Next.js, Typescript.... and AI APIs. 
          Currently working as Associate FullStack Developer at <span className="text-blue-400 font-semibold">Almonds.ai</span> and 
          passionate about creating impactful solutions.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-7 max-w-sm mx-auto animate-slideDown" style={{animationDelay: "0.4s"}}>
          <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition">
            <div className="text-xl font-bold text-blue-400">4+</div>
            <div className="text-xs text-gray-400">AI Projects</div>
          </div>
          <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition">
            <div className="text-xl font-bold text-blue-400">50+</div>
            <div className="text-xs text-gray-400">Active Users</div>
          </div>
          <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition">
            <div className="text-xl font-bold text-blue-400">MERN</div>
            <div className="text-xs text-gray-400">Stack Expert</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 animate-slideDown" style={{animationDelay: "0.5s"}}>
          {/* Contact Me */}
          <button
            onClick={() => scrollToSection("contact")}
            className="group px-6 py-2 rounded-lg font-medium text-sm bg-blue-600 text-white hover:bg-blue-700 transition transform hover:scale-105 flex items-center gap-2"
          >
            <Mail size={16} /> Contact Me
          </button>

          {/* View Projects */}
          <button
            onClick={() => scrollToSection("projects")}
            className="group px-6 py-2 rounded-lg font-medium text-sm border-2 border-purple-600 text-purple-400 hover:bg-purple-600/10 transition transform hover:scale-105 flex items-center gap-2"
          >
            View Projects
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/himanshu8github"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-2 rounded-lg font-medium text-sm border-2 border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition transform hover:scale-105 flex items-center gap-2"
          >
            <Github size={16} /> GitHub
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce mt-8">
          <div className="text-gray-600 text-xs md:text-sm">Scroll to explore</div>
          <div className="text-xl">↓</div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}