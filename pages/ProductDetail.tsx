import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, Calendar, Info, Star, Check } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context';
import { Button, Badge } from '../components/UI';
import { SubscriptionFrequency } from '../types';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find(p => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [subscription, setSubscription] = useState<SubscriptionFrequency>(SubscriptionFrequency.None);

  if (!product) return <div className="p-20 text-center">Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product, quantity, subscription);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button onClick={() => navigate(-1)} className="mb-8 text-sm text-brand-600 hover:text-brand-900">&larr; Back to Shop</button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
               {/* Mock thumbnails */}
               <div className="aspect-square rounded-lg overflow-hidden bg-gray-100"><img src="https://picsum.photos/seed/eggdetail1/200/200" className="w-full h-full object-cover" alt="detail" /></div>
               <div className="aspect-square rounded-lg overflow-hidden bg-gray-100"><img src="https://picsum.photos/seed/eggdetail2/200/200" className="w-full h-full object-cover" alt="detail" /></div>
               <div className="aspect-square rounded-lg overflow-hidden bg-gray-100"><img src="https://picsum.photos/seed/eggdetail3/200/200" className="w-full h-full object-cover" alt="detail" /></div>
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>

            <h1 className="text-4xl font-serif font-bold text-brand-900 mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-brand-700 mb-6">KES {product.price} <span className="text-base font-normal text-gray-500">/ {product.category}</span></p>

            <div className="prose prose-brand text-gray-600 mb-8">
              <p>{product.description}</p>
            </div>

            <div className="bg-brand-50 p-6 rounded-xl mb-8 border border-brand-100">
              <h3 className="font-bold text-brand-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-brand-600" />
                Subscribe & Save Time
              </h3>
              <div className="space-y-3">
                {[SubscriptionFrequency.None, SubscriptionFrequency.Weekly, SubscriptionFrequency.BiWeekly, SubscriptionFrequency.Monthly].map((opt) => (
                   <label key={opt} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${subscription === opt ? 'border-brand-500 bg-brand-100' : 'border-gray-200 hover:border-brand-300'}`}>
                     <input 
                       type="radio" 
                       name="subscription" 
                       value={opt}
                       checked={subscription === opt}
                       onChange={() => setSubscription(opt)}
                       className="text-brand-600 focus:ring-brand-500"
                     />
                     <span className="ml-3 font-medium text-brand-900">
                       {opt === SubscriptionFrequency.None ? 'One-time Purchase' : `Deliver ${opt}`}
                     </span>
                     {opt !== SubscriptionFrequency.None && <Badge color="green" className="ml-auto">Popular</Badge>}
                   </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-md w-max">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-gray-600 hover:bg-gray-100"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="px-4 font-medium text-lg text-brand-900">{quantity}</span>
                <button 
                   onClick={() => setQuantity(quantity + 1)}
                   className="px-4 py-3 text-gray-600 hover:bg-gray-100"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <Button size="lg" className="flex-1" onClick={handleAddToCart} disabled={!product.inStock}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>

            {/* Additional Info Tabs */}
            <div className="border-t border-gray-200 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-brand-900 mb-2 flex items-center"><Info className="w-4 h-4 mr-2" /> Nutritional Highlights</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start"><Check className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> High protein content (6g per egg)</li>
                  <li className="flex items-start"><Check className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Rich in Omega-3 fatty acids</li>
                  <li className="flex items-start"><Check className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Contains Vitamin D and B12</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-brand-900 mb-2">Storage Instructions</h4>
                <p className="text-sm text-gray-600">Keep refrigerated below 4°C. Store in the original carton to prevent absorption of strong odors. Best used within 3 weeks of delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};