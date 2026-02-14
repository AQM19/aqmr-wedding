'use client'

import { Heart, Mail, Phone, Instagram, MapPin } from 'lucide-react'
import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gradient-to-b from-background to-secondary/20 border-t border-primary/10">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Columna 1: Información de contacto */}
                    <div className="text-center md:text-left">
                        <h3 className="font-serif text-2xl text-primary mb-6 flex items-center justify-center md:justify-start gap-2">
                            <Heart className="w-5 h-5" />
                            Aarón & Merce
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Nos encantaría que formes parte de este día tan especial.
                            Si tienes alguna duda, no dudes en contactarnos.
                        </p>
                        <div className="space-y-3">
                            <a
                                href="mailto:boda@aaronmerce.com"
                                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors justify-center md:justify-start group"
                            >
                                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-sm">boda@aaronmerce.com</span>
                            </a>
                            <a
                                href="tel:+34600000000"
                                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors justify-center md:justify-start group"
                            >
                                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Phone className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-sm">+34 600 000 000</span>
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Enlaces rápidos */}
                    <div className="text-center">
                        <h3 className="font-serif text-2xl text-primary mb-6">
                            Enlaces rápidos
                        </h3>
                        <nav className="space-y-3">
                            <a
                                href="#ceremony"
                                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                                Ceremonia
                            </a>
                            <a
                                href="#restaurant"
                                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                                Celebración
                            </a>
                            <a
                                href="#dress-code"
                                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                                Dress Code
                            </a>
                            <a
                                href="#itinerario"
                                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                                Itinerario
                            </a>
                            <a
                                href="#confirmacion"
                                className="block text-muted-foreground hover:text-primary transition-colors text-sm font-semibold"
                            >
                                Confirmar Asistencia
                            </a>
                        </nav>
                    </div>

                    {/* Columna 3: Información adicional */}
                    <div className="text-center md:text-right">
                        <h3 className="font-serif text-2xl text-primary mb-6">
                            Información útil
                        </h3>
                        <div className="space-y-4 text-sm text-muted-foreground">
                            <div>
                                <p className="font-semibold text-foreground mb-1">Ubicaciones</p>
                                <p className="text-xs">Cantabria, España</p>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground mb-1">Fecha límite RSVP</p>
                                <p className="text-xs">15 de Mayo, 2026</p>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground mb-1">Código de vestimenta</p>
                                <p className="text-xs">Etiqueta de tarde</p>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground mb-1">Parking</p>
                                <p className="text-xs">Disponible en ambas ubicaciones</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8"></div>

                {/* Social Media / Hashtag */}
                <div className="text-center mb-8">
                    <p className="text-muted-foreground mb-4 text-sm">
                        Comparte tus fotos del día con nuestro hashtag
                    </p>
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
                        <Instagram className="w-5 h-5 text-primary" />
                        <span className="font-serif text-xl text-primary">#AaronYMerce2026</span>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-primary/10 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                        <p className="text-center md:text-left">
                            © {currentYear} Aarón & Merce. Creado con{' '}
                            <Heart className="w-4 h-4 inline-block text-primary animate-pulse" />{' '}
                            para nuestro gran día
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://maps.app.goo.gl/B2cuaCaPJWnqXjMAA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors flex items-center gap-1"
                            >
                                <MapPin className="w-4 h-4" />
                                Iglesia
                            </a>
                            <span className="text-primary/30">•</span>
                            <a
                                href="https://maps.app.goo.gl/tEY5iPY9zpqQ9tGZ7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors flex items-center gap-1"
                            >
                                <MapPin className="w-4 h-4" />
                                Finca
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer