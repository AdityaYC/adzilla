/**
 * Recommendations Engine - Generate actionable suggestions for ad improvements
 */

export interface RecommendationContext {
  scores: {
    visual_appeal: number;
    clarity: number;
    engagement_potential: number;
    aesthetics_score: number;
    readability_score: number;
    catchiness_level: number;
  };
  detected_text: string[];
  detected_logos: string[];
  objects: string[];
  color_palette: string[];
  sentiment: string;
  tone: string;
  hasCTA: boolean;
}

export interface Recommendation {
  category: "visual" | "text" | "engagement" | "branding" | "color" | "layout";
  priority: "high" | "medium" | "low";
  suggestion: string;
  rationale: string;
}

/**
 * Generate comprehensive recommendations for ad improvement
 */
export function generateRecommendations(context: RecommendationContext): Recommendation[] {
  const recommendations: Recommendation[] = [];

  // Visual Appeal Recommendations
  if (context.scores.visual_appeal < 7) {
    recommendations.push(...getVisualRecommendations(context));
  }

  // Clarity Recommendations
  if (context.scores.clarity < 7) {
    recommendations.push(...getClarityRecommendations(context));
  }

  // Engagement Recommendations
  if (context.scores.engagement_potential < 7) {
    recommendations.push(...getEngagementRecommendations(context));
  }

  // Color Recommendations
  recommendations.push(...getColorRecommendations(context));

  // Text/CTA Recommendations
  if (!context.hasCTA) {
    recommendations.push({
      category: "engagement",
      priority: "high",
      suggestion: "Add a clear Call-To-Action (CTA)",
      rationale: "No CTA detected. Adding phrases like 'Shop Now', 'Learn More', or 'Get Started' can significantly increase conversion rates."
    });
  }

  // Logo/Branding Recommendations
  if (context.detected_logos.length === 0) {
    recommendations.push({
      category: "branding",
      priority: "medium",
      suggestion: "Include brand logo for recognition",
      rationale: "No logo detected. Adding your brand logo helps build recognition and trust."
    });
  }

  // Sentiment Recommendations
  if (context.sentiment === "negative" || context.sentiment === "very_negative") {
    recommendations.push({
      category: "engagement",
      priority: "high",
      suggestion: "Consider more positive messaging",
      rationale: "Negative sentiment detected. Positive messaging typically performs better in advertising."
    });
  }

  // Sort by priority
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  recommendations.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  // Return top 5-7 recommendations
  return recommendations.slice(0, 7);
}

function getVisualRecommendations(context: RecommendationContext): Recommendation[] {
  const recs: Recommendation[] = [];

  if (context.scores.aesthetics_score < 60) {
    recs.push({
      category: "visual",
      priority: "high",
      suggestion: "Improve overall visual design and composition",
      rationale: "Low aesthetics score. Consider using design principles like rule of thirds, better color harmony, and balanced layout."
    });
  }

  if (context.color_palette.length < 3) {
    recs.push({
      category: "color",
      priority: "medium",
      suggestion: "Expand color palette for visual interest",
      rationale: "Limited color palette detected. Adding 1-2 complementary colors can make the ad more visually appealing."
    });
  }

  if (context.objects.length < 2) {
    recs.push({
      category: "layout",
      priority: "low",
      suggestion: "Add more visual elements or focal points",
      rationale: "Few visual elements detected. Additional elements can create visual interest and guide viewer attention."
    });
  }

  return recs;
}

function getClarityRecommendations(context: RecommendationContext): Recommendation[] {
  const recs: Recommendation[] = [];

  if (context.scores.readability_score < 60) {
    recs.push({
      category: "text",
      priority: "high",
      suggestion: "Improve text readability and contrast",
      rationale: "Low readability score. Increase font size, improve contrast with background, or simplify text layout."
    });
  }

  if (context.detected_text.length === 0) {
    recs.push({
      category: "text",
      priority: "high",
      suggestion: "Add clear messaging or headline",
      rationale: "No text detected. Adding a compelling headline or key message can significantly improve ad effectiveness."
    });
  }

  if (context.detected_text.length > 7) {
    recs.push({
      category: "text",
      priority: "medium",
      suggestion: "Reduce text amount for better clarity",
      rationale: "Too much text detected. Simplify your message to 2-5 key points for better comprehension."
    });
  }

  return recs;
}

function getEngagementRecommendations(context: RecommendationContext): Recommendation[] {
  const recs: Recommendation[] = [];

  if (context.scores.catchiness_level < 60) {
    recs.push({
      category: "engagement",
      priority: "high",
      suggestion: "Make the ad more attention-grabbing",
      rationale: "Low catchiness score. Use bolder colors, larger focal points, or more dynamic composition to capture attention."
    });
  }

  const boringTones = ["neutral", "plain", "simple", "basic"];
  if (boringTones.some(t => context.tone.toLowerCase().includes(t))) {
    recs.push({
      category: "engagement",
      priority: "medium",
      suggestion: "Add more emotional appeal or energy",
      rationale: "Tone is relatively neutral. Consider adding emotional elements, urgency, or excitement to increase engagement."
    });
  }

  return recs;
}

function getColorRecommendations(context: RecommendationContext): Recommendation[] {
  const recs: Recommendation[] = [];

  // Check for color contrast issues
  if (context.color_palette.length >= 2) {
    const hasHighContrast = checkColorContrast(context.color_palette);
    if (!hasHighContrast) {
      recs.push({
        category: "color",
        priority: "medium",
        suggestion: "Increase color contrast for better visibility",
        rationale: "Colors may lack sufficient contrast. Higher contrast improves readability and visual impact."
      });
    }
  }

  // Check for too many colors
  if (context.color_palette.length > 5) {
    recs.push({
      category: "color",
      priority: "low",
      suggestion: "Simplify color palette",
      rationale: "Many colors detected. Limiting to 3-4 main colors creates a more cohesive design."
    });
  }

  return recs;
}

/**
 * Simple color contrast check
 */
function checkColorContrast(colors: string[]): boolean {
  // Simplified check: if we have both light and dark colors
  const lightColors = colors.filter(c => isLightColor(c));
  const darkColors = colors.filter(c => !isLightColor(c));
  return lightColors.length > 0 && darkColors.length > 0;
}

/**
 * Check if color is light (simplified)
 */
function isLightColor(hex: string): boolean {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Calculate perceived brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
  return brightness > 128;
}

/**
 * Generate quick wins - easy improvements with high impact
 */
export function generateQuickWins(context: RecommendationContext): string[] {
  const quickWins: string[] = [];

  if (!context.hasCTA) {
    quickWins.push("Add a clear CTA button (e.g., 'Shop Now', 'Learn More')");
  }

  if (context.detected_logos.length === 0) {
    quickWins.push("Add your brand logo in a visible location");
  }

  if (context.scores.readability_score < 60) {
    quickWins.push("Increase text contrast and font size");
  }

  if (context.color_palette.length < 3) {
    quickWins.push("Add 1-2 accent colors for visual interest");
  }

  if (context.detected_text.length === 0) {
    quickWins.push("Add a compelling headline or key message");
  }

  return quickWins.slice(0, 3);
}
