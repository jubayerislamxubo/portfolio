import Link from 'next/link';
import { Code2, Send } from 'lucide-react'; 

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:h-16 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        
        <div className="w-full flex items-center justify-between sm:w-auto">
          <Link href="/" className="flex items-center gap-2 font-bold text-base sm:text-lg text-white">
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            <span>JUBAYER<span className="text-cyan-400">.dev</span></span>
          </Link>

          <a href="#contact" className="sm:hidden bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-3.5 py-1.5 rounded-lg font-semibold text-xs transition flex items-center gap-1.5 shadow-md shadow-cyan-500/20">
            <Send className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        <div className="w-full sm:w-auto flex items-center justify-around sm:justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-slate-300 overflow-x-auto py-1 sm:py-0 border-t sm:border-t-0 border-slate-800/60 pt-2 sm:pt-0">
          <a href="#home" className="hover:text-cyan-400 transition whitespace-nowrap">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition whitespace-nowrap">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition whitespace-nowrap">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition whitespace-nowrap">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition whitespace-nowrap">Contact</a>
        </div>

        <div className="hidden sm:block">
          <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-4 py-2 rounded-lg font-semibold text-sm transition flex items-center gap-2 shadow-md shadow-cyan-500/20">
            <Send className="w-4 h-4" />
            <span>Hire Me</span>
          </a>
        </div>

      </div>
    </header>
  );
}