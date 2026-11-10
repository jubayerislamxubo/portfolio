import Image from 'next/image';
import { personalInfo } from '@/data/portfolioData';
import { ArrowRight, Download, MapPin, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center max-w-7xl mx-auto px-6 overflow-hidden">
      <div className="grid md:grid-cols-12 gap-8 items-center w-full">
        {/* Left Column */}
        <div className="md:col-span-6 space-y-6 z-10 py-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Available for New Projects</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I&apos;m <span className="text-cyan-400">{personalInfo.name}</span>
          </h1>

          <p className="text-xl md:text-2xl font-bold text-green-300">
           MERN Stack Developer
          </p>

          <p className="text-slate-400 leading-relaxed text-base max-w-xl">
            Passionate Full Stack Web Developer specializing in building high-performance, scalable web applications using <strong className="text-cyan-400 font-semibold">Next.js</strong>, <strong className="text-cyan-400 font-semibold">React</strong>, <strong className="text-cyan-400 font-semibold">Node.js</strong>, and <strong className="text-cyan-400 font-semibold">MongoDB</strong>. Dedicated to writing clean, maintainable code with modern user experiences.
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-2">
            <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-2 rounded-lg">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-2 rounded-lg">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>{personalInfo.education}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-cyan-500/20"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 border border-slate-800 hover:border-slate-700 bg-slate-900/50 text-slate-200 px-6 py-3 rounded-xl font-semibold transition"
            >
              Resume <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Larger & Prominent Character Image */}
        <div className="md:col-span-6 relative flex items-center justify-center z-0 pt-6 md:pt-0">
          {/* Subtle Glow Behind Image */}
          <div className="absolute w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative w-full max-w-lg md:max-w-xl h-[500px] md:h-[650px] flex items-end justify-center">
            <Image
              src="/images/jubayer.png"
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