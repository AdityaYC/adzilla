import axios from "axios";
import { AD_METRICS_SCHEMA } from "./schema.js";
import { generateMockAnalysis } from "./mockAnalysis.js";

// Use Gemini (Google AI) - FREE!
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// Use FULL model path with models/ prefix
const GEMINI_MODEL = process.env.GEMINI_MODEL || "models/gemini-1.5-flash";
const USE_MOCK_DATA = process.env.USE_MOCK_DATA === "true" || !GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.warn("⚠️  No GEMINI_API_KEY found - using MOCK DATA for demo");
  console.warn("Get a free API key at: https://aistudio.google.com/app/apikey");
}

export async function analyzeWithOpenAI(urls: string[], kind: "image" | "video" | "unknown") {
  const imageUrl = urls[0]; // Gemini supports one image at a time
  
  // Use mock data if no API key or explicitly enabled
  if (USE_MOCK_DATA) {
    console.log("📊 Using mock data for analysis (demo mode)");
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay
    return generateMockAnalysis(imageUrl, kind);
  }
  
  // Gemini API endpoint (model already includes "models/" prefix)
  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

  const prompt = `You are an expert ad analyst. Analyze this advertisement image comprehensively, considering current marketing trends, visual design principles, and audience psychology.

Provide a detailed analysis in JSON format with these exact fields:
{
  "asset_type": "image",
  "summary": "Brief description of the ad",
  "catchiness_level": 85,
  "aesthetics_score": 90,
  "readability_score": 88,
  "brand_fit_score": 92,
  "memorability_score": 87,
  "sentiment": "positive",
  "tone": "professional",
  "product_category": "technology",
  "detected_text": ["text found in image"],
  "detected_logos": ["logos found"],
  "objects": ["objects in image"],
  "audio_visual_signals": {
    "color_palette": ["#FF5733", "#33FF57"],
    "composition_notes": "composition description",
    "style_keywords": ["modern", "clean"]
  },
  "target_audience": {
    "age_ranges": ["25-34", "35-44"],
    "interests": ["technology"],
    "regions": ["North America"]
  },
  "best_platforms": ["Instagram", "Facebook"],
  "improvement_suggestions": ["specific suggestions"],
  "reasons_for_scores": ["rationale for scores"],
  "dimension_profile": {
    "creative_attention": 88,
    "aesthetics": 90,
    "readability": 88,
    "brandFit": 92,
    "memorability": 87
  }
}

Analyze the image and return ONLY the JSON, no other text.`;

  // Fetch image and convert to base64
  let imageData: string;
  try {
    const imgResponse = await axios.get(imageUrl, { responseType: 'arraybuffer', timeout: 30000 });
    imageData = Buffer.from(imgResponse.data).toString('base64');
  } catch (err: any) {
    throw new Error(`Failed to fetch image: ${err.message}`);
  }

  const payload = {
    contents: [{
      parts: [
        { text: prompt },
        {
          inline_data: {
            mime_type: "image/jpeg",
            data: imageData
          }
        }
      ]
    }],
    generationConfig: {
      temperature: 0.2,
      maxOutputTokens: 2048
    }
  };

  try {
    const { data } = await axios.post(GEMINI_URL, payload, {
      headers: { "Content-Type": "application/json" },
      timeout: 90_000
    });

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error("Gemini returned no content");

    // Extract JSON from response (Gemini might wrap it in markdown)
    let jsonText = text.trim();
    if (jsonText.startsWith('```json')) {
      jsonText = jsonText.replace(/```json\n?/g, '').replace(/```\n?$/g, '').trim();
    } else if (jsonText.startsWith('```')) {
      jsonText = jsonText.replace(/```\n?/g, '').trim();
    }

    let parsed: any;
    try {
      parsed = JSON.parse(jsonText);
    } catch (parseErr) {
      console.error("Failed to parse Gemini response:", jsonText);
      throw new Error("Gemini returned invalid JSON");
    }

    if (!parsed.asset_type || parsed.asset_type === "unknown") parsed.asset_type = kind;
    return parsed;
  } catch (err: any) {
    const status = err?.response?.status;
    const body = err?.response?.data;
    const msg = body?.error?.message || err?.message || "Unknown error";
    console.error("Gemini API call failed", { status, body, msg });
    throw new Error(`Gemini API error: ${msg}`);
  }
}
