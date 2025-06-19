import React from "react";

const Projects = () => (
  <section
    className="py-16 bg-white px-8 text-center"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="200"
  >
    <h2 className="text-3xl font-semibold mb-4">Projects</h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div
        className="p-6 border rounded-xl shadow"
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="150"
      >
        <h3 className="text-2xl font-bold mb-2">Gym Membership Website</h3>
        <p className="mb-3">
          Responsive gym website with user registration, login, and membership management.
          Backend built using Node.js, Express, and MongoDB.
        </p>
        <div className="text-sm text-gray-600 mb-2">Tech Used: HTML, CSS, JavaScript, Node.js, MongoDB</div>
        <a
          href="https://github.com/himanshu8github"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          View on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
