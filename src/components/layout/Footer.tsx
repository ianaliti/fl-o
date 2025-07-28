import React from 'react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

export const Footer: React.FC = () => {
  const footerLinks = {
    collection: [
      { name: 'Брелки', href: '/catalog?category=keychains' },
      { name: 'Новинки', href: '/catalog?category=new' },
      { name: 'Подарки', href: '/catalog?category=gifts' },
      { name: 'Эксклюзив', href: '/catalog?category=exclusive' },
    ],
    company: [
      { name: 'О нас', href: '/about' },
      { name: 'Качество', href: '/quality' },
    ],
    support: [
      { name: 'Контакты', href: '/contact' },
      { name: 'Доставка', href: '/shipping' },
      { name: 'Возврат', href: '/returns' },
      { name: 'FAQ', href: '/faq' },
    ],
  }

  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-2xl font-light mb-6 tracking-wider">flüo</h4>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              {SITE_CONFIG.description}
            </p>
          </div>
          
          <div>
            <h5 className="text-sm uppercase tracking-wider mb-4">Коллекция</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              {footerLinks.collection.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="hover:text-black transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-sm uppercase tracking-wider mb-4">Компания</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="hover:text-black transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-sm uppercase tracking-wider mb-4">Поддержка</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="hover:text-black transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p className="font-light">&copy; 2025 flüo. Все права защищены.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-black transition-colors font-light">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors font-light">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}