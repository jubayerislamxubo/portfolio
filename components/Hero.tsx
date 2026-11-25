import Image from 'next/image';
import { personalInfo } from '@/data/portfolioData';
import { ArrowRight, Download, MapPin, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    
    <section
      id="home"
      className="relative flex items-center max-w-6xl mx-auto px-4 py-10 sm:py-12 md:py-14 overflow-x-clip"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 items-center w-full">
        
        {/* Left Column */}
        <div className="md:col-span-6 space-y-5 sm:space-y-6 z-10 py-2 md:py-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Available for New Projects</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight break-words">
            Hi, I&apos;m <span className="text-cyan-400">{personalInfo.name}</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-300">
            MERN Stack Developer
          </p>

          <p className="text-slate-400 leading-relaxed text-sm sm:text-base max-w-xl mx-auto md:mx-0">
            Passionate Full Stack Web Developer specializing in building high-performance, scalable web applications using{' '}
            <strong className="text-cyan-400 font-semibold">Next.js</strong>,{' '}
            <strong className="text-cyan-400 font-semibold">React</strong>,{' '}
            <strong className="text-cyan-400 font-semibold">Node.js</strong>, and{' '}
            <strong className="text-cyan-400 font-semibold">MongoDB</strong>. Dedicated to writing clean, maintainable code with modern user experiences.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 text-xs text-slate-400 pt-1">
            <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-2 rounded-lg">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-2 rounded-lg">
              <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{personalInfo.education}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 pt-3">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition shadow-lg shadow-cyan-500/20"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-800 hover:border-slate-700 bg-slate-900/50 text-slate-200 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition"
            >
              Resume <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        
        <div className="md:col-span-6 relative flex items-center justify-center mt-2 sm:mt-4 md:mt-0 z-0">
          <div className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative w-full max-w-[300px] sm:max-w-md md:max-w-lg h-[340px] sm:h-[440px] md:h-[520px] flex items-end justify-center">
            <Image
              src="/images/jsm.png"
              alt="MD JUBAYER ISLAM - MERN Stack Developer"
              width={700}
              height={800}
              priority
              className="object-contain object-bottom w-full h-full transform hover:scale-105 transition duration-500 drop-shadow-[0_20px_40px_rgba(6,182,212,0.3)]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}