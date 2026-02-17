import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, MOCK_PRICES } from '../constants';
import { TrendingUp, TrendingDown, Minus, CloudSun, Droplets, Wind, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid, YAxis } from 'recharts';

interface Props {
  lang: Language;
  onNavigate: (view: any) => void;
}

const Dashboard: React.FC<Props> = ({ lang, onNavigate }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];

  return (
    <div className="space-y-6 pb-20 md:pb-6">
      
      {/* Welcome Banner */}
      <div className="relative overflow-hidden bg-emerald-600 rounded-3xl shadow-lg shadow-emerald-600/20 text-white p-6 md:p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">{t('welcome')}</h2>
              <p className="text-emerald-100 max-w-lg text-sm md:text-base leading-relaxed">
                {lang === 'en' ? "Your crops are looking good. Market prices for Soybean are up by 5%." : 
                 lang === 'hi' ? "आपकी फसल अच्छी दिख रही है। सोयाबीन के बाजार भाव में 5% की वृद्धि हुई है।" :
                 "तुमची पिके चांगली दिसत आहेत. सोयाबीनच्या बाजारभावात ५% वाढ झाली आहे."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => onNavigate('market')}
                className="bg-white text-emerald-700 px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:shadow-md hover:bg-emerald-50 transition active:scale-95"
              >
                {t('sellProduce')}
              </button>
              <button 
                 onClick={() => onNavigate('advisor')}
                 className="bg-emerald-700/60 backdrop-blur-sm border border-emerald-400/30 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-700 transition active:scale-95"
              >
                {t('askExpert')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Weather Widget */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
             <div>
               <h3 className="text-slate-500 font-semibold text-sm uppercase tracking-wider">{t('weather')}</h3>
               <p className="text-slate-400 text-xs mt-1">Nagpur, India</p>
             </div>
             <CloudSun className="text-orange-400" size={32} />
          </div>
          
          <div className="flex items-baseline space-x-2 mb-6">
            <span className="text-5xl font-bold text-slate-800">28°</span>
            <span className="text-xl text-slate-500 font-medium">C</span>
            <span className="ml-2 text-sm px-2 py-1 bg-orange-50 text-orange-600 rounded-lg font-medium">Sunny</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-2xl p-3 flex items-center space-x-3">
              <div className="bg-blue-100 text-blue-500 p-2 rounded-xl">
                <Droplets size={18} />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Humidity</p>
                <p className="text-slate-700 font-bold">45%</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3 flex items-center space-x-3">
              <div className="bg-teal-100 text-teal-500 p-2 rounded-xl">
                <Wind size={18} />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Wind</p>
                <p className="text-slate-700 font-bold">12 km/h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Market Prices Ticker */}
        <div className="md:col-span-1 lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-slate-800 text-lg">{t('todaysPrices')}</h3>
              <p className="text-slate-400 text-xs mt-0.5">Updated: 10 mins ago</p>
            </div>
            <button 
              onClick={() => onNavigate('market')}
              className="text-emerald-600 hover:text-emerald-700 p-2 hover:bg-emerald-50 rounded-full transition"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-auto max-h-[260px] p-2">
            <div className="space-y-1">
              {MOCK_PRICES.map((item, idx) => (
                <div key={idx} className="group p-4 rounded-2xl hover:bg-slate-50 transition flex justify-between items-center cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      idx % 2 === 0 ? 'bg-amber-100 text-amber-700' : 'bg-lime-100 text-lime-700'
                    }`}>
                      {item.crop.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{item.crop}</p>
                      <p className="text-xs text-slate-500">{item.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-900 text-lg">₹{item.price}</p>
                    <div className={`text-xs font-semibold flex items-center justify-end mt-0.5 ${
                      item.trend === 'up' ? 'text-green-600 bg-green-50 px-1.5 py-0.5 rounded-md inline-flex' : 
                      item.trend === 'down' ? 'text-red-600 bg-red-50 px-1.5 py-0.5 rounded-md inline-flex' : 
                      'text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-md inline-flex'
                    }`}>
                      {item.trend === 'up' && <TrendingUp size={10} className="mr-1"/>}
                      {item.trend === 'down' && <TrendingDown size={10} className="mr-1"/>}
                      {item.trend === 'stable' && <Minus size={10} className="mr-1"/>}
                      {item.trend === 'up' ? '2.4%' : item.trend === 'down' ? '1.2%' : 'Stable'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Chart: Weekly Savings */}
        <div className="md:col-span-2 lg:col-span-3 bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
          <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-slate-800 text-lg">{t('savingTrend')}</h3>
             <div className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
               Total: ₹720
             </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { name: 'Mon', val: 120 },
                { name: 'Tue', val: 80 },
                { name: 'Wed', val: 150 },
                { name: 'Thu', val: 200 },
                { name: 'Fri', val: 170 },
                { name: 'Sat', val: 90 },
                { name: 'Sun', val: 110 },
              ]} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                />
                <Bar dataKey="val" radius={[6, 6, 6, 6]} barSize={32}>
                  {
                    [120, 80, 150, 200, 170, 90, 110].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 3 ? '#10b981' : '#cbd5e1'} />
                    ))
                  }
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
