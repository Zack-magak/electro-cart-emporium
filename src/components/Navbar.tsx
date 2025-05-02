
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Navbar: React.FC = () => {
  const { toggleCart, cartCount } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              ElectroCart
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium hover:text-brand-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="font-medium hover:text-brand-primary transition-colors">
              Products
            </Link>
            <Link to="/categories" className="font-medium hover:text-brand-primary transition-colors">
              Categories
            </Link>
            <Link to="/deals" className="font-medium hover:text-brand-primary transition-colors">
              Deals
            </Link>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Search size={20} />
            </button>
            
            <button 
              onClick={toggleCart}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
