import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Instagram, Facebook, Twitter, Phone, MapPin, Mail, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context';
import { Button } from './UI';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About Farm', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-40 w-full bg-brand-50/95 backdrop-blur-md border-b border-brand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl group-hover:bg-brand-700 transition-colors">
              G
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-brand-900 leading-none">Golden Yolk</span>
              <span className="text-xs text-brand-600 uppercase tracking-widest font-medium">Farms</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-brand-800 font-semibold' : 'text-brand-600 hover:text-brand-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/account" className="p-2 text-brand-600 hover:bg-brand-100 rounded-full transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </Link>
            <button
              onClick={toggleCart}
              className="p-2 text-brand-600 hover:bg-brand-100 rounded-full transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-nature-500 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 text-brand-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-50 border-b border-brand-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-brand-100 text-brand-900'
                    : 'text-brand-600 hover:bg-brand-100 hover:text-brand-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/account"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-600 hover:bg-brand-100 hover:text-brand-900"
            >
              My Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif font-bold text-2xl text-white mb-4">Golden Yolk</h3>
            <p className="text-brand-300 text-sm leading-relaxed">
              Bringing premium, farm-fresh brown eggs from our happy hens directly to your table. Committed to sustainability and quality.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="hover:text-white transition-colors text-brand-300">Order Eggs</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors text-brand-300">Our Farm Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors text-brand-300">Wholesale Inquiries</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors text-brand-300">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-3 text-brand-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Kiambu Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>hello@goldenyolk.co.ke</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Stay Connected</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-brand-300 hover:text-white transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="text-brand-300 hover:text-white transition-colors"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="text-brand-300 hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
            </div>
            <p className="text-xs text-brand-400">
              Subscribe to our newsletter for farm updates.
            </p>
            <div className="mt-2 flex">
              <input type="email" placeholder="Email address" className="bg-brand-800 border-none text-white placeholder-brand-500 rounded-l-md px-3 py-2 w-full focus:ring-1 focus:ring-brand-500" />
              <button className="bg-brand-600 text-white px-4 py-2 rounded-r-md hover:bg-brand-500">Go</button>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-400">
          <p>&copy; 2023 Golden Yolk Farms. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const CartDrawer = () => {
  const { isCartOpen, toggleCart, cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity" onClick={toggleCart}></div>
      
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col h-full animate-slide-in-right">
          <div className="flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-100">
            <h2 className="text-lg font-serif font-medium text-gray-900">Your Cart</h2>
            <button onClick={toggleCart} className="text-gray-400 hover:text-gray-500">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Your cart is empty.</p>
                <Button variant="secondary" className="mt-6" onClick={toggleCart}>Continue Shopping</Button>
              </div>
            ) : (
              <ul className="space-y-8">
                {cart.map((item) => (
                  <li key={`${item.id}-${item.subscription}`} className="flex py-2">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">KES {(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.category} - {item.size}</p>
                        {item.subscription !== 'None' && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 mt-1">
                            Subscription: {item.subscription}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-gray-600 hover:text-gray-900"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="mx-2 font-medium text-gray-900">{item.quantity}</span>
                          <button 
                             onClick={() => updateQuantity(item.id, item.quantity + 1)}
                             className="p-1 text-gray-600 hover:text-gray-900"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="font-medium text-red-600 hover:text-red-500 flex items-center"
                        >
                          <Trash2 className="w-4 h-4 mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-gray-100 px-4 py-6 sm:px-6 bg-gray-50">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p>KES {cartTotal.toLocaleString()}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500 mb-6">Shipping and taxes calculated at checkout.</p>
              <Button fullWidth size="lg" onClick={() => { toggleCart(); navigate('/checkout'); }}>
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};