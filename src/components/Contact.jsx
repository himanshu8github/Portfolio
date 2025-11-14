import React from "react";
import { Mail, Linkedin, Github, Twitter, ExternalLink } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "himanshukakran8@gmail.com",
      link: "mailto:himanshukakran8@gmail.com",
      color: "blue",
      description: "Send me an email"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Himanshu Choudhary",
      link: "https://www.linkedin.com/in/himanshu-choudhary-1a19ba255",
      color: "blue",
      description: "Connect on LinkedIn"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "himanshu8github",
      link: "https://github.com/himanshu8github",
      color: "gray",
      description: "Check my repositories"
    },
    {
      icon: Twitter,
      label: "Twitter (X)",
      value: "@himanshuu_5",
      link: "https://x.com/himanshuu_5",
      color: "sky",
      description: "Follow me on Twitter"
    }
  ];

  const getColorClass = (color) => {
    const colors = {
      blue: "text-blue-400 border-blue-500/50 hover:border-blue-400",
      gray: "text-gray-300 border-gray-600/50 hover:border-gray-400",
      sky: "text-sky-400 border-sky-500/50 hover:border-sky-400"
    };
    return colors[color];
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-black via-gray-950 to-black px-6 md:px-12 text-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Whether you have a project idea, 
            want to discuss tech, or just want to connect – feel free to reach out!
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith("mailto") ? "_self" : "_blank"}
                rel={method.link.startsWith("mailto") ? "" : "noopener noreferrer"}
                className={`group p-3 rounded-xl bg-gray-900/50 border border-gray-800 ${getColorClass(method.color)} transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 animate-slideUp`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex items-start justify-between mb-1.5">
                  <Icon className={`w-5 h-5`} />
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <h3 className="text-sm md:text-base font-semibold text-white mb-1">
                  {method.label}
                </h3>
                <p className="text-gray-400 text-xs mb-0.5">
                  {method.value}
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  {method.description}
                </p>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center animate-slideUp" style={{animationDelay: "0.6s"}}>
          <p className="text-gray-400 text-sm md:text-base mb-4">
            Made with <span className="text-red-400">❤</span> by Himanshu Choudhary
          </p>
          <p className="text-gray-500 text-xs md:text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
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
}