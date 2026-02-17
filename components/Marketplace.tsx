import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { ShoppingCart, Tag, Truck, CheckCircle, Plus, Search } from 'lucide-react';

interface Props {
  lang: Language;
}

const Marketplace: React.FC<Props> = ({ lang }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');

  const products = [
    { id: 1, name: "Urea Fertilizer", price: 266, unit: "45kg Bag", image: "https://picsum.photos/100/100?random=1", category: "Fertilizer" },
    { id: 2, name: "Wheat Seeds (GW-322)", price: 1200, unit: "20kg Bag", image: "https://picsum.photos/100/100?random=2", category: "Seeds" },
    { id: 3, name: "Pesticide (Coragen)", price: 850, unit: "60ml", image: "https://picsum.photos/100/100?random=3", category: "Pesticide" },
    { id: 4, name: "Potash (MOP)", price: 1700, unit: "50kg Bag", image: "https://picsum.photos/100/100?random=4", category: "Fertilizer" },
  ];

  return (
    <div className="space-y-6 pb-24 md:pb-6">
      
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input 
          type="text" 
          placeholder="Search fertilizers, seeds..." 
          className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
        />
      </div>

      {/* Tabs */}
      <div className="bg-slate-100 p-1.5 rounded-2xl flex relative">
        <button
          onClick={() => setActiveTab('buy')}
          className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 z-10 ${
            activeTab === 'buy' ? 'bg-white shadow-md text-emerald-700' : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          {t('buyInputs')}
        </button>
        <button
          onClick={() => setActiveTab('sell')}
          className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 z-10 ${
            activeTab === 'sell' ? 'bg-white shadow-md text-emerald-700' : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          {t('sellProduce')}
        </button>
      </div>

      {activeTab === 'buy' && (
        <div className="space-y-6">
          
          {/* Promo Card */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 rounded-3xl text-white shadow-lg flex items-center justify-between">
             <div>
                <div className="flex items-center space-x-2 mb-1">
                   <Tag className="text-yellow-300" size={16} fill="currentColor" />
                   <span className="text-xs font-bold uppercase tracking-wider text-blue-100">FPO Offer</span>
                </div>
                <h4 className="font-bold text-lg">15% Off on Bulk Urea</h4>
                <p className="text-blue-100 text-xs mt-1 max-w-[80%]">Order before Oct 30 via collective bargaining pool.</p>
             </div>
             <button className="bg-white text-blue-600 px-4 py-2 rounded-xl text-xs font-bold shadow-sm hover:bg-blue-50 transition">
               View
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex gap-4">
                <div className="w-24 h-24 flex-shrink-0 bg-slate-100 rounded-2xl overflow-hidden">
                   <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-wide text-emerald-600 uppercase bg-emerald-50 px-2 py-1 rounded-md">{product.category}</span>
                    <h4 className="font-bold text-slate-800 mt-2 leading-tight line-clamp-2">{product.name}</h4>
                    <p className="text-xs text-slate-400 mt-1">{product.unit}</p>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                     <span className="font-bold text-lg text-slate-900">₹{product.price}</span>
                     <button className="bg-emerald-600 text-white w-8 h-8 flex items-center justify-center rounded-xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 active:scale-95 transition">
                       <Plus size={18} />
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'sell' && (
        <div className="space-y-6">
           <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 text-center max-w-lg mx-auto">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Aggregate & Sell</h3>
              <p className="text-sm text-slate-500 mt-2 mb-8 leading-relaxed">
                Combine your harvest with other farmers to negotiate better rates with large buyers.
              </p>
              
              <div className="space-y-4 text-left">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Select Crop</label>
                    <select className="w-full bg-slate-50 border-none rounded-2xl p-4 text-slate-700 font-medium focus:ring-2 focus:ring-emerald-500">
                      <option>Soybean</option>
                      <option>Wheat</option>
                      <option>Maize</option>
                    </select>
                </div>
                
                <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Quantity (Quintals)</label>
                   <input 
                      type="number" 
                      className="w-full bg-slate-50 border-none rounded-2xl p-4 text-slate-700 font-medium focus:ring-2 focus:ring-emerald-500" 
                      placeholder="e.g. 50" 
                   />
                </div>
              </div>

              <button className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-emerald-200 hover:bg-emerald-700 active:scale-95 transition mt-8">
                Create Sell Request
              </button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-4 p-5 bg-white border border-slate-100 rounded-3xl shadow-sm">
                <div className="bg-green-100 p-2 rounded-full text-green-600 shrink-0">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Guaranteed Payment</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">Payment is processed and credited directly to your bank account within 24hrs of weighting.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-5 bg-white border border-slate-100 rounded-3xl shadow-sm">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600 shrink-0">
                  <Truck size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Free Pickup</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">FPO arranges transport from your farm gate if quantity exceeds 20 Quintals.</p>
                </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
