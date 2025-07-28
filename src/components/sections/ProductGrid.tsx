import React from 'react'
import { ProductCard } from '@/components/common/ProductCard'
import { Product } from '@/types/product'
import { cn } from '@/lib/utils'

interface ProductGridProps {
  title?: string
  description?: string
  products: Product[]
  className?: string
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  title,
  description,
  products,
  className
}) => {
  return (
    <section className={cn('py-20 bg-white', className)}>
      <div className="max-w-7xl mx-auto px-6">
        {(title || description) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-light mb-4">{title}</h2>
            )}
            {description && (
              <p className="text-gray-600 max-w-2xl mx-auto font-light">
                {description}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Товары не найдены</p>
          </div>
        )}
      </div>
    </section>
  )
}