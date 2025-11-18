
import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

// Helper to fetch image URL and convert it to a base64 string
async function urlToBase64(url: string): Promise<{mimeType: string, data: string}> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const blob = await response.blob();
    const mimeType = blob.type || 'image/png'; // Fallback MIME type
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result as string;
            const data = result.split(',')[1];
            resolve({ mimeType, data });
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}


// The base lightstick image URL that the AI will decorate
const BASE_LIGHTSTICK_IMAGE_URL = 'https://i.postimg.cc/d0ZpCV0X/image-105.png';

export const generateLightstickDesigns = async (prompt: string): Promise<string[]> => {
  try {
    const { mimeType, data: base64Image } = await urlToBase64(BASE_LIGHTSTICK_IMAGE_URL);
    
    const imagePart = {
      inlineData: {
        mimeType: mimeType,
        data: base64Image,
      },
    };
    
    const textPart = {
      text: `Decorate this lightstick based on the following concept: "${prompt}". Keep the original U-shape of the lightstick but change its colors, textures, and add creative elements and decorations on and around it. Make it glow brightly. The background should be clean and dark. Produce a photorealistic, cinematic, detailed 3D render.`,
    };

    // Call the API 4 times in parallel to generate 4 different design variations
    const promises = Array(4).fill(0).map(() => 
      ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [imagePart, textPart] },
        config: {
          responseModalities: [Modality.IMAGE],
        },
      })
    );
    
    const responses = await Promise.all(promises);

    const generatedImages: string[] = [];
    for (const response of responses) {
      // Extract the image from the response
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.mimeType.startsWith('image/')) {
          generatedImages.push(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
        }
      }
    }
    
    if (generatedImages.length > 0) {
      return generatedImages;
    }
    
    return [];

  } catch (error) {
    console.error("Error generating lightstick designs:", error);
    return [];
  }
};