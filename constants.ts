import { Translation, MarketPrice, Transaction } from './types';
import { 
  LayoutDashboard, 
  Store, 
  Sprout, 
  MessageSquareText, 
  Users 
} from 'lucide-react';

export const APP_NAME = "KisanSahayak";

export const TRANSLATIONS: Translation = {
  dashboard: { en: "Dashboard", hi: "डैशबोर्ड", mr: "डॅशबोर्ड" },
  market: { en: "Marketplace", hi: "बाज़ार", mr: "बाजार" },
  ownership: { en: "My Ownership", hi: "मेरी हिस्सेदारी", mr: "माझी मालकी" },
  advisor: { en: "AI Advisor", hi: "कृषि सलाहकार", mr: "कृषी सल्लागार" },
  community: { en: "Community", hi: "समुदाय", mr: "समुदाय" },
  welcome: { en: "Welcome back, Ram!", hi: "स्वागत है, राम!", mr: "स्वागत आहे, राम!" },
  todaysPrices: { en: "Today's Mandi Prices", hi: "आज के मंडी भाव", mr: "आजचे मंडी भाव" },
  weather: { en: "Weather", hi: "मौसम", mr: "हवामान" },
  buyInputs: { en: "Buy Inputs", hi: "खाद/बीज खरीदें", mr: "निविष्ठा खरेदी" },
  sellProduce: { en: "Sell Produce", hi: "फसल बेचें", mr: "पीक विक्री" },
  equityValue: { en: "Your Equity Value", hi: "आपकी हिस्सेदारी का मूल्य", mr: "तुमच्या इक्विटीचे मूल्य" },
  savingTrend: { en: "Savings via FPO", hi: "FPO द्वारा बचत", mr: "FPO द्वारे बचत" },
  recentActivity: { en: "Recent Activity", hi: "हाल की गतिविधि", mr: "अलीकडील क्रियाकलाप" },
  askExpert: { en: "Ask the AI Expert", hi: "AI विशेषज्ञ से पूछें", mr: "AI तज्ञाला विचारा" },
  typeMessage: { en: "Type your question...", hi: "अपना प्रश्न लिखें...", mr: "तुमचा प्रश्न टाइप करा..." },
  loading: { en: "Thinking...", hi: "सोच रहा हूँ...", mr: "विचार करत आहे..." },
  sharesOwned: { en: "Shares Owned", hi: "शेयरों की संख्या", mr: "मालकीचे शेअर्स" },
  dividend: { en: "Projected Dividend", hi: "अनुमानित लाभांश", mr: "प्रक्षेपित लाभांश" },
  collectivePower: { en: "Collective Power", hi: "सामूहिक शक्ति", mr: "सामूहिक शक्ती" },
};

export const MOCK_PRICES: MarketPrice[] = [
  { crop: "Wheat (Sharbati)", price: 2150, trend: 'up', location: "Local Mandi" },
  { crop: "Soybean", price: 4800, trend: 'down', location: "District Hub" },
  { crop: "Chana (Gram)", price: 5200, trend: 'stable', location: "Local Mandi" },
  { crop: "Onion", price: 1200, trend: 'up', location: "City Market" },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', date: '2023-10-25', type: 'buy', item: 'Urea Fertilizer (5 Bags)', amount: 1330, status: 'completed' },
  { id: '2', date: '2023-10-15', type: 'sell', item: 'Soybean (10 Quintal)', amount: 48000, status: 'completed' },
  { id: '3', date: '2023-09-30', type: 'buy', item: 'Wheat Seeds (High Yield)', amount: 2500, status: 'completed' },
];

export const NAV_ITEMS = [
  { id: 'dashboard', icon: LayoutDashboard },
  { id: 'market', icon: Store },
  { id: 'ownership', icon: Sprout },
  { id: 'advisor', icon: MessageSquareText },
  { id: 'community', icon: Users },
] as const;

export const AI_SYSTEM_INSTRUCTION = `You are a helpful and knowledgeable agricultural advisor for Indian farmers. 
You are part of an FPO (Farmer Producer Organization) app called KisanSahayak.
Your goal is to provide practical, easy-to-understand advice about farming, crop prices, weather management, and pest control.
Always be encouraging and emphasize the benefits of collective action through the FPO.
Keep answers concise and simple. Avoid overly technical jargon unless necessary.
If the user asks about prices, remind them that Mandi prices fluctuate and they should check the 'Market' tab for real-time data.
Current context: It is currently late October in Central India. Major crops are Soybean (harvesting) and Wheat (sowing).`;
