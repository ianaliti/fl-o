
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, Heart, ShoppingBag } from 'lucide-react'
import { NAVIGATION_ITEMS } from '@/lib/constants'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 bg-white border-b border-gray-100 sticky top-0">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-50 rounded-full transition-colors md:hidden"
            >
              <Menu size={20} />
            </button>
            <Link href="/" className="text-2xl font-light tracking-wider hover:opacity-80 transition-opacity">
              flüo
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wider">
            {NAVIGATION_ITEMS.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="hover:text-gray-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden">
          <nav className="px-6 py-4 space-y-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="block text-sm uppercase tracking-wider hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}