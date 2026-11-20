'use client';

import { useEffect, useState } from 'react';

export default function CircularSkills() {
  const skills = [
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
  ];

  const [radius, setRadius] = useState(125);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth >= 768) {
        setRadius(280);
      } else if (window.innerWidth >= 640) {
        setRadius(180);
      } else {
        setRadius(122);
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-slate-950 border-y border-slate-900/80 overflow-x-clip relative"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center relative">
        {/* Glow Effect */}
        <div className="absolute w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] md:w-[750px] md:h-[750px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14 z-10">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full shadow-lg">
            Interactive Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Technologies Orbiting Around My Core Stack
          </h2>
        </div>

        {/* Orbit Stage */}
        <div className="relative w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] md:w-[640px] md:h-[640px] flex items-center justify-center my-2">
          
          {/* Center Hub */}
          <div className="absolute z-20 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full bg-slate-900/95 border-2 border-cyan-400/60 shadow-[0_0_40px_rgba(6,182,212,0.4)] flex flex-col items-center justify-center text-center p-3 sm:p-4 backdrop-blur-xl">
            <span className="text-cyan-400 font-extrabold text-sm sm:text-xl md:text-2xl tracking-wider">
              JUBAYER
            </span>
            <span className="text-[9px] sm:text-xs text-slate-400 font-medium mt-0.5 sm:mt-1">
              MERN Expert
            </span>
          </div>

          {/* Orbit Dashed Ring */}
          <div
            style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
            className="absolute rounded-full border border-slate-800/70 border-dashed pointer-events-none transition-all duration-300"
          />

          {/* Orbiting Skills */}
          <div className="absolute inset-0 animate-spin-slow">
            {skills.map((item, index) => {
              const angle = (index / skills.length) * 360;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2 group/item"
                  style={{
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                >
                  <div className="animate-counter-spin group-hover/item:paused">
                    <div className="bg-slate-900/95 border border-slate-700/80 hover:border-cyan-400 text-slate-100 hover:text-cyan-300 text-[10px] sm:text-xs md:text-sm px-2.5 py-1.5 sm:px-3.5 sm:py-2 md:px-4 md:py-2 rounded-xl font-bold shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:scale-110 cursor-default whitespace-nowrap flex items-center gap-1.5 sm:gap-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 relative flex items-center justify-center bg-slate-950 p-0.5 sm:p-1 rounded-md border border-slate-800 shadow-inner shrink-0">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span>{item.name}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}