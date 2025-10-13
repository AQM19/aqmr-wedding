'use client'

import React, { useState } from 'react'

const FormsSection = () => {
    const [allergyForm, setAllergyForm] = useState({ name: "", allergies: "" })
    const [allergySubmitted, setAllergySubmitted] = useState(false)

    const handleAllergySubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Allergy form:", allergyForm)
        setAllergySubmitted(true)
        setTimeout(() => setAllergySubmitted(false), 3000)
    }

    return (
        <section id="confirmacion" className="py-20 md:py-32 px-4 bg-secondary/30">
            <div className="max-w-2xl mx-auto">
                <h2 className="font-serif text-5xl md:text-7xl text-center mb-8 text-primary text-balance">
                    Ayúdanos a preparar el día perfecto
                </h2>
                <p className="text-center text-muted-foreground text-lg mb-16">Tu comodidad es importante para nosotros</p>

                <div className="p-8 md:p-10 bg-card border-primary/20 rounded-xl">

                    <div className="mb-6">
                        <h3 className="font-serif text-3xl text-primary mb-2">Alergias e Intolerancias</h3>
                        <p className="text-muted-foreground">
                            Por favor, indícanos si tienes alguna alergia o intolerancia alimentaria
                        </p>
                    </div>

                    <form onSubmit={handleAllergySubmit} className="space-y-6">
                        <div className='flex flex-col'>
                            <label htmlFor="allergy-name" className="text-foreground text-base font-medium">
                                Nombre completo
                            </label>
                            <input
                                id="allergy-name"
                                type="text"
                                placeholder="Tu nombre"
                                value={allergyForm.name}
                                onChange={(e) => setAllergyForm({ ...allergyForm, name: e.target.value })}
                                required
                                className="mt-2 border-2 rounded-lg p-2"
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="allergies" className="text-foreground text-base font-medium">
                                Alergias o intolerancias
                            </label>
                            <textarea
                                id="allergies"
                                placeholder="Describe tus alergias o intolerancias..."
                                value={allergyForm.allergies}
                                onChange={(e) => setAllergyForm({ ...allergyForm, allergies: e.target.value })}
                                required
                                className="mt-2 min-h-[140px] border-2 rounded-lg p-2"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-2 rounded-lg gap-2 flex flex-row items-center justify-center cursor-pointer"
                            disabled={allergySubmitted}
                        >
                            {allergySubmitted ? "✓ Enviado" : "Enviar"}
                        </button>
                    </form>
                </div>
                {/* </CHANGE> */}
            </div>
        </section>
    )
}

export default FormsSection