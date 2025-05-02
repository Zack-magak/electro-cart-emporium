
import { Product } from "@/contexts/CartContext";

const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Earbuds",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Audio",
    description: "Experience crystal-clear sound with these premium wireless earbuds. Featuring active noise cancellation, sweat resistance, and up to 24 hours of battery life with the charging case."
  },
  {
    id: 2,
    name: "Ultra HD Smart TV - 55\"",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "TVs",
    description: "Transform your living room with this stunning 55-inch Ultra HD Smart TV. Enjoy vibrant colors, deep blacks, and access to all your favorite streaming services with built-in WiFi."
  },
  {
    id: 3,
    name: "Professional DSLR Camera",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Cameras",
    description: "Capture life's most important moments with incredible detail using this professional DSLR camera. Includes a versatile 18-55mm lens, perfect for beginners and professionals alike."
  },
  {
    id: 4,
    name: "Gaming Laptop - 15.6\" 144Hz",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Laptops",
    description: "Dominate your games with this powerful gaming laptop featuring a 15.6-inch 144Hz display, RGB keyboard, and the latest graphics card for smooth gameplay even at the highest settings."
  },
  {
    id: 5,
    name: "Smart Home Security System",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1558002038-1055e2cf58f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Smart Home",
    description: "Keep your home safe with this comprehensive security system. Includes HD cameras, motion sensors, and smartphone alerts so you can monitor your home from anywhere."
  },
  {
    id: 6,
    name: "Noise-Cancelling Headphones",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Audio",
    description: "Immerse yourself in your music and block out distractions with these premium noise-cancelling headphones. Featuring plush ear cushions and up to 30 hours of battery life."
  },
  {
    id: 7,
    name: "Wireless Gaming Mouse",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Gaming",
    description: "Gain a competitive edge with this high-precision wireless gaming mouse. Features adjustable DPI settings, programmable buttons, and RGB lighting for a customized gaming experience."
  },
  {
    id: 8,
    name: "Smartphone - 6.7\" Display",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Phones",
    description: "Experience lightning-fast performance and stunning photography with this premium smartphone. Featuring a 6.7-inch edge-to-edge display and an advanced camera system."
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
