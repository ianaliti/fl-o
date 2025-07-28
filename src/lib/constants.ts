export const SITE_CONFIG = {
  name: 'flüo',
  description: 'Аксессуары, созданные с любовью к деталям и качеству',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://fluo.ru',
  ogImage: '/images/og-image.jpg',
  links: {
    instagram: 'https://instagram.com/fluo_accessories',
    telegram: 'https://t.me/fluo_accessories',
  }
}

export const NAVIGATION_ITEMS = [
  { name: 'Коллекция', href: '/catalog' },
  { name: 'О бренде', href: '/about' },
  { name: 'Контакты', href: '/contact' },
]

export const PRODUCT_CATEGORIES = [
  'Брелки',
  'Мягкие игрушки',
  'Аксессуары',
  'Подарки',
  'Новинки',
]