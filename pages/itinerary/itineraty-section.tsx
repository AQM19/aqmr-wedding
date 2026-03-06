'use client'

import { Calendar, Clock } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const ItinerarySection = () => {
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

    const timeline = [
        {
            time: "11:45",
            title: "Llegada de invitados",
            description: "Te esperamos en la Iglesia de San Jorge",
            icon: "👋"
        },
        {
            time: "12:00",
            title: "Ceremonia religiosa",
            description: "Celebración del matrimonio",
            icon: "💒",
            highlight: true
        },
        {
            time: "13:00",
            title: "Fotos y traslado",
            description: "Nos dirigimos a la Finca de San Juan",
            icon: "📸"
        },
        {
            time: "14:15",
            title: "Cóctel de bienvenida",
            description: "Aperitivos y bebidas en los jardines",
            icon: "🥂"
        },
        {
            time: "15:30",
            title: "Banquete",
            description: "Comida nupcial con menú especial",
            icon: "🍽️",
            highlight: true
        },
        {
            time: "18:00",
            title: "Tarta y baile",
            description: "Corte de tarta y apertura de pista",
            icon: "🎂"
        },
        {
            time: "18:30",
            title: "Fiesta y barra libre",
            description: "¡A bailar hasta que el cuerpo aguante!",
            icon: "💃",
            highlight: true
        },
        {
            time: "22:00",
            title: "Recena",
            description: "Aperitivos calientes y dulces",
            icon: "🌙"
        }
    ]

    return (
        <section id="itinerary" ref={sectionRef} className="py-20 md:py-32 px-4 bg-secondary/30">
            <div className="max-w-4xl mx-auto">
                {/* Título */}
                <div className="text-center mb-16">
                    <div className={`inline-block transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <Calendar className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4" />
                        <h2 className="font-serif text-5xl md:text-7xl text-primary mb-4">
                            Itinerario del día
                        </h2>
                        <div className="flex items-center justify-center gap-4 mt-4 mb-6">
                            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-primary/40"></div>
                            <div className="text-primary/60">✦</div>
                            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-primary/40"></div>
                        </div>
                        <p className="text-muted-foreground text-lg">
                            5 de Junio, 2026 - Un día para recordar
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Línea vertical */}
                    <div className="absolute left-[30px] md:left-[50px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>

                    {/* Eventos */}
                    <div className="space-y-8">
                        {timeline.map((event, index) => (
                            <div
                                key={index}
                                className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                                    }`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {/* Dot en la línea */}
                                <div className={`absolute left-[22px] md:left-[42px] w-[18px] h-[18px] rounded-full border-4 ${event.highlight
                                    ? 'bg-primary border-primary shadow-lg shadow-primary/50'
                                    : 'bg-background border-primary/40'
                                    }`}>
                                    {event.highlight && (
                                        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                                    )}
                                </div>

                                {/* Card */}
                                <div className="ml-16 md:ml-24">
                                    <div className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] ${event.highlight
                                        ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary shadow-lg'
                                        : 'bg-card border-border hover:border-primary/50'
                                        }`}>
                                        <div className="flex items-start gap-4">
                                            {/* Emoji icon */}
                                            <div className="text-4xl flex-shrink-0">{event.icon}</div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Clock className="w-4 h-4 text-primary" />
                                                    <span className="font-bold text-primary text-lg">{event.time}</span>
                                                </div>
                                                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                                                    {event.title}
                                                </h3>
                                                <p className="text-muted-foreground text-sm md:text-base">
                                                    {event.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Nota final */}
                <div
                    className={`mt-12 bg-accent/10 border-l-4 border-accent p-6 rounded-r-xl transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <p className="text-muted-foreground text-center">
                        <span className="font-semibold text-foreground">Nota:</span> Los horarios son aproximados
                        y pueden variar ligeramente. ¡Lo importante es disfrutar juntos! 🎉
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ItinerarySection