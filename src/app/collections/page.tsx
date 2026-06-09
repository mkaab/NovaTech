"use client"

import { Suspense, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { products } from "@/lib/data"
import { ProductCard } from "@/components/ui/ProductCard"
import { motion, AnimatePresence } from "framer-motion"

const CATEGORIES = ["All", "Audio", "Wearables", "Power"]

function CollectionsContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "All"
  
  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.includes(initialCategory) ? initialCategory : "All"
  )

  // Filter products based on active category and search query
  const filteredProducts = products.filter(product => {
    const searchQuery = searchParams.get("search")?.toLowerCase() || ""
    const matchesCategory = activeCategory === "All" || product.type === activeCategory
    const matchesSearch = searchQuery === "" || 
      product.name.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery)
      
    return matchesCategory && matchesSearch
  })

  // Ensure active category updates if URL changes
  useEffect(() => {
    const cat = searchParams.get("category")
    if (cat && CATEGORIES.includes(cat)) {
      setActiveCategory(cat)
    }
  }, [searchParams])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Collections</h1>
        
        {/* Category Tabs */}
        <div className="flex gap-2 p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md overflow-x-auto max-w-full no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                activeCategory === cat ? "text-black" : "text-white/70 hover:text-white"
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <motion.div layout className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProducts.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-white/50 text-lg">No products found in this category.</p>
        </motion.div>
      )}
    </div>
  )
}

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <Suspense fallback={<div className="pt-32 text-center text-white">Loading...</div>}>
        <CollectionsContent />
      </Suspense>
    </div>
  )
}
