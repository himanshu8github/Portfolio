import React from 'react';

export default function CertificatesAndSoftSkills() {
  return (
    <section id="extras" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Certificates */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🎓 Certificates</h2>
          <div className="grid sm:grid-cols-2 gap-6 justify-items-center">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-md w-full max-w-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Cyber Security</h3>
              <p className="text-gray-600 mb-4">Cisco</p>
              <a
                href="https://www.credly.com/badges/8ccd12f3-8540-465d-92de-bb256045a5d7/whatsapp" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium inline-flex items-center hover:underline"
              >
                View Certificate ↗
              </a>
            </div>

          </div>
        </div>

   
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">🧠 Soft Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Communication',
              'Team Collaboration',
              'Problem Solving',
              'Time Management',
              'Critical Thinking',
              'Creativity',
              'Leadership',
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium text-sm shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
