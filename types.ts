export type Language = 'en' | 'hi' | 'mr'; // English, Hindi, Marathi

export type View = 'dashboard' | 'market' | 'ownership' | 'advisor' | 'community';

export interface Translation {
  [key: string]: {
    en: string;
    hi: string;
    mr: string;
  };
}

export interface MarketPrice {
  crop: string;
  price: number;
  trend: 'up' | 'down' | 'stable';
  location: string;
}

export interface Transaction {
  id: string;
  date: string;
  type: 'buy' | 'sell';
  item: string;
  amount: number;
  status: 'completed' | 'pending';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
