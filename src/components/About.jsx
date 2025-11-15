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
          I specialize in building scalable web applications with the MERN
           stack. My approach focuses on clean architecture, writing maintainable code, 
          and delivering production-ready solutions that work reliably.
          </p>
        </div>

        {/* Card 2: What I Do */}
        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 animate-slideUp" style={{animationDelay: "0.2s"}}>
          <Brain className="w-8 h-8 text-purple-400 mb-3" />
          <h3 className="text-lg font-semibold mb-2 text-purple-400">AI Enthusiast</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
           I've deployed four AI-powered projects currently serving over 50 active users. Each one taught me something new, and I'm always looking for the next challenge to tackle.
          </p>
        </div>
      </div>


{/* Detailed Paragraphs */}
      <div className="space-y-6 animate-slideUp" style={{animationDelay: "0.3s"}}>
        <p className="text-white text-base md:text-lg leading-relaxed">
          I'm Himanshu, a final-year Computer Science Engineering student and Full Stack Developer intern at Kalvig. 
          I build web applications that solve real problems, from travel planning tools to DSA learning platforms.
        </p>

        <p className="text-white text-base md:text-lg leading-relaxed">
         I work with React, Node.js, MongoDB, and Firebase, with hands-on experience integrating AI APIs like Gemini, Cohere, and Groq. 
         I've shipped 4+ projects serving 50+ active users, always focusing on clean code and user experiences that just work.
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