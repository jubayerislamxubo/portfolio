'use client';

import Image from 'next/image';
import { projectsData } from '@/data/portfolioData';
import { ExternalLink, Code, FolderGit2 } from 'lucide-react';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-14 sm:py-16 md:py-20 max-w-6xl mx-auto px-4 border-t border-slate-900 overflow-x-clip"
    >
      <div className="flex items-center gap-2 mb-2">
        <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0" />
        <span className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
          Portfolio
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-8 sm:mb-12 tracking-tight">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            role="link"
            tabIndex={0}
            onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
              }
            }}
            className="cursor-pointer bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-4 sm:p-6 transition duration-300 flex flex-col justify-between group hover:shadow-[0_12px_32px_rgba(6,182,212,0.12)]"
          >
            <div>
              {/* ওপর-নিচ-ডান-বাম ব্যালেন্সড প্রিভিউ ফ্রেম */}
              <div className="relative aspect-[16/10] w-full bg-slate-950 border border-slate-800/90 rounded-xl p-2 sm:p-3 mb-4 sm:mb-5 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain rounded-lg group-hover:scale-[1.03] transition duration-500"
                  />
                </div>
              </div>

              {/* কার্ডের টাইটেল ও আইকন */}
              <div className="flex justify-between items-start gap-3 mb-2.5 sm:mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition break-words">
                  {project.title}
                </h3>
                <div
                  className="flex items-center gap-2.5 sm:gap-3 text-slate-400 shrink-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Source Code`}
                    className="p-1 rounded-md hover:text-cyan-400 transition"
                    title="Source Code"
                  >
                    <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Live Preview`}
                    className="p-1 rounded-md hover:text-cyan-400 transition"
                    title="Live Preview"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>

              {/* বিবরণ */}
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 break-words">
                {project.description}
              </p>
            </div>

            {/* টেকনোলজি ব্যাজ */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3.5 sm:pt-4 border-t border-slate-800/80">
              {project.tech.map((t, index) => (
                <span
                  key={index}
                  className="text-[11px] sm:text-xs bg-slate-950 border border-slate-800 text-cyan-300 px-2 sm:px-2.5 py-1 rounded-md font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}