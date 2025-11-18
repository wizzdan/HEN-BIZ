export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  image: string;
  category: 'Tray' | 'Half-Tray' | 'Specialty';
  size: 'Medium' | 'Large' | 'Jumbo';
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  subscription?: SubscriptionFrequency;
}

export enum SubscriptionFrequency {
  None = 'None',
  Weekly = 'Weekly',
  BiWeekly = 'Bi-Weekly',
  Monthly = 'Monthly',
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}