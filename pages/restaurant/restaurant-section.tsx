'use client'

import ImageSlider from '@/components/image-slider/ImageSlider'
import { Clock, MapPin, Utensils } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const RestaurantSection = () => {
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

    const restaurantImages = [
        "https://www.fincadesanjuan.es/wp-content/uploads/2017/02/finca-san-juan-hosteria-catering-castaneda-bodas-eventos-04.jpg",
        "https://cdn0.bodas.net/vendor/3729/3_2/960/jpeg/whatsapp-image-2022-05-13-at-3-33-50-pm_1_3729-166256143961959.jpeg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/32/21/01/hosteria-de-castaneda.jpg?w=800&h=500&s=1",
        "https://cdn0.bodas.net/vendor/3729/3_2/960/jpg/img-20221019-203743-950_1_3729-168907723383921.jpeg"
    ]

    return (
        <section id="restaurant" ref={sectionRef} className="py-20 md:py-32 px-4 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                {/* Título con decoración */}
                <div className="text-center mb-20">
                    <div className={`inline-block transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <Utensils className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4" />
                        <h2 className="font-serif text-5xl md:text-7xl text-primary mb-4">
                            Celebración
                        </h2>
                        <div className="flex items-center justify-center gap-4 mt-4">
                            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-primary/40"></div>
                            <div className="text-primary/60">✦</div>
                            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-primary/40"></div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Details */}
                    <div
                        className={`space-y-8 transition-all duration-1000 delay-300 order-2 md:order-1 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                    >
                        <div>
                            <h3 className="font-serif text-3xl md:text-4xl text-primary mb-6">
                                Finca de San Juan Hostería & Catering
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8 text-justify">
                                Después de la ceremonia, continuaremos la celebración en Finca de San Juan Hostería & Catering,
                                un espacio único rodeado de naturaleza donde compartiremos un cóctel, una deliciosa comida y
                                bailaremos hasta el anochecer. ¡Prepárate para una tarde inolvidable!
                            </p>

                            {/* Info Card con mejor diseño */}
                            <div className="p-6 md:p-8 bg-gradient-to-br from-card to-secondary/30 border-primary/20 border-2 rounded-2xl space-y-5 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-foreground mb-1 text-base">Dirección</p>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Barrio de San Juan, Villabanez, Cantabria
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
                                            13:30h - Aperitivo y celebración
                                        </p>
                                    </div>
                                </div>

                                <div className="h-[1px] bg-border"></div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <Utensils className="w-5 h-5 text-primary flex-shrink-0" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-foreground mb-1 text-base">Menú</p>
                                        <p className="text-muted-foreground text-sm">
                                            Cóctel, comida y barra libre hasta el final 🥂
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Botón mejorado */}
                        <a
                            href="https://maps.app.goo.gl/tEY5iPY9zpqQ9tGZ7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg font-medium py-4 rounded-xl gap-2 flex flex-row items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                                <MapPin className="w-5 h-5" />
                                Ver ubicación en Google Maps
                            </button>
                        </a>

                        {/* Nota adicional */}
                        <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                            <p className="text-sm text-muted-foreground italic">
                                🚗 <span className="font-medium">Parking:</span> Disponible en la finca para todos los invitados
                            </p>
                        </div>
                    </div>

                    {/* Gallery Carousel */}
                    <div
                        className={`transition-all duration-1000 delay-200 order-1 md:order-2 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                    >
                        <ImageSlider images={restaurantImages} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RestaurantSection