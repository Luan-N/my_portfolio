import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="w-full backdrop-blur-lg border-t h-30 border-black/20 dark:border-white/20 py-6 z-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <address className="flex gap-6">

          <a
            href="https://github.com/Luan-N"
            target='_blank'
            className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-800/70 transition-colors"
            aria-label='GitHub Profile Link'
          >
            <FaGithub className="text-white text-xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/luan-nguyen-164860358/"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full hover:bg-blue-600/70 transition-colors"
            aria-label='Linkedin Profile Link'
          >
            <FaLinkedin className="text-white text-xl" />
          </a>
        </address>

        <p className="text-sm">
          © 2025 Luan Nguyen | Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
}