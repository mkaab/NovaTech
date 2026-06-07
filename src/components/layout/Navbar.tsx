"use client"

import Link from "next/link"
import { ShoppingBag, Search, Menu } from "lucide-react"
import { useState } from "react"
import { CartDrawer } from "@/components/ui/CartDrawer"
import { useCartStore } from "@/lib/store"

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartCount = useCartStore((state) => state.cartCount())

  return (
    <>
      <nav className="fixed top-0 w-full z-40 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Nav Links */}
            <div className="flex items-center gap-8 lg:gap-12 w-1/3">
              <Link className="block text-white" href="/">
                <span className="sr-only">Home</span>
                <span className="text-xl font-bold tracking-tighter">NOVA</span>
              </Link>

              <nav aria-label="Global" className="hidden lg:block">
                <ul className="flex items-center gap-6 text-sm font-medium tracking-wide">
                  <li><Link className="text-white/70 transition hover:text-white" href="/">Audio</Link></li>
                  <li><Link className="text-white/70 transition hover:text-white" href="/">Wearables</Link></li>
                  <li><Link className="text-white/70 transition hover:text-white" href="/">Power</Link></li>
                </ul>
              </nav>
            </div>

            {/* Centered Search Bar */}
            <div className="hidden md:flex justify-center w-1/3 px-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            {/* Right cluster (Cart & Mobile Menu) */}
            <div className="flex items-center justify-end gap-4 w-1/3">
              <button 
                className="text-white/70 hover:text-white transition relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <div className="block md:hidden">
                <button className="rounded bg-white/10 p-2 text-white/70 transition hover:text-white">
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
