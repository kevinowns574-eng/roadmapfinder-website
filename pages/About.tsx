
import React from 'react';
import { Target, Compass, Zap, Heart, Shield, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 lg:py-32">
      <div className="mb-20">
        <span className="text-blue-500 font-black uppercase tracking-widest text-xs mb-4 block">Our Story</span>
        <h1 className="text-4xl lg:text-6xl font-black text-white mb-8">We're on a mission to end <span className="gradient-text">Tutorial Hell.</span></h1>
        <p className="text-xl text-slate-400 leading-relaxed mb-10">
          Roadmapfinder was founded out of frustration. As self-taught developers, we spent years watching thousands of hours of content, yet still didn't know how to "actually build" a real product. 
        </p>
      </div>

      <div className="space-y-24 mb-32">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500">
               <Target className="w-5 h-5" />
             </div>
             The Problem
          </h2>
          <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-slate-400 leading-relaxed mb-4">
              Modern learning is broken. Not because of a lack of content—there is too much of it. The problem is direction. Learners are constantly sold "the next big framework" without understanding the fundamentals.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We saw talented people quit because they felt "stupid," when in reality, they just didn't have a map. Roadmapfinder exists to fix that by providing the exact sequence of resources needed to master any skill.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <Compass className="w-8 h-8 text-cyan-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Guided Exploration</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We don't just give you a link to a video. We tell you why you're watching it, what you should take away, and what to build after you're done.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <Shield className="w-8 h-8 text-blue-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Proof of Work</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We believe in building. Our platform is centered around assignments that require you to submit your code for review, ensuring you actually learn.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-500">
               <Heart className="w-5 h-5" />
             </div>
             Our Vision
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Our vision is a world where tech education is accessible, structured, and outcome-driven. We want to remove the confusion from the learning process so that any motivated person can become a world-class engineer.
          </p>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-1 rounded-3xl">
            <div className="bg-[#050b18] p-8 rounded-[22px]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">Built by Learners</h4>
                  <p className="text-slate-400 text-sm">We're not a massive corporation. We're a small team of engineers who remember exactly what it feels like to be lost.</p>
                </div>
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-[#050b18] bg-slate-800 flex items-center justify-center overflow-hidden">
                       <Users className="w-6 h-6 text-slate-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
