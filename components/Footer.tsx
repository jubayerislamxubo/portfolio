import { Code2, Globe, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-bold text-lg text-white">
          <Code2 className="w-6 h-6 text-cyan-400" />
          <span>{personalInfo.name}</span>
        </div>

        <p className="text-slate-500 text-sm text-center">
          © {currentYear} All rights reserved. Built with Next.js & Tailwind CSS.
        </p>

        <div className="flex items-center gap-4 text-slate-400">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            title="GitHub"
          >
            <Globe className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
            title="Contact Us"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}