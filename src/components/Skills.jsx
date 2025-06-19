import React from 'react';

const skills = [
  {
    title: '💻 Languages',
    items: ['Python', 'C', 'Java', 'JavaScript', 'SQL', ],
  },
  {
    title: '🛠️ Frameworks & Databases',
    items: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'MySQL', 'MongoDB', ''],
  },
  {
    title: '⚙️ Tools',
    items: ['Git & GitHub', 'Postman', 'Render', 'Vercel', ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Skills</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Here are the technologies and tools I've mastered to build modern web experiences.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {skills.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
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
