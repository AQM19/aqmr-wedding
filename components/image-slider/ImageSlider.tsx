'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'

interface ImageSliderProps {
    images: string[];
    interval?: number;
    height?: string;
    className?: string;
    objectFit?: 'cover' | 'contain';
}

export default function ImageSlider({ images, interval = 3000, className = '', height = 'h-[400px]', objectFit = 'cover' }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, [images.length])

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }, [images.length])

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, interval)

        return () => clearInterval(timer)
    }, [nextSlide, interval])

    return (
        <div className={`relative w-full max-w-6xl mx-auto flex flex-col justify-center items-center ${className}`}>

            <div className={`relative overflow-hidden justify-center items-center flex w-full ${height}`}>
                {
                    images.map((src, index) => (
                        <Image
                            key={`slide-image-${index}`}
                            src={src}
                            alt={`Slide ${index + 1}`}
                            fill
                            sizes="100vw"
                            className={`absolute transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                } object-${objectFit}`}
                            priority={index === 0}
                        />
                    ))
                }
            </div>

            <div className="flex space-x-2 mt-4">
                {
                    images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-gray-500'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))
                }
            </div>
        </div>
    )
}