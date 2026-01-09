
import React from 'react';
import { NavItem, Testimonial, PricingPlan } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Aravind K.',
    role: 'Frontend Developer Student',
    content: "The structure here is unmatched. I wasted months watching random tutorials before Roadmapfinder gave me a clear path. Now I know exactly what to learn next.",
  },
  {
    id: '2',
    author: 'Sarah Jenkins',
    role: 'Career Switcher',
    content: "The AI-powered app is a game changer. It created a custom roadmap for my busy schedule, and the progress tracking kept me accountable when I felt like quitting.",
  },
  {
    id: '3',
    author: 'Rohan Mehta',
    role: 'CS Student',
    content: "Usually, I get overwhelmed by documentation. Roadmapfinder curates the best parts and gives me assignments that actually force me to build stuff.",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Monthly',
    price: '₹199',
    period: '/ month',
    features: [
      'Personalized AI Roadmaps',
      'Progress Tracking',
      'AI Learning Mentor',
      'Assignments & Proof Submission',
      'Community Access',
      'Mobile App Exclusive',
    ],
  },
  {
    name: 'Yearly',
    price: '₹1,499',
    period: '/ year',
    isPopular: true,
    features: [
      'Everything in Monthly',
      '25% Discount vs Monthly',
      'Priority Feature Access',
      'Long-term consistency focus',
    ],
  },
];
