import { Hero } from '@/components/sections/Hero'
import { ProductGrid } from '@/components/sections/ProductGrid'
// import { Gallery } from '@/components/sections/Gallery'
// import { Newsletter } from '@/components/sections/Newsletter'
import { products } from '@/data/products'
import { HeroSlide, GalleryItem } from '@/types/content'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'


export default function HomePage() {
  const featuredProducts = products.slice(0, 4)

  return (
    <>
      
      <ProductGrid
        title="Избранные аксессуары"
        description="Каждый элемент коллекции создан с особым вниманием к деталям и качеству материалов"
        products={featuredProducts}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Философия нежности</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-light">
                Flüo — это больше чем аксессуары. Это история о том, как небольшие детали 
                могут изменить настроение и подчеркнуть индивидуальность.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8 font-light">
                Каждый брелок создается вручную с использованием качественных материалов. 
                Мы верим, что красота кроется в простоте и искренности.
              </p>
              <a href="/about">
                <Button variant="outline">
                  Наша история
                </Button>
              </a>
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-gray-100 rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=750&fit=crop"
                alt="Процесс создания"
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <Newsletter /> */}
    </>
  )
}