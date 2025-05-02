
import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, isCartOpen, toggleCart, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={toggleCart}
      />
      
      {/* Cart panel */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white z-50 shadow-lg animate-cart-slide-in flex flex-col">
        {/* Cart header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold flex items-center">
            <ShoppingBag className="mr-2" size={20} />
            Your Cart
          </h2>
          <button onClick={toggleCart} className="p-2 rounded-full hover:bg-gray-100">
            <X size={20} />
          </button>
        </div>
        
        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={64} className="text-gray-300 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <button 
                onClick={toggleCart}
                className="mt-4 text-brand-primary hover:underline"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.product.id} className="flex border-b pb-4">
                  {/* Product image */}
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  
                  {/* Product details */}
                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium">
                      <h3 className="text-sm">{item.product.name}</h3>
                      <p className="ml-4">${item.product.price.toFixed(2)}</p>
                    </div>
                    
                    {/* Quantity controls */}
                    <div className="flex items-center mt-2">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 rounded-md border"
                      >
                        <Minus size={14} />
                      </button>
                      
                      <span className="mx-2 w-8 text-center">{item.quantity}</span>
                      
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 rounded-md border"
                      >
                        <Plus size={14} />
                      </button>
                      
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-auto text-sm text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Cart footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500">Shipping and taxes calculated at checkout</p>
            
            <Link 
              to="/checkout" 
              onClick={toggleCart}
              className="w-full"
            >
              <Button className="w-full bg-brand-accent hover:bg-orange-600">
                Checkout
              </Button>
            </Link>
            
            <button 
              onClick={toggleCart}
              className="w-full text-center text-sm text-gray-500 hover:text-gray-700"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};
