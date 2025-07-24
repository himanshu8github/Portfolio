import React from "react";

const Projects = () => (
  <section
    className="py-16 bg-white px-8 text-center"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="200"
    id="projects"
  >
    <h2 className="text-3xl font-semibold mb-8 text-purple-700">Projects</h2>

    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* AI-ChitChat Project */}
      <div
        className="p-6 border rounded-xl shadow bg-gray-50"
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="150"
      >
        <h3 className="text-2xl font-bold mb-2 text-gray-800">AI-ChitChat</h3>
        <p className="mb-3 text-gray-700">
          Full-stack AI chatbot with real-time chatting, Firebase authentication (Email/Google),
          Gemini API integration for intelligent AI responses, and OTP verification via Nodemailer.
        </p>
        <div className="text-sm text-gray-600 mb-3">
          <strong>Tech Used:</strong> React, Tailwind CSS, Gemini API, Firebase, Node.js, Express, Nodemailer
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://ai-chitchat-frontend.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline hover:text-blue-800 font-medium"
          >
            Live
          </a>
          <a
            href="https://github.com/himanshu8github/Ai-ChitChat"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline hover:text-blue-800 font-medium"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Pronouncy Trainer Project */}
      <div
        className="p-6 border rounded-xl shadow bg-gray-50"
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Pronouncy </h3>
        <p className="mb-3 text-gray-700">
          Full-stack pronunciation training web app with real-time TTS and speech feedback using Web Speech API.
          Includes JWT auth, user history tracking, and mobile-responsive design.
        </p>
        <div className="text-sm text-gray-600 mb-3">
          <strong>Tech Used:</strong> React, Tailwind CSS, Node.js, Express, MongoDB
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://pronouncy-frontend.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline hover:text-blue-800 font-medium"
          >
            Live
          </a>
          <a
            href="https://github.com/himanshu8github/Pronouncy"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline hover:text-blue-800 font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
