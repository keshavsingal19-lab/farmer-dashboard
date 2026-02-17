import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

// Initialize Gemini AI Client
const apiKey = process.env.API_KEY || ''; // Ensure this is available in your environment
const ai = new GoogleGenAI({ apiKey });

export const generateAIResponse = async (
  prompt: string, 
  history: { role: string; parts: { text: string }[] }[] = []
): Promise<string> => {
  try {
    const modelId = 'gemini-3-flash-preview'; 
    
    // Map history to the format expected by the SDK if necessary, 
    // but here we will use a fresh generateContent call for simplicity in this demo context
    // or use a chat session if state is maintained.
    
    // For a single turn Q&A with system instruction:
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 0 } // Fast response for chat
      }
    });

    return response.text || "I'm sorry, I couldn't understand that. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Network error. Please check your connection.";
  }
};
