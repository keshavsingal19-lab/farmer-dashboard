import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { TrendingUp, Award, FileText, Briefcase, ChevronRight } from 'lucide-react';

interface Props {
  lang: Language;
}

const Ownership: React.FC<Props> = ({ lang }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];

  const data = [
    { name: 'My Equity', value: 5000 },
    { name: 'FPO Reserves', value: 15000 },
  ];
  const COLORS = ['#10b981', '#f1f5f9'];

  return (
    <div className="space-y-6 pb-20 md:pb-6">
      
      {/* Main Equity Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">{t('equityValue')}</h3>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-extrabold text-slate-800">₹5,000</span>
              <span className="text-emerald-600 text-sm font-bold bg-emerald-50 px-2 py-1 rounded-lg">+12.5%</span>
            </div>
            <p className="text-slate-500 text-sm mt-2">You own <span className="font-bold text-slate-800">50 Class A Shares</span></p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-500 mb-1">Unit Price</p>
                <p className="text-lg font-bold text-slate-800">₹100</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-500 mb-1">Buyback Value</p>
                <p className="text-lg font-bold text-slate-800">₹4,800</p>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="w-full md:w-auto flex flex-col items-center">
             <div className="w-48 h-48 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      startAngle={90}
                      endAngle={450}
                      cornerRadius={10}
                      stroke="none"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-3xl font-bold text-emerald-600">25%</span>
                  <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wide">Ownership</span>
                </div>
             </div>
          </div>
        </div>
        
        <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-between items-center cursor-pointer hover:bg-slate-100 transition">
          <span className="text-sm font-bold text-slate-700">View Share Certificate</span>
          <ChevronRight size={18} className="text-slate-400" />
        </div>
      </div>

      {/* Dividend Projection */}
      <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-indigo-200">
        <div className="flex justify-between items-start">
           <div>
             <div className="flex items-center space-x-2 mb-2">
                <Award className="text-indigo-200" size={20} />
                <h3 className="font-bold text-indigo-100 text-sm uppercase tracking-wide">{t('dividend')}</h3>
             </div>
             <p className="text-4xl font-bold">₹1,250</p>
           </div>
           <div className="text-right">
             <p className="text-indigo-200 text-xs font-medium uppercase mb-1">Payout Date</p>
             <p className="font-semibold">31 Mar 2024</p>
           </div>
        </div>
        <div className="mt-6 bg-white/10 rounded-xl p-3 backdrop-blur-sm flex items-start space-x-3">
          <div className="bg-white/20 p-1.5 rounded-full shrink-0">
             <TrendingUp size={14} className="text-white" />
          </div>
          <p className="text-xs text-indigo-100 leading-relaxed">
            Projected dividends are <span className="font-bold text-white">15% higher</span> than last year due to better collective bargaining on fertilizer procurement.
          </p>
        </div>
      </div>

      {/* Impact Stats Grid */}
      <div>
         <h3 className="font-bold text-slate-800 text-lg mb-4 ml-1">{t('collectivePower')}</h3>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between h-32">
               <div className="flex justify-between items-start">
                 <div className="bg-emerald-100 p-2.5 rounded-2xl text-emerald-600">
                    <FileText size={20} />
                 </div>
                 <span className="text-2xl font-bold text-slate-800">-15%</span>
               </div>
               <span className="text-sm font-medium text-slate-500">Input Cost Reduction</span>
            </div>
            
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between h-32">
               <div className="flex justify-between items-start">
                 <div className="bg-blue-100 p-2.5 rounded-2xl text-blue-600">
                    <Briefcase size={20} />
                 </div>
                 <span className="text-2xl font-bold text-slate-800">+8%</span>
               </div>
               <span className="text-sm font-medium text-slate-500">Market Access Gain</span>
            </div>
         </div>
      </div>

    </div>
  );
};

export default Ownership;
