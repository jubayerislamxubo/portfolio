import { personalInfo } from '@/data/portfolioData';
import { User, CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    "Full-stack web application architecture & REST APIs",
    "Modern UI/UX implementation with Tailwind CSS & React",
    "Database management using MongoDB & Mongoose",
    "Version control workflows with Git, GitHub & GitHub Copilot"
  ];

  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-4 border-t border-slate-900">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Dedicated Developer & Computer Science Student
          </h2>

          <p className="text-slate-400 text-base leading-relaxed">
            I am a student in the Computer Science and Technology department at Barguna Polytechnic Institute. I am deeply passionate about modern web technologies and full-stack development, constantly building real-world projects with Next.js, React, Node.js, and MongoDB.
          </p>

          <div className="space-y-3 pt-2">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience / Education Box */}
        <div className="md:col-span-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
            Education & Background
          </h3>
          
          <div className="space-y-4">
            <div>
              <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">2026 - Present</span>
              <h4 className="text-white font-bold text-lg">{personalInfo.education}</h4>
              <p className="text-slate-400 text-sm">{personalInfo.institution}</p>
            </div>
            
            <div className="pt-2">
              <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Specialization</span>
              <h4 className="text-white font-bold text-lg">MERN & Next.js Ecosystem</h4>
              <p className="text-slate-400 text-sm">Building scalable full-stack applications, handling backend logic, and integrating modern database solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}