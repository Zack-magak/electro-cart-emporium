
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import { Cart } from '@/components/Cart';
import { Star, Minus, Plus, ShoppingCart, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const productId = parseInt(id || '0');
  const product = getProductById(productId);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="mb-6">The product you are looking for does not exist.</p>
            <Button onClick={() => navigate('/products')}>
              Back to Products
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Cart />
      
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-600 hover:text-brand-primary mb-6"
        >
          <ChevronLeft size={20} className="mr-1" />
          Back to products
        </button>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product image */}
          <div className="md:w-1/2">
            <div className="border rounded-lg overflow-hidden bg-white p-8 flex items-center justify-center h-96">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          
          {/* Product details */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="#facc15" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">42 reviews</span>
            </div>
            
            <div className="text-2xl font-bold mb-6">
              ${product.price.toFixed(2)}
            </div>
            
            <p className="text-gray-700 mb-6">
              {product.description}
            </p>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Category</h3>
              <div className="inline-block bg-gray-100 rounded-full px-4 py-1">
                {product.category}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={decreaseQuantity}
                  className="p-2 border rounded-l-md hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <div className="border-t border-b px-4 py-2 w-16 text-center">
                  {quantity}
                </div>
                <button 
                  onClick={increaseQuantity}
                  className="p-2 border rounded-r-md hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleAddToCart}
                className="bg-brand-accent hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-md flex-1 flex items-center justify-center"
              >
                <ShoppingCart className="mr-2" size={18} />
                Add to Cart
              </Button>
              
              <Button 
                onClick={() => {
                  handleAddToCart();
                  navigate('/checkout');
                }}
                className="bg-brand-primary hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md flex-1"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
