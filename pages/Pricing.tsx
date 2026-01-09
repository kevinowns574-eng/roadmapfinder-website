
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, ShieldCheck, Zap, HelpCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-24 lg:py-48">
        <div className="text-center mb-32">
          <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-6 block">Unlimited Growth</span>
          <h1 className="text-5xl lg:text-8xl font-black text-white tracking-tighter mb-10">One Price. <br/>Infinite <span className="gradient-text">Potential.</span></h1>
          <p className="text-slate-400 text-2xl max-w-2xl mx-auto font-medium">
            Everything you need to go from hobbyist to engineer. No tiers, no traps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.name}
              className={`group relative p-12 rounded-[50px] border transition-all duration-500 ${
                plan.isPopular 
                  ? 'bg-blue-600/10 border-blue-500/50 shadow-[0_0_100px_-20px_rgba(59,130,246,0.2)] scale-105 z-10' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-12 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-xl">
                  Best Value
                </div>
              )}
              
              <div className="mb-12">
                <h3 className="text-white font-black text-2xl mb-6 uppercase tracking-widest">{plan.name}</h3>
                <div className="flex items-baseline gap-3">
                  <span className="text-7xl font-black text-white">{plan.price}</span>
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-sm">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-6 mb-16">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 text-blue-400">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-slate-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-6 rounded-3xl font-black text-xl transition-all uppercase tracking-widest ${
                plan.isPopular 
                  ? 'bg-blue-600 text-white btn-glow hover:bg-blue-700' 
                  : 'bg-white text-black hover:bg-slate-200'
              }`}>
                Subscribe Now
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Style Footer */}
        <div className="mt-48 max-w-4xl mx-auto text-center">
           <div className="inline-flex items-center gap-3 text-slate-500 mb-8 border border-white/10 px-6 py-3 rounded-full">
             <HelpCircle className="w-5 h-5" />
             <span className="font-bold uppercase tracking-widest text-sm">Frequently Asked Questions</span>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div>
                <h4 className="text-white font-bold mb-3">Is the app available on Android?</h4>
                <p className="text-slate-500 leading-relaxed">Currently we are exclusive to iOS and the Web. Android version is slated for release in Q1 2024.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">Can I cancel anytime?</h4>
                <p className="text-slate-500 leading-relaxed">Yes. Our billing is handled via the App Store and can be managed directly from your subscription settings.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
