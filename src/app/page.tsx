'use client'

import Image from 'next/image'


function GalleryCollages() {
  return (
    <div className="w-full flex flex-col gap-16 mb-8 sm:mb-16 px-0 sm:px-4">
      {/* Коллаж 1: 2 больших + 2 маленьких, асимметрия */}
      <div className="relative w-full max-w-screen-2xl mx-auto min-h-[340px] aspect-[4/2] flex gap-4">
        <div className="flex flex-col gap-4 w-2/3 min-w-[200px]">
          <div className="relative h-2/3 min-h-[180px] aspect-[4/3]">
            <Image src="/images/gallery/earrings-chain.png" alt="1" fill className="object-cover rounded-xl shadow-lg" />
          </div>
          <div className="relative h-1/3 min-h-[80px] aspect-[4/2]">
            <Image src="/images/gallery/earrings-heart.png" alt="2" fill className="object-cover rounded-xl shadow" />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/3 min-w-[120px]">
          <div className="relative h-1/2 min-h-[80px] aspect-square">
            <Image src="/images/gallery/bracelet-hand.png" alt="3" fill className="object-cover rounded-xl shadow" />
          </div>
          <div className="relative h-1/2 min-h-[80px] aspect-square">
            <Image src="/images/gallery/earrings-gold.png" alt="4" fill className="object-cover rounded-xl shadow" />
          </div>
        </div>
        {/* Маленькое фото поверх */}
        <div className="hidden sm:block absolute right-12 top-1/2 w-32 h-32 -translate-y-1/2 z-20 shadow-2xl border-4 border-white rounded-xl overflow-hidden">
          <Image src="/images/gallery/earrings-kafa.png" alt="5" fill className="object-cover" />
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .flex, .grid { flex-direction: column !important; gap: 1.5rem !important; }
          .aspect-[4/2], .aspect-[4/3], .aspect-square { aspect-ratio: 1/1 !important; min-height: 120px !important; }
          .w-1\/3, .w-2\/3 { width: 100% !important; min-width: 0 !important; }
          .right-12, .top-1\/2, .-translate-y-1\/2 { right: 0 !important; top: auto !important; transform: none !important; position: static !important; margin-top: 1rem !important; }
        }
      `}</style>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Заголовок и подзаголовок */}
      <section className="pt-16 pb-6 sm:pt-24 sm:pb-10 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-3 sm:mb-4 tracking-tight">Коллекция SOO 수</h1>
        <div className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2">Избранные аксессуары</div>
        <div className="text-base sm:text-lg md:text-xl text-gray-700 font-light max-w-xl sm:max-w-2xl mx-auto">
          Украшения этой коллекции — как белая рубашка: простые, но яркие.
        </div>
      </section>

      {/* Статичные коллажи */}
      <GalleryCollages />

      {/* Секция про философию бренда (адаптивная) */}
      <section className="py-10 sm:py-20 bg-gray-50 w-full">
        <div className="max-w-3xl sm:max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">Философия нежности</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 font-light">
                Flüo — это больше чем аксессуары. Это история о том, как небольшие детали 
                могут изменить настроение и подчеркнуть индивидуальность.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 font-light">
                Мы верим, что красота кроется в простоте и искренности.
              </p>
              <a href="/about">
                <button className="px-6 sm:px-8 py-2 sm:py-3 border border-black rounded-full text-base sm:text-lg font-medium hover:bg-black hover:text-white transition">
                  Наша история
                </button>
              </a>
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-gray-100 rounded-lg max-w-xs sm:max-w-md mx-auto">
              <Image
                src="/images/gallery/IMG_1771.PNG"
                alt="Процесс создания"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Футер (чёрный фон, белый текст) */}
      <section className="bg-black text-white py-12 sm:py-16 mt-auto border-t border-gray-900">
        <div className="max-w-3xl sm:max-w-5xl mx-auto px-4">
          <div className="text-3xl sm:text-4xl font-bold mb-6 text-center tracking-tight">Оставайтесь на связи</div>
          <div className="text-center text-lg mb-8 text-gray-300">Узнавайте первыми о новых коллекциях и эксклюзивных предложениях</div>
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10">
            <input
              type="email"
              placeholder="Ваш e-mail"
              className="px-4 py-3 rounded-full bg-white text-black placeholder-gray-700 focus:outline-none min-w-[180px] sm:min-w-[260px] border-2 border-black shadow-md"
            />
            <button type="submit" className="px-6 sm:px-8 py-3 rounded-full bg-white text-black font-semibold text-lg shadow hover:bg-gray-200 transition">
              Подписаться
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}