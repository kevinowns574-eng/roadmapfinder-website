
import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Roadmapfinder</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Learn tech skills with structured paths, curated resources, and AI-powered consistency. No more tutorial hell.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li><Link to="/pricing" className="text-slate-400 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><a href="https://roadmapfinder.tech" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">Web Version (Free)</a></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">How it Works</Link></li>
              <li><button className="text-slate-400 hover:text-white transition-colors text-sm">Install App</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">Our Mission</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Roadmapfinder. All rights reserved. Built for learners, by learners.
          </p>
          <div className="flex space-x-6">
            <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">Official Site</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
