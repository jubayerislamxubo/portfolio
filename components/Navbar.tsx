import Link from 'next/link';
import { Code2, Send } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 py-2.5 sm:py-0 sm:h-16 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">
        
        {/* Brand Logo & Mobile CTA */}
        <div className="w-full sm:w-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-base sm:text-lg text-white tracking-tight hover:opacity-95 transition"
          >
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 shrink-0" />
            <span className="whitespace-nowrap">
              JUBAYER<span className="text-cyan-400">.dev</span>
            </span>
          </Link>

          <a
            href="#contact"
            className="sm:hidden bg-cyan-500 hover:bg-cyan-400 active:scale-[0.98] text-slate-950 px-3 py-1.5 rounded-lg font-semibold text-xs transition flex items-center gap-1.5 shadow-md shadow-cyan-500/20 whitespace-nowrap"
          >
            <Send className="w-3.5 h-3.5 shrink-0" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="w-full sm:w-auto flex items-center justify-between sm:justify-center gap-1.5 sm:gap-5 md:gap-6 text-xs sm:text-sm font-medium text-slate-300 border-t sm:border-t-0 border-slate-800/60 pt-2 sm:pt-0"
        >
          <a href="#home" className="px-1.5 py-1 rounded-md hover:text-cyan-400 transition whitespace-nowrap">
            Home
          </a>
          <a href="#about" className="px-1.5 py-1 rounded-md hover:text-cyan-400 transition whitespace-nowrap">
            About
          </a>
          <a href="#skills" className="px-1.5 py-1 rounded-md hover:text-cyan-400 transition whitespace-nowrap">
            Skills
          </a>
          <a href="#projects" className="px-1.5 py-1 rounded-md hover:text-cyan-400 transition whitespace-nowrap">
            Projects
          </a>
          <a href="#contact" className="px-1.5 py-1 rounded-md hover:text-cyan-400 transition whitespace-nowrap">
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center shrink-0">
          <a
            href="#contact"
            className="bg-cyan-500 hover:bg-cyan-400 active:scale-[0.98] text-slate-950 px-4 py-2 rounded-lg font-semibold text-sm transition flex items-center gap-2 shadow-md shadow-cyan-500/20 whitespace-nowrap"
          >
            <Send className="w-4 h-4 shrink-0" />
            <span>Hire Me</span>
          </a>
        </div>

      </div>
    </header>
  );
}