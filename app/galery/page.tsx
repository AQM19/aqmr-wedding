import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ImageSlider from '@/components/image-slider/ImageSlider'

const Galery = () => {

    const galleries = [
        {
            title: "Nuestros Comienzos",
            description: "Los primeros momentos juntos",
            images: [

            ],
        },
        {
            title: "Aventuras Juntos",
            description: "Explorando el mundo",
            images: [
                "/gallery/0001.jpg",
                "/gallery/0002.jpg",
                "/gallery/0003.jpg",
                "/gallery/0004.jpg",
                "/gallery/0005.jpg",
                "/gallery/0006.jpg",
            ],
        },
        {
            title: "Momentos Especiales",
            description: "Celebrando nuestro amor",
            images: [

            ],
        },
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Header with back button */}
            <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-md shadow-md">
                <div className="container mx-auto px-4 py-6">
                    <Link href="/">
                        <button className="gap-2 cursor-pointer hover:bg-yellow-600/80 rounded-lg flex flex-row items-center px-2 py-1 hover:text-white transition-all duration-300">
                            <ArrowLeft className="h-4 w-4" />
                            Volver
                        </button>
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6">Nuestra Galería</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Una colección de nuestros momentos más preciados juntos
                    </p>
                </div>
            </section>

            {/* Gallery Sections */}
            <div className="container mx-auto px-4 pb-20 space-y-24">
                {galleries.map((gallery, index) => (
                    <section key={index} className="space-y-8">
                        <div className="text-center space-y-2">
                            <h2 className="font-serif text-4xl md:text-5xl text-foreground">{gallery.title}</h2>
                            <p className="text-lg text-muted-foreground">{gallery.description}</p>
                        </div>

                        <div className="max-w-5xl mx-auto border-2 pb-2 pt-8 rounded-lg bg-white shadow-2xl">
                            <ImageSlider images={gallery.images}></ImageSlider>
                        </div>
                    </section>
                ))}
            </div>

            {/* Full Gallery Grid */}
            <section className="py-20 px-4 bg-muted/30">
                <div className="container mx-auto">
                    <h2 className="font-serif text-4xl md:text-5xl text-center text-foreground mb-12">Todas Nuestras Fotos</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {galleries.flatMap((gallery) =>
                            gallery.images.map((image, index) => (
                                <div key={index} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
                                    <div className="relative aspect-square">
                                        <Image
                                            src={image || "/placeholder.svg"}
                                            alt={''}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            )),
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Galery