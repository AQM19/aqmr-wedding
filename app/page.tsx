'use client';

import { fleurDeLeah } from "@/lib";
import CeremonyPage from "@/pages/ceremony/ceremony-page";
import MainPage from "@/pages/main/main-page";
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
            className="absolute inset-0 flex items-center justify-center bg-bone_carver z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className={`text-archeron text-8xl ${fleurDeLeah.className}`}
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

      <div className="flex flex-col items-stretch w-full min-h-screen">
        <MainPage></MainPage>
        <CeremonyPage></CeremonyPage>
      </div>
    </>
  );
}
