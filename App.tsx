import React, { useState } from 'react';
import { Language, View } from './types';
import { APP_NAME } from './constants';
import Dashboard from './components/Dashboard';
import Marketplace from './components/Marketplace';
import Ownership from './components/Ownership';
import AIAdvisor from './components/AIAdvisor';
import Navigation from './components/Navigation';
import LanguageSelector from './components/LanguageSelector';
import { Bell, Sprout } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [view, setView] = useState<View>('dashboard');

  const renderView = () => {
    switch(view) {
      case 'dashboard': return <Dashboard lang={lang} onNavigate={setView} />;
      case 'market': return <Marketplace lang={lang} />;
      case 'ownership': return <Ownership lang={lang} />;
      case 'advisor': return <AIAdvisor lang={lang} />;
      case 'community': return <div className="p-20 text-center text-slate-400 font-medium">Community Features Coming Soon</div>;
      default: return <Dashboard lang={lang} onNavigate={setView} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Sidebar for Desktop */}
      <Navigation currentView={view} onNavigate={setView} lang={lang} />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-3">
            <div className="flex justify-between items-center">
              
              {/* Logo / Title Area */}
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-600 p-2 rounded-xl shadow-lg shadow-emerald-600/20 md:hidden">
                  <Sprout size={20} className="text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-lg md:text-xl text-slate-800 tracking-tight leading-none">{APP_NAME}</h1>
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider hidden md:block">FPO Connect Platform</p>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="bg-emerald-600 rounded-full shadow-md shadow-emerald-200">
                  <LanguageSelector currentLang={lang} onLanguageChange={setLang} />
                </div>
                <button className="relative p-2 text-slate-400 hover:text-emerald-600 hover:bg-slate-50 rounded-full transition">
                  <Bell size={22} />
                  <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="hidden md:block w-px h-8 bg-slate-200"></div>
                <div className="hidden md:flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-800 leading-none">Ram Patel</p>
                    <p className="text-xs text-slate-500">Farmer Member</p>
                  </div>
                  <div className="w-10 h-10 bg-slate-200 rounded-full border-2 border-white shadow-sm overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-6 overflow-y-auto no-scrollbar">
          {renderView()}
        </main>
      </div>

    </div>
  );
};

export default App;
