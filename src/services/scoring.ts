/**
 * Scoring Service - Calculate explicit scores for ad creatives
 * Provides additional scoring beyond AI-generated scores
 */

export interface ScoreBreakdown {
  visual_appeal: number;
  clarity: number;
  engagement_potential: number;
  overall: number;
}

export interface ScoringFactors {
  hasText: boolean;
  textCount: number;
  hasLogos: boolean;
  logoCount: number;
  objectCount: number;
  colorCount: number;
  hasCTA: boolean;
  sentiment: string;
  tone: string;
  aestheticsScore: number;
  readabilityScore: number;
  catchinessLevel: number;
}

/**
 * Calculate visual appeal score (0-10)
 * Based on: color harmony, composition, aesthetics
 */
export function calculateVisualAppeal(factors: ScoringFactors): number {
  let score = 0;

  // Base score from AI aesthetics (40% weight)
  score += (factors.aestheticsScore / 100) * 4;

  // Color palette richness (20% weight)
  const colorScore = Math.min(factors.colorCount / 5, 1) * 2;
  score += colorScore;

  // Object/element balance (20% weight)
  const elementBalance = Math.min(factors.objectCount / 3, 1) * 2;
  score += elementBalance;

  // Logo presence (10% weight)
  if (factors.hasLogos) score += 1;

  // Catchiness contribution (10% weight)
  score += (factors.catchinessLevel / 100) * 1;

  return Math.min(Math.round(score * 10) / 10, 10);
}

/**
 * Calculate clarity score (0-10)
 * Based on: text readability, message clarity, visual hierarchy
 */
export function calculateClarity(factors: ScoringFactors): number {
  let score = 0;

  // Base score from AI readability (50% weight)
  score += (factors.readabilityScore / 100) * 5;

  // Text presence and amount (30% weight)
  if (factors.hasText) {
    // Optimal text count is 2-5 elements
    const textOptimality = factors.textCount >= 2 && factors.textCount <= 5 ? 1 : 
                          factors.textCount === 1 ? 0.7 :
                          factors.textCount > 5 ? Math.max(0.4, 1 - (factors.textCount - 5) * 0.1) : 0;
    score += textOptimality * 3;
  }

  // Logo clarity (10% weight)
  if (factors.hasLogos && factors.logoCount <= 2) {
    score += 1;
  }

  // Sentiment clarity (10% weight)
  if (factors.sentiment !== "neutral") {
    score += 1;
  }

  return Math.min(Math.round(score * 10) / 10, 10);
}

/**
 * Calculate engagement potential score (0-10)
 * Based on: CTA presence, emotional appeal, catchiness
 */
export function calculateEngagementPotential(factors: ScoringFactors): number {
  let score = 0;

  // Base score from catchiness (40% weight)
  score += (factors.catchinessLevel / 100) * 4;

  // CTA presence (30% weight)
  if (factors.hasCTA) {
    score += 3;
  }

  // Emotional appeal from sentiment (20% weight)
  const sentimentScore = 
    factors.sentiment === "very_positive" ? 2 :
    factors.sentiment === "positive" ? 1.5 :
    factors.sentiment === "negative" ? 1 :
    factors.sentiment === "very_negative" ? 0.5 : 0.5;
  score += sentimentScore;

  // Tone engagement (10% weight)
  const engagingTones = ["urgent", "exciting", "energetic", "playful", "bold"];
  const isEngagingTone = engagingTones.some(t => 
    factors.tone.toLowerCase().includes(t)
  );
  if (isEngagingTone) score += 1;

  return Math.min(Math.round(score * 10) / 10, 10);
}

/**
 * Calculate all scores for an ad analysis result
 */
export function calculateAllScores(analysisResult: any): ScoreBreakdown {
  const factors: ScoringFactors = {
    hasText: (analysisResult.detected_text || []).length > 0,
    textCount: (analysisResult.detected_text || []).length,
    hasLogos: (analysisResult.detected_logos || []).length > 0,
    logoCount: (analysisResult.detected_logos || []).length,
    objectCount: (analysisResult.objects || []).length,
    colorCount: (analysisResult.audio_visual_signals?.color_palette || []).length,
    hasCTA: detectCTA(analysisResult.detected_text || []),
    sentiment: analysisResult.sentiment || "neutral",
    tone: analysisResult.tone || "",
    aestheticsScore: analysisResult.aesthetics_score || 50,
    readabilityScore: analysisResult.readability_score || 50,
    catchinessLevel: analysisResult.catchiness_level || 50
  };

  const visual_appeal = calculateVisualAppeal(factors);
  const clarity = calculateClarity(factors);
  const engagement_potential = calculateEngagementPotential(factors);
  const overall = Math.round(((visual_appeal + clarity + engagement_potential) / 3) * 10) / 10;

  return {
    visual_appeal,
    clarity,
    engagement_potential,
    overall
  };
}

/**
 * Detect if text contains a Call-To-Action
 */
function detectCTA(textArray: string[]): boolean {
  const ctaKeywords = [
    "buy", "shop", "get", "order", "purchase", "subscribe", "sign up",
    "join", "download", "try", "start", "learn more", "discover",
    "claim", "grab", "save", "book", "register", "apply", "contact"
  ];

  const allText = textArray.join(" ").toLowerCase();
  return ctaKeywords.some(keyword => allText.includes(keyword));
}

/**
 * Get score interpretation
 */
export function interpretScore(score: number): string {
  if (score >= 9) return "Excellent";
  if (score >= 8) return "Very Good";
  if (score >= 7) return "Good";
  if (score >= 6) return "Above Average";
  if (score >= 5) return "Average";
  if (score >= 4) return "Below Average";
  if (score >= 3) return "Poor";
  return "Very Poor";
}

/**
 * Generate score summary
 */
export function generateScoreSummary(scores: ScoreBreakdown): string {
  return `Overall: ${scores.overall}/10 (${interpretScore(scores.overall)}) | ` +
         `Visual Appeal: ${scores.visual_appeal}/10 | ` +
         `Clarity: ${scores.clarity}/10 | ` +
         `Engagement: ${scores.engagement_potential}/10`;
}
