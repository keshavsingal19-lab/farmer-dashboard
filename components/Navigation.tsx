import React from 'react';
import { View, Language } from '../types';
import { TRANSLATIONS, NAV_ITEMS } from '../constants';

interface Props {
  currentView: View;
  onNavigate: (view: View) => void;
  lang: Language;
}

const Navigation: React.FC<Props> = ({ currentView, onNavigate, lang }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 pb-safe z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center h-16 px-2">
          {NAV_ITEMS.map((item) => {
             const Icon = item.icon;
             const isActive = currentView === item.id;
             
             return (
               <button
                 key={item.id}
                 onClick={() => onNavigate(item.id as View)}
                 className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-200 ${
                   isActive ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'
                 }`}
               >
                 <div className={`p-1 rounded-full transition-all ${isActive ? 'bg-emerald-50 translate-y-[-2px]' : ''}`}>
                   <Icon size={isActive ? 24 : 22} strokeWidth={isActive ? 2.5 : 2} />
                 </div>
                 <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-emerald-700 font-semibold' : 'text-slate-500'}`}>
                   {t(item.id)}
                 </span>
               </button>
             );
          })}
        </div>
      </nav>

      {/* Desktop Sidebar Navigation */}
      <nav className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-white border-r border-slate-200">
        <div className="p-6">
           {/* Logo placeholder if needed, though App header covers it mostly. 
               We can keep it clean or move App header logo here in a real app. */}
        </div>
        <div className="flex-1 px-4 space-y-2">
          {NAV_ITEMS.map((item) => {
             const Icon = item.icon;
             const isActive = currentView === item.id;
             
             return (
               <button
                 key={item.id}
                 onClick={() => onNavigate(item.id as View)}
                 className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-all duration-200 group ${
                   isActive 
                     ? 'bg-emerald-50 text-emerald-700 shadow-sm' 
                     : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                 }`}
               >
                 <Icon 
                   size={22} 
                   className={`transition-colors ${isActive ? 'text-emerald-600' : 'text-slate-400 group-hover:text-slate-600'}`} 
                   strokeWidth={isActive ? 2.5 : 2}
                 />
                 <span className={`text-sm font-medium ${isActive ? 'font-semibold' : ''}`}>
                   {t(item.id)}
                 </span>
                 {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500" />}
               </button>
             );
          })}
        </div>
        <div className="p-4 border-t border-slate-100">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-4 text-white">
            <p className="text-xs font-medium opacity-90">Need Help?</p>
            <p className="text-sm font-bold mt-1">Call FPO Support</p>
            <button className="mt-3 w-full bg-white/20 hover:bg-white/30 text-xs font-semibold py-2 rounded-lg transition">
              1800-123-4567
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
