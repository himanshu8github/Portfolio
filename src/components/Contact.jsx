import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">📬 Get in Touch</h2>
        <p className="text-center text-gray-600 mb-8 text-lg">
          I'm always open to new collaborations! Drop a message anytime.
        </p>

    
        <div className="text-center text-gray-700 mb-10 space-y-2">
          <p>📧 <a href="mailto:himanshukakran8@gmail.com" className="text-blue-600 hover:underline">himanshukakran8@gmail.com</a></p>
          <p>🔗 <a href="https://www.linkedin.com/in/himanshu-choudhary-1a19ba255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/himanshuChoudhary</a></p>
          <p>💻 <a href="https://github.com/himanshu8github" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">github.com/himanshu8github</a></p>
        </div>


        <form className="bg-white rounded-2xl shadow-md p-8 space-y-6 max-w-2xl mx-auto">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
