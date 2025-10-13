'use client'

import ImageSlider from '@/components/image-slider/ImageSlider'
import { Clock, MapPin } from 'lucide-react'
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
                <h2
                    className={`font-serif text-5xl md:text-7xl text-center mb-16 text-primary transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    Celebración
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Gallery Carousel */}

                    {/* Details */}
                    <div
                        className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                    >
                        <div>
                            <h3 className="font-serif text-4xl text-primary mb-6">Finca de San Juan Hostería & Catering</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-8 text-justify">
                                Después de la ceremonia, continuaremos la celebración en Finca de San Juan Hostería & Catering, un espacio único rodeado de
                                naturaleza donde compartiremos un cóctel, una deliciosa comida y bailaremos hasta el anochecer.
                            </p>

                            <div className="p-6 bg-secondary/30 border-primary/20 border-2 rounded-xl">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-foreground">Dirección</p>
                                            <p className="text-muted-foreground">Barrio de San Juan, Villabanez, Cantabria</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-foreground">Hora</p>
                                            <p className="text-muted-foreground">13:30h</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </CHANGE> */}
                        </div>

                        <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-2 rounded-lg gap-2 flex flex-row items-center justify-center">
                            <MapPin className="w-5 h-5 mr-2" />
                            <a
                                href="https://maps.app.goo.gl/tEY5iPY9zpqQ9tGZ7"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ver ubicación en Google Maps
                            </a>
                        </button>
                        {/* </CHANGE> */}
                    </div>

                    <div
                        className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                    >
                        <ImageSlider images={restaurantImages} />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default RestaurantSection