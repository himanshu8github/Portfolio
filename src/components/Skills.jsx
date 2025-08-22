import React from "react";
import {
  Code,
  Layers,
  Database,
  Wrench,
} from "lucide-react";

const skills = [
  {
    title: "Languages",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    items: ["C", "Python", "Java", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers className="w-6 h-6 text-purple-500" />,
    items: ["React.js", "Tailwind CSS", "Shadcn", "Node.js", "Express.js"],
  },
  {
    title: "Databases & Cloud",
    icon: <Database className="w-6 h-6 text-green-500" />,
    items: ["MongoDB", "Postgres (Basics)", "MySQL (Basics)", "Firebase (Auth & Firestore)"],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-orange-500" />,
    items: [
      "Git & GitHub",
      "Postman",
      "VS Code",
      "Bash",
      "Render",
      "Vercel",
      "Nodemailer",
      "JWT",
      "Bcrypt",
      "Zustand",
      "WebSocket",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-500">Skills</h2>
        <p className="text-gray-300 mb-12 text-lg">
          Here are the technologies and tools I use to build scalable, modern, and responsive applications.
        </p>

        {/* Changed grid to 4 columns */}
        <div className="grid md:grid-cols-4 gap-8 text-left">
          {skills.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 shadow-md rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition transform"
            >
              <div className="flex items-center gap-2 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2 text-gray-200 list-disc list-inside">
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
