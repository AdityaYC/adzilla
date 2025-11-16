/**
 * Mock Ad Analysis - For demo purposes when AI is unavailable
 * Returns realistic fake data that matches the schema
 */

export function generateMockAnalysis(imageUrl: string, assetType: string = "image") {
  // Generate varied scores based on URL hash for consistency
  const hash = imageUrl.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const seed = hash % 100;
  
  const baseScore = 70 + (seed % 25);
  
  return {
    asset_type: assetType,
    summary: "Eye-catching advertisement featuring modern design with bold typography and vibrant color scheme. The composition effectively draws attention to the key message while maintaining visual balance.",
    
    // Scores (0-100)
    catchiness_level: baseScore + Math.floor(Math.random() * 15),
    aesthetics_score: baseScore + Math.floor(Math.random() * 20),
    readability_score: baseScore + Math.floor(Math.random() * 18),
    brand_fit_score: baseScore + Math.floor(Math.random() * 22),
    memorability_score: baseScore + Math.floor(Math.random() * 16),
    
    sentiment: ["positive", "very_positive", "neutral"][seed % 3] as any,
    tone: ["professional", "energetic", "playful", "urgent", "friendly"][seed % 5],
    product_category: ["technology", "fashion", "food & beverage", "automotive", "lifestyle"][seed % 5],
    
    detected_text: [
      "Limited Time Offer",
      "Shop Now",
      "50% Off",
      "Free Shipping"
    ].slice(0, 2 + (seed % 3)),
    
    detected_logos: seed % 2 === 0 ? ["Brand Logo"] : [],
    
    objects: [
      "product",
      "person",
      "background gradient",
      "text overlay",
      "call-to-action button"
    ].slice(0, 3 + (seed % 3)),
    
    audio_visual_signals: {
      color_palette: [
        "#FF6B6B",
        "#4ECDC4",
        "#45B7D1",
        "#FFA07A",
        "#98D8C8"
      ].slice(0, 3 + (seed % 3)),
      composition_notes: "Follows rule of thirds with strong focal point. Visual hierarchy guides eye from headline to product to CTA.",
      style_keywords: ["modern", "vibrant", "clean", "professional"].slice(0, 2 + (seed % 3))
    },
    
    target_audience: {
      age_ranges: ["18-24", "25-34", "35-44"].slice(0, 2),
      interests: ["technology", "lifestyle", "shopping", "innovation"].slice(0, 2 + (seed % 3)),
      regions: ["North America", "Europe", "Asia Pacific"].slice(0, 1 + (seed % 3))
    },
    
    best_platforms: ["Instagram", "Facebook", "TikTok", "LinkedIn"].slice(0, 2 + (seed % 3)),
    
    improvement_suggestions: [
      "Increase contrast between text and background for better readability",
      "Add social proof elements (testimonials, ratings) to build trust",
      "Consider A/B testing different call-to-action phrases",
      "Optimize image for mobile viewing with larger text",
      "Add urgency indicators (countdown timer, limited stock)"
    ].slice(0, 3 + (seed % 3)),
    
    reasons_for_scores: [
      "Strong visual appeal with modern design principles",
      "Clear value proposition and messaging",
      "Effective use of color psychology",
      "Good balance between text and imagery",
      "Professional execution with attention to detail"
    ].slice(0, 3 + (seed % 3)),
    
    dimension_profile: {
      creative_attention: baseScore + Math.floor(Math.random() * 18),
      aesthetics: baseScore + Math.floor(Math.random() * 20),
      readability: baseScore + Math.floor(Math.random() * 17),
      brandFit: baseScore + Math.floor(Math.random() * 22),
      memorability: baseScore + Math.floor(Math.random() * 16)
    }
  };
}
