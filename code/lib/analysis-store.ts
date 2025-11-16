export interface AdAnalysis {
  id: string
  fileName: string
  fileSize: number
  uploadedAt: number
  sentimentScore: number
  sentiment: 'Positive' | 'Neutral' | 'Negative'
  predictedCTR: number
  engagementScore: number
  dominantColors: {
    name: string
    percentage: number
    hex: string
    emotion: string
  }[]
  recommendations: string[]
  imageData: string
  viral_ads?: any[] // Store viral ads data from backend
  full_analysis?: any // Store complete analysis for reference
  viralityScore?: number // 0-100 percentage
  roiPotential?: 'high' | 'medium' | 'low' // ROI potential
  adScore?: number // Overall ad score 0-10
}

export interface AnalysisStore {
  analyses: AdAnalysis[]
  lastUpdated: number
}

const STORAGE_KEY = 'adzilla_analyses'

export function getAnalyses(): AdAnalysis[] {
  if (typeof window === 'undefined') return []
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []
    const data: AnalysisStore = JSON.parse(stored)
    return data.analyses || []
  } catch {
    return []
  }
}

export function saveAnalyses(analyses: AdAnalysis[]) {
  if (typeof window === 'undefined') return
  
  const store: AnalysisStore = {
    analyses,
    lastUpdated: Date.now()
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
}

export function addAnalysis(analysis: AdAnalysis) {
  const current = getAnalyses()
  saveAnalyses([analysis, ...current])
}

export function clearAnalyses() {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
}

// Backend API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'

export async function generateAnalysis(file: File, imageData: string): Promise<AdAnalysis> {
  try {
    // Call real backend API
    const formData = new FormData()
    formData.append('file', file)
    
    const response = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      body: formData,
    })
    
    if (!response.ok) {
      throw new Error('Analysis failed')
    }
    
    const data = await response.json()
    const aiResult = data.result
    
    // Map AI response to our interface
    const sentiment = mapSentiment(aiResult.sentiment || aiResult.current_ad_analysis?.predicted_performance?.sentiment)
    const colors = parseColors(
      aiResult.detected_elements?.colors || 
      aiResult.audio_visual_signals?.color_palette || 
      aiResult.current_ad_analysis?.visual_analysis?.colors || 
      []
    )
    
    // Extract recommendations from various possible locations
    const recommendations = aiResult.what_to_improve || 
                          aiResult.virality_tips || 
                          aiResult.recommendations?.quick_wins?.map((qw: any) => qw.action) ||
                          []
    
    // Extract virality score and ROI potential
    const viralityScore = parseFloat(aiResult.metrics?.virality_rate?.replace('%', '') || 
                                    aiResult.viral_potential || 
                                    '50')
    const roiPotential = (aiResult.metrics?.roi_potential || 'medium').toLowerCase() as 'high' | 'medium' | 'low'
    const adScore = parseFloat(aiResult.metrics?.ad_score || 
                              aiResult.overall_score || 
                              '7')
    
    return {
      id: data.id || Math.random().toString(36).substr(2, 9),
      fileName: file.name,
      fileSize: file.size,
      uploadedAt: Date.now(),
      sentimentScore: calculateSentimentScore(
        aiResult.sentiment || aiResult.current_ad_analysis?.predicted_performance?.sentiment,
        aiResult.emotional_impact || aiResult.current_ad_analysis?.predicted_performance?.emotional_impact
      ),
      sentiment,
      predictedCTR: (aiResult.viral_potential || aiResult.current_ad_analysis?.predicted_performance?.virality_potential || 70) / 20,
      engagementScore: aiResult.shareability_score || aiResult.current_ad_analysis?.predicted_performance?.engagement_prediction * 10 || 75,
      dominantColors: colors,
      recommendations,
      imageData,
      viral_ads: aiResult.viral_ads || [], // Store viral ads data
      full_analysis: aiResult, // Store complete analysis
      viralityScore,
      roiPotential,
      adScore,
    }
  } catch (error) {
    console.error('API call failed, using fallback:', error)
    // Fallback to mock data if API fails
    return generateMockAnalysis(file, imageData)
  }
}

function mapSentiment(sentiment: string): 'Positive' | 'Neutral' | 'Negative' {
  const s = sentiment?.toLowerCase() || ''
  if (s.includes('positive') || s.includes('very_positive')) return 'Positive'
  if (s.includes('negative') || s.includes('very_negative')) return 'Negative'
  return 'Neutral'
}

function calculateSentimentScore(sentiment: string, emotionalImpact?: number): number {
  if (emotionalImpact) return emotionalImpact / 10 // Convert 0-100 to 0-10
  const s = sentiment?.toLowerCase() || ''
  if (s.includes('very_positive')) return 9 + Math.random()
  if (s.includes('positive')) return 7 + Math.random() * 2
  if (s.includes('negative')) return 2 + Math.random() * 3
  return 5 + Math.random() * 2
}

function parseColors(colors: string[]): Array<{name: string, percentage: number, hex: string, emotion: string}> {
  const colorEmotions: Record<string, string> = {
    red: 'Energy, Urgency',
    blue: 'Trust, Calm',
    green: 'Growth, Health',
    yellow: 'Optimism, Warmth',
    orange: 'Energy, Action',
    purple: 'Luxury, Creativity',
    pink: 'Playful, Feminine',
    black: 'Bold, Strong',
    white: 'Clean, Pure',
    gray: 'Professional, Balance',
  }
  
  return colors.slice(0, 4).map((hex, i) => {
    const colorName = getColorName(hex)
    return {
      name: colorName,
      percentage: Math.round(40 - i * 10 + Math.random() * 10),
      hex: hex.startsWith('#') ? hex : `#${hex}`,
      emotion: colorEmotions[colorName.toLowerCase()] || 'Neutral'
    }
  })
}

function getColorName(hex: string): string {
  // Simple color name mapping
  const h = hex.toLowerCase().replace('#', '')
  if (h.startsWith('ff') && h.endsWith('00')) return 'Red'
  if (h.startsWith('00') && h.includes('ff')) return 'Blue'
  if (h.includes('ff') && h.includes('00')) return 'Yellow'
  if (h.startsWith('00') && h.endsWith('00')) return 'Green'
  if (h === 'ffffff' || h === 'fff') return 'White'
  if (h === '000000' || h === '000') return 'Black'
  return 'Color'
}

function generateMockAnalysis(file: File, imageData: string): AdAnalysis {
  const sentimentOptions: Array<'Positive' | 'Neutral' | 'Negative'> = ['Positive', 'Positive', 'Positive', 'Neutral', 'Negative']
  const sentiment = sentimentOptions[Math.floor(Math.random() * sentimentOptions.length)]
  
  const colorPalettes = [
    [
      { name: 'Blue', percentage: 35, hex: '#4169E1', emotion: 'Trust, Calm' },
      { name: 'White', percentage: 30, hex: '#FFFFFF', emotion: 'Clean, Pure' },
      { name: 'Orange', percentage: 20, hex: '#FF8C00', emotion: 'Energy, Action' },
      { name: 'Gray', percentage: 15, hex: '#808080', emotion: 'Professional' },
    ],
  ]
  
  const allRecommendations = [
    'Increase contrast between text and background for better readability',
    'Consider adding a clear call-to-action button with high visibility',
    'The color palette evokes strong emotions - great for brand recall',
  ]
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    fileName: file.name,
    fileSize: file.size,
    uploadedAt: Date.now(),
    sentimentScore: sentiment === 'Positive' ? 7 + Math.random() * 3 : sentiment === 'Neutral' ? 5 + Math.random() * 2 : 2 + Math.random() * 3,
    sentiment,
    predictedCTR: 2 + Math.random() * 4,
    engagementScore: 60 + Math.random() * 35,
    dominantColors: colorPalettes[0],
    recommendations: allRecommendations,
    imageData,
  }
}
