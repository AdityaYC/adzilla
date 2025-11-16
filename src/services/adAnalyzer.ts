/**
 * Ad Analyzer Service - Main orchestrator for ad analysis
 * Combines AI analysis, scoring, and recommendations
 */

import { analyzeAdWithAI, AIAnalysisOptions } from "./aiAnalysis.js";
import { calculateAllScores, generateScoreSummary } from "./scoring.js";
import { generateRecommendations, generateQuickWins } from "./recommendations.js";

export interface EnhancedAnalysisResult {
  // Original AI analysis
  asset_type: string;
  summary: string;
  catchiness_level: number;
  aesthetics_score: number;
  readability_score: number;
  brand_fit_score: number;
  memorability_score: number;
  sentiment: string;
  tone: string;
  product_category: string;
  detected_text: string[];
  detected_logos: string[];
  objects: string[];
  audio_visual_signals: {
    color_palette: string[];
    composition_notes: string;
    style_keywords: string[];
  };
  target_audience: {
    age_ranges: string[];
    interests: string[];
    regions: string[];
  };
  best_platforms: string[];
  improvement_suggestions: string[];
  reasons_for_scores: string[];
  dimension_profile: {
    creative_attention: number;
    aesthetics: number;
    readability: number;
    brandFit: number;
    memorability: number;
  };

  // Enhanced scores
  explicit_scores: {
    visual_appeal: number;
    clarity: number;
    engagement_potential: number;
    overall: number;
    summary: string;
  };

  // Enhanced recommendations
  detailed_recommendations: Array<{
    category: string;
    priority: string;
    suggestion: string;
    rationale: string;
  }>;

  quick_wins: string[];

  // Metadata
  _meta?: {
    model: string;
    provider: string;
    timestamp: string;
    processing_time_ms?: number;
  };
}

/**
 * Perform comprehensive ad analysis
 */
export async function analyzeAd(
  imageUrl: string,
  assetType: "image" | "video" | "unknown" = "image",
  options: AIAnalysisOptions = {}
): Promise<EnhancedAnalysisResult> {
  const startTime = Date.now();

  try {
    // Step 1: Get AI analysis
    const aiResult = await analyzeAdWithAI(imageUrl, assetType, options);

    // Step 2: Calculate explicit scores
    const explicitScores = calculateAllScores(aiResult);
    const scoreSummary = generateScoreSummary(explicitScores);

    // Step 3: Detect CTA
    const hasCTA = detectCTA(aiResult.detected_text || []);

    // Step 4: Generate enhanced recommendations
    const recommendationContext = {
      scores: {
        visual_appeal: explicitScores.visual_appeal,
        clarity: explicitScores.clarity,
        engagement_potential: explicitScores.engagement_potential,
        aesthetics_score: aiResult.aesthetics_score || 50,
        readability_score: aiResult.readability_score || 50,
        catchiness_level: aiResult.catchiness_level || 50
      },
      detected_text: aiResult.detected_text || [],
      detected_logos: aiResult.detected_logos || [],
      objects: aiResult.objects || [],
      color_palette: aiResult.audio_visual_signals?.color_palette || [],
      sentiment: aiResult.sentiment || "neutral",
      tone: aiResult.tone || "",
      hasCTA
    };

    const detailedRecommendations = generateRecommendations(recommendationContext);
    const quickWins = generateQuickWins(recommendationContext);

    // Step 5: Combine everything
    const processingTime = Date.now() - startTime;

    const enhancedResult: EnhancedAnalysisResult = {
      ...aiResult,
      explicit_scores: {
        ...explicitScores,
        summary: scoreSummary
      },
      detailed_recommendations: detailedRecommendations,
      quick_wins: quickWins,
      _meta: {
        ...aiResult._meta,
        processing_time_ms: processingTime
      }
    };

    return enhancedResult;
  } catch (error: any) {
    console.error("Ad analysis failed:", error);
    throw new Error(`Failed to analyze ad: ${error.message}`);
  }
}

/**
 * Batch analyze multiple ads
 */
export async function batchAnalyzeAds(
  imageUrls: string[],
  options: AIAnalysisOptions = {}
): Promise<Array<{ url: string; result?: EnhancedAnalysisResult; error?: string }>> {
  const results = await Promise.allSettled(
    imageUrls.map(async (url) => {
      try {
        const result = await analyzeAd(url, "image", options);
        return { url, result };
      } catch (error: any) {
        return { url, error: error.message };
      }
    })
  );

  return results.map(r => 
    r.status === "fulfilled" ? r.value : { url: "", error: "Failed to analyze" }
  );
}

/**
 * Detect if text contains a Call-To-Action
 */
function detectCTA(textArray: string[]): boolean {
  const ctaKeywords = [
    "buy", "shop", "get", "order", "purchase", "subscribe", "sign up",
    "join", "download", "try", "start", "learn more", "discover",
    "claim", "grab", "save", "book", "register", "apply", "contact",
    "now", "today", "limited", "free", "off", "%"
  ];

  const allText = textArray.join(" ").toLowerCase();
  return ctaKeywords.some(keyword => allText.includes(keyword));
}

/**
 * Validate analysis result
 */
export function validateAnalysisResult(result: any): boolean {
  const requiredFields = [
    "asset_type",
    "summary",
    "catchiness_level",
    "aesthetics_score",
    "readability_score",
    "sentiment",
    "tone"
  ];

  return requiredFields.every(field => result[field] !== undefined);
}
