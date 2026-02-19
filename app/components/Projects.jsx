'use client';

import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TravelBuddy",
      emoji: "✈️",
      description: "AI-powered travel planner generating personalized itineraries using Gemini and Cohere API. Includes secure Firebase authentication and smart trip recommendations.",
      tech: ["React", "Tailwind CSS", "Shadcn", "Gemini API", "Cohere API", "Express", "Node.js", "Firebase"],
      live: "https://travelbuddy-1-m1pr.onrender.com/",
      github: "https://github.com/himanshu8github/TravelBuddy"
    },
    {
      title: "Ethical AI Detector",
      emoji: "🤖",
      description: "AI-driven bias detection tool that analyzes cultural, political, and emotional biases in text. Provides real-time scoring and rewriting suggestions for inclusive communication.",
      tech: ["TypeScript", "React", "Shadcn", "Gemini API", "Express"],
      live: "https://ai-baised-frontend.vercel.app/",
      github: "https://github.com/himanshu8github/BiasedTextAnalyserAIFrontend"
    },
    // {
    //   title: "TextTune",
    //   emoji: "✍️",
    //   description: "AI writing assistant with grammar detection, contextual suggestions, and multilingual translation. Enhanced UI with optimized performance and real-time writing improvements.",
    //   tech: ["React", "Tailwind CSS", "Gemini API", "Express", "Node.js", "Firebase"],
    //   live: "https://texttune-project.onrender.com",
    //   github: "https://github.com/himanshu8github/Ai-ChitChat"
    // },
    {
      title: "CodeMatrix",
      emoji: "🚀",
      description: "Master Data Structures & Algorithms with AI-powered guidance and real-time code execution. Write code in C++, Java, or JavaScript, test against test cases instantly.",
      tech: ["React", "Tailwind CSS", "DaisyUI", "Monaco Editor", "Node.js", "Express", "MongoDB", "Redis", "Groq API", "Judge0 API"],
      live: "https://code-matrix-one.vercel.app/auth",
      github: "https://github.com/himanshu8github/codeMatrix"
    }
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-black via-gray-950 to-black px-6 md:px-12 text-white"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Showcasing my best work built with modern technologies and deployed to production.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] cursor-pointer animate-slideUp"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.emoji} {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 5).map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-medium hover:bg-blue-500/20 transition"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2.5 py-1 rounded-full bg-gray-700/50 border border-gray-600 text-gray-300 text-xs font-medium">
                      +{project.tech.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition transform hover:scale-105"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-gray-300 text-sm font-medium hover:border-gray-500 hover:text-white transition"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
