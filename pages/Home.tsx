
import React, { useEffect, useRef } from 'react';
// Added Trophy to the imports from lucide-react
import { ArrowRight, Code2, Globe, Cpu, Zap, Star, ShieldCheck, Github, Layout, ArrowUpRight, Trophy } from 'lucide-react';
import PhoneEmulator from '../components/PhoneEmulator';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1000px] grid-pattern -z-10 pointer-events-none opacity-50"></div>
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-32 lg:pb-48 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="reveal" ref={addToRefs}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <Zap className="w-3 h-3 animate-pulse" /> Accelerated Learning v3.0
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              Architect Your <br/>
              <span className="gradient-text">Tech Legacy.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed font-medium max-w-lg">
              Stop wandering through tutorial hell. Get a structured map, real assignments, and a personal AI mentor to guide your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all btn-glow flex items-center justify-center gap-3">
                Download the App <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                View Free Roadmaps
              </button>
            </div>
            
            <div className="mt-16 flex items-center gap-8 border-t border-white/5 pt-8">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                   </div>
                 ))}
               </div>
               <p className="text-sm text-slate-500">
                 <span className="text-white font-bold">15,000+</span> builders already on the path
               </p>
            </div>
          </div>

          <div className="relative reveal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
            <PhoneEmulator />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-white"><Layout className="w-6 h-6 text-blue-500" /> React</div>
           <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-white"><Github className="w-6 h-6 text-white" /> GitHub</div>
           <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-white"><Cpu className="w-6 h-6 text-purple-500" /> AWS</div>
           <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-white"><Code2 className="w-6 h-6 text-yellow-500" /> JS</div>
        </div>
      </section>

      {/* Realistic Curriculum Section */}
      <section className="py-24 lg:py-48 px-4 bg-[#050b18] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 reveal" ref={addToRefs}>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">Built for the <br/><span className="text-blue-500">Ambitious Learner.</span></h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto">We don't teach "basics". We help you build the systems that shape the future.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "AI Engineering", level: "Advanced", desc: "Master LLMs, RAG systems, and vector databases from scratch.", color: "purple" },
              { title: "Next.js Mastery", level: "Pro", desc: "Build enterprise-scale applications with Server Components and Zod.", color: "blue" },
              { title: "DevOps Architect", level: "Expert", desc: "Containers, CI/CD pipelines, and cloud-native scaling strategies.", color: "cyan" }
            ].map((path, idx) => (
              <div 
                key={idx} 
                className="reveal group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.08] transition-all duration-500 flex flex-col h-full"
                ref={addToRefs}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-12">
                  <div className={`w-14 h-14 rounded-2xl bg-${path.color}-500/20 flex items-center justify-center text-${path.color}-400`}>
                    <Code2 className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-500 border border-white/5">{path.level}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{path.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed flex-grow">{path.desc}</p>
                <button className="flex items-center gap-2 text-sm font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-widest">
                   Explore Path <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase with Realistic Visuals */}
      <section className="py-24 lg:py-48 px-4">
        <div className="max-w-7xl mx-auto space-y-32 lg:space-y-64">
          
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center reveal" ref={addToRefs}>
            <div className="relative rounded-[40px] overflow-hidden group">
               <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <img 
                 src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop" 
                 alt="Developer Coding" 
                 className="w-full h-[400px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-110" 
               />
               <div className="absolute bottom-10 left-10 p-6 bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 max-w-xs">
                  <p className="text-white font-bold mb-1">Live Mentorship</p>
                  <p className="text-slate-400 text-xs leading-relaxed">AI analyzes your code commits and gives instant feedback on every assignment.</p>
               </div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-8">Guided by Intelligence. <br/>Validated by <span className="text-blue-500">Proof.</span></h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-10">
                Watching a video is easy. Building a system is hard. Roadmapfinder connects your progress directly to GitHub, tracking every line of code you write towards your mastery.
              </p>
              <div className="space-y-6">
                 <div className="flex gap-4 items-start">
                   <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 text-blue-400">
                     <ShieldCheck className="w-5 h-5" />
                   </div>
                   <p className="text-slate-300 font-medium">Verified Certificate for every completed roadmap.</p>
                 </div>
                 <div className="flex gap-4 items-start">
                   <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 text-blue-400">
                     <Star className="w-5 h-5" />
                   </div>
                   <p className="text-slate-300 font-medium">Personalized daily goals based on your learning speed.</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center reveal" ref={addToRefs}>
            <div className="lg:order-2 relative rounded-[40px] overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1631&auto=format&fit=crop" 
                 alt="Workspace" 
                 className="w-full h-[400px] lg:h-[600px] object-cover" 
               />
               <div className="absolute top-10 right-10 p-6 bg-blue-600 rounded-2xl shadow-2xl animate-bounce">
                  <Trophy className="w-8 h-8 text-white" />
               </div>
            </div>
            <div className="lg:order-1">
              <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-8">Mastery shouldn't <br/>be a <span className="text-cyan-400">lonely climb.</span></h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-10">
                Join a global community of architects. Participate in monthly build challenges, peer reviews, and exclusive career workshops.
              </p>
              <button className="group text-white font-bold text-xl flex items-center gap-3">
                Join our Discord <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-all"><ArrowRight className="w-5 h-5" /></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - More visual */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <h2 className="text-4xl font-black text-white tracking-tight">The Builders' <br/>Perspective.</h2>
              <div className="flex gap-4">
                 <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"><ArrowRight className="w-5 h-5 rotate-180" /></button>
                 <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"><ArrowRight className="w-5 h-5" /></button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {TESTIMONIALS.map((t, i) => (
               <div key={i} className="p-10 rounded-[40px] bg-[#020617] border border-white/10 flex flex-col relative reveal" ref={addToRefs} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="text-blue-500 mb-8">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 inline-block fill-current" />)}
                  </div>
                  <p className="text-slate-300 text-lg italic leading-relaxed mb-12 flex-grow">"{t.content}"</p>
                  <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt={t.author} className="w-12 h-12 rounded-full grayscale" />
                    <div>
                      <p className="text-white font-black text-sm">{t.author}</p>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* High-Impact CTA */}
      <section className="py-32 lg:py-64 px-4 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600 rounded-[100%] blur-[200px] opacity-20 -z-10"></div>
        <div className="max-w-4xl mx-auto text-center reveal" ref={addToRefs}>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-12">Don't just learn. <br/><span className="gradient-text">Dominate.</span></h2>
          <p className="text-slate-400 text-2xl mb-16 leading-relaxed">Your roadmap is ready. The mentor is waiting. The only thing missing is you.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-black px-12 py-6 rounded-[24px] font-black text-xl hover:scale-105 transition-all shadow-2xl">
              Get the App for iOS
            </button>
            <button className="bg-slate-900 text-white px-12 py-6 rounded-[24px] font-black text-xl border border-white/10 hover:bg-slate-800 transition-all">
              Join Discord Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
