import React, { useState, useRef, useEffect } from 'react';
import { Language, ChatMessage } from '../types';
import { TRANSLATIONS } from '../constants';
import { Send, Bot, User, Mic, Sparkles } from 'lucide-react';
import { generateAIResponse } from '../services/geminiService';

interface Props {
  lang: Language;
}

const AIAdvisor: React.FC<Props> = ({ lang }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: lang === 'hi' 
        ? "नमस्ते! मैं आपका FPO कृषि सहायक हूँ। मैं आपकी किस प्रकार सहायता कर सकता हूँ?" 
        : lang === 'mr'
        ? "नमस्कार! मी तुमचा FPO कृषी सहाय्यक आहे. मी तुम्हाला कशी मदत करू शकतो?"
        : "Hello! I am your FPO Agri-Assistant. How can I help you today?",
      timestamp: Date.now()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Append language instruction
      let prompt = input;
      if (lang === 'hi') prompt += " (Reply in Hindi)";
      if (lang === 'mr') prompt += " (Reply in Marathi)";

      const responseText = await generateAIResponse(prompt);
      
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] md:h-[calc(100vh-100px)] bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden relative">
       {/* Header */}
       <div className="bg-white border-b border-slate-100 p-4 flex items-center justify-between z-10 shadow-sm">
         <div className="flex items-center space-x-3">
           <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
              <Sparkles size={20} fill="currentColor" className="text-emerald-500" />
           </div>
           <div>
              <h3 className="font-bold text-slate-800 text-sm leading-tight">{t('advisor')}</h3>
              <p className="text-xs text-slate-500">Always online</p>
           </div>
         </div>
       </div>

       {/* Messages Area */}
       <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50/50">
          <div className="flex justify-center">
             <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-1 rounded-md uppercase tracking-wide font-bold">Today</span>
          </div>

          {messages.map((msg) => (
            <div key={msg.id} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end gap-2`}>
                
                {/* Avatar */}
                <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center ${
                  msg.role === 'user' ? 'bg-emerald-200' : 'bg-emerald-600'
                }`}>
                   {msg.role === 'user' ? <User size={12} className="text-emerald-800" /> : <Bot size={12} className="text-white" />}
                </div>

                {/* Bubble */}
                <div className={`px-4 py-3 text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-2xl rounded-br-none' 
                    : 'bg-white text-slate-700 border border-slate-100 rounded-2xl rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          
          {loading && (
             <div className="flex justify-start w-full">
               <div className="flex max-w-[85%] items-end gap-2">
                 <div className="w-6 h-6 rounded-full bg-emerald-600 flex-shrink-0 flex items-center justify-center">
                    <Bot size={12} className="text-white" />
                 </div>
                 <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex space-x-1">
                   <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                   <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                   <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                 </div>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
       </div>

       {/* Input Area */}
       <div className="p-4 bg-white border-t border-slate-100">
         <div className="bg-slate-100 rounded-3xl p-1.5 flex items-center space-x-2 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
           <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-white rounded-full transition shadow-sm">
              <Mic size={20} />
           </button>
           <input 
             type="text" 
             value={input}
             onChange={(e) => setInput(e.target.value)}
             onKeyDown={(e) => e.key === 'Enter' && handleSend()}
             placeholder={t('typeMessage')}
             className="flex-1 bg-transparent border-none text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none px-2"
           />
           <button 
             onClick={handleSend}
             disabled={loading || !input.trim()}
             className="p-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm transform active:scale-95"
           >
             <Send size={18} />
           </button>
         </div>
       </div>
    </div>
  );
};

export default AIAdvisor;
