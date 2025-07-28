import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: '1',
    name: 'Пушистый кот',
    price: 590,
    currency: '₽',
    description: 'Милый пушистый брелок в виде котика. Мягкий на ощупь, отлично держится на сумке или ключах.',
    images: [
      'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=400&fit=crop',
    ],
    colors: [
      { name: 'Розовый', value: 'pink', hex: '#ffc0cb' },
      { name: 'Голубой', value: 'blue', hex: '#87ceeb' },
      { name: 'Серый', value: 'gray', hex: '#808080' },
      { name: 'Белый', value: 'white', hex: '#ffffff' },
    ],
    category: 'Брелки',
    isNew: true,
    inStock: true,
    slug: 'pushistyj-kot',
  },
  {
    id: '2',
    name: 'Мишка Тедди',
    price: 650,
    currency: '₽',
    description: 'Классический мишка Тедди в миниатюре. Изготовлен из качественных материалов.',
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    ],
    colors: [
      { name: 'Коричневый', value: 'brown', hex: '#8b4513' },
      { name: 'Бежевый', value: 'beige', hex: '#f5f5dc' },
      { name: 'Розовый', value: 'pink', hex: '#ffc0cb' },
    ],
    category: 'Брелки',
    isFavorite: true,
    inStock: true,
    slug: 'mishka-teddi',
  },
  {
    id: '3',
    name: 'Единорог',
    price: 720,
    currency: '₽',
    description: 'Волшебный единорог с радужной гривой. Станет отличным подарком для любителей сказок.',
    images: [
      'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?w=400&h=400&fit=crop',
    ],
    colors: [
      { name: 'Радужный', value: 'rainbow', hex: '#ff69b4' },
      { name: 'Розовый', value: 'pink', hex: '#ffc0cb' },
      { name: 'Фиолетовый', value: 'purple', hex: '#dda0dd' },
    ],
    category: 'Брелки',
    isNew: true,
    inStock: true,
    slug: 'edinorog',
  },
  {
    id: '4',
    name: 'Пушистое сердце',
    price: 490,
    currency: '₽',
    description: 'Символ любви в мягком исполнении. Идеальный подарок для близких.',
    images: [
      'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop',
    ],
    colors: [
      { name: 'Красный', value: 'red', hex: '#ff0000' },
      { name: 'Розовый', value: 'pink', hex: '#ffc0cb' },
      { name: 'Белый', value: 'white', hex: '#ffffff' },
    ],
    category: 'Брелки',
    inStock: true,
    slug: 'pushistoe-serdce',
  },
]