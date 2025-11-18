import React, { useState } from 'react';
import { useCart } from '../context';
import { Button, SectionHeader } from '../components/UI';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const Checkout = () => {
  const { cart, cartTotal } = useCart();
  const [step, setStep] = useState(1);

  if (cart.length === 0 && step === 1) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">Your cart is empty</h2>
        <Link to="/shop"><Button>Go to Shop</Button></Link>
      </div>
    );
  }

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setStep(2), 1500);
  };

  if (step === 2) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 max-w-lg mx-auto">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-brand-900 mb-4">Order Confirmed!</h2>
        <p className="text-gray-600 mb-8">
          Thank you for choosing Golden Yolk. Your order #GY-8902 has been received. We will send an SMS confirmation shortly.
        </p>
        <div className="bg-brand-50 p-6 rounded-lg w-full mb-8 text-left">
          <h3 className="font-bold text-brand-900 mb-2">Delivery Details:</h3>
          <p className="text-sm text-gray-600">Scheduled for: Tomorrow, 8AM - 11AM</p>
          <p className="text-sm text-gray-600">Payment: M-Pesa on Delivery</p>
        </div>
        <Link to="/"><Button variant="secondary">Back to Home</Button></Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Checkout" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleOrder} className="bg-white shadow-sm rounded-xl p-6 md:p-8 space-y-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-bold text-brand-900 mb-4 border-b pb-2">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input required type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 p-2 border" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input required type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 p-2 border" />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input required type="email" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 p-2 border" />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Phone Number (for M-Pesa)</label>
                    <input required type="tel" placeholder="e.g. 0712 345 678" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 p-2 border" />
                  </div>
                </div>
              </div>

              {/* Delivery Info */}
              <div>
                <h3 className="text-lg font-bold text-brand-900 mb-4 border-b pb-2">Delivery Address</h3>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Street Address / Apartment</label>
                    <input required type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 p-2 border" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">City / Area</label>
                      <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 p-2 border">
                        <option>Nairobi - Kilimani</option>
                        <option>Nairobi - Westlands</option>
                        <option>Nairobi - Karen</option>
                        <option>Nairobi - CBD</option>
                        <option>Kiambu Road</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Preferred Delivery Date</label>
                      <input required type="date" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 p-2 border" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-lg font-bold text-brand-900 mb-4 border-b pb-2">Payment Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border rounded-lg border-brand-200 bg-brand-50 cursor-pointer">
                    <input type="radio" name="payment" defaultChecked className="text-brand-600 focus:ring-brand-500" />
                    <div className="ml-3">
                      <span className="block text-sm font-medium text-gray-900">M-Pesa on Delivery</span>
                      <span className="block text-xs text-gray-500">Pay via Buy Goods Till Number upon receipt.</span>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border rounded-lg border-gray-200 cursor-pointer">
                    <input type="radio" name="payment" className="text-brand-600 focus:ring-brand-500" />
                    <div className="ml-3">
                      <span className="block text-sm font-medium text-gray-900">Card Payment</span>
                      <span className="block text-xs text-gray-500">Secure online payment via Visa/Mastercard.</span>
                    </div>
                  </label>
                </div>
              </div>

              <Button fullWidth size="lg" type="submit">Place Order (KES {(cartTotal + 150).toLocaleString()})</Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-sm rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-brand-900 mb-4">Order Summary</h3>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-200">
                  {cart.map((item) => (
                    <li key={item.id} className="flex py-4">
                      <img src={item.image} alt={item.name} className="h-12 w-12 flex-shrink-0 rounded-md border border-gray-200 object-cover" />
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-sm font-medium text-gray-900">
                            <h3 className="line-clamp-1">{item.name}</h3>
                            <p className="ml-2">x{item.quantity}</p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">KES {item.price * item.quantity}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t border-gray-200 mt-6 pt-6 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <p>Subtotal</p>
                  <p>KES {cartTotal.toLocaleString()}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <p>Delivery (Nairobi)</p>
                  <p>KES 150</p>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between text-base font-medium text-gray-900">
                  <p>Total</p>
                  <p>KES {(cartTotal + 150).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};