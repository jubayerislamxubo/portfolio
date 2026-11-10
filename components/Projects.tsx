import { projectsData } from '@/data/portfolioData';
import { ExternalLink, Code, FolderGit2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4 border-t border-slate-900">
      <div className="flex items-center gap-2 mb-2">
        <FolderGit2 className="w-5 h-5 text-cyan-400" />
        <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Portfolio</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 transition duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-slate-400">
                  <a href={project.githubUrl} target="_blank" className="hover:text-cyan-400 transition" title="Source Code">
                    <Code className="w-5 h-5" />
                  </a>
                  <a href={project.liveUrl} target="_blank" className="hover:text-cyan-400 transition" title="Live Preview">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
              {project.tech.map((t, index) => (
                <span key={index} className="text-xs bg-slate-950 border border-slate-800 text-cyan-300 px-2.5 py-1 rounded-md font-medium">
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