'use client';

import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools';
  level: string;
  orbit: 'inner' | 'outer';
  icon: string;
  invert?: boolean;
  glowColor: string;
}

export default function CircularSkills() {
  const skills: Skill[] = [
    // Inner Orbit (Core Stack)
    {
      name: 'Next.js',
      category: 'Frontend',
      level: 'Full-Stack React Framework',
      orbit: 'inner',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      invert: true,
      glowColor: 'rgba(255, 255, 255, 0.5)',
    },
    {
      name: 'React.js',
      category: 'Frontend',
      level: 'UI Architecture & State',
      orbit: 'inner',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      glowColor: 'rgba(56, 189, 248, 0.6)',
    },
    {
      name: 'Node.js',
      category: 'Backend',
      level: 'Scalable Server Runtime',
      orbit: 'inner',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      glowColor: 'rgba(74, 222, 128, 0.6)',
    },
    {
      name: 'MongoDB',
      category: 'Backend',
      level: 'NoSQL Database Design',
      orbit: 'inner',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      glowColor: 'rgba(34, 197, 94, 0.6)',
    },

    // Outer Orbit (Supporting Stack & Tools)
    {
      name: 'Express.js',
      category: 'Backend',
      level: 'RESTful API Development',
      orbit: 'outer',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      invert: true,
      glowColor: 'rgba(148, 163, 184, 0.6)',
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      level: 'Modern Responsive Styling',
      orbit: 'outer',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      glowColor: 'rgba(6, 182, 212, 0.6)',
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      level: 'ES6+ & Async Programming',
      orbit: 'outer',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      glowColor: 'rgba(250, 204, 21, 0.6)',
    },
    {
      name: 'Git & GitHub',
      category: 'Tools',
      level: 'Version Control & CI/CD',
      orbit: 'outer',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      glowColor: 'rgba(249, 115, 22, 0.6)',
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [radii, setRadii] = useState({ inner: 118, outer: 118 });
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Tools'>('All');

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth >= 768) {
        setIsMobile(false);
        setRadii({ inner: 165, outer: 295 });
      } else if (window.innerWidth >= 640) {
        setIsMobile(false);
        setRadii({ inner: 125, outer: 215 });
      } else {
        setIsMobile(true);
        setRadii({ inner: 116, outer: 116 });
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const innerSkills = skills.filter((s) => s.orbit === 'inner');
  const outerSkills = skills.filter((s) => s.orbit === 'outer');

  const renderBadge = (item: Skill) => {
    const isDimmed = activeCategory !== 'All' && activeCategory !== item.category;

    return (
      <div
        onMouseEnter={() => setHoveredSkill(item)}
        onMouseLeave={() => setHoveredSkill(null)}
        onClick={() => setHoveredSkill((prev) => (prev?.name === item.name ? null : item))}
        className={`bg-slate-900/95 border border-slate-700/80 hover:border-cyan-400 text-slate-100 hover:text-cyan-300 text-[9px] sm:text-xs md:text-sm px-2 py-1 sm:px-3 sm:py-1.5 md:px-3.5 md:py-2 rounded-xl font-bold shadow-[0_10px_30px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all duration-300 hover:scale-110 cursor-pointer whitespace-nowrap flex items-center gap-1 sm:gap-2 ${
          isDimmed ? 'opacity-25 scale-95' : 'opacity-100'
        }`}
      >
        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center justify-center bg-slate-950 p-0.5 rounded-md border border-slate-800 shrink-0">
          <img
            src={item.icon}
            alt={item.name}
            className={`w-full h-full object-contain ${item.invert ? 'invert' : ''}`}
          />
        </div>
        <span>{item.name}</span>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-slate-950 border-y border-slate-900/80 overflow-hidden relative select-none"
    >
      {/* Subtle Background Dot Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center relative">
        {/* Ambient Glow Effect */}
        <div
          className="absolute w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] md:w-[750px] md:h-[750px] rounded-full blur-[140px] pointer-events-none transition-colors duration-500"
          style={{
            backgroundColor: hoveredSkill ? hoveredSkill.glowColor : 'rgba(6, 182, 212, 0.12)',
            opacity: hoveredSkill ? 0.25 : 1,
          }}
        />

        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-10 z-10">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full shadow-lg">
            Interactive Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Technologies Orbiting Around My{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Core Stack
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-md mx-auto">
            Hover or tap any orbiting node to inspect my stack, or filter by category below.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10 z-20">
          {(['All', 'Frontend', 'Backend', 'Tools'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Orbit Stage */}
        <div className="relative w-[330px] h-[330px] sm:w-[540px] sm:h-[540px] md:w-[720px] md:h-[720px] flex items-center justify-center my-2 group/stage">
          {/* Interactive Center Hub */}
          <div
            className="absolute z-20 w-20 h-20 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-slate-900/95 border-2 flex flex-col items-center justify-center text-center p-2 sm:p-4 backdrop-blur-xl transition-all duration-300"
            style={{
              borderColor: hoveredSkill ? hoveredSkill.glowColor : 'rgba(34, 211, 238, 0.5)',
              boxShadow: hoveredSkill
                ? `0 0 45px ${hoveredSkill.glowColor}`
                : '0 0 40px rgba(6, 182, 212, 0.3)',
            }}
          >
            <div className="absolute inset-1.5 rounded-full border border-dashed border-cyan-500/30 animate-spin-slow pointer-events-none" />

            {hoveredSkill ? (
              <div className="animate-fadeIn flex flex-col items-center">
                <span className="text-[7px] sm:text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">
                  {hoveredSkill.category}
                </span>
                <span className="text-white font-extrabold text-[10px] sm:text-base md:text-lg mt-0.5 leading-tight">
                  {hoveredSkill.name}
                </span>
                <span className="text-[7px] sm:text-[11px] text-slate-300 font-medium mt-0.5 sm:mt-1 leading-tight line-clamp-2">
                  {hoveredSkill.level}
                </span>
              </div>
            ) : (
              <div>
                <span className="text-cyan-400 font-extrabold text-[11px] sm:text-lg md:text-xl tracking-wider block">
                  JUBAYER
                </span>
                <span className="text-[7px] sm:text-xs text-slate-400 font-medium mt-0.5 block">
                  MERN Expert
                </span>
              </div>
            )}
          </div>

          {isMobile ? (
            <>
              {/* Mobile Single Orbit Ring */}
              <div
                style={{ width: `${radii.inner * 2}px`, height: `${radii.inner * 2}px` }}
                className="absolute rounded-full border border-cyan-500/25 border-dashed pointer-events-none"
              />
              <div className="absolute inset-0 animate-orbit-cw group-hover/stage:[animation-play-state:paused]">
                {skills.map((item, index) => {
                  const angle = (index / skills.length) * 360;
                  const x = Math.cos((angle * Math.PI) / 180) * radii.inner;
                  const y = Math.sin((angle * Math.PI) / 180) * radii.inner;

                  return (
                    <div
                      key={item.name}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      }}
                    >
                      <div className="animate-orbit-ccw group-hover/stage:[animation-play-state:paused]">
                        {renderBadge(item)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              {/* Inner Dashed Ring */}
              <div
                style={{ width: `${radii.inner * 2}px`, height: `${radii.inner * 2}px` }}
                className="absolute rounded-full border border-cyan-500/25 border-dashed pointer-events-none transition-all duration-300"
              />

              {/* Outer Dashed Ring */}
              <div
                style={{ width: `${radii.outer * 2}px`, height: `${radii.outer * 2}px` }}
                className="absolute rounded-full border border-slate-700/50 border-dashed pointer-events-none transition-all duration-300"
              />

              {/* INNER ORBITING SKILLS */}
              <div className="absolute inset-0 animate-orbit-cw group-hover/stage:[animation-play-state:paused]">
                {innerSkills.map((item, index) => {
                  const angle = (index / innerSkills.length) * 360;
                  const x = Math.cos((angle * Math.PI) / 180) * radii.inner;
                  const y = Math.sin((angle * Math.PI) / 180) * radii.inner;

                  return (
                    <div
                      key={item.name}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      }}
                    >
                      <div className="animate-orbit-ccw group-hover/stage:[animation-play-state:paused]">
                        {renderBadge(item)}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* OUTER ORBITING SKILLS */}
              <div className="absolute inset-0 animate-orbit-ccw-slow group-hover/stage:[animation-play-state:paused]">
                {outerSkills.map((item, index) => {
                  const angle = (index / outerSkills.length) * 360 + 45;
                  const x = Math.cos((angle * Math.PI) / 180) * radii.outer;
                  const y = Math.sin((angle * Math.PI) / 180) * radii.outer;

                  return (
                    <div
                      key={item.name}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      }}
                    >
                      <div className="animate-orbit-cw-slow group-hover/stage:[animation-play-state:paused]">
                        {renderBadge(item)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-orbit-cw {
          animation: orbit-cw 32s linear infinite;
        }
        .animate-orbit-ccw {
          animation: orbit-ccw 32s linear infinite;
        }
        .animate-orbit-cw-slow {
          animation: orbit-cw 40s linear infinite;
        }
        .animate-orbit-ccw-slow {
          animation: orbit-ccw 40s linear infinite;
        }
      `}</style>
    </section>
  );
}