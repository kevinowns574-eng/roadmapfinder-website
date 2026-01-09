
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex justify-between h-20 items-center px-8 rounded-full transition-all duration-500 ${scrolled ? 'glass-nav shadow-2xl' : ''}`}>
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">Roadmapfinder</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-widest uppercase transition-colors hover:text-blue-400 ${
                  isActive(link.path) ? 'text-blue-400' : 'text-slate-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://roadmapfinder.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold tracking-widest uppercase text-slate-400 hover:text-white transition-colors"
            >
              Free Roadmaps
            </a>
            <button className="bg-white text-black px-6 py-3 rounded-2xl text-sm font-black transition-all hover:scale-105 active:scale-95 btn-glow uppercase tracking-widest">
              Get App
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-slate-950 z-40 flex flex-col p-12 animate-in fade-in duration-300">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-black text-white">Roadmapfinder</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-10 h-10 text-white" /></button>
          </div>
          <div className="flex flex-col space-y-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-black tracking-tighter ${
                  isActive(link.path) ? 'text-blue-400' : 'text-slate-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="https://roadmapfinder.tech" className="text-4xl font-black tracking-tighter text-slate-500">Free Roadmaps</a>
          </div>
          <div className="mt-auto">
             <button className="w-full py-6 bg-blue-600 text-white rounded-3xl font-black text-xl uppercase tracking-widest">
                Download the App
             </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
