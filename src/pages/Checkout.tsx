
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import { ShoppingBag, CreditCard, Truck, Check, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  cardName: string;
  cardNumber: string;
  expiration: string;
  cvv: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardName: '',
    cardNumber: '',
    expiration: '',
    cvv: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="mb-6">Add some products to your cart to checkout</p>
            <Button onClick={() => navigate('/products')}>
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep === 1) {
      // Validate shipping info
      if (!formData.firstName || !formData.lastName || !formData.email || 
          !formData.address || !formData.city || !formData.state || !formData.zipCode) {
        toast.error("Please fill in all required fields");
        return;
      }
      setCurrentStep(2);
      return;
    }
    
    // Process payment for step 2
    if (!formData.cardName || !formData.cardNumber || !formData.expiration || !formData.cvv) {
      toast.error("Please fill in all payment details");
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast.success("Order placed successfully!");
      setCurrentStep(3);
      clearCart();
      setIsProcessing(false);
    }, 2000);
  };
  
  const shippingForm = (
    <div>
      <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="mb-6">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="mb-6">
        <Label htmlFor="address">Street Address *</Label>
        <Input
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="state">State/Province *</Label>
          <Input
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
          <Input
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="country">Country *</Label>
          <Input
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full mt-4 bg-brand-primary hover:bg-blue-700">
        Continue to Payment
      </Button>
    </div>
  );
  
  const paymentForm = (
    <div>
      <h2 className="text-xl font-bold mb-6">Payment Information</h2>
      
      <div className="mb-6">
        <Label htmlFor="cardName">Name on Card *</Label>
        <Input
          id="cardName"
          name="cardName"
          value={formData.cardName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="mb-6">
        <Label htmlFor="cardNumber">Card Number *</Label>
        <Input
          id="cardNumber"
          name="cardNumber"
          placeholder="XXXX XXXX XXXX XXXX"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <Label htmlFor="expiration">Expiration Date *</Label>
          <Input
            id="expiration"
            name="expiration"
            placeholder="MM/YY"
            value={formData.expiration}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="cvv">CVV *</Label>
          <Input
            id="cvv"
            name="cvv"
            type="password"
            placeholder="XXX"
            value={formData.cvv}
            onChange={handleChange}
            required
            maxLength={4}
          />
        </div>
      </div>
      
      <div className="flex justify-between mt-6">
        <Button 
          type="button" 
          variant="outline"
          onClick={() => setCurrentStep(1)}
        >
          Back
        </Button>
        <Button 
          type="submit" 
          className="bg-brand-accent hover:bg-orange-700"
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Place Order'}
        </Button>
      </div>
    </div>
  );
  
  const orderConfirmation = (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="text-green-600" size={32} />
      </div>
      <h2 className="text-2xl font-bold mb-2">Order Placed Successfully!</h2>
      <p className="mb-4 text-gray-600">
        Thank you for your purchase. We've sent a confirmation email to {formData.email}.
      </p>
      <div className="mb-8">
        <p className="text-sm text-gray-500">Order #: {Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
      </div>
      <Button 
        onClick={() => navigate('/products')}
        className="bg-brand-primary hover:bg-blue-700"
      >
        Continue Shopping
      </Button>
    </div>
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Checkout steps */}
        <div className="mb-8">
          <ol className="flex items-center w-full">
            <li className={`flex items-center ${currentStep >= 1 ? 'text-brand-primary' : 'text-gray-500'}`}>
              <span className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-brand-primary text-white' : 'bg-gray-200'}`}>
                {currentStep > 1 ? <Check size={16} /> : 1}
              </span>
              <span className="ml-2">Shipping</span>
            </li>
            <li className="flex w-full items-center">
              <div className={`w-full h-1 mx-4 ${currentStep >= 2 ? 'bg-brand-primary' : 'bg-gray-200'}`}></div>
            </li>
            <li className={`flex items-center ${currentStep >= 2 ? 'text-brand-primary' : 'text-gray-500'}`}>
              <span className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-brand-primary text-white' : 'bg-gray-200'}`}>
                {currentStep > 2 ? <Check size={16} /> : 2}
              </span>
              <span className="ml-2">Payment</span>
            </li>
            <li className="flex w-full items-center">
              <div className={`w-full h-1 mx-4 ${currentStep >= 3 ? 'bg-brand-primary' : 'bg-gray-200'}`}></div>
            </li>
            <li className={`flex items-center ${currentStep >= 3 ? 'text-brand-primary' : 'text-gray-500'}`}>
              <span className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 3 ? 'bg-brand-primary text-white' : 'bg-gray-200'}`}>
                3
              </span>
              <span className="ml-2">Confirmation</span>
            </li>
          </ol>
        </div>
        
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout form */}
          <div className="lg:w-7/12">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border">
              {currentStep === 1 && shippingForm}
              {currentStep === 2 && paymentForm}
              {currentStep === 3 && orderConfirmation}
            </form>
          </div>
          
          {/* Order summary */}
          <div className="lg:w-5/12">
            <div className="bg-white p-6 rounded-lg border sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="max-h-96 overflow-y-auto mb-6">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex py-4 border-b">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-sm font-medium">
                        <h3 className="text-sm line-clamp-2">{item.product.name}</h3>
                        <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Qty {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{cartTotal >= 50 ? "Free" : "$4.99"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(cartTotal * 0.07).toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                  <span>Total</span>
                  <span>
                    ${(cartTotal + (cartTotal >= 50 ? 0 : 4.99) + (cartTotal * 0.07)).toFixed(2)}
                  </span>
                </div>
              </div>
              
              {currentStep < 3 && (
                <>
                  <div className="mt-6 flex items-center">
                    <Truck size={20} className="text-green-600 mr-2" />
                    <p className="text-sm">
                      <span className="font-medium">Free shipping</span> on orders over $50
                    </p>
                  </div>
                  
                  <div className="mt-4 flex items-center">
                    <CreditCard size={20} className="text-blue-600 mr-2" />
                    <p className="text-sm">
                      <span className="font-medium">Secure payment</span> with encrypted processing
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
