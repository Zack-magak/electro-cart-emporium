
import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import products, { getAllCategories } from '@/data/products';
import Navbar from '@/components/Navbar';
import { Cart } from '@/components/Cart';
import ProductCard from '@/components/ProductCard';

const Categories = () => {
  const categories = useMemo(() => getAllCategories(), []);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const navigate = useNavigate();

  // Group products by category
  const productsByCategory = useMemo(() => {
    const grouped = categories.reduce((acc, category) => {
      acc[category] = products.filter(product => product.category === category);
      return acc;
    }, {} as Record<string, typeof products>);
    
    return grouped;
  }, [categories]);

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Cart />
      
      {/* Header */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Product Categories</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {categories.map(category => (
            <div 
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="bg-white border rounded-lg overflow-hidden hover:shadow-md cursor-pointer transition-all"
            >
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold mb-2">{category}</h2>
                <p className="text-gray-600">
                  {productsByCategory[category]?.length || 0} products
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured products from each category */}
        {categories.map(category => {
          const categoryProducts = productsByCategory[category]?.slice(0, 4) || [];
          
          return (
            <div key={category} className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{category}</h2>
                <Link 
                  to={`/products?category=${category}`}
                  className="text-brand-primary hover:underline"
                >
                  View all
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
