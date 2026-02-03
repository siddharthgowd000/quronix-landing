// Common types for the application

export interface NavItem {
    title: string;
    href: string;
    disabled?: boolean;
  }
  
  export interface SiteConfig {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
      twitter?: string;
      github?: string;
      linkedin?: string;
    };
  }