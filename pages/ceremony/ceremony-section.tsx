'use client'

import ImageSlider from '@/components/image-slider/ImageSlider'
import { Clock, MapPin, Church } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const CeremonySection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const churchImages = [
        "https://www.apartamentos3000.com/blog/wp-content/uploads/2024/05/Sin-titulo.jpg",
        "https://fotos.hoteles.net/articulos/iglesia-san-jorge-fraguas-9892-2.jpg",
        "https://lh4.googleusercontent.com/proxy/4VisF_c6FuulLnC6F6aqq3eUg2r3RZJRi6i_IibUTGWUqAIa35MYBhTtLl2vGEuECjcpo2TbrzYUnJnfeJub6T9F0KDgE0A0EjQPaQeYgq39YTeAO83YwIDPnls6_ZJddtVACKe9bWgn",
    ]

    return (
        <section id="ceremony" ref={sectionRef} className="py-20 md:py-32 px-4 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Título con decoración */}
                <div className="text-center mb-20">
                    <div className={`inline-block transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <Church className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4" />
                        <h2 className="font-serif text-5xl md:text-7xl text-primary mb-4">
                            Ceremonia
                        </h2>
                        <div className="flex items-center justify-center gap-4 mt-4">
                            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-primary/40"></div>
                            <div className="text-primary/60">✦</div>
                            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-primary/40"></div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Church Image Carousel */}
                    <div
                        className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                    >
                        <ImageSlider images={churchImages} />
                    </div>

                    {/* Details */}
                    <div
                        className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                    >
                        <div>
                            <h3 className="font-serif text-3xl md:text-4xl text-primary mb-6">
                                Iglesia de San Jorge
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8 text-justify">
                                Nos encantaría que nos acompañarais en este momento tan especial. La ceremonia tendrá lugar en la
                                hermosa <b>Iglesia de San Jorge</b>, un lugar lleno de historia y belleza que hemos elegido para comenzar
                                nuestra vida juntos.
                            </p>

                            {/* Info Card con mejor diseño */}
                            <div className="p-6 md:p-8 bg-gradient-to-br from-secondary/40 to-secondary/20 border-primary/20 border-2 rounded-2xl space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-foreground mb-1 text-base">Dirección</p>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Iglesia de San Jorge, Barrio Arenas de Iguña, Cantabria
                                        </p>
                                    </div>
                                </div>

                                <div className="h-[1px] bg-border"></div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-foreground mb-1 text-base">Hora</p>
                                        <p className="text-muted-foreground text-sm">
                                            12:00h - Puntualidad española 😉
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Botón mejorado */}
                        <a
                            href="https://maps.app.goo.gl/B2cuaCaPJWnqXjMAA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <button className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg font-medium py-4 rounded-xl gap-2 flex flex-row items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                                <MapPin className="w-5 h-5" />
                                Ver ubicación en Google Maps
                            </button>
                        </a>

                        {/* Nota adicional */}
                        <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                            <p className="text-sm text-muted-foreground italic">
                                💡 <span className="font-medium">Consejo:</span> Te recomendamos llegar con 15 minutos de antelación
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CeremonySection