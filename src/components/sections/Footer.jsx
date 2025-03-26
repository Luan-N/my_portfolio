import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="w-full bg-blue-400/20 py-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex gap-6">

          <a
            href="https://github.com/Luan-GitHub-Source"
            target='_blank'
            className="flex items-center justify-center w-10 h-10 bg-black rounded-full hover:bg-black/50 transition-colors"
          >
            <FaGithub className="text-white text-xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/luan-nguyen-164860358/"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full hover:bg-blue-500/50 transition-colors"
          >
            <FaLinkedin className="text-white text-xl" />
          </a>
        </div>

        <p className="text-sm">
          © 2025 Luan Nguyen | Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
}