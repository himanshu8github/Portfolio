import React from 'react';

export default function CertificatesAndSoftSkills() {
  return (
    <section id="extras" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Certificates */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🎓 Certificates</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            
            {/* Certificate 1: Cyber Security */}
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

            {/* Certificate 2: Forage */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-md w-full max-w-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                Solutions Architecture Job Simulation
              </h3>
              <p className="text-gray-600 mb-4">Forage • 2024</p>
              <a
                href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_4i5jskXqo6iTGb3ba_1751265491286_completion_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium inline-flex items-center hover:underline"
              >
                View Certificate ↗
              </a>
            </div>

            {/* Certificate 3: AWS */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-md w-full max-w-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                AWS Educate: Introduction to Cloud 101
              </h3>
              <p className="text-gray-600 mb-4">
                Amazon Web Services Training and Certification • 2024
              </p>
              <a
                href="https://www.credly.com/badges/540f8521-9507-4e03-a4ba-6b2dce5154e8/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium inline-flex items-center hover:underline"
              >
                View Certificate ↗
              </a>
            </div>

          </div>
        </div>

        {/* Soft Skills */}
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
