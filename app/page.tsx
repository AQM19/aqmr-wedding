'use client';

import Header from "@/components/header/header";
import { fleurDeLeah } from "@/lib";
import CeremonySection from "@/pages/ceremony/ceremony-section";
import HeroSection from "@/pages/hero/hero-section";
import StorySection from "@/pages/story/story-section";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>

      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50 mx-8 lg:mx-0"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className={`text-archeron text-7xl lg:text-8xl text-pretty text-center ${fleurDeLeah.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
            >
              Aaron & Merce 💍
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {
        !showSplash && (
          <main className="min-h-screen">
            <Header></Header>
            <HeroSection />
            <StorySection />
            <CeremonySection />
            {/* <RestaurantSection /> */}
            {/* <FormsSection /> */}
            {/* <Footer /> */}
          </main>
        )
      }

    </>
  );
}
