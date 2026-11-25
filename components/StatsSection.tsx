'use client';

import { useMemo } from 'react';

// ==========================================
// 1. EASY EDIT CONFIG (শুধুমাত্র আপনি এখান থেকে এডিট করবেন)
// ==========================================
const STATS_CONFIG = {
  // যে তারিখ থেকে আপনার অভিজ্ঞতা গণনা শুরু হবে (বর্তমান তারিখ থেকে ২ বছর আগে সেট করা)
  experienceStartDate: '2024-11-25',

  // true দিলে দশমিকসহ দেখাবে (যেমন: 2.1+), false দিলে পূর্ণ সংখ্যা দেখাবে (যেমন: 2+)
  showDecimalYears: true,

  // বাকি ৩টি মেট্রিক্স এখান থেকে সহজেই এডিট করুন
  items: [
    {
      id: 'projects',
      value: '25+',
      label: 'Projects Completed',
      subtext: 'Full-Stack & Frontend',
    },
    {
      id: 'clients',
      value: '15+',
      label: 'Happy Clients',
      subtext: 'Local & Global',
    },
    // ৩ নম্বর আইটেমটি অটোমেটিক experienceStartDate থেকে ক্যালকুলেট হবে
    {
      id: 'experience',
      isDynamicExperience: true,
      label: 'Years of Experience',
      subtext: 'MERN Stack Development',
    },
    {
      id: 'commits',
      value: '500+',
      label: 'GitHub Contributions',
      subtext: 'Clean & Scalable Code',
    },
  ],
};

export default function StatsSection() {
  // প্রতিদিন অটোমেটিক অভিজ্ঞতা হিসাব করার লজিক
  const calculatedExperience = useMemo(() => {
    const start = new Date(STATS_CONFIG.experienceStartDate);
    const now = new Date();
    const diffInMs = now.getTime() - start.getTime();
    const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const years = Math.max(0, diffInMs / msPerYear);

    if (STATS_CONFIG.showDecimalYears) {
      return `${years.toFixed(1)}+`;
    }
    return `${Math.floor(years)}+`;
  }, []);

  return (
    <section
      aria-label="Key Statistics"
      className="relative py-10 md:py-14 bg-slate-950 overflow-hidden select-none"
    >
      {/* Subtle Ambient Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[820px] h-[140px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Glass Container */}
        <div className="relative rounded-2xl bg-slate-900/65 border border-slate-800/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.65)] overflow-hidden">
          {/* Top Subtle Gradient Highlight Line */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          {/* 4-Column Responsive Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80">
            {STATS_CONFIG.items.map((item, idx) => {
              const displayValue = item.isDynamicExperience
                ? calculatedExperience
                : item.value;

              return (
                <div
                  key={item.id}
                  className={`group relative px-4 py-6 sm:px-6 sm:py-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-slate-800/30 ${
                    idx % 2 === 1 ? 'border-l border-slate-800/80 lg:border-l-0' : ''
                  }`}
                >
                  {/* Hover Radial Glow */}
                  <div className="absolute inset-0 bg-radial from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Number / Metric */}
                  <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    {displayValue}
                  </span>

                  {/* Primary Label */}
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 mt-1.5 tracking-wide">
                    {item.label}
                  </span>

                  {/* Subtle Secondary Context */}
                  <span className="text-[10px] sm:text-xs text-slate-400 mt-0.5 font-medium">
                    {item.subtext}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}