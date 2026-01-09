
export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}
