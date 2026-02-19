'use client';

import React from "react";
import { Code2, Database, Cpu, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "blue",
      skills: ["JavaScript", "TypeScript", "Java", "C"]
    },
    {
      title: "Frontend",
      icon: Code2,
      color: "blue",
      skills: ["React", "NextJS", "Tailwind CSS", "Shadcn UI", "DaisyUI"]
    },
    {
      title: "Backend",
      icon: Database,
      color: "purple",
      skills: [ "Node.js", "NestJS", "Express.js", "JWT", "REST APIs"]
    },
    {
      title: "Database",
      icon: Database,
      color: "purple",
      skills: ["MongoDB", "MySQL", "Firebase", "Mongoose", "SQL"]
    },
    {
      title: "AI & APIs",
      icon: Cpu,
      color: "green",
      skills: ["Gemini API", "Cohere API", "Groq API", "Judge0 API", "Prompt Engineering"]
    },
    {
      title: "Tools",
      icon: Cloud,
      color: "yellow",
      skills: ["Git & GitHub", "Render", "Vercel"]
    }
  ];

  const getColorClass = (color) => {
    const colors = {
      blue: "text-blue-400 border-blue-500/50 hover:border-blue-400",
      purple: "text-purple-400 border-purple-500/50 hover:border-purple-400",
      green: "text-green-400 border-green-500/50 hover:border-green-400",
      yellow: "text-yellow-400 border-yellow-500/50 hover:border-yellow-400"
    };
    return colors[color];
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-black via-gray-950 to-black px-6 md:px-12 text-white"
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer animate-slideUp"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <Icon className={`w-7 h-7 md:w-8 md:h-8 ${getColorClass(category.color).split(" ")[0]}`} />
                  <h3 className={`text-lg md:text-xl font-semibold ${getColorClass(category.color).split(" ")[0]}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 text-xs md:text-sm font-medium hover:bg-gray-700 transition ${getColorClass(category.color)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
