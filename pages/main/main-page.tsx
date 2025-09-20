import React from 'react'
import SectionComponent from '@/components/section/section'
import Image from 'next/image'
import IMAGES from '@/lib/images/images'
import { motion } from 'framer-motion'
import { fleurDeLeah } from '@/lib'

const MainPage = () => {

    const rand = Math.random();
    const names = rand > 0.5 ? 'Aarón & Merce' : 'Merce & Aarón';

    return (
        <SectionComponent
            id={'portrait'}
            imageUrl={IMAGES.RINGS}
        >

            <motion.div
                className='relative z-10 flex flex-col items-center justify-center text-center bg-sidra/50 rounded-lg px-14 py-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 3 }}
            >
                <h1 className={`text-6xl text-white font-serif mb-4 ${fleurDeLeah.className}`}>{names}</h1>
                <p className='text-xl text-white mb-8'>¡Te invitamos a nuestra boda!</p>
                <div className='bg-bone_carver/50 rounded-lg p-4'>
                    <p className='text-lg text-velaris'>21 de Febrero del 2026</p>
                    <p className='text-lg text-velaris'>En el partenón de Arenas de Iguña</p>
                </div>
            </motion.div>

        </SectionComponent>
    )
}

export default MainPage