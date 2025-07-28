import { notFound } from 'next/navigation'
import Image from 'next/image'
import { products } from '@/data/products'
// import { ProductDetails } from '@/components/sections/ProductDetails'
// import { RelatedProducts } from '@/components/sections/RelatedProducts'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug)
  
  if (!product) {
    return {
      title: 'Товар не найден',
    }
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      {/* <ProductDetails product={product} />
      {relatedProducts.length > 0 && (
        <RelatedProducts products={relatedProducts} />
      )} */}
      <p>Product Details</p>
    </div>
  )
}