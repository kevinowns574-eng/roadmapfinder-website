
import React, { useState, useEffect } from 'react';
import { CheckCircle2, Target, Compass, Sparkles, Trophy, BookOpen, Clock, ChevronRight } from 'lucide-react';

const PhoneEmulator: React.FC = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-[300px] h-[620px] bg-black rounded-[50px] border-[12px] border-slate-900 shadow-[0_0_80px_-20px_rgba(59,130,246,0.3)] overflow-hidden">
      {/* Speaker/Camera Area */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-slate-900 rounded-b-3xl z-30"></div>

      {/* Dynamic Screen Content */}
      <div className="relative w-full h-full bg-[#020617] overflow-y-auto">
        {stage === 0 && (
          <div className="h-full flex flex-col p-6 pt-16 animate-in fade-in zoom-in duration-700">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-white leading-tight mb-4">Design your <br/><span className="text-blue-400">future path.</span></h2>
            <p className="text-slate-500 text-sm mb-8">What do you want to master today?</p>
            
            <div className="space-y-3">
              {['Frontend Developer', 'AI Engineer', 'DevOps Specialist'].map((role, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group">
                  <span className="text-sm font-bold text-white/80">{role}</span>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400" />
                </div>
              ))}
            </div>
          </div>
        )}

        {stage === 1 && (
          <div className="h-full flex flex-col p-6 pt-16 animate-in slide-in-from-bottom duration-700">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
               <Clock className="w-3 h-3" /> Step 4 of 12
            </div>
            <h2 className="text-xl font-bold text-white mb-6">Mastering React Hooks</h2>
            
            <div className="aspect-video bg-slate-800 rounded-2xl mb-4 flex items-center justify-center overflow-hidden border border-white/5">
               <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                 <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
               </div>
            </div>

            <div className="space-y-4">
               <div className="p-4 rounded-2xl bg-blue-600/10 border border-blue-500/20">
                 <p className="text-xs text-white font-bold mb-1">Assignment</p>
                 <p className="text-[11px] text-slate-400 leading-relaxed">Build a custom useLocalStorage hook and submit the GitHub URL.</p>
                 <button className="mt-3 w-full py-2 bg-blue-600 text-white text-[10px] font-black rounded-lg">SUBMIT SOLUTION</button>
               </div>
            </div>
          </div>
        )}

        {stage === 2 && (
          <div className="h-full flex flex-col p-6 pt-16 animate-in fade-in duration-700">
            <div className="flex justify-between items-start mb-8">
               <div>
                  <h3 className="text-xs text-slate-500 font-bold uppercase mb-1">Progress</h3>
                  <p className="text-2xl font-black text-white">Level 12</p>
               </div>
               <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                 <Trophy className="w-5 h-5" />
               </div>
            </div>

            <div className="p-5 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 mb-6">
               <div className="flex items-center justify-between mb-4">
                 <p className="text-xs font-bold text-white">Daily Streak</p>
                 <span className="text-xs font-black text-white px-2 py-0.5 bg-white/20 rounded-full">14 Days</span>
               </div>
               <div className="h-2 w-full bg-black/20 rounded-full overflow-hidden">
                 <div className="h-full bg-white w-4/5"></div>
               </div>
            </div>

            <h4 className="text-xs font-bold text-slate-500 uppercase mb-4 tracking-widest">Upcoming milestones</h4>
            <div className="space-y-3">
               {[
                 { icon: BookOpen, title: "Next.js 14 API Routes", xp: "450 XP" },
                 { icon: Target, title: "Database Architecture", xp: "600 XP" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 p-3 rounded-2xl bg-white/5">
                   <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
                     <item.icon className="w-5 h-5" />
                   </div>
                   <div className="flex-1">
                      <p className="text-xs font-bold text-white">{item.title}</p>
                      <p className="text-[10px] text-slate-500">{item.xp}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneEmulator;
