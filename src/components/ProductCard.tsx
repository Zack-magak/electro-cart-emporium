
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Product } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-lg border shadow-sm overflow-hidden hover:shadow-md transition-all">
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <div className="aspect-square overflow-hidden bg-gray-100 p-4">
          <img 
            src={product.image} 
            alt={product.name} 
            className="object-contain w-full h-full transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-sm mb-1 line-clamp-2 h-10 group-hover:text-brand-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-lg">KSh {product.price.toLocaleString()}</span>
          <Button 
            size="sm" 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="bg-brand-primary hover:bg-blue-700"
          >
            <ShoppingCart className="mr-1 h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
