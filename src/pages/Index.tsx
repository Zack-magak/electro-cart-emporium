
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import products, { getAllCategories } from '@/data/products';
import { Cart } from '@/components/Cart';
import Navbar from '@/components/Navbar';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const featuredProducts = products.slice(0, 4);
  const categories = getAllCategories();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Cart />
      
      {/* Hero section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Next-Gen Electronics for Modern Living
              </h1>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Discover the latest tech innovations at unbeatable prices.
              </p>
              <Link to="/products" className="btn-accent inline-block">
                Shop Now
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="Electronics collection" 
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured products section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link to="/products" className="text-brand-primary hover:text-brand-secondary flex items-center">
              View all <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link key={category} to={`/products?category=${category}`}>
                <div className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition-colors">
                  <h3 className="font-medium">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to action section */}
      <section className="bg-brand-accent text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Subscribe to receive updates on our latest products and special offers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-2 rounded-md text-gray-900 flex-1"
            />
            <button className="bg-white text-brand-accent font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ElectroCart</h3>
              <p className="text-gray-400">Your destination for quality electronics at competitive prices.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/products" className="hover:text-white">All Products</Link></li>
                <li><Link to="/deals" className="hover:text-white">Deals</Link></li>
                <li><Link to="/new" className="hover:text-white">New Arrivals</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
                <li><Link to="/shipping" className="hover:text-white">Shipping Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; Zack Magak 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
