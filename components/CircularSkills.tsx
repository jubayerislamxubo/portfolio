import Image from 'next/image';

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

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-950 border-y border-slate-900/80 overflow-hidden relative flex flex-col items-center justify-center">
      
      <div className="absolute w-[500px] h-[500px] md:w-[750px] md:h-[750px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="text-center mb-8 md:mb-12 z-10 px-4">
        <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full shadow-lg">
          Interactive Ecosystem
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">
          Technologies Orbiting Around My Core Stack
        </h2>
      </div>

     
      <div className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] md:w-[640px] md:h-[640px] flex items-center justify-center my-2">
        
        
        <div className="absolute z-20 w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full bg-slate-900/95 border-2 border-cyan-400/60 shadow-[0_0_40px_rgba(6,182,212,0.4)] flex flex-col items-center justify-center text-center p-4 backdrop-blur-xl">
          <span className="text-cyan-400 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wider">JUBAYER</span>
          <span className="text-[10px] sm:text-xs text-slate-400 font-medium mt-1">MERN Expert</span>
        </div>

        
        <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[560px] md:h-[560px] rounded-full border border-slate-800/60 border-dashed pointer-events-none"></div>

        
        <div className="absolute inset-0 animate-spin-slow">
          {skills.map((item, index) => {
            const angle = (index / skills.length) * 360;
            const radius = typeof window !== 'undefined' && window.innerWidth >= 768 ? 280 : 180;
            
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group/item"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                
                <div className="animate-counter-spin group-hover/item:paused">
                  <div className="bg-slate-900/95 border border-slate-700/80 hover:border-cyan-400 text-slate-100 hover:text-cyan-300 text-xs md:text-sm px-3.5 py-2 md:px-4 md:py-2 rounded-xl font-bold shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:scale-110 cursor-default whitespace-nowrap flex items-center gap-2">
                    <div className="w-5 h-5 md:w-5 md:h-5 relative flex items-center justify-center bg-slate-950 p-1 rounded-md border border-slate-800 shadow-inner">
                      <Image 
                        src={item.icon} 
                        alt={item.name} 
                        width={16} 
                        height={16} 
                        className="object-contain" 
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
    </section>
  );
}