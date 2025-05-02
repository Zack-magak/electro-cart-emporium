
import React, { useMemo } from 'react';
import Navbar from '@/components/Navbar';
import { Cart } from '@/components/Cart';
import products from '@/data/products';
import ProductCard from '@/components/ProductCard';

const Deals = () => {
  // For demonstration, we'll simulate deals by taking products with IDs divisible by 3
  // In a real application, you would have a "deal" flag or discount percentage field in your product data
  const dealProducts = useMemo(() => {
    return products.filter(product => product.id % 3 === 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Cart />
      
      {/* Header */}
      <div className="bg-brand-accent text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Special Deals</h1>
          <p className="text-xl opacity-90">Limited time offers on premium electronics</p>
        </div>
      </div>
      
      {/* Featured deals banner */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">Save up to 30% on selected items</h2>
          <p className="mt-2">Offers valid while stocks last!</p>
        </div>
      </div>
      
      {/* Deals grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Featured Deals</h2>
          
          {dealProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No deals available at the moment</h3>
              <p className="text-gray-500">Check back soon for new offers!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {dealProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Deals;
