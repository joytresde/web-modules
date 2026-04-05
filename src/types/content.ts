export interface NavLink {
  label: string;
  href:  string;
}

export interface CTA {
  label: string;
  href:  string;
}

export interface HeroContent {
  title:    string;
  subtitle: string;
  cta:      CTA;
  image?:   string;
  badge?:   string;
  bgImage?: string;
}

export interface AboutContent {
  text:     string;
  image:    string;
  reverse?: boolean;
  title?:   string;
}

export interface ServiceItem {
  title:       string;
  description: string;
  icon?:       string;
  image?:      string;
}

export interface TestimonialItem {
  name:    string;
  role?:   string;
  text:    string;
  avatar?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer:   string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ContactContent {
  email?:        string;
  whatsapp?:     string;
  address?:      string;
  formEndpoint?: string;
}

export interface FooterContent {
  links:      NavLink[];
  social?:    { platform: string; href: string }[];
  legalText?: string;
}

// --- WhatsApp Float ---
export interface WhatsAppFloatContent {
  phone:    string;
  message?: string;
}

// --- Pricing ---
export interface PricingFeature {
  text:      string;
  included?: boolean;
}

export interface PricingPlan {
  name:      string;
  price:     string;
  currency:  string;
  period:    string;
  features:  PricingFeature[];
  cta:       CTA;
  featured?: boolean;
}

export interface PricingCardsContent {
  plans:     PricingPlan[];
  title?:    string;
  subtitle?: string;
}

// --- CTA Banner ---
export interface CTABannerContent {
  title:         string;
  subtitle?:     string;
  primaryCta:    CTA;
  secondaryCta?: CTA;
}

// --- Process Steps ---
export interface ProcessStep {
  number:      number;
  title:       string;
  description: string;
  icon?:       string;
}

export interface ProcessStepsContent {
  steps:     ProcessStep[];
  title?:    string;
  subtitle?: string;
}

// --- Logo Bar ---
export interface LogoItem {
  src:   string;
  alt:   string;
  href?: string;
}

export interface LogoBarContent {
  logos:  LogoItem[];
  title?: string;
}

export interface SiteContent {
  nav?:          NavLink[];
  hero?:         HeroContent;
  about?:        AboutContent;
  services?:     ServiceItem[];
  testimonials?: TestimonialItem[];
  stats?:        StatItem[];
  faq?:          FAQItem[];
  gallery?:      GalleryImage[];
  contact?:      ContactContent;
  footer?:       FooterContent;
  whatsappFloat?: WhatsAppFloatContent;
  pricing?:      PricingCardsContent;
  ctaBanner?:    CTABannerContent;
  processSteps?: ProcessStepsContent;
  logoBar?:      LogoBarContent;
}
