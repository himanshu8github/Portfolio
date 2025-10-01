import React from "react";

const Experience = () => (
  <section
    className="py-16 bg-black px-8 text-center text-white"
    id="experience"
  >
    <h2 className="text-3xl font-semibold mb-8 text-blue-500">Experience</h2>

    <div className="max-w-4xl mx-auto grid gap-8">
      {/* Kalvig Internship */}
      <div className="p-6 border rounded-xl shadow bg-gray-900 text-left">
        <h3 className="text-2xl font-bold mb-2 text-white">
          Full Stack Web Developer Intern – Kalvig
        </h3>
        <p className="text-gray-400 text-sm mb-2">Sep 2025 – Present</p>
        <p className="text-gray-300 mb-3">
           Currently working as a <strong>Full Stack Web Developer Intern</strong> at <strong>Kalvig</strong>, 
          where I build and deploy scalable web applications. My role involves frontend and backend 
          development using modern frameworks, API integration, and deploying real-world projects.  
          Along with development work, the company is also providing me <strong>training on Cloud 
          technologies</strong> including <strong>AWS</strong> and <strong>Microsoft Azure</strong>.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          <li>Developing full-stack applications with React, Node.js, and Express</li>
          <li>Working with cloud-based deployments and serverless functions</li>
          <li>Training and hands-on learning in AWS and Microsoft Azure</li>
          
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
