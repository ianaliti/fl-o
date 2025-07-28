export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  images: string[];
  colors: Color[];
  category: string;
  isNew?: boolean;
  isFavorite?: boolean;
  inStock: boolean;
  slug: string;
}

export interface Color {
  name: string;
  value: string;
  hex: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: Color;
}