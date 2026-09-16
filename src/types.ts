export type PlanId = 'branding' | 'performance' | 'venda-total';

export interface Plan {
  id: PlanId;
  name: string;
  badge?: string;
  price: string;
  pricePeriod: string;
  setupFee?: string;
  contractTerm: string;
  mediaBudgetNote?: string;
  summary: string;
  idealFor: string;
  includesInherited?: string;
  deliverables: string[];
  exclusionsNote?: string;
  ctaText: string;
  highlighted?: boolean;
}

export interface ComparisonItem {
  feature: string;
  category?: string;
  branding: boolean | string;
  performance: boolean | string;
  vendaTotal: boolean | string;
}

export interface MetricCard {
  id: string;
  label: string;
  value: string;
  subValue: string;
  description: string;
  trend?: string;
  badge?: string;
}

export interface CaseStudy {
  id: string;
  name: string;
  tagline: string;
  location: string;
  productType: string;
  imageUrl?: string;
  mediaInvestment: string;
  leads: string;
  cpl: string;
  visits: string;
  proposals: string;
  sales: string;
  vgv: string;
  vso: string;
  highlightResult: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface DiagnosticQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    description?: string;
    planWeight?: {
      branding?: number;
      performance?: number;
      'venda-total'?: number;
    };
  }[];
}
