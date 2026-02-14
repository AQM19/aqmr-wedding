'use client';

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { fleurDeLeah } from "@/lib";
import CeremonySection from "@/pages/ceremony/ceremony-section";
import RestaurantSection from "@/pages/restaurant/restaurant-section";
import FormsSection from "@/pages/forms/forms-section";
import HeroSection from "@/pages/hero/hero-section";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ItinerarySection from "@/pages/itinerary/itineraty-section";

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
            className="fixed inset-0 flex items-center justify-center z-50 bg-background mx-8 lg:mx-0"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className={`text-primary text-6xl lg:text-8xl text-pretty text-center mb-4 ${fleurDeLeah.className}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Aarón & Merce
              </motion.h1>
              <motion.div
                className="flex items-center justify-center gap-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-primary"></div>
                <div className="text-primary text-4xl">💍</div>
                <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-primary"></div>
              </motion.div>
              <motion.p
                className="text-muted-foreground text-lg mt-6 tracking-[0.3em] uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                5 · Junio · 2026
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!showSplash && (
        <main className="min-h-screen">
          <Header />
          <HeroSection />
          <CeremonySection />
          <RestaurantSection />
          <ItinerarySection />
          <FormsSection />
          <Footer />
        </main>
      )}
    </>
  );
}