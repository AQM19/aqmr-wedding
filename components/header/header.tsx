'use client'

import { playfair } from '@/lib'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const routing = [
    {
        name: "Ceremonia",
        href: "#ceremony",
        className: 'hidden lg:block'
    },
    {
        name: "Restaurante",
        href: "#restaurant",
        className: 'hidden lg:block'
    },
    {
        name: "A&M",
        href: "#a&m",
        className: `text-4xl font-bold`
    },
    {
        name: "Venue",
        href: "#venue",
        className: 'hidden lg:block'
    },
    {
        name: "Itinerario",
        href: "#itinerary",
        className: 'hidden lg:block'
    }
]

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const [_, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}>
            <nav className='max-w-2/3 mx-auto'>
                <ul className={`flex flex-row justify-evenly items-center p-4 font-thin antialiased ${playfair.className}`}>

                    {
                        routing.map((route) => (
                            <li key={route.name}>
                                <Link href={route.href}>
                                    <span className={`text-md ${isScrolled ? "text-archeron" : "text-white"} transition-all duration-300 ${route.className ?? ''}`}>
                                        {route.name}
                                    </span>
                                </Link>
                            </li>
                        ))
                    }

                </ul>
            </nav>
        </header>
    )
}

export default Header