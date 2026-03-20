export interface PricingTier {
  name: string;
  price: number;
  period: string;
  features: string[];
}

export interface Tool {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  category: string;
  rating: number;
  reviewCount: number;
  pricing: PricingTier[];
  features: string[];
  pros: string[];
  cons: string[];
  website: string;
  affiliateUrl: string;
  logo: string;
  badge?: "Editor's Choice" | "Best Value" | "Most Popular";
  lastUpdated: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  toolCount: number;
}

export interface Review {
  id: string;
  toolId: string;
  author: string;
  rating: number;
  content: string;
  date: string;
  helpful: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
}
