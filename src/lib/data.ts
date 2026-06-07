export interface Product {
  id: string
  name: string
  category: string
  price: number
  description: string
  image: string
  images?: string[]
  branding?: string
}

export const products: Product[] = [
  {
    id: "p-001",
    name: "65W PD Power Adapter Trio",
    category: "Generic",
    price: 5000,
    description: "3 Ports (2x USB-C, 1x USB-A), Max 65W, Super Fast Charging.",
    branding: "Generic / Compatible Power",
    image: "/images/products/Adapter-1.png",
    images: [
      "/images/products/Adapter-1.png",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80",
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80"
    ]
  },
  {
    id: "p-002",
    name: "BY-MW3 Wireless Microphone",
    category: "BOYA",
    price: 89,
    description: "Ultra-compact, clip-on mic for vlogging, live shows, interviews.",
    branding: "Brand Reseller (BOYA)",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
  },
  {
    id: "p-003",
    name: "BY-MW10 Wireless Lavalier",
    category: "BOYA",
    price: 149,
    description: "Dual mics, charging case, AI noise reduction, 2-in-1 adapter.",
    branding: "Brand Reseller (BOYA)",
    image: "/images/products/BOYA-MW10.png",
  },
  {
    id: "p-004",
    name: "12V High-Power Router Power Bank",
    category: "NovaTech",
    price: 49,
    description: "8-hour internet backup, Plug & Play, dual output cable.",
    branding: "White-label",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80",
  },
  {
    id: "p-005",
    name: "20W USB-C Power Adapter",
    category: "Generic",
    price: 19,
    description: "Compact PD fast charging for iPhones.",
    branding: "Generic / Compatible Power",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80",
  },
  {
    id: "p-006",
    name: "Nano 45W Charger",
    category: "Anker",
    price: 59,
    description: "Smart display, ultra-compact GaN tech, premium build.",
    branding: "Brand Reseller (Anker)",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80",
  },
  {
    id: "p-007",
    name: "Over-Ear Wireless Headphones",
    category: "NovaTech",
    price: 199,
    description: "Smart case, aesthetic design, physical controls, crisp audio. AirPods Max Style.",
    branding: "White-label",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
  },
  {
    id: "p-008",
    name: "67W Power Adapter Suit",
    category: "NovaTech",
    price: 45,
    description: "2-in-1 combo (Adapter + Type-C orange-tipped turbo cable).",
    branding: "White-label",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80",
  },
  {
    id: "p-009",
    name: "K-520 Heart-Shaped TWS Earbuds",
    category: "NovaTech",
    price: 69,
    description: "Unique sliding heart-shaped pink case, stereo bass, gift-ready.",
    branding: "White-label",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
  },
  {
    id: "p-010",
    name: "120W USB-C to USB-C Cable",
    category: "NovaTech",
    price: 24,
    description: "Heavy-duty, high-wattage charging cable.",
    branding: "White-label",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80",
  }
]
