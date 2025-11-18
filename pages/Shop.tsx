import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Button, SectionHeader, Badge } from '../components/UI';

export const Shop = () => {
  const [filter, setFilter] = useState<'All' | 'Tray' | 'Half-Tray'>('All');

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="bg-brand-50 min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Shop Farm Fresh" 
          subtitle="Order our premium brown eggs by the tray or half-tray. Delivered safely to your home."
        />

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-brand-600 font-medium">
              <Filter className="w-5 h-5 mr-2" /> Filter:
            </span>
            <button 
              onClick={() => setFilter('All')}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${filter === 'All' ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-800 hover:bg-brand-100'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('Tray')}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${filter === 'Tray' ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-800 hover:bg-brand-100'}`}
            >
              Full Trays
            </button>
            <button 
              onClick={() => setFilter('Half-Tray')}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${filter === 'Half-Tray' ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-800 hover:bg-brand-100'}`}
            >
              Half Trays
            </button>
          </div>
          <div className="text-sm text-gray-500 mt-4 sm:mt-0">
            Showing {filteredProducts.length} results
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
             <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
               <div className="relative h-64 overflow-hidden group">
                 <img 
                   src={product.image} 
                   alt={product.name} 
                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && <Badge color="green">New Harvest</Badge>}
                    {!product.inStock && <Badge color="red">Out of Stock</Badge>}
                 </div>
               </div>
               
               <div className="p-6 flex flex-col flex-1">
                 <div className="flex justify-between items-start mb-2">
                   <h3 className="font-serif font-bold text-xl text-brand-900">{product.name}</h3>
                   <p className="font-bold text-brand-700 text-lg">KES {product.price}</p>
                 </div>
                 <p className="text-sm text-gray-500 mb-6 flex-1">{product.shortDescription}</p>
                 
                 <div className="mt-auto">
                   <Link to={`/product/${product.id}`} className="w-full block">
                     <Button fullWidth disabled={!product.inStock}>
                       {product.inStock ? (
                         <>
                           <ShoppingBag className="w-4 h-4 mr-2" /> View Options
                         </>
                       ) : (
                         'Out of Stock'
                       )}
                     </Button>
                   </Link>
                 </div>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};