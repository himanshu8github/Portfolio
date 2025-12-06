import React from "react";
import { Briefcase, Calendar, ArrowRight } from "lucide-react";

const Experience = () => (
  <section
    className="py-20 bg-gradient-to-b from-black via-gray-950 to-black px-6 md:px-12 text-white"
    id="experience"
  >
    <div className="max-w-4xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12 animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        {/* Associate Full Stack Developer - Current */}
        <div className="animate-slideUp" style={{animationDelay: "0.1s"}}>
          <div className="relative pl-8 md:pl-12">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full"></div>
            </div>

            {/* Timeline line */}
            <div className="absolute left-2.5 md:left-3.5 top-8 md:top-10 w-1 h-20 bg-gradient-to-b from-blue-400 to-transparent"></div>

            {/* Card */}
            <div className="p-6 md:p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Associate Full Stack Developer
                    </h3>
                    <p className="text-blue-400 font-semibold text-sm md:text-base">Almonds.ai</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/50 text-green-400 text-xs md:text-sm font-semibold">
                  Current
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-400 mb-4 text-sm md:text-base">
                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                <span>November 2025 – Present</span>
              </div>

              <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
                Currently working as an <span className="text-blue-400 font-semibold">Associate Full Stack Developer</span> at <span className="text-blue-400 font-semibold">Almonds.ai</span>, where I develop and maintain scalable web applications using modern technologies. My role involves both frontend and backend development with a focus on performance and code quality.
              </p>

              <div className="space-y-2 mb-4">
                <h4 className="text-sm md:text-base font-semibold text-gray-200">Tech Stack:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>JavaScript • TypeScript • Node.js • Express.js • NestJS</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>SQL • MySQL • Full Stack Web Development</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <p className="text-xs md:text-sm text-gray-400">
                  <span className="font-semibold text-gray-300">Skills:</span> Full Stack Development • TypeScript • NestJS • SQL/MySQL • API Development
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Internship - Previous */}
        <div className="animate-slideUp" style={{animationDelay: "0.2s"}}>
          <div className="relative pl-8 md:pl-12">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full"></div>
            </div>

            {/* Timeline line */}
            <div className="absolute left-2.5 md:left-3.5 top-8 md:top-10 w-1 h-20 bg-gradient-to-b from-blue-400 to-transparent"></div>

            {/* Card */}
            <div className="p-6 md:p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Full Stack Web Developer Intern
                    </h3>
                    <p className="text-blue-400 font-semibold text-sm md:text-base">Kalvig</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-400 mb-4 text-sm md:text-base">
                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                <span>September 2025 – November 2025</span>
              </div>

              <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
                Worked as a <span className="text-blue-400 font-semibold">Full Stack Web Developer Intern</span> at <span className="text-blue-400 font-semibold">Kalvig</span>, where I designed and deployed scalable web applications. My role involved both frontend and backend development using modern frameworks and tools.
              </p>

              <div className="space-y-2 mb-4">
                <h4 className="text-sm md:text-base font-semibold text-gray-200">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Building full-stack applications with <span className="text-purple-400">React, Node.js, and Express</span></span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>API integration and real-world project deployment</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <p className="text-xs md:text-sm text-gray-400">
                  <span className="font-semibold text-gray-300">Skills Gained:</span> MERN Stack • Deployment • API Integration
                </p>
              </div>
            </div>
          </div>
        </div>

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

export default Experience;