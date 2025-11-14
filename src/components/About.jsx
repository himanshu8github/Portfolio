import React from "react";
import { Code, Brain } from "lucide-react";

const About = () => (
  <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black px-6 md:px-12 text-white" id="about">
    <div className="max-w-4xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12 animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Card 1: Who I Am */}
        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 animate-slideUp" style={{animationDelay: "0.1s"}}>
          <Code className="w-8 h-8 text-blue-400 mb-3" />
          <h3 className="text-lg font-semibold mb-2 text-blue-400">Developer</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Final-year CSE student building production-ready full-stack applications with MERN stack and modern web technologies.
          </p>
        </div>

        {/* Card 2: What I Do */}
        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 animate-slideUp" style={{animationDelay: "0.2s"}}>
          <Brain className="w-8 h-8 text-purple-400 mb-3" />
          <h3 className="text-lg font-semibold mb-2 text-purple-400">AI Enthusiast</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            4+ AI-powered projects deployed with 50+ active users. Expert in integrating Gemini, Cohere, and Groq APIs.
          </p>
        </div>
      </div>

      {/* Detailed Paragraphs */}
      <div className="space-y-6 animate-slideUp" style={{animationDelay: "0.3s"}}>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify">
          I'm <span className="text-blue-400 font-semibold">Himanshu Choudhary</span>, a <span className="text-blue-400 font-semibold">final-year Computer Science Engineering student</span> currently interning as a <span className="text-blue-400 font-semibold">Full Stack Web Developer at Kalvig</span>. With a strong foundation in full-stack development and AI integration, I've successfully built and deployed <span className="text-purple-400 font-semibold">4+ AI-driven projects</span> that serve <span className="text-purple-400 font-semibold">50+ active users</span>.
        </p>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify">
          My expertise spans across <span className="text-blue-400 font-semibold">React, Node.js, Express, MongoDB, Firebase, and Tailwind CSS</span> for frontend and backend development. I'm proficient in integrating cutting-edge AI APIs including <span className="text-purple-400 font-semibold">Gemini, Cohere, and Groq</span> to create intelligent, user-centric applications. Notable projects include <span className="text-green-400 font-semibold">TravelBuddy</span> (AI travel planner), <span className="text-green-400 font-semibold">CodeMatrix</span> (DSA learning platform), and <span className="text-green-400 font-semibold">Ethical AI Detector</span> (bias detection tool).
        </p>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify">
          Beyond coding, I'm driven by a passion for <span className="text-blue-400 font-semibold">continuous learning</span> and <span className="text-blue-400 font-semibold">knowledge sharing</span>. Whether it's experimenting with new technologies, optimizing performance, or exploring emerging AI trends, I'm always motivated to push boundaries and grow as a developer. I believe in building solutions that are not just functional, but also scalable, user-friendly, and impactful.
        </p>
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

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fadeIn {
        animation: fadeIn 0.6s ease-out;
      }

      .animate-slideUp {
        animation: slideUp 0.6s ease-out forwards;
        opacity: 0;
      }
    `}</style>
  </section>
);

export default About;