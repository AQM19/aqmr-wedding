import ImageSlider from '@/components/image-slider/ImageSlider'
import { Clock, MapPin } from 'lucide-react'
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
                <h2
                    className={`font-serif text-5xl md:text-7xl text-center mb-16 text-primary transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    Ceremonia
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
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
                            <h3 className="font-serif text-4xl text-primary mb-6">Iglesia de San Jorge</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-8 text-justify">
                                Nos encantaría que nos acompañarais en este momento tan especial. La ceremonia tendrá lugar en la
                                hermosa Iglesia de San Jorge, un lugar lleno de historia.
                            </p>

                            <div className="p-6 bg-secondary/30 border-primary/20 border-2 rounded-xl">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-foreground">Dirección</p>
                                            <p className="text-muted-foreground">Iglesia de San Juan, Barrio Arenas de Iguña, Cantabria</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-foreground">Hora</p>
                                            <p className="text-muted-foreground">12:00h</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </CHANGE> */}
                        </div>

                        <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-2 rounded-lg gap-2 flex flex-row items-center justify-center">
                            <MapPin className="w-5 h-5 mr-2" />
                            <a
                                href="https://maps.app.goo.gl/B2cuaCaPJWnqXjMAA"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ver ubicación en Google Maps
                            </a>
                        </button>
                        {/* </CHANGE> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CeremonySection