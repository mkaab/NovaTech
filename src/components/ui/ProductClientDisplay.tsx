"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Product } from "@/lib/data"
import { ShoppingBag, ShieldCheck, Truck } from "lucide-react"
import { useCartStore } from "@/lib/store"

interface ProductClientDisplayProps {
  product: Product
}

export function ProductClientDisplay({ product }: ProductClientDisplayProps) {
  const allImages = product.images || [product.image]
  const [activeImage, setActiveImage] = useState(allImages[0])

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
      {/* Immersive Image Display */}
      <motion.div 
        className="w-full lg:w-[60%] relative min-h-[50vh] lg:min-h-full bg-black/5"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatePresence mode="wait">
          <motion.img 
            key={activeImage}
            src={activeImage} 
            alt={product.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent lg:hidden pointer-events-none" />

        {/* Thumbnails Gallery */}
        {allImages.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/10 z-10">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                  activeImage === img ? "border-white scale-110" : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Sticky Buy Box area */}
      <div className="w-full lg:w-[40%] bg-black lg:border-l border-white/10 px-8 py-16 lg:py-32 xl:px-16 flex flex-col justify-center">
        <motion.div
          className="max-w-md mx-auto w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-white/50 text-sm uppercase tracking-widest mb-4 font-semibold">
            {product.category}
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {product.name}
          </h1>
          <p className="text-3xl font-light text-white mb-8">
            PKR {product.price.toLocaleString()}
          </p>
          <p className="text-lg text-white/70 mb-12 leading-relaxed">
            {product.description}
          </p>

          <button 
            onClick={() => {
              const { addItem } = useCartStore.getState()
              addItem(product)
            }}
            className="w-full bg-white text-black py-4 px-8 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            <ShoppingBag className="w-5 h-5" />
            Add to Bag
          </button>

          <div className="mt-12 space-y-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-4 text-white/60">
              <Truck className="w-5 h-5 text-white/80" />
              <span>Complimentary expedited shipping</span>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <ShieldCheck className="w-5 h-5 text-white/80" />
              <span>2-year international warranty included</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
