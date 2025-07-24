import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

function Footer() {
  const socialLinks = [
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      href: 'https://github.com/pratikshborkar',
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
      href: 'https://linkedin.com/in/pratikshborkar',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: null, // We'll use SVG for email
      href: 'mailto:pratiksh.borkar@example.com',
      label: 'Email',
      color: 'hover:text-red-400'
    },
    {
      icon: null, // We'll use SVG for Twitter
      href: 'https://twitter.com/pratikshborkar',
      label: 'Twitter',
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <footer className="bg-black/30 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300 text-sm">
              © 2025 Pratiksh Borkar. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => {
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-all duration-300 transform hover:scale-110 ${link.color}`}
                  aria-label={link.label}
                >
                  {link.icon ? (
                    <img src={link.icon} alt={link.label} className="h-6 w-6 filter invert opacity-60 hover:opacity-100 transition-opacity duration-300" />
                  ) : link.label === 'Email' ? (
                    <Mail className="h-6 w-6" />
                  ) : (
                    <Twitter className="h-6 w-6" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            Built with React & Tailwind CSS • Designed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;