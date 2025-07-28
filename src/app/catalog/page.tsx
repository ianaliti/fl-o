'use client'

import React, { useState, useMemo } from 'react'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { Button } from '@/components/ui/Button'
import { products } from '@/data/products'
import { PRODUCT_CATEGORIES } from '@/lib/constants'

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все')
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'newest'>('newest')

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Фильтрация по категории
    if (selectedCategory !== 'Все') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Сортировка
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'price':
          return a.price - b.price
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
        default:
          return 0
      }
    })

    return filtered
  }, [selectedCategory, sortBy])

  const categories = ['Все', ...PRODUCT_CATEGORIES]

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light text-center mb-6">
            Каталог
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Откройте для себя всю коллекцию милых аксессуаров flüo
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Сортировка:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="newest">Сначала новые</option>
                <option value="name">По названию</option>
                <option value="price">По цене</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <ProductGrid 
        products={filteredProducts}
        className="py-12"
      />
    </div>
  )
}