
import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import products, { getAllCategories } from '@/data/products';
import Navbar from '@/components/Navbar';
import { Cart } from '@/components/Cart';
import { Check, ChevronDown, SlidersHorizontal } from 'lucide-react';

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || '';
  
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<string>('default');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = useMemo(() => getAllCategories(), []);
  
  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by price range
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch (sortBy) {
      case 'price-asc':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return filtered.sort((a, b) => b.price - a.price);
      case 'name-asc':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return filtered.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return filtered;
    }
  }, [selectedCategory, sortBy, priceRange]);
  
  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...priceRange] as [number, number];
    newRange[index] = value;
    setPriceRange(newRange);
  };
  
  const clearFilters = () => {
    setSelectedCategory('');
    setSortBy('default');
    setPriceRange([0, 2000]);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Cart />
      
      {/* Header */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Shop All Products</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Filters for mobile */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-between p-3 border rounded-md"
          >
            <span className="flex items-center">
              <SlidersHorizontal size={18} className="mr-2" />
              Filters
            </span>
            <ChevronDown size={18} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
          
          {showFilters && (
            <div className="mt-4 border rounded-md p-4 bg-white">
              {/* Mobile filters content */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory('')}
                      className={`w-full text-left ${!selectedCategory ? 'font-medium text-brand-primary' : ''}`}
                    >
                      All Products
                    </button>
                  </li>
                  {categories.map(category => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left ${selectedCategory === category ? 'font-medium text-brand-primary' : ''}`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="px-2">
                  <div className="flex justify-between mb-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
              
              <button
                onClick={clearFilters}
                className="w-full py-2 text-center text-brand-primary border border-brand-primary rounded-md hover:bg-brand-primary hover:text-white transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
        
        {/* Sidebar filters (desktop) */}
        <div className="hidden md:block w-64 pr-8">
          <div className="sticky top-24">
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`flex items-center ${!selectedCategory ? 'font-medium text-brand-primary' : ''}`}
                  >
                    {!selectedCategory && <Check size={16} className="mr-2" />}
                    All Products
                  </button>
                </li>
                {categories.map(category => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`flex items-center ${selectedCategory === category ? 'font-medium text-brand-primary' : ''}`}
                    >
                      {selectedCategory === category && <Check size={16} className="mr-2" />}
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Price Range</h3>
              <div className="px-2">
                <div className="flex justify-between mb-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
            
            <button
              onClick={clearFilters}
              className="w-full py-2 text-center text-brand-primary border border-brand-primary rounded-md hover:bg-brand-primary hover:text-white transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
        
        {/* Product grid */}
        <div className="flex-1">
          {/* Sort controls */}
          <div className="flex justify-between items-center mb-6">
            <p>{filteredProducts.length} products</p>
            
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded p-2"
              >
                <option value="default">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>
          
          {/* Products grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
