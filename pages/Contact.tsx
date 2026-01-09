
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">Get in <span className="gradient-text">Touch.</span></h1>
          <p className="text-slate-400 text-xl leading-relaxed mb-12">
            Have a question about the app? Need help with your roadmap? Or just want to say hi? We're here to help.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Support Email</p>
                <p className="text-white font-bold">hello@roadmapfinder.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-cyan-600/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Social</p>
                <div className="flex gap-4">
                  <a href="#" className="text-white font-bold hover:text-blue-400">Twitter</a>
                  <a href="#" className="text-white font-bold hover:text-blue-400">Discord</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 lg:p-12 relative overflow-hidden">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-6">
                <Send className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
              <p className="text-slate-400">We'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-blue-400 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Jane Doe" 
                    className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="jane@example.com" 
                    className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300">Subject</label>
                <select className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                  <option>General Inquiry</option>
                  <option>App Support</option>
                  <option>Roadmap Suggestion</option>
                  <option>Billing Question</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300">Message</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="How can we help?" 
                  className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20"
              >
                Send Message <MessageSquare className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
