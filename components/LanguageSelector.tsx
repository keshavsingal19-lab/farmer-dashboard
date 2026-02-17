import React from 'react';
import { Language } from '../types';
import { Globe } from 'lucide-react';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const LanguageSelector: React.FC<Props> = ({ currentLang, onLanguageChange }) => {
  return (
    <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full p-1 pr-3">
      <div className="bg-white text-emerald-700 p-1.5 rounded-full">
        <Globe size={16} />
      </div>
      <select 
        value={currentLang}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer appearance-none"
      >
        <option value="en" className="text-gray-900">English</option>
        <option value="hi" className="text-gray-900">हिंदी</option>
        <option value="mr" className="text-gray-900">मराठी</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
