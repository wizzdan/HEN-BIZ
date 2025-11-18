import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context';
import { Navbar, Footer, CartDrawer } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';
import { Checkout } from './pages/Checkout';

// Wrapper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Placeholder for Contact page to save space, keeping structure valid
const Contact = () => (
  <div className="max-w-7xl mx-auto px-4 py-20">
    <h1 className="text-4xl font-serif font-bold text-brand-900 mb-8">Contact Us</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <p className="text-lg text-gray-600 mb-6">Have questions about bulk orders, delivery zones, or farm visits? We'd love to hear from you.</p>
        <div className="bg-brand-50 p-8 rounded-xl">
          <h3 className="font-bold text-brand-900 mb-2">Headquarters</h3>
          <p className="text-gray-600 mb-4">Farm Road 4, Kiambu County, Kenya</p>
          <h3 className="font-bold text-brand-900 mb-2">Call Us</h3>
          <p className="text-gray-600 mb-4">+254 700 123 456</p>
          <h3 className="font-bold text-brand-900 mb-2">Email</h3>
          <p className="text-gray-600">orders@goldenyolk.co.ke</p>
        </div>
      </div>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg" />
        <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg" />
        <textarea placeholder="Message" rows={5} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
        <button className="bg-brand-600 text-white px-6 py-3 rounded-lg font-bold w-full">Send Message</button>
      </form>
    </div>
  </div>
);

const App = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white font-sans text-brand-900">
          <Navbar />
          <CartDrawer />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<div className="p-20 text-center">404 - Page Not Found</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;