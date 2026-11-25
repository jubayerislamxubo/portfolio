'use client';

import React from 'react';
import {
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface SkillItem {
  name: string;
  icon?: string;
  invert?: boolean;
  core?: boolean;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    subtitle: 'Modern, responsive & interactive user interfaces',
    icon: <Layout className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />,
    skills: [
      {
        name: 'Next.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        invert: true,
        core: true,
      },
      {
        name: 'React.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        core: true,
      },
      {
        name: 'JavaScript (ES6+)',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        core: true,
      },
      {
        name: 'Tailwind CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        core: true,
      },
      {
        name: 'HTML5',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
      {
        name: 'Bootstrap',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      },
      {
        name: 'React Router',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg',
      },
      {
        name: 'Responsive Web Design',
      },
    ],
  },
  {
    title: 'Backend Development',
    subtitle: 'Scalable server-side logic & secure APIs',
    icon: <Server className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />,
    skills: [
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        core: true,
      },
      {
        name: 'Express.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        invert: true,
        core: true,
      },
      {
        name: 'RESTful API Development',
      },
      {
        name: 'JWT Authentication',
      },
      {
        name: 'NextAuth.js',
      },
      {
        name: 'API Integration',
      },
      {
        name: 'Server-Side Development',
      },
    ],
  },
  {
    title: 'Database & Cloud Storage',
    subtitle: 'Data modeling, auth & media management',
    icon: <Database className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />,
    skills: [
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        core: true,
      },
      {
        name: 'Mongoose',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg',
      },
      {
        name: 'Firebase',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      },
      {
        name: 'Cloudinary',
      },
    ],
  },
  {
    title: 'Tools & Technologies',
    subtitle: 'Version control, testing, design & deployment',
    icon: <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />,
    skills: [
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'GitHub',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        invert: true,
      },
      {
        name: 'VS Code',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      },
    
     
      {
        name: 'Vercel',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
        invert: true,
      },
      {
        name: 'Figma',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      },
    ],
  },
];

const ADDITIONAL_SKILLS = [
  'Authentication & Authorization',
  'Full-Stack Web Development',
  'Payment Gateway Integration',
  'Admin Dashboard Development',
  'E-commerce Website Development',
  'Debugging & Problem Solving',
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-12 scroll-mt-24 sm:py-16 md:py-20 bg-slate-950 border-t border-slate-900/80 overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[560px] md:w-[760px] h-[220px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 text-cyan-400 text-[11px] sm:text-xs font-semibold uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full">
            Technical Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3.5 tracking-tight">
            Skills &amp;{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
            Technologies, frameworks, and development practices I use to build reliable full-stack applications.
          </p>
        </div>

        {/* 2x2 Responsive Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="group relative rounded-2xl bg-slate-900/65 border border-slate-800/90 hover:border-cyan-500/40 p-4 sm:p-6 backdrop-blur-xl transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.45)]"
            >
              {/* Top subtle highlight line */}
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Header */}
              <div className="flex items-start gap-3 mb-4 sm:mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center shrink-0">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {category.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Compact Logo + Name Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-[13px] font-medium border transition-all duration-200 ${
                      skill.core
                        ? 'bg-slate-950/90 border-cyan-500/35 text-slate-100 hover:border-cyan-400 hover:shadow-[0_0_16px_rgba(6,182,212,0.2)]'
                        : 'bg-slate-950/60 border-slate-800/90 text-slate-300 hover:border-slate-600 hover:text-white'
                    }`}
                  >
                    {skill.icon ? (
                      <span className="w-4 h-4 flex items-center justify-center shrink-0">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          loading="lazy"
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain ${
                            skill.invert ? 'invert' : ''
                          }`}
                        />
                      </span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shrink-0" />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills / Core Capabilities Card */}
        <div className="mt-4 sm:mt-6 rounded-2xl bg-slate-900/55 border border-slate-800/90 p-4 sm:p-6 backdrop-blur-xl">
          <div className="flex items-center gap-2.5 mb-3.5 sm:mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Additional Skills &amp; Core Capabilities
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400">
                End-to-end product features and engineering strengths
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
            {ADDITIONAL_SKILLS.map((capability) => (
              <div
                key={capability}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 text-xs sm:text-[13px] text-slate-200 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                <span>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}