
import { Product } from "@/contexts/CartContext";

const products: Product[] = [
  // Audio Category
  {
    id: 1,
    name: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    price: 5000,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Audio",
    description: "Industry-leading noise cancellation with dual noise sensor technology. Up to 30 hours battery life with quick charging (10 min charge for 5 hours of playback)."
  },
  {
    id: 2,
    name: "Apple AirPods Pro Wireless Earbuds",
    price: 2000,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Audio",
    description: "Active Noise Cancellation blocks outside noise, so you can immerse yourself in music. Transparency mode for hearing what's happening around you."
  },
  {
    id: 3,
    name: "JBL Flip 5 Bluetooth Speaker",
    price: 18000,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Audio",
    description: "PartyBoost feature lets you pair two JBL PartyBoost-compatible speakers together for stereo sound. Waterproof IPX7 design with durable fabric materials."
  },
  {
    id: 4,
    name: "Sony SRS-XB43 EXTRA BASS Bluetooth Speaker",
    price: 4500,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Audio",
    description: "EXTRA BASS for deep, punchy sound. Live Sound Mode for a three-dimensional music experience. Dustproof, shockproof and waterproof IP67 design."
  },
  {
    id: 5,
    name: "Bose QuietComfort Earbuds",
    price: 5000,
    image: "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Audio",
    description: "High-fidelity audio and world-class noise cancellation. Weather and sweat resistant. Up to 6 hours of battery life per charge."
  },
  {
    id: 6,
    name: "Panasonic RF-2400D AM/FM Radio",
    price: 3500,
    image: "https://images.unsplash.com/photo-1593078166039-c9878df5c520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Audio",
    description: "Classic AM/FM radio with large dial for easy tuning. 10cm speaker for clear sound. Operates on batteries or AC power."
  },
  
  // TVs Category
  {
    id: 7,
    name: "Samsung 65\" Crystal UHD 4K Smart TV",
    price: 89000,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "TVs",
    description: "Crystal Processor 4K transforms everything you watch into stunning 4K. Crystal Display delivers colors with fine tuning. Smart TV powered by Tizen."
  },
  {
    id: 8,
    name: "LG 55\" OLED 4K Smart TV",
    price: 120000,
    image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "TVs",
    description: "Perfect black and infinite contrast with self-lit pixels. α9 Gen3 AI Processor 4K for enhanced picture and sound. Dolby Vision IQ and Dolby Atmos."
  },
  {
    id: 9,
    name: "Sony 50\" BRAVIA LED 4K Smart TV",
    price: 65000,
    image: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "TVs",
    description: "4K HDR Processor X1 for clear and vibrant picture. TRILUMINOS Display for a wider palette of colors. Google TV with voice search functionality."
  },
  {
    id: 10,
    name: "Hisense 43\" Full HD Smart TV",
    price: 32000,
    image: "https://images.unsplash.com/photo-1540300512726-d7f2571444c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "TVs",
    description: "Full HD resolution for clear picture quality. Smart TV with built-in WiFi. Multiple connectivity options including HDMI and USB."
  },
  
  // Cameras Category
  {
    id: 11,
    name: "Canon EOS 90D DSLR Camera",
    price: 145000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Cameras",
    description: "32.5MP APS-C CMOS sensor. DIGIC 8 image processor. 4K UHD video recording. 45-point all cross-type AF system."
  },
  {
    id: 12,
    name: "Nikon D7500 DSLR Camera",
    price: 120000,
    image: "https://images.unsplash.com/photo-1600368140372-9052d7ab55a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Cameras",
    description: "20.9MP DX-Format CMOS sensor. EXPEED 5 image processor. 4K UHD video recording. 51-point autofocus system."
  },
  
  // Laptops Category
  {
    id: 13,
    name: "Dell XPS 13 Laptop",
    price: 165000,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Laptops",
    description: "13.4-inch InfinityEdge display. 11th Gen Intel Core i7 processor. 16GB RAM, 512GB SSD. Up to 14 hours battery life."
  },
  {
    id: 14,
    name: "MacBook Pro 14\"",
    price: 230000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Laptops",
    description: "Apple M1 Pro chip. 14-inch Liquid Retina XDR display. 16GB RAM, 512GB SSD. Up to 17 hours battery life."
  },
  {
    id: 15,
    name: "HP Pavilion Gaming Laptop",
    price: 110000,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Laptops",
    description: "15.6-inch Full HD display. AMD Ryzen 7 processor. NVIDIA GeForce GTX 1650 graphics. 8GB RAM, 512GB SSD."
  },
  {
    id: 16,
    name: "Lenovo ThinkPad X1 Carbon",
    price: 180000,
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Laptops",
    description: "14-inch Ultrabook. 11th Gen Intel Core i7. 16GB RAM, 1TB SSD. Military-grade durability with carbon fiber reinforced chassis."
  },
  
  // Smart Home Category
  {
    id: 17,
    name: "Philips Hue Smart Lighting Starter Kit",
    price: 15000,
    image: "https://images.unsplash.com/photo-1558002038-1055e2cf58f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Smart Home",
    description: "3 color-changing bulbs. Hue Bridge to control lights via app. Create schedules, routines, and scenes. Works with Alexa and Google Assistant."
  },
  {
    id: 18,
    name: "Roborock S7 Robot Vacuum and Mop",
    price: 55000,
    image: "https://images.unsplash.com/photo-1603116201813-cc671da27f00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Smart Home",
    description: "Sonic mopping technology. 2500Pa suction power. Multi-level mapping. Scheduled cleaning. App control."
  },
  {
    id: 19,
    name: "Samsung Family Hub Smart Refrigerator",
    price: 280000,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Smart Home",
    description: "21.5-inch touchscreen. Built-in cameras to see inside. SmartThings integration. Family communication center."
  },
  {
    id: 20,
    name: "Breville Smart Oven Pro",
    price: 32000,
    image: "https://images.unsplash.com/photo-1585659722983-3a681d258ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Smart Home",
    description: "10 cooking functions. Element IQ for precise cooking. LCD display. 1800W with convection feature."
  },
  {
    id: 21,
    name: "Vitamix A3500 Ascent Series Smart Blender",
    price: 85000,
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Smart Home",
    description: "5 program settings. Digital timer. Variable speed control. Self-detect technology. Wireless connectivity."
  },
  
  // Phones Category
  {
    id: 22,
    name: "Samsung Galaxy S22 Ultra",
    price: 120000,
    image: "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Phones",
    description: "6.8-inch Dynamic AMOLED 2X display. 108MP camera with 100x Space Zoom. Exynos 2200 processor. 5000mAh battery."
  },
  {
    id: 23,
    name: "iPhone 13 Pro",
    price: 140000,
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Phones",
    description: "6.1-inch Super Retina XDR display with ProMotion. A15 Bionic chip. Pro camera system with 12MP cameras. 5G capable."
  },
  {
    id: 24,
    name: "Google Pixel 6 Pro",
    price: 95000,
    image: "https://images.unsplash.com/photo-1635870723889-06c5d2ffc0ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Phones",
    description: "6.7-inch LTPO OLED display. Google Tensor chip. 50MP wide camera. 12GB RAM. 5000mAh battery."
  },
  {
    id: 25,
    name: "Nokia 3310",
    price: 4500,
    image: "https://images.unsplash.com/photo-1613589085383-4f1a6e5e92ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Phones",
    description: "Classic mobile phone reinvented. 2.4-inch color screen. 2MP camera with LED flash. 16MB storage expandable to 32GB. Month-long battery standby."
  },
  
  // Gaming Category
  {
    id: 26,
    name: "Sony PlayStation 5",
    price: 75000,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Gaming",
    description: "Ultra-high speed SSD. Ray tracing support. 4K-TV gaming at up to 120fps. DualSense wireless controller."
  },
  {
    id: 27,
    name: "Sony PlayStation 4",
    price: 38000,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Gaming",
    description: "1TB storage. Full HD gaming. Access to PlayStation exclusive titles. DualShock 4 controller."
  },
  {
    id: 28,
    name: "Sony PlayStation 3",
    price: 18000,
    image: "https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Gaming",
    description: "500GB storage. Blu-ray player. Access to PlayStation Network. DualShock 3 controller."
  },
  {
    id: 29,
    name: "Razer DeathAdder V2 Gaming Mouse",
    price: 8000,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Gaming",
    description: "20K DPI optical sensor. 8 programmable buttons. Chroma RGB lighting. Optical switches rated for 70M clicks."
  },
  {
    id: 30,
    name: "Corsair K70 RGB MK.2 Mechanical Gaming Keyboard",
    price: 18500,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Gaming",
    description: "Cherry MX switches. Per-key RGB backlighting. Dedicated multimedia controls. USB passthrough. Detachable wrist rest."
  },
  {
    id: 31,
    name: "Xbox Wireless Controller",
    price: 7500,
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Gaming",
    description: "Textured grip for enhanced comfort. Up to 40 hours of battery life. Wireless and Bluetooth technology. Compatible with Xbox Series X|S and Windows 10/11."
  }
];

export default products;
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
};
