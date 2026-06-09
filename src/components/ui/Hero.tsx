"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const images = [
  "/images/hero_headphones_1780748808092.png",
  "/images/hero_smartwatch_1780748819274.png",
  "/images/hero_charger_1780748830600.png"
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Luxury Tech"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        {/* Deep Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated Aurora Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 relative w-full"
        >
          <div className="absolute -inset-1 blur-3xl opacity-20 bg-gradient-to-r from-white via-zinc-400 to-zinc-600 rounded-full" />
          <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.04em] leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 pb-4">
            Technology for <br />
            <span className="text-white">Everyday Needs.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-white/70 mb-10 max-w-2xl font-light leading-relaxed shadow-black drop-shadow-lg px-4"
        >
          Discover our curated collection of luxury technology designed to elevate your everyday experience. Precision engineering meets minimalist design.
        </motion.p>

        {/* 21st.dev style Magnetic / Glowing Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="#collection"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-px font-semibold transition-transform hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-white/40 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center justify-center gap-2 rounded-full bg-black/50 backdrop-blur-md px-8 py-4 text-sm text-white transition-all duration-300 group-hover:bg-black/30 border border-white/10 group-hover:border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              Explore Collection
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
