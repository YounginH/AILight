
import { GoogleGenAI } from "@google/genai";

// FIX: Refactored to align with API guidelines by assuming API_KEY is always present
// and removing conditional initialization and mock data fallback.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateLightstickDesigns = async (prompt: string): Promise<string[]> => {
  try {
    const fullPrompt = `A creative K-pop lightstick design inspired by "${prompt}". The lightstick should be glowing brightly with vibrant neon colors. Photorealistic 3D render, studio lighting, on a clean dark background. Show the full lightstick including the handle. cinematic, detailed.`;

    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: fullPrompt,
      config: {
        numberOfImages: 4,
        outputMimeType: 'image/jpeg',
        aspectRatio: '9:16',
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      return response.generatedImages.map(img => `data:image/jpeg;base64,${img.image.imageBytes}`);
    }
    return [];
  } catch (error) {
    console.error("Error generating lightstick designs:", error);
    // You might want to return an empty array or throw the error to be handled by the UI
    return [];
  }
};
