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
    <section
      id="about"
      className="py-14 sm:py-16 md:py-20 max-w-6xl mx-auto px-4 border-t border-slate-900 overflow-x-clip"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Column */}
        <div className="md:col-span-6 space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <User className="w-3.5 h-3.5 shrink-0" />
            <span>About Me</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
            Dedicated Developer &amp; Computer Science Student
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I am a student in the Computer Science and Technology department. I am deeply passionate about modern web technologies and full-stack development, constantly building real-world projects with Next.js, React, Node.js, and MongoDB.
          </p>

          <div className="space-y-3 pt-1 sm:pt-2">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start sm:items-center gap-3 text-slate-300 text-xs sm:text-sm font-medium leading-snug">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0 mt-0.5 sm:mt-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-7 md:p-8 space-y-5 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-white border-b border-slate-800 pb-3 sm:pb-4">
            Education &amp; Background
          </h3>

          <div className="space-y-4 sm:space-y-5 divide-y divide-slate-800/70">
            <div>
              <span className="text-[11px] sm:text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                2026 - Present
              </span>
              <h4 className="text-white font-bold text-base sm:text-lg mt-0.5">
                {personalInfo.education}
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                {personalInfo.Department}
              </p>
            </div>

            <div className="pt-4">
              <span className="text-[11px] sm:text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                Specialization
              </span>
              <h4 className="text-white font-bold text-base sm:text-lg mt-0.5">
                MERN &amp; Next.js Ecosystem
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-0.5">
                Building scalable full-stack applications, handling backend logic, and integrating modern database solutions.
              </p>
            </div>

            <div className="pt-4">
              <span className="text-[11px] sm:text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                2022 - past
              </span>
              <h4 className="text-white font-bold text-base sm:text-lg mt-0.5">
                Secondary School Certificate (SSC)
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-0.5 break-words">
                Year: 2022 / Group: Science / GPA: 4.67 out of 5.00 / Main Subject: Higher Mathematics / 4th Subject: Agriculture Studies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}