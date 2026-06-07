"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Product } from "@/lib/data"
import { ShoppingBag } from "lucide-react"
import { useCartStore } from "@/lib/store"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <motion.div 
        className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 aspect-[4/5] sm:aspect-square"
        whileHover="hover"
        initial="initial"
      >
        <motion.div
          className="absolute inset-0"
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.05 }
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
          />
        </motion.div>
        
        {/* Dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
        
        <div className="absolute bottom-0 w-full p-6 translate-y-4 transition-transform duration-500 ease-out group-hover:translate-y-0">
          <p className="text-white/60 text-xs uppercase tracking-wider mb-2 font-medium">
            {product.category}
          </p>
          <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
            {product.name}
          </h3>
          <motion.div 
            className="overflow-hidden flex items-center justify-between"
            variants={{
              initial: { opacity: 0, height: 0, marginTop: 0 },
              hover: { opacity: 1, height: "auto", marginTop: 8 }
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p className="text-white/80 text-lg">PKR {product.price.toLocaleString()}</p>
            <button 
              onClick={(e) => {
                e.preventDefault()
                const { addItem } = useCartStore.getState()
                addItem(product)
              }}
              className="bg-white text-black p-2 rounded-full hover:bg-zinc-200 transition-colors shadow-lg relative z-10"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}
