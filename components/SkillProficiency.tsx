// export default function SkillProficiency() {
//   const proficiencySkills = [
//     { name: "React.js & Next.js", level: 90, color: "from-cyan-500 to-blue-500" },
//     { name: "JavaScript (ES6+)", level: 75, color: "from-cyan-400 to-teal-500" },
//     { name: "Node.js & Express.js", level: 50, color: "from-emerald-400 to-cyan-500" },
//     { name: "MongoDB & Database", level: 85, color: "from-blue-500 to-indigo-500" },
//     { name: "Tailwind CSS & UI Design", level: 95, color: "from-cyan-400 to-emerald-400" },
//     { name: "Git, GitHub & Deployment", level: 98, color: "from-teal-400 to-blue-600" },
//   ];

//   return (
//     <section id="skills" className="py-16 bg-slate-950 relative overflow-hidden">
     
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none"></div>

//       <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        
//         <div className="text-center mb-12">
//           <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full shadow-lg">
//             Expertise Level
//           </span>
//           <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-3 tracking-tight">
//             Professional Skill Proficiency
//           </h3>
//           <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">
//             A snapshot of my technical proficiency and hands-on experience in modern web development.
//           </p>
//         </div>

        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950/60 p-6 md:p-8 rounded-2xl border border-slate-800/80 backdrop-blur-xl shadow-2xl">
//           {proficiencySkills.map((skill, index) => (
//             <div key={index} className="space-y-2">
//               <div className="flex justify-between items-center text-sm font-semibold">
//                 <span className="text-slate-200">{skill.name}</span>
//                 <span className="text-cyan-400 font-mono">{skill.level}%</span>
//               </div>
              
              
//               <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
//                 <div
//                   className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(6,182,212,0.4)]`}
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }