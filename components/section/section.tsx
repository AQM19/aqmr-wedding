import React, { ReactNode } from 'react'

interface Props {
    id: string;
    imageUrl: string;
    children?: ReactNode;
}

const SectionComponent = ({ id, imageUrl, children }: Props) => {
    return (
        <section
            id={id}
            className='relative min-h-screen flex items-center justify-center overflow-hidden'
        >

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('${imageUrl}')`,
                }}
            />

            {/* 30% Black Overlay */}
            <div className="absolute inset-0 bg-velaris/10" />


            {children}

        </section>
    )
}

export default SectionComponent