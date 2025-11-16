/**
 * Clean AI Client - Gemini Vision Analysis
 * Analyzes images/videos and provides trend-based insights
 */

import axios from "axios";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("❌ Missing GEMINI_API_KEY - Get one at: https://aistudio.google.com/app/apikey");
  process.exit(1);
}

export async function analyzeMedia(mediaUrl: string, mediaType: "image" | "video" = "image") {
  console.log(`🔍 Analyzing ${mediaType}: ${mediaUrl}`);

  // Fetch and convert media to base64
  let mediaData: string;
  try {
    const response = await axios.get(mediaUrl, { 
      responseType: 'arraybuffer',
      timeout: 30000 
    });
    mediaData = Buffer.from(response.data).toString('base64');
  } catch (error: any) {
    throw new Error(`Failed to fetch media: ${error.message}`);
  }

  // ULTIMATE COMPREHENSIVE AD ANALYSIS PROMPT
  const prompt = `You are an ELITE advertising analytics expert and viral marketing strategist with 15+ years of experience analyzing digital ad campaigns across all major platforms (Facebook, Google, Instagram, TikTok, LinkedIn, YouTube). You have analyzed over 100,000 ads and have deep expertise in:

- Direct response marketing
- Brand advertising  
- Viral content creation
- Consumer psychology
- Performance marketing metrics
- Competitive intelligence
- A/B testing methodologies

Your task is to provide the MOST COMPREHENSIVE ad analysis possible, combining analytical metrics with competitive intelligence.

**YOUR TASK:**
Analyze this ${mediaType} advertisement and provide a comprehensive report following this exact structure:

## 1️⃣ AD CATEGORY IDENTIFICATION
Identify:
- Industry/Niche (e.g., E-commerce, SaaS, Fashion, Food & Beverage, etc.)
- Target Audience (age, demographics, psychographics)
- Ad Type (Social media ad, Display ad, Video thumbnail, etc.)
- Primary Goal (Brand awareness, Direct sales, Lead generation, etc.)

## 2️⃣ CURRENT AD ANALYSIS
Analyze EVERY aspect using proven advertising frameworks.

### Visual Analysis (Score 0-10 each):
- **Visual Appeal Score**: X/10 - Professional quality? Composition? Focal point clear?
- **Color Psychology**: What emotions do colors evoke? (Red=urgency, Blue=trust, Green=growth, etc.)
- **Typography Quality**: X/10 - Readable at thumbnail? Proper hierarchy? Mobile-friendly?
- **Image Quality**: X/10 - High-res professional vs amateur? Product visible?
- **Composition & Layout**: X/10 - Rule of thirds? Visual hierarchy? White space?
- **Human Elements**: Face present? (+38% CTR avg) Eye contact? Emotion shown?

### Content Analysis (Score 0-10 each):
- **Headline Effectiveness**: X/10 - Benefit-driven? Power words? Curiosity gap? Specific?
- **Value Proposition Clarity**: X/10 - Clear offer? Unique? Addresses pain point?
- **Call-to-Action (CTA)**: X/10 - Visible? Action-oriented? Low friction? Urgent?
- **Emotional Appeal**: X/10 - What emotion triggered? Joy, fear, trust, surprise?
- **Unique Selling Point**: X/10 - Differentiation clear? Competitive advantage?

### Psychological Triggers (Score 0-10 each):
- **Scarcity/Urgency**: Limited time? Limited quantity? FOMO elements?
- **Social Proof**: Testimonials? Customer count? Ratings? Trust badges?
- **Authority**: Expert endorsements? Certifications? Media mentions?
- **Curiosity Factor**: Pattern interrupt? Unexpected elements?

### Platform Optimization (Score 0-10):
- **Mobile Friendly**: Thumb-friendly buttons (44x44px)? Text readable (16px+)?
- **Platform Fit**: Optimized for target platform? Native look? Format correct?

### Predicted Performance (Industry Benchmarks):
- **Estimated CTR**: X.X% (Industry avg: E-commerce 0.5-1.5%, SaaS 2-5%, Fashion 1-2%)
- **Engagement Rate**: X.X% (Instagram 1-3%, Facebook 0.5-1.5%, TikTok 5-15%)
- **Conversion Rate**: X.X% (E-commerce 1-3%, SaaS 2-5%, Lead gen 2-10%)
- **Virality Potential**: X/10 - Shareability? Emotional impact? Entertainment value?
- **Attention Score**: X/10 - Stops the scroll? Pattern interrupt? Visual contrast?
- **ROI Potential**: High/Medium/Low - Based on offer strength, friction, differentiation
- **Overall Performance Score**: X/10

## 3️⃣ VIRAL ADS IN THIS CATEGORY
Research and identify 3-5 REAL highly successful/viral ads from the SAME INDUSTRY.

For EACH viral ad, provide DETAILED analysis:

**Basic Info:**
- Campaign Name (official title)
- Brand & Year
- Platform(s) where it ran
- Results: Impressions, engagement rate, CTR, notable metrics (sales increase, awards, cultural impact)

**Where to Find It:**
- Google Search Query: "exact search terms" (e.g., "Dollar Shave Club our blades are great ad")
- YouTube Search Query: "exact search terms"
- Official Link: Direct URL if available
- Archive Links: Ads of the World, Facebook Ad Library, etc.

**Visual Description:**
Describe in 3-4 sentences so someone could recognize it (colors, imagery, text, style)

**Deep Success Analysis:**
- **Emotional Trigger**: What specific emotion? How was it triggered?
- **Psychological Principle**: Scarcity? Social proof? Authority? Contrast?
- **Audience Resonance**: Why did it connect with THEIR audience specifically?
- **Unique Hook**: What made people stop scrolling?
- **Timing & Context**: Why did it work at THAT moment?
- **Execution Excellence**: What creative/technical elements were brilliant?
- **Shareability Factor**: Why did people share it organically?

**Key Takeaways:**
- ✅ **What to Replicate**: 3-5 specific elements to copy
- ⚠️ **What to Avoid**: 2-3 things that won't work or are risky
- 💡 **Implementation Ideas**: 2-3 actionable steps user can take TODAY

**Examples of REAL viral campaigns to reference:**
- Dollar Shave Club "Our Blades Are Great" (2012) - 27M views, $1B acquisition
- Old Spice "The Man Your Man Could Smell Like" (2010) - 107% sales increase
- Dove "Real Beauty Sketches" (2013) - 114M views in 1 month
- Apple "Shot on iPhone" (ongoing) - Billions of impressions, UGC-driven
- Airbnb "We Accept" (2017) - Super Bowl, cultural moment
- Nike "Dream Crazy" with Kaepernick (2018) - Controversial, +31% sales

## 4️⃣ COMPARATIVE ANALYSIS
- What Your Ad Does Better
- What Viral Ads Do Better
- Opportunity Score: X/10

## 5️⃣ ACTIONABLE RECOMMENDATIONS
Provide 5-10 SPECIFIC, implementable changes prioritized by impact.

**Format for each recommendation:**
- **Priority**: HIGH/MEDIUM/LOW
- **Action**: Extremely specific change (not "improve headline" but "Change headline from X to Y because...")
- **Expected Impact**: Quantified improvement (+X% CTR, +Y% conversion)
- **Difficulty**: Easy/Medium/Hard
- **Rationale**: Why this works (psychology, data, proven principles)
- **Implementation Steps**: 3-5 specific steps to make this change

**HIGH Priority** (Do FIRST - biggest impact, easiest):
- Quick wins that fix critical flaws
- Low-hanging fruit with high ROI

**MEDIUM Priority** (Do NEXT - good impact, more effort):
- Strategic improvements
- Build on quick wins

**LOW Priority** (Do LATER - nice to have):
- Optimizations and experimental ideas

**Example of GOOD recommendation:**
❌ BAD: "Improve the headline"
✅ GOOD: "Change headline from 'Premium Coffee Beans' to 'Wake Up Happy: Organic Coffee Delivered Fresh' - focuses on benefit (happiness) over feature (premium). Expected impact: +15% CTR based on benefit-driven headline performance in food category. Steps: 1) Open design tool 2) Replace text 3) Use 24px bold font 4) Position at top third 5) Export and test"

## 6️⃣ A/B TEST SUGGESTIONS
Suggest 3-5 specific A/B tests based on viral ad insights.

**Format for each test:**
- **Test Name**: Descriptive name
- **Element Testing**: What specific element (headline, CTA, image, color, etc.)
- **Control (A)**: Current version
- **Variant (B)**: Suggested version
- **Hypothesis**: "We believe [change] will increase [metric] because [reason based on psychology/data]"
- **Expected Lift**: Estimated improvement percentage
- **Priority**: High/Medium/Low
- **Sample Size Needed**: Estimated clicks for statistical significance
- **Test Duration**: Recommended days

**Test Ideas:**
- Headline: Benefit vs feature, question vs statement, with numbers vs without
- Visual: Lifestyle vs product-only, with face vs without, before/after vs product
- CTA: Button text, color, size, placement, friction level
- Offer: Discount % vs $, free trial vs demo, time vs quantity scarcity
- Social Proof: Testimonial vs statistics, customer count vs rating

## 7️⃣ SEARCH REFERENCES
- Google search queries for viral ads
- YouTube search queries
- Ad archive URLs

## 8️⃣ INDUSTRY INSIGHTS
- Current trends
- Predictions for next 6-12 months

Return ONLY valid JSON with this structure:
{
  "ad_category": {
    "industry": "string",
    "target_audience": "string",
    "ad_type": "string",
    "primary_goal": "string"
  },
  "current_ad_analysis": {
    "visual_analysis": {
      "visual_appeal_score": 8,
      "visual_appeal_explanation": "string",
      "color_psychology": "string",
      "typography_quality": 7,
      "composition_layout": 9
    },
    "content_analysis": {
      "headline_effectiveness": 8,
      "value_proposition_clarity": 7,
      "cta_score": 9,
      "emotional_appeal": 8,
      "unique_selling_point": 7
    },
    "predicted_performance": {
      "estimated_ctr": "2.5%",
      "engagement_prediction": 8,
      "virality_potential": 7,
      "overall_score": 8
    }
  },
  "viral_ads": [
    {
      "campaign_name": "string",
      "brand": "string",
      "year": "2024",
      "platform": "Instagram",
      "results": {
        "impressions": "10M",
        "engagement_rate": "8.5%",
        "ctr": "3.2%",
        "notable_metrics": "Went viral with 500K shares"
      },
      "where_to_find": {
        "search_terms": "exact search query",
        "official_link": "URL or Not available"
      },
      "visual_description": "string",
      "success_analysis": {
        "emotional_trigger": "string",
        "psychological_principle": "string",
        "unique_hook": "string",
        "shareability_factor": "string"
      },
      "key_takeaways": {
        "replicate": ["string"],
        "avoid": ["string"],
        "implementation_ideas": ["string"]
      }
    }
  ],
  "comparative_analysis": {
    "user_ad_strengths": ["string"],
    "viral_ad_advantages": ["string"],
    "opportunity_score": 8
  },
  "recommendations": {
    "quick_wins": [
      {
        "action": "string",
        "expected_impact": "+15% CTR"
      }
    ],
    "medium_term": ["string"],
    "advanced": ["string"]
  },
  "ab_test_suggestions": [
    {
      "test_name": "string",
      "control": "string",
      "variant": "string",
      "expected_lift": "+20%",
      "rationale": "string"
    }
  ],
  "search_references": {
    "google_queries": ["string"],
    "youtube_queries": ["string"],
    "ad_archives": {
      "facebook_ad_library": "URL",
      "youtube_leaderboard": "URL"
    }
  },
  "industry_insights": {
    "current_trends": ["string"],
    "predictions": "string"
  }
}

Analyze the ${mediaType} now.`;

  // Call Gemini API - using gemini-2.0-flash (available model)
  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

  const payload = {
    contents: [{
      parts: [
        { text: prompt },
        {
          inline_data: {
            mime_type: mediaType === "video" ? "video/mp4" : "image/jpeg",
            data: mediaData
          }
        }
      ]
    }],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 4096
    }
  };

  try {
    const { data } = await axios.post(GEMINI_URL, payload, {
      headers: { "Content-Type": "application/json" },
      timeout: 120_000
    });

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      throw new Error("Gemini returned no content");
    }

    // Extract JSON from response
    let jsonText = text.trim();
    if (jsonText.includes('```json')) {
      jsonText = jsonText.split('```json')[1].split('```')[0].trim();
    } else if (jsonText.includes('```')) {
      jsonText = jsonText.split('```')[1].split('```')[0].trim();
    }

    const analysis = JSON.parse(jsonText);
    
    console.log(`✅ Analysis complete! Viral potential: ${analysis.viral_potential}/100`);
    
    return {
      url: mediaUrl,
      type: mediaType,
      timestamp: new Date().toISOString(),
      analysis
    };

  } catch (error: any) {
    const status = error?.response?.status;
    const errorData = error?.response?.data;
    const message = errorData?.error?.message || error.message;
    
    console.error("❌ Gemini API Error:", { status, message, errorData });
    throw new Error(`Analysis failed: ${message}`);
  }
}

export async function analyzeBatch(mediaUrls: string[]) {
  console.log(`📊 Analyzing ${mediaUrls.length} media items...`);
  
  const results = [];
  for (const url of mediaUrls) {
    try {
      const result = await analyzeMedia(url);
      results.push(result);
    } catch (error: any) {
      console.error(`Failed to analyze ${url}:`, error.message);
      results.push({
        url,
        error: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }
  
  return results;
}
