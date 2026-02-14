'use client'

import React, { useEffect, useState } from 'react'

const HeroSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
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
            {/* Background Image */}
            <div
                className="absolute inset-0 parallax"
                style={{
                    backgroundImage: "url('/imgs/romantic-wedding-venue-sunset-elegant.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center animate-fade-in-up">
                <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-white mb-8 tracking-tight text-balance">
                    Aarón & Merce
                </h1>

                {/* Countdown */}
                <div className="flex md:gap-8 gap-1 justify-center mb-8">
                    {[
                        { value: timeLeft.days, label: "Días" },
                        { value: timeLeft.hours, label: "Horas" },
                        { value: timeLeft.minutes, label: "Minutos" },
                        { value: timeLeft.seconds, label: "Segundos" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/90 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]"
                        >
                            <div className="font-serif text-3xl md:text-5xl text-primary font-bold">{item.value}</div>
                            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">{item.label}</div>
                        </div>
                    ))}
                </div>

                <p className="text-white text-lg md:text-xl font-light tracking-wide">5 de Junio, 2026</p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white/50 rounded-full" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection