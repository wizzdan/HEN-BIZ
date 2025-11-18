import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Truck, Award, Sun } from 'lucide-react';
import { PRODUCTS, TESTIMONIALS } from '../constants';
import { Button, SectionHeader, Badge } from '../components/UI';

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[85vh] bg-brand-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=2680&auto=format&fit=crop" 
          alt="Free range chickens on farm" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl animate-fade-in-up">
            <Badge color="green">Farm Fresh Daily</Badge>
            <h1 className="mt-4 text-5xl md:text-7xl font-serif font-bold text-white leading-tight shadow-sm">
              Wholesome Eggs <br/>
              <span className="text-brand-300">Straight from Nature</span>
            </h1>
            <p className="mt-6 text-xl text-brand-100 max-w-lg">
              Premium brown eggs from happy, free-roaming layers in Kiambu. Delivered fresh to your doorstep from KES 350.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button size="lg" className="min-w-[180px]">Order Now</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 hover:text-white">
                  Our Farm Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-xl bg-brand-50 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-200 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-700">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-900 mb-2">Free Range</h3>
              <p className="text-brand-600 text-sm">Our chickens roam freely in natural sunlight and fresh air.</p>
            </div>
            <div className="p-6 rounded-xl bg-brand-50 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-200 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-700">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-900 mb-2">Antibiotic Free</h3>
              <p className="text-brand-600 text-sm">Raised naturally without growth hormones or antibiotics.</p>
            </div>
            <div className="p-6 rounded-xl bg-brand-50 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-200 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-700">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-900 mb-2">Farm to Door</h3>
              <p className="text-brand-600 text-sm">Direct delivery ensures you get eggs laid within 24-48 hours.</p>
            </div>
            <div className="p-6 rounded-xl bg-brand-50 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-200 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-700">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-900 mb-2">Premium Quality</h3>
              <p className="text-brand-600 text-sm">Thick shells and rich, golden yolks perfect for baking.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Best Sellers" 
            subtitle="Choose from our selection of premium trays, carefully packed and handled."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.inStock ? (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-brand-900">
                      KES {product.price}
                    </div>
                  ) : (
                    <div className="absolute top-3 right-3 bg-red-100 px-2 py-1 rounded text-xs font-bold text-red-800">
                      Sold Out
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-bold text-lg text-brand-900 mb-1 group-hover:text-brand-600 transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.shortDescription}</p>
                  <span className="text-brand-600 font-medium text-sm flex items-center">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
             <Link to="/shop"><Button variant="outline" size="lg">View All Products</Button></Link>
          </div>
        </div>
      </div>

      {/* Farm Visual Story / Banner */}
      <div className="relative py-24 bg-fixed bg-center bg-cover" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1516467508483-a7212056b165?q=80&w=2670&auto=format&fit=crop)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
           <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Traceable, Transparent, Tasty.</h2>
           <p className="text-lg md:text-xl opacity-90 mb-8">
             We believe you should know exactly where your food comes from. Visit our farm digitally or schedule a tour.
           </p>
           <Link to="/about">
             <Button variant="primary" className="bg-white text-brand-900 hover:bg-brand-100 border-none">Explore Our Farm</Button>
           </Link>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionHeader title="What Our Customers Say" centered />
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {TESTIMONIALS.map((t) => (
               <div key={t.id} className="bg-brand-50 p-8 rounded-2xl relative">
                 <div className="absolute -top-6 left-8">
                   <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" />
                 </div>
                 <p className="mt-4 text-brand-700 italic mb-6">"{t.content}"</p>
                 <div>
                   <h4 className="font-bold text-brand-900">{t.name}</h4>
                   <p className="text-xs text-brand-500 uppercase tracking-wide">{t.role}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};