'use client'

import React, { useEffect, useState } from 'react'

const HeroSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const weddingDate = new Date("2026-06-05T12:00:00").getTime()

        const timer = setInterval(() => {
            const now = new Date().getTime()
            const distance = weddingDate - now

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            })

            if (distance < 0) {
                clearInterval(timer)
            }
        }, 1000)

        return () => clearInterval(timer)
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with enhanced overlay */}
            <div
                className="absolute inset-0 parallax"
                style={{
                    backgroundImage: "url('/imgs/romantic-wedding-venue-sunset-elegant.jpg')",
                }}
            >
                {/* Gradient overlay mejorado - más suave y elegante */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50" />
                {/* Vignette effect */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                {/* Nombres con animación mejorada */}
                <div className="animate-fade-in-down mb-8">
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white mb-4 tracking-tight text-balance drop-shadow-2xl">
                        Aarón & Merce
                    </h1>
                    {/* Decorative divider */}
                    <div className="flex items-center justify-center gap-4 mt-6 mb-2">
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/60"></div>
                        <div className="text-white/80 text-2xl">💍</div>
                        <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-white/60"></div>
                    </div>
                </div>

                {/* Countdown con animación stagger */}
                {mounted && (
                    <div className="flex md:gap-6 gap-2 justify-center mb-10 stagger-animation">
                        {[
                            { value: timeLeft.days, label: "Días" },
                            { value: timeLeft.hours, label: "Horas" },
                            { value: timeLeft.minutes, label: "Minutos" },
                            { value: timeLeft.seconds, label: "Segundos" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="glass-card rounded-xl p-2 md:p-6 min-w-[70px] md:min-w-[100px] transform hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="font-serif text-3xl md:text-5xl text-primary font-bold">
                                    {item.value}
                                </div>
                                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1 font-medium">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Fecha con mejor tipografía */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <p className="text-white/95 text-xl md:text-2xl font-light tracking-[0.2em] uppercase mb-2">
                        5 de Junio, 2026
                    </p>
                    <p className="text-white/75 text-sm md:text-base font-light italic">
                        Cantabria, España
                    </p>
                </div>
            </div>

            {/* Scroll Indicator mejorado */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <a href="#ceremony" className="group flex flex-col items-center">
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 group-hover:border-white/70 transition-colors">
                        <div className="w-1 h-3 bg-white/50 rounded-full group-hover:bg-white/80 transition-colors" />
                    </div>
                    <p className="text-white/60 text-xs mt-2 tracking-wider uppercase group-hover:text-white/90 transition-colors">
                        Desliza
                    </p>
                </a>
            </div>
        </section>
    )
}

export default HeroSection