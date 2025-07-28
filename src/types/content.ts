export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  cta?: {
    text: string;
    href: string;
  };
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  description?: string;
}

export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}