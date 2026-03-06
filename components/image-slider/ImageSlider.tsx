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

const CornerOrnament = ({ className }: { className: string }) => (
    <svg
        className={className}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M2 2 L14 2 L2 14 Z" fill="none" stroke="#C9A87C" strokeWidth="1.2" />
        <path d="M2 2 L8 2" stroke="#C9A87C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 2 L2 8" stroke="#C9A87C" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="5" cy="5" r="1.2" fill="#B8826A" opacity="0.8" />
        <path d="M10 2 Q12 5 10 8" stroke="#C9A87C" strokeWidth="0.8" fill="none" opacity="0.6" />
        <path d="M2 10 Q5 12 8 10" stroke="#C9A87C" strokeWidth="0.8" fill="none" opacity="0.6" />
    </svg>
)

export default function ImageSlider({ images, interval = 3000, className = '', height = 'h-[200px] md:h-[400px]', objectFit = 'cover' }: ImageSliderProps) {
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
        // ─── Wrapper exterior: sombra ambiental cálida ───────────────────────
        <div
            className={`relative ${className}`}
            style={{
                padding: '3px',
                // Gradiente dorado champagne que recorre los 4 lados
                background: 'linear-gradient(135deg, #C9A87C 0%, #F0D9A8 30%, #B8826A 55%, #F0D9A8 75%, #C9A87C 100%)',
                borderRadius: '6px',
                boxShadow: '0 8px 40px rgba(180, 130, 80, 0.25), 0 2px 12px rgba(0,0,0,0.12)',
            }}
        >
            {/* ─── Marco interior: padding beige cremoso ───────────────────── */}
            <div
                style={{
                    background: 'oklch(0.98 0.012 85)',
                    padding: '10px',
                    borderRadius: '4px',
                    position: 'relative',
                }}
            >
                {/* Línea interior dorada fina */}
                <div
                    style={{
                        position: 'absolute',
                        inset: '5px',
                        border: '1px solid rgba(201, 168, 124, 0.45)',
                        borderRadius: '2px',
                        pointerEvents: 'none',
                        zIndex: 20,
                    }}
                />

                {/* ─── Esquinas ornamentales ────────────────────────────────── */}
                {/* Top-left */}
                <CornerOrnament className="absolute top-1 left-1 z-30" />
                {/* Top-right - espejado horizontal */}
                <CornerOrnament className="absolute top-1 right-1 z-30 scale-x-[-1]" />
                {/* Bottom-left - espejado vertical */}
                <CornerOrnament className="absolute bottom-1 left-1 z-30 scale-y-[-1]" />
                {/* Bottom-right - espejado en ambos ejes */}
                <CornerOrnament className="absolute bottom-1 right-1 z-30 scale-x-[-1] scale-y-[-1]" />

                {/* ─── Slider principal ─────────────────────────────────────── */}
                <div className={`relative ${height} overflow-hidden rounded-sm`}>
                    {images.map((src, index) => (
                        <div
                            key={src}
                            className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                fill
                                className={`object-${objectFit}`}
                                priority={index === 0}
                            />
                        </div>
                    ))}

                    {/* Botones de navegación */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full transition-all duration-200"
                        style={{
                            background: 'rgba(250, 245, 236, 0.82)',
                            border: '1px solid rgba(201, 168, 124, 0.5)',
                            color: '#B8826A',
                            backdropFilter: 'blur(4px)',
                        }}
                        aria-label="Previous slide"
                    >
                        <ArrowBigLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full transition-all duration-200"
                        style={{
                            background: 'rgba(250, 245, 236, 0.82)',
                            border: '1px solid rgba(201, 168, 124, 0.5)',
                            color: '#B8826A',
                            backdropFilter: 'blur(4px)',
                        }}
                        aria-label="Next slide"
                    >
                        <ArrowBigRight size={20} />
                    </button>
                </div>

                {/* ─── Dots de navegación ───────────────────────────────────── */}
                <div className="flex justify-center gap-2 mt-3 pb-1">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className="transition-all duration-300"
                            style={{
                                width: index === currentIndex ? '20px' : '8px',
                                height: '8px',
                                borderRadius: '4px',
                                background: index === currentIndex
                                    ? 'linear-gradient(90deg, #B8826A, #C9A87C)'
                                    : 'rgba(201, 168, 124, 0.35)',
                                border: 'none',
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}