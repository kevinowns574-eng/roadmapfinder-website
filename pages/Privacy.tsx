
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 lg:py-32">
      <h1 className="text-4xl font-black text-white mb-8">Privacy Policy</h1>
      <p className="text-slate-400 mb-12">Last updated: October 2023</p>
      
      <div className="prose prose-invert prose-slate max-w-none space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
          <p className="text-slate-400 leading-relaxed">
            We collect information you provide directly to us when you create an account, such as your name, email address, and learning preferences. We also collect usage data related to your progress in roadmaps and assignments.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
          <p className="text-slate-400 leading-relaxed">
            We use the information we collect to personalize your learning experience, provide AI-powered mentoring, track your progress, and communicate with you about your account and our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
          <p className="text-slate-400 leading-relaxed">
            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Sharing of Information</h2>
          <p className="text-slate-400 leading-relaxed">
            We do not share your personal data with third parties except as necessary to provide our services, comply with the law, or protect our rights.
          </p>
        </section>

        <section className="pt-8 border-t border-white/10">
          <p className="text-slate-500 text-sm">
            If you have any questions about this Privacy Policy, please contact us at hello@roadmapfinder.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
