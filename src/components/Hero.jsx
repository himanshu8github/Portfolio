import React from "react";
import { Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="text-center max-w-2xl">
        <h1
          className="text-4xl md:text-6xl font-bold text-gray-100 mb-4
          animate-[fade-up_1s_ease-out_forwards]"
        >
          Hello, I'm <span className="text-blue-600">Himanshu</span>
        </h1>

        <h2
          className="text-2xl md:text-3xl font-semibold text-gray-400 mb-6 
          animate-[fade-up_1s_ease-out_forwards] [animation-delay:200ms]"
        >
          Full-Stack Developer | AI-Driven Projects | CSE Student
        </h2>

        <p
          className="text-gray-300 text-lg md:text-xl mb-8
          animate-[fade-up_1s_ease-out_forwards] [animation-delay:400ms]"
        >
          I specialize in building AI-powered full-stack apps using the MERN stack. Deployed 4+ real-world solutions with 50+ active users.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 
          animate-[fade-up_1s_ease-out_forwards] [animation-delay:600ms]"
        >
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
            href="https://github.com/himanshu8github"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-900 transition"
          >
            <Github size={20} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
