export interface Product {
  id: string
  name: string
  category: string
  price: number
  description: string
  image: string
  images?: string[]
  type: string
  branding?: string
}

export const products: Product[] = [
  {
    id: "p-001",
    name: "65W PD Power Adapter Trio",
    category: "Samsung",
    type: "Power",
    price: 5000,
    description: "3 Ports (2x USB-C, 1x USB-A), Max 65W, Super Fast Charging.",
    branding: "Generic / Compatible Power",
    image: "/images/products/Adapter-1.png",
    images: [
      "/images/products/Adapter-1.png"
    ]
  },
  {
    id: "p-002",
    name: "BY-MW3 Wireless Microphone",
    category: "BOYA",
    type: "Audio",
    price: 8000,
    description: "Ultra-compact, clip-on mic for vlogging, live shows, interviews.",
    branding: "Brand Reseller (BOYA)",
    image: "/images/products/boya_mw3.png",
    images: [
      "/images/products/boya_mw3.png"
    ]
  },
  {
    id: "p-003",
    name: "BY-MW10 Wireless Lavalier",
    category: "BOYA",
    type: "Audio",
    price: 11000,
    description: "Dual mics, charging case, AI noise reduction, 2-in-1 adapter.",
    branding: "Brand Reseller (BOYA)",
    image: "/images/products/BOYA-MW10.png",
  },
  {
    id: "p-004",
    name: "12V High-Power Router Power Bank",
    category: "NovaTech",
    type: "Power",
    price: 4000,
    description: "8-hour internet backup, Plug & Play, dual output cable.",
    branding: "White-label",
    image: "/images/products/PowerBank.png",
  },
  {
    id: "p-005",
    name: "20W USB-C Power Adapter",
    category: "Generic",
    type: "Power",
    price: 5000,
    description: "Compact PD fast charging for iPhones.",
    branding: "Generic / Compatible Power",
    image: "/images/products/Apple3pin.jpeg",
  },
  {
    id: "p-006",
    name: "Nano 45W Charger",
    category: "Anker",
    type: "Power",
    price: 12000,
    description: "Smart display, ultra-compact GaN tech, premium build.",
    branding: "Brand Reseller (Anker)",
    image: "/images/products/Anker adapter.png",
  },
  {
    id: "p-007",
    name: "Over-Ear Wireless Headphones",
    category: "NovaTech",
    type: "Audio",
    price: 5000,
    description: "Smart case, aesthetic design, physical controls, crisp audio. AirPods Max Style.",
    branding: "White-label",
    image: "/images/products/Airpods.png",
  },
  {
    id: "p-008",
    name: "Aircore Wireless Charger",
    category: "Aukey",
    type: "Power",
    price: 4000,
    description: "15W Cahrger With Magnetic Alignment and USB-C input.",
    branding: "White-label",
    image: "/images/products/Aukey_wireless.png",
  },
  {
    id: "p-009",
    name: "K-520 Heart-Shaped TWS Earbuds",
    category: "NovaTech",
    type: "Audio",
    price: 3000,
    description: "Unique sliding heart-shaped pink case, stereo bass, gift-ready.",
    branding: "White-label",
    image: "/images/products/K520Buds.png",
  },
  {
    id: "p-010",
    name: "120W USB-C to USB-C Cable",
    category: "NovaTech",
    type: "Power",
    price: 1200,
    description: "Heavy-duty, high-wattage charging cable.",
    branding: "White-label",
    image: "/images/products/C2c_pixel.png",
  }
]
