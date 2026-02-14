'use client'

import { Check, Heart, Users, Mail } from 'lucide-react'
import React, { useState } from 'react'

interface RSVPForm {
    name: string
    email: string
    attending: 'yes' | 'no' | ''
    guests: number
    allergies: string
    message: string
}

const FormsSection = () => {
    const [rsvpForm, setRSVPForm] = useState<RSVPForm>({
        name: '',
        email: '',
        attending: '',
        guests: 1,
        allergies: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleRSVPSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simular envío - aquí deberías conectar con tu API
        console.log("RSVP Form:", rsvpForm)

        // Simulación de delay de red
        await new Promise(resolve => setTimeout(resolve, 1500))

        setSubmitted(true)
        setIsSubmitting(false)

        // Reset después de 5 segundos
        setTimeout(() => {
            setSubmitted(false)
            setRSVPForm({
                name: '',
                email: '',
                attending: '',
                guests: 1,
                allergies: '',
                message: ''
            })
        }, 5000)
    }

    const handleInputChange = (field: keyof RSVPForm, value: string | number) => {
        setRSVPForm(prev => ({ ...prev, [field]: value }))
    }

    if (submitted) {
        return (
            <section id="confirmacion" className="py-20 md:py-32 px-4 bg-gradient-to-b from-secondary/30 to-background">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center p-12 bg-card border-primary/20 border-2 rounded-2xl animate-scale-in">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="font-serif text-4xl text-primary mb-4">
                            ¡Gracias!
                        </h3>
                        <p className="text-muted-foreground text-lg mb-2">
                            {rsvpForm.attending === 'yes'
                                ? '¡Nos alegra mucho que puedas acompañarnos!'
                                : 'Lamentamos que no puedas asistir, pero te agradecemos tu respuesta.'}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Hemos recibido tu confirmación correctamente.
                        </p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="confirmacion" className="py-20 md:py-32 px-4 bg-gradient-to-b from-secondary/30 to-background">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <Heart className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4" />
                    <h2 className="font-serif text-4xl md:text-6xl text-primary mb-4 text-balance">
                        Confirma tu asistencia
                    </h2>
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-primary/40"></div>
                        <div className="text-primary/60">✦</div>
                        <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-primary/40"></div>
                    </div>
                    <p className="text-muted-foreground text-base md:text-lg">
                        Tu presencia es el mejor regalo. Por favor, ayúdanos a organizar el día perfecto
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleRSVPSubmit} className="p-8 md:p-10 bg-card border-primary/20 border-2 rounded-2xl shadow-lg space-y-6">

                    {/* Nombre */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-foreground text-base font-semibold flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" />
                            Nombre completo *
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Tu nombre y apellidos"
                            value={rsvpForm.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                            className="w-full border-2 border-border focus:border-primary rounded-xl p-3 text-base transition-colors outline-none bg-background"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-foreground text-base font-semibold flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            Correo electrónico *
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            value={rsvpForm.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                            className="w-full border-2 border-border focus:border-primary rounded-xl p-3 text-base transition-colors outline-none bg-background"
                        />
                    </div>

                    {/* Asistencia */}
                    <div className="space-y-3">
                        <label className="text-foreground text-base font-semibold block">
                            ¿Podrás acompañarnos? *
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={() => handleInputChange('attending', 'yes')}
                                className={`p-4 rounded-xl border-2 transition-all duration-300 ${rsvpForm.attending === 'yes'
                                    ? 'border-primary bg-primary text-primary-foreground shadow-md'
                                    : 'border-border bg-background hover:border-primary/50'
                                    }`}
                            >
                                <div className="text-2xl mb-2">✓</div>
                                <div className="font-semibold">Sí, asistiré</div>
                            </button>
                            <button
                                type="button"
                                onClick={() => handleInputChange('attending', 'no')}
                                className={`p-4 rounded-xl border-2 transition-all duration-300 ${rsvpForm.attending === 'no'
                                    ? 'border-primary bg-primary text-primary-foreground shadow-md'
                                    : 'border-border bg-background hover:border-primary/50'
                                    }`}
                            >
                                <div className="text-2xl mb-2">✗</div>
                                <div className="font-semibold">No podré asistir</div>
                            </button>
                        </div>
                    </div>

                    {/* Número de acompañantes - solo si asiste */}
                    {rsvpForm.attending === 'yes' && (
                        <div className="space-y-2 animate-fade-in-up">
                            <label htmlFor="guests" className="text-foreground text-base font-semibold block">
                                ¿Cuántas personas asistiréis? (incluyéndote)
                            </label>
                            <select
                                id="guests"
                                value={rsvpForm.guests}
                                onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                                className="w-full border-2 border-border focus:border-primary rounded-xl p-3 text-base transition-colors outline-none bg-background"
                            >
                                {[1, 2, 3, 4, 5].map(num => (
                                    <option key={num} value={num}>
                                        {num} {num === 1 ? 'persona' : 'personas'}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Alergias - solo si asiste */}
                    {rsvpForm.attending === 'yes' && (
                        <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <label htmlFor="allergies" className="text-foreground text-base font-semibold block">
                                Alergias o intolerancias alimentarias
                            </label>
                            <textarea
                                id="allergies"
                                placeholder="Si tienes alguna alergia o intolerancia, indícanos cuál..."
                                value={rsvpForm.allergies}
                                onChange={(e) => handleInputChange('allergies', e.target.value)}
                                className="w-full min-h-[100px] border-2 border-border focus:border-primary rounded-xl p-3 text-base transition-colors outline-none resize-none bg-background"
                            />
                            <p className="text-xs text-muted-foreground">
                                Tu comodidad es importante para nosotros
                            </p>
                        </div>
                    )}

                    {/* Mensaje personal */}
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-foreground text-base font-semibold block">
                            Mensaje (opcional)
                        </label>
                        <textarea
                            id="message"
                            placeholder="Déjanos un mensaje bonito 💕"
                            value={rsvpForm.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            className="w-full min-h-[100px] border-2 border-border focus:border-primary rounded-xl p-3 text-base transition-colors outline-none resize-none bg-background"
                        />
                    </div>

                    {/* Botón enviar */}
                    <button
                        type="submit"
                        disabled={isSubmitting || !rsvpForm.name || !rsvpForm.email || !rsvpForm.attending}
                        className="w-full bg-primary hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed text-primary-foreground disabled:text-muted-foreground text-lg font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                                Enviando...
                            </>
                        ) : (
                            <>
                                <Heart className="w-5 h-5" />
                                Confirmar asistencia
                            </>
                        )}
                    </button>

                    {/* Nota pie */}
                    <p className="text-xs text-center text-muted-foreground italic mt-4">
                        * Campos obligatorios
                    </p>
                </form>

                {/* Info adicional */}
                <div className="mt-8 p-6 bg-accent/10 border-l-4 border-accent rounded-r-xl">
                    <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Fecha límite de confirmación:</span> 15 de Mayo, 2026
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 italic">
                        Si tienes cualquier duda, escríbenos a: <a href="mailto:aqmr@house@gmail.com" className="text-primary hover:underline">aqmr@house@gmail.com</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FormsSection