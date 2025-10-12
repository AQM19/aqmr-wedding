import React, { useEffect, useRef } from 'react'

const StorySection = () => {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in")
                    }
                })
            },
            { threshold: 0.1 },
        )

        const elements = sectionRef.current?.querySelectorAll(".fade-in")
        elements?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])


    return (
        <section
            id="nuestra-historia"
            ref={sectionRef}
            className="relative py-24 md:py-32 bg-gradient-to-b from-background via-accent/5 to-background overflow-hidden"
        >



        </section>
    )
}

export default StorySection