import { Hero } from "@/components/ui/Hero"
import { ProductCard } from "@/components/ui/ProductCard"
import { products } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      <section id="collection" className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">The Collection</h2>
              <p className="mt-4 text-lg text-white/60">
                Twelve meticulously crafted gadgets that redefine the boundaries of form and function.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
