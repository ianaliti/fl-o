'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { Product, Color } from '@/types/product'
import { formatPrice, cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  className?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const [selectedColor, setSelectedColor] = useState<Color>(product.colors[0])
  const [isLoading, setIsLoading] = useState(false)


  const getColorClass = (color: Color) => {
    const colorClasses: Record<string, string> = {
      pink: 'bg-pink-300',
      blue: 'bg-blue-300',
      gray: 'bg-gray-300',
      white: 'bg-white border border-gray-200',
      brown: 'bg-amber-600',
      beige: 'bg-amber-100',
      red: 'bg-red-300',
      purple: 'bg-purple-300',
      green: 'bg-green-300',
    }
    return colorClasses[color.value] || 'bg-gray-300'
  }

  return (
    <div className={cn('group cursor-pointer bg-white rounded-lg overflow-hidden', className)}>
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Link href={`/catalog/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">
              Новинка
            </span>
          )}
          {!product.inStock && (
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-medium rounded">
              Нет в наличии
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-colors">
          <Heart 
            size={16} 
            className={cn(
              'transition-colors',
              product.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
            )}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link href={`/catalog/${product.slug}`}>
          <h3 className="text-lg font-light mb-2 hover:text-gray-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-xl font-medium text-gray-900 mb-3">
          {formatPrice(product.price, product.currency)}
        </p>

        {/* Color Selector */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color.value}
                onClick={() => setSelectedColor(color)}
                className={cn(
                  'w-6 h-6 rounded-full transition-all',
                  getColorClass(color),
                  selectedColor.value === color.value && 'ring-2 ring-offset-2 ring-gray-400'
                )}
                title={color.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}