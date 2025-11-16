import axios from "axios";
import { AD_METRICS_SCHEMA } from "../schema.js";

const LAVA_FORWARD_URL = process.env.LAVA_FORWARD_URL || "https://api.lavapayments.com/v1/forward";
const OPENAI_COMPAT_URL = process.env.OPENAI_COMPAT_URL || "https://api.openai.com/v1/chat/completions";
const LAVA_API_KEY = process.env.LAVA_API_KEY || process.env.LAVA_BEARER;
const REKA_MODEL = process.env.REKA_MODEL || "reka-flash";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";
const USE_REKA = process.env.USE_REKA === "true";

if (!LAVA_API_KEY) {
  console.error("Missing LAVA_API_KEY or LAVA_BEARER in .env");
  process.exit(1);
}

export interface AIAnalysisOptions {
  useReka?: boolean;
  temperature?: number;
  timeout?: number;
}

/**
 * Analyze ad creative using Vision Language Model (VLM)
 * Supports both OpenAI (gpt-4o-mini) and Reka (reka-flash) models via Lava
 */
export async function analyzeAdWithAI(
  imageUrl: string,
  assetType: "image" | "video" | "unknown",
  options: AIAnalysisOptions = {}
): Promise<any> {
  const useReka = options.useReka ?? USE_REKA;
  const model = useReka ? REKA_MODEL : OPENAI_MODEL;
  const temperature = options.temperature ?? 0.2;
  const timeout = options.timeout ?? 90_000;

  // Construct the Lava forward URL
  const targetUrl = useReka 
    ? "https://api.reka.ai/v1/chat/completions"
    : OPENAI_COMPAT_URL;
  
  const lavaUrl = `${LAVA_FORWARD_URL}?u=${encodeURIComponent(targetUrl)}`;

  // Build the vision request
  const content: any[] = [
    {
      type: "text",
      text: `Analyze this advertisement image comprehensively and provide detailed metrics.

IMPORTANT INSTRUCTIONS:
1. Extract ALL visible text using OCR
2. Identify ALL logos, brands, and objects present
3. Analyze the color palette (provide hex codes)
4. Evaluate composition, layout, and visual hierarchy
5. Assess tone, sentiment, and emotional appeal
6. Provide specific, actionable recommendations
7. Score all dimensions accurately (0-100 scale)

Return ONLY valid JSON matching the schema.`
    }
  ];

  // Add image
  content.push({
    type: "image_url",
    image_url: { url: imageUrl }
  });

  const payload = {
    model,
    temperature,
    response_format: {
      type: "json_schema",
      json_schema: AD_METRICS_SCHEMA
    },
    messages: [
      {
        role: "system",
        content: [
          {
            type: "text",
            text: "You are an expert ad creative analyst with deep knowledge of marketing, design, and consumer psychology. Analyze advertisements with precision and provide actionable insights. Return ONLY valid JSON."
          }
        ]
      },
      {
        role: "user",
        content
      }
    ]
  };

  try {
    const { data } = await axios.post(lavaUrl, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LAVA_API_KEY}`
      },
      timeout
    });

    const text = data?.choices?.[0]?.message?.content;
    if (!text) {
      throw new Error("AI returned no content");
    }

    let parsed: any;
    try {
      parsed = typeof text === "string" ? JSON.parse(text) : text;
    } catch {
      console.error("Failed to parse AI response:", text);
      throw new Error("AI returned invalid JSON");
    }

    // Ensure asset_type is set
    if (!parsed.asset_type || parsed.asset_type === "unknown") {
      parsed.asset_type = assetType;
    }

    // Add metadata
    parsed._meta = {
      model: model,
      provider: useReka ? "reka" : "openai",
      timestamp: new Date().toISOString()
    };

    return parsed;
  } catch (err: any) {
    const status = err?.response?.status;
    const body = err?.response?.data;
    const msg = body?.error?.message || body?.message || err?.message || "Unknown error";
    
    console.error("AI analysis failed", {
      model,
      status,
      body,
      imageUrl: imageUrl.substring(0, 100)
    });
    
    throw new Error(`AI analysis failed (${model}): ${msg}`);
  }
}

/**
 * Batch analyze multiple ads with retry logic
 */
export async function batchAnalyzeAds(
  imageUrls: string[],
  options: AIAnalysisOptions = {}
): Promise<Array<{ url: string; result?: any; error?: string }>> {
  const results = await Promise.allSettled(
    imageUrls.map(url => 
      analyzeAdWithAI(url, "image", options)
        .then(result => ({ url, result }))
        .catch(error => ({ url, error: error.message }))
    )
  );

  return results.map(r => 
    r.status === "fulfilled" ? r.value : { url: "", error: "Failed to analyze" }
  );
}
