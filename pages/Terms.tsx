
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 lg:py-32">
      <h1 className="text-4xl font-black text-white mb-8">Terms of Service</h1>
      <p className="text-slate-400 mb-12">Last updated: October 2023</p>
      
      <div className="prose prose-invert prose-slate max-w-none space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-400 leading-relaxed">
            By accessing or using Roadmapfinder, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you should not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
          <p className="text-slate-400 leading-relaxed">
            Roadmapfinder provides learning roadmaps, AI-powered mentoring, and progress tracking tools. We reserve the right to modify or discontinue any part of the service at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
          <p className="text-slate-400 leading-relaxed">
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
          <p className="text-slate-400 leading-relaxed">
            The content, features, and functionality of Roadmapfinder are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
          <p className="text-slate-400 leading-relaxed">
            In no event shall Roadmapfinder be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the service.
          </p>
        </section>

        <section className="pt-8 border-t border-white/10">
          <p className="text-slate-500 text-sm">
            For further information, please contact us at hello@roadmapfinder.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
