import Image from 'next/image'

const galleryImages = [
  '/public/images/gallery/1.jpg',
  '/public/images/gallery/2.jpg',
  '/public/images/gallery/3.jpg',
  '/public/images/gallery/4.jpg',
  '/public/images/gallery/5.jpg',
  '/public/images/gallery/6.jpg',
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Хедер — если он в layout, не дублируем */}
      <section className="pt-24 pb-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">Коллекция SOO 수</h1>
        <div className="text-xl md:text-2xl font-semibold mb-2">Избранные аксессуары</div>
        <div className="text-lg md:text-xl text-gray-700 font-light max-w-2xl mx-auto">
          Украшения этой коллекции — как белая рубашка: простые, но яркие.
        </div>
      </section>

      {/* Галерея */}
      <section className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 px-4 mb-16">
        {galleryImages.map((src, i) => (
          <div key={i} className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={src}
              alt="Коллекция SOO"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </section>

      {/* Текстовый блок */}
      <section className="flex flex-col items-center mb-24">
        <div className="text-3xl md:text-4xl font-light text-center mb-6 max-w-2xl">
          Вот тут еще текст про то как все заебись
        </div>
        <a href="/about">
          <button className="px-8 py-3 border border-black rounded-full text-lg font-medium hover:bg-black hover:text-white transition">
            Наша история
          </button>
        </a>
      </section>

      {/* Футер */}
      <footer className="bg-black text-white py-12 mt-auto">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-2xl font-semibold mb-4 text-center">Оставайтесь на связи</div>
          <form className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <input
              type="email"
              placeholder="Ваш e-mail"
              className="px-4 py-2 rounded-full text-black focus:outline-none min-w-[220px]"
            />
            <button type="submit" className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
              Подписаться
            </button>
          </form>
          <div className="flex flex-col md:flex-row justify-between text-sm text-gray-400 gap-2">
            <div>flüo</div>
            <div>Коллекция | О бренде | Контакты</div>
            <div>© {new Date().getFullYear()}</div>
          </div>
        </div>
      </footer>
    </main>
  )
}