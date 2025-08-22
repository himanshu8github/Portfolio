import React from "react";

const Projects = () => (
  <section
    className="py-16 bg-black px-8 text-center text-white"
    id="projects"
  >
    <h2 className="text-3xl font-semibold mb-8 text-blue-500">Projects</h2>

    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* TravelBuddy */}
      <div className="p-6 border rounded-xl shadow bg-gray-900">
        <h3 className="text-2xl font-bold mb-2 text-white">TravelBuddy</h3>
        <p className="mb-3 text-gray-300">
          AI-powered travel planner generating personalized itineraries using Gemini and Cohere API.
          Includes secure Firebase authentication and smart trip recommendations.
        </p>
        <div className="text-sm text-gray-400 mb-3">
          <strong>Tech Used:</strong> React, Tailwind CSS, Shadcn, Gemini API, Cohere API,
          Express, Node.js, Firebase
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://travelbuddy-1-m1pr.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-600 font-medium"
          >
            Live
          </a>
          <a
            href="https://github.com/himanshu8github/TravelBuddy"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-600 font-medium"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Ethical AI Detector */}
      <div className="p-6 border rounded-xl shadow bg-gray-900">
        <h3 className="text-2xl font-bold mb-2 text-white">Ethical AI Detector</h3>
        <p className="mb-3 text-gray-300">
          AI-driven bias detection tool that analyzes cultural, political, and emotional biases in text.
          Provides real-time scoring and rewriting suggestions for inclusive communication.
        </p>
        <div className="text-sm text-gray-400 mb-3">
          <strong>Tech Used:</strong> TypeScript, React, Shadcn, Gemini API, Express
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://ai-baised-frontend.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-600 font-medium"
          >
            Live
          </a>
          <a
            href="https://github.com/himanshu8github/BiasedTextAnalyserAIFrontend"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-600 font-medium"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* TextTune */}
      <div className="p-6 border rounded-xl shadow bg-gray-900">
        <h3 className="text-2xl font-bold mb-2 text-white">TextTune</h3>
        <p className="mb-3 text-gray-300">
          AI writing assistant with grammar detection, contextual suggestions, and multilingual translation.
          Enhanced UI with optimized performance and real-time writing improvements.
        </p>
        <div className="text-sm text-gray-400 mb-3">
          <strong>Tech Used:</strong> React, Tailwind CSS, Gemini API, Express, Node.js, Firebase
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://texttune-project.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-600 font-medium"
          >
            Live
          </a>
          <a
            href="https://github.com/himanshu8github/Ai-ChitChat"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-600 font-medium"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Pronouncy */}
      <div className="p-6 border rounded-xl shadow bg-gray-900">
        <h3 className="text-2xl font-bold mb-2 text-white">Pronouncy</h3>
        <p className="mb-3 text-gray-300">
          Real-time pronunciation training tool with TTS and speech feedback. 
          Includes JWT authentication, pronunciation history, and mobile-friendly design.
        </p>
        <div className="text-sm text-gray-400 mb-3">
          <strong>Tech Used:</strong> React, Node.js, Express, MongoDB, JWT, Web Speech API
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://pronouncy-frontend.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-600 font-medium"
          >
            Live
          </a>
          <a
            href="https://github.com/himanshu8github/Pronouncy"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-600 font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
