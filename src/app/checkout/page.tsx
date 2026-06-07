"use client"

import { useCartStore } from "@/lib/store"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCartStore()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    clearCart()
    router.push('/checkout/success')
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Column: Form Area */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12 xl:p-20 bg-zinc-950">
          <div className="max-w-xl mx-auto xl:ml-auto xl:mr-12">
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12">
              <ChevronLeft className="w-4 h-4" />
              Return to Store
            </Link>
            
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>
            
            {/* Delivery Form */}
            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Contact */}
              <section>
                <h2 className="text-xl font-medium mb-4">Contact</h2>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-md p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                  />
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-white w-4 h-4 rounded border-white/20 bg-transparent" />
                    <span className="text-white/60 text-sm">Email me with news and offers</span>
                  </label>
                </div>
              </section>

              {/* Delivery */}
              <section>
                <h2 className="text-xl font-medium mb-4">Delivery</h2>
                <div className="space-y-4">
                  <div className="relative">
                    <select className="w-full bg-white/5 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                      <option value="US" className="bg-zinc-900">United States</option>
                      <option value="UK" className="bg-zinc-900">United Kingdom</option>
                      <option value="CA" className="bg-zinc-900">Canada</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First name" required className="w-full bg-white/5 border border-white/10 rounded-md p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all" />
                    <input type="text" placeholder="Last name" required className="w-full bg-white/5 border border-white/10 rounded-md p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all" />
                  </div>
                  
                  <input type="text" placeholder="Address" required className="w-full bg-white/5 border border-white/10 rounded-md p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all" />
                  <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full bg-white/5 border border-white/10 rounded-md p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all" />
                  
                  <div className="grid grid-cols-3 gap-4">
                    <input type="text" placeholder="City" required className="col-span-1 w-full bg-white/5 border border-white/10 rounded-md p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all" />
                    <div className="relative col-span-1">
                      <select className="w-full bg-white/5 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                        <option value="" className="bg-zinc-900">State</option>
                        <option value="CA" className="bg-zinc-900">California</option>
                        <option value="NY" className="bg-zinc-900">New York</option>
                        <option value="TX" className="bg-zinc-900">Texas</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/50">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                    <input type="text" placeholder="ZIP code" required className="col-span-1 w-full bg-white/5 border border-white/10 rounded-md p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all" />
                  </div>
                </div>
              </section>

              {/* Submit */}
              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full bg-white text-black font-bold text-lg py-5 rounded-md hover:bg-zinc-200 transition-colors shadow-xl shadow-white/5"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12 xl:p-20 bg-black lg:border-l border-white/5">
          <div className="max-w-xl mx-auto xl:mr-auto xl:ml-12 lg:sticky top-12">
            <h2 className="text-xl font-medium mb-8">Order Summary</h2>
            
            <div className="space-y-6 mb-8 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-md overflow-hidden bg-zinc-900 border border-white/10">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold z-10">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 flex justify-between py-1">
                    <div>
                      <h3 className="text-white font-medium text-sm">{item.name}</h3>
                      <p className="text-white/50 text-xs mt-1">{item.category}</p>
                    </div>
                    <p className="text-white text-sm font-medium">PKR {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6 space-y-4">
              <div className="flex justify-between text-white/60 text-sm">
                <span>Subtotal</span>
                <span>PKR {cartTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-white/60 text-sm">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="flex justify-between text-white/60 text-sm">
                <span>Taxes</span>
                <span>Calculated at next step</span>
              </div>
            </div>

            <div className="border-t border-white/10 mt-6 pt-6 flex justify-between items-center">
              <span className="text-white text-lg font-medium">Total</span>
              <span className="text-2xl font-bold text-white">
                <span className="text-white/40 text-sm mr-2 font-normal">PKR</span>
                {cartTotal().toLocaleString()}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
