import { playfair } from '@/lib'
import Link from 'next/link'
import React from 'react'

const routing = [
    {
        name: "Ceremonia",
        href: "#ceremony",
    },
    {
        name: "RVSP",
        href: "#rsvp",
    },
    {
        name: "A&M",
        href: "#a&m",
        className: `text-4xl font-bold`
    },
    {
        name: "Venue",
        href: "#venue",
    },
    {
        name: "Galería",
        href: "#galería",
    }
]

const Header = () => {
    return (
        <header className='w-full backdrop-filter backdrop-blur fixed top-0 z-50 bg-bone_carver/80'>
            <nav className='max-w-2/3 mx-auto'>
                <ul className={`flex flex-row justify-evenly items-center p-4 font-thin antialiased ${playfair.className}`}>

                    {
                        routing.map((route) => (
                            <li key={route.name}>
                                <Link href={route.href}>
                                    <span className={`text-md text-archeron transition-all ${route.className ?? ''}`}>
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