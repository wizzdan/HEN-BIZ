import React from 'react';
import { SectionHeader } from '../components/UI';

export const About = () => {
  return (
    <div>
      {/* Hero */}
      <div className="bg-brand-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" alt="Farm texture" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Rooted in Nature</h1>
          <p className="text-xl text-brand-200">The story of Golden Yolk Farms and our commitment to ethical farming.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
             <img 
               src="https://images.unsplash.com/photo-1544591799-649c9ecf4c94?q=80&w=1600&auto=format&fit=crop" 
               alt="Farmer holding eggs" 
               className="rounded-2xl shadow-2xl"
             />
          </div>
          <div>
            <SectionHeader title="Our Philosophy" />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2018 in the lush hills of Kiambu, Golden Yolk started with a simple mission: to bring the authentic taste of village eggs to the city table. We realized that most supermarket eggs lacked that rich, creamy flavor of eggs from free-roaming chickens.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We raise exclusively <strong>Isa Brown layers</strong>, known for their hardiness and high-quality brown eggs. Our hens spend their days scratching in the dirt, bathing in dust, and foraging—just as nature intended.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-brand-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-800 text-2xl">5000+</h4>
                <p className="text-sm text-brand-600">Happy Hens</p>
              </div>
              <div className="bg-brand-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-800 text-2xl">24hrs</h4>
                <p className="text-sm text-brand-600">Farm to Table</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traceability Section */}
      <div className="bg-brand-50 py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionHeader title="Transparency & Traceability" centered subtitle="Every tray tells a story." />
           
           <div className="relative">
             <div className="absolute left-1/2 w-0.5 bg-brand-200 h-full transform -translate-x-1/2 hidden md:block"></div>
             
             <div className="space-y-12 relative">
               <div className="flex flex-col md:flex-row items-center justify-between">
                 <div className="md:w-5/12 text-right order-1 md:order-1">
                   <h3 className="text-xl font-bold text-brand-900">Daily Collection</h3>
                   <p className="text-gray-600 mt-2">Eggs are hand-collected every morning at 6:00 AM. Each batch is timestamped immediately.</p>
                 </div>
                 <div className="w-8 h-8 bg-nature-500 rounded-full border-4 border-white z-10 order-2 md:order-2 mx-auto md:mx-0"></div>
                 <div className="md:w-5/12 order-3 md:order-3"></div>
               </div>

               <div className="flex flex-col md:flex-row items-center justify-between">
                 <div className="md:w-5/12 order-1 md:order-1"></div>
                 <div className="w-8 h-8 bg-nature-500 rounded-full border-4 border-white z-10 order-2 md:order-2 mx-auto md:mx-0"></div>
                 <div className="md:w-5/12 text-left order-3 md:order-3">
                   <h3 className="text-xl font-bold text-brand-900">Quality Grading</h3>
                   <p className="text-gray-600 mt-2">We manually inspect every egg. Only those with perfect shells and the right weight make it to your tray.</p>
                 </div>
               </div>

               <div className="flex flex-col md:flex-row items-center justify-between">
                 <div className="md:w-5/12 text-right order-1 md:order-1">
                   <h3 className="text-xl font-bold text-brand-900">Sustainable Packaging</h3>
                   <p className="text-gray-600 mt-2">Packed in recycled paper pulp trays that cushion the eggs and breathe, keeping them fresh longer.</p>
                 </div>
                 <div className="w-8 h-8 bg-nature-500 rounded-full border-4 border-white z-10 order-2 md:order-2 mx-auto md:mx-0"></div>
                 <div className="md:w-5/12 order-3 md:order-3"></div>
               </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
};