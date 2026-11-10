import Link from 'next/link';
import { Code2 } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white">
          <Code2 className="w-6 h-6 text-cyan-400" />
          <span>JUBAYER<span className="text-cyan-400">.dev</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        <div>
          <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-4 py-2 rounded-lg font-semibold text-sm transition">
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
}