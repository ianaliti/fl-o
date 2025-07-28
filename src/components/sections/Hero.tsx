'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { HeroSlide } from '@/types/content'
import { cn } from '@/lib/utils'

interface HeroProps {
  slides: HeroSlide[]
}

export const Hero: React.FC<HeroProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  if (!slides.length) return null

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentSlideData.image}
          alt={currentSlideData.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white bg-opacity-40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-sm uppercase tracking-widest mb-4 text-gray-800 opacity-80">
              {currentSlideData.category}
            </p>
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight text-gray-900">
              {currentSlideData.title}
            </h1>
            <p className="text-lg md:text-xl font-light mb-8 text-gray-700 leading-relaxed">
              {currentSlideData.description}
            </p>
            {currentSlideData.cta && (
              <Button 
                variant="primary"
                size="lg"
                onClick={() => window.location.href = currentSlideData.cta!.href}
              >
                {currentSlideData.cta.text}
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <button 
          onClick={goToPrevious}
          className="p-3 bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors"
          aria-label="Предыдущий слайд"
        >
          <ChevronLeft size={16} className="text-gray-900" />
        </button>
        <span className="text-gray-900 text-sm">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
        <button 
          onClick={goToNext}
          className="p-3 bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors"
          aria-label="Следующий слайд"
        >
          <ChevronRight size={16} className="text-gray-900" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-colors',
              index === currentSlide ? 'bg-gray-900' : 'bg-gray-900 bg-opacity-30'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}