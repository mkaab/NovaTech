"use client"

import Link from "next/link"
import { CheckCircle2, Package, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function CheckoutSuccessPage() {
  const orderNumber = Math.floor(100000 + Math.random() * 900000)

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md w-full bg-zinc-950 border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", damping: 20 }}
          className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-10 h-10" />
        </motion.div>

        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Order Confirmed</h1>
        <p className="text-white/60 mb-8 leading-relaxed">
          Thank you for your purchase. We've received your order and will begin processing it shortly.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left mb-10">
          <div className="flex items-center gap-3 text-white/50 mb-4 pb-4 border-b border-white/10">
            <Package className="w-5 h-5" />
            <span className="font-medium text-sm tracking-wide uppercase">Order Information</span>
          </div>
          
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/60">Order Number</span>
            <span className="text-white font-medium">#{orderNumber}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/60">Status</span>
            <span className="text-amber-400 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Processing
            </span>
          </div>
        </div>

        <Link 
          href="/" 
          className="inline-flex items-center justify-center gap-2 w-full bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-zinc-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)] group"
        >
          Continue Shopping
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  )
}
