'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp, TrendingDown, Target, Sparkles, Trophy, Lightbulb, Trash2, Upload, Wand2, ExternalLink, Eye, MousePointerClick, Users, Zap, DollarSign } from 'lucide-react'
import { getAnalyses, clearAnalyses, type AdAnalysis } from '@/lib/analysis-store'
import Link from 'next/link'
import { ImplementModal } from '@/components/implement-modal'
import { ViralAdReference } from '@/components/viral-ad-reference'
import { InfoTooltip } from '@/components/info-tooltip'

export default function DashboardPage() {
  const [analyses, setAnalyses] = useState<AdAnalysis[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedRecommendation, setSelectedRecommendation] = useState('')
  const [selectedAdType, setSelectedAdType] = useState<'image' | 'video' | 'text'>('image')
  const [selectedTools, setSelectedTools] = useState<Array<{name: string, description: string, url: string}>>([])
  const [showViralAds, setShowViralAds] = useState(false)

  useEffect(() => {
    setAnalyses(getAnalyses())
    setIsLoading(false)
  }, [])

  // Calculate aggregate stats from ALL ads
  const stats = analyses.length > 0 ? {
    avgSentiment: (analyses.reduce((sum, a) => sum + (a.adScore || a.sentimentScore || 0), 0) / analyses.length).toFixed(1),
    avgCTR: (analyses.reduce((sum, a) => sum + (a.predictedCTR || 0), 0) / analyses.length).toFixed(1),
    avgEngagement: Math.round(analyses.reduce((sum, a) => sum + (a.engagementScore || 0), 0) / analyses.length),
    avgViralityScore: Math.round(analyses.reduce((sum, a) => sum + (a.viralityScore || 0), 0) / analyses.length),
    totalAds: analyses.length,
    latestROI: analyses[analyses.length - 1]?.roiPotential || 'medium',
    // Calculate trends (compare last 2 ads)
    sentimentTrend: analyses.length >= 2 
      ? ((analyses[analyses.length - 1].adScore || 0) - (analyses[analyses.length - 2].adScore || 0)).toFixed(1)
      : '0',
    ctrTrend: analyses.length >= 2
      ? ((analyses[analyses.length - 1].predictedCTR || 0) - (analyses[analyses.length - 2].predictedCTR || 0)).toFixed(1)
      : '0',
    engagementTrend: analyses.length >= 2
      ? Math.round((analyses[analyses.length - 1].engagementScore || 0) - (analyses[analyses.length - 2].engagementScore || 0))
      : 0,
  } : {
    avgSentiment: '0.0',
    avgCTR: '0.0',
    avgEngagement: 0,
    avgViralityScore: 0,
    totalAds: 0,
    latestROI: 'medium' as 'high' | 'medium' | 'low',
    sentimentTrend: '0',
    ctrTrend: '0',
    engagementTrend: 0,
  }

  // Calculate sentiment distribution from actual ad scores
  const sentimentData = analyses.length > 0 ? (() => {
    const sentiments = analyses.map(ad => {
      const score = ad.adScore || ad.sentimentScore || 0
      if (score >= 7) return 'positive'
      if (score >= 5) return 'neutral'
      return 'negative'
    })
    const positive = Math.round((sentiments.filter(s => s === 'positive').length / sentiments.length) * 100)
    const neutral = Math.round((sentiments.filter(s => s === 'neutral').length / sentiments.length) * 100)
    const negative = Math.round((sentiments.filter(s => s === 'negative').length / sentiments.length) * 100)
    return [
      { name: 'Positive', value: positive, fill: 'hsl(var(--chart-1))' },
      { name: 'Neutral', value: neutral, fill: 'hsl(var(--chart-2))' },
      { name: 'Negative', value: negative, fill: 'hsl(var(--chart-5))' },
    ]
  })() : [
    { name: 'Positive', value: 0, fill: 'hsl(var(--chart-1))' },
    { name: 'Neutral', value: 0, fill: 'hsl(var(--chart-2))' },
    { name: 'Negative', value: 0, fill: 'hsl(var(--chart-5))' },
  ]

  const colorMap = new Map<string, { count: number; hex: string; emotion: string }>()
  analyses.forEach(analysis => {
    if (analysis.dominantColors && Array.isArray(analysis.dominantColors)) {
      analysis.dominantColors.forEach(color => {
        const existing = colorMap.get(color.name)
        if (existing) {
          existing.count += color.percentage
        } else {
          colorMap.set(color.name, { count: color.percentage, hex: color.hex, emotion: color.emotion })
        }
      })
    }
  })
  
  const totalColorCount = Array.from(colorMap.values()).reduce((sum, c) => sum + c.count, 0)
  const colorData = Array.from(colorMap.entries())
    .map(([name, data]) => ({
      name,
      percentage: totalColorCount > 0 ? Math.round((data.count / totalColorCount) * 100) : 0,
      hex: data.hex,
      emotion: data.emotion,
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 5)

  // Sort by ad score for top performing ads
  const topAds = [...analyses]
    .sort((a, b) => (b.adScore || b.sentimentScore || 0) - (a.adScore || a.sentimentScore || 0))
    .slice(0, 5)

  const allRecommendations = new Set<string>()
  analyses.forEach(a => {
    if (a.recommendations && Array.isArray(a.recommendations)) {
      a.recommendations.forEach(r => allRecommendations.add(r))
    }
  })
  const recommendations = Array.from(allRecommendations).slice(0, 5)

  const handleClearData = () => {
    if (confirm('Are you sure you want to clear all analysis data?')) {
      clearAnalyses()
      setAnalyses([])
    }
  }

  const handleImplement = (recommendation: string, adType: 'image' | 'video' | 'text') => {
    setSelectedRecommendation(recommendation)
    setSelectedAdType(adType)
    
    if (adType === 'video') {
      const tools = getToolsForRecommendation(recommendation)
      setSelectedTools(tools)
    }
    
    setModalOpen(true)
  }

  const getToolsForRecommendation = (recommendation: string) => {
    const rec = recommendation.toLowerCase()
    const tools = []

    if (rec.includes('video') || rec.includes('edit') || rec.includes('cut')) {
      tools.push({
        name: 'CapCut',
        description: 'Professional video editing with AI effects',
        url: 'https://www.capcut.com/'
      })
    }

    if (rec.includes('color') || rec.includes('filter') || rec.includes('visual')) {
      tools.push({
        name: 'DaVinci Resolve',
        description: 'Professional color grading',
        url: 'https://www.blackmagicdesign.com/products/davinciresolve'
      })
    }

    if (rec.includes('text') || rec.includes('caption') || rec.includes('subtitle')) {
      tools.push({
        name: 'Descript',
        description: 'AI-powered video editing with transcription',
        url: 'https://www.descript.com/'
      })
    }

    if (rec.includes('music') || rec.includes('audio') || rec.includes('sound')) {
      tools.push({
        name: 'Epidemic Sound',
        description: 'Royalty-free music library',
        url: 'https://www.epidemicsound.com/'
      })
    }

    // Default tools if no specific match
    if (tools.length === 0) {
      tools.push(
        {
          name: 'CapCut',
          description: 'All-in-one video editor',
          url: 'https://www.capcut.com/'
        },
        {
          name: 'Canva',
          description: 'Easy video editing and design',
          url: 'https://www.canva.com/video-editor/'
        }
      )
    }

    return tools
  }

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <Sparkles className="mx-auto size-12 animate-spin text-primary" />
          <p className="mt-4 text-muted-foreground">Loading dashboard...</p>
        </div>
      </main>
    )
  }

  if (analyses.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <Card className="max-w-md border-primary/20 bg-gradient-to-br from-card to-card/50">
          <CardHeader className="text-center">
            <Sparkles className="mx-auto size-12 text-primary animate-pulse-glow" />
            <CardTitle className="mt-4">No Analysis Data Yet</CardTitle>
            <CardDescription>
              Upload your first ad creative to see analytics and insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/upload">
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50">
                <Upload className="mr-2 size-4" />
                Upload Your First Ad
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    )
  }

  return (
    <main className="min-h-screen px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-balance text-4xl font-bold tracking-tight">
              Analytics Dashboard
            </h1>
            <p className="mt-2 text-pretty text-lg text-muted-foreground">
              Comprehensive insights from {analyses.length} analyzed ad{analyses.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="/upload">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                <Upload className="mr-2 size-4" />
                Upload More
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-destructive/20 text-destructive hover:bg-destructive/10"
              onClick={handleClearData}
            >
              <Trash2 className="mr-2 size-4" />
              Clear Data
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          {/* Stats Section with Tooltips */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Average Sentiment Score */}
            <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50 animate-fade-in-up">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-blue-500/10 p-2">
                      <Eye className="size-4 text-blue-500" />
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 text-xs ${parseFloat(stats.sentimentTrend) > 0 ? 'text-green-500' : parseFloat(stats.sentimentTrend) < 0 ? 'text-red-500' : 'text-gray-500'}`}>
                    {parseFloat(stats.sentimentTrend) > 0 ? <TrendingUp className="size-3" /> : parseFloat(stats.sentimentTrend) < 0 ? <TrendingDown className="size-3" /> : null}
                    {parseFloat(stats.sentimentTrend) !== 0 ? `${parseFloat(stats.sentimentTrend) > 0 ? '+' : ''}${stats.sentimentTrend}` : 'Stable'}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold">{stats.avgSentiment}</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    Average Sentiment Score
                    <InfoTooltip
                      title="What is Average Sentiment Score?"
                      description="Measures how positively people react to your ads based on emotional analysis of colors, text, and imagery. Scored 0-10."
                      example="A score of 7+ means your ads evoke positive emotions like trust, excitement, or aspiration."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Predicted CTR */}
            <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-green-500/10 p-2">
                      <MousePointerClick className="size-4 text-green-500" />
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 text-xs ${parseFloat(stats.ctrTrend) > 0 ? 'text-green-500' : parseFloat(stats.ctrTrend) < 0 ? 'text-red-500' : 'text-gray-500'}`}>
                    {parseFloat(stats.ctrTrend) > 0 ? <TrendingUp className="size-3" /> : parseFloat(stats.ctrTrend) < 0 ? <TrendingDown className="size-3" /> : null}
                    {parseFloat(stats.ctrTrend) !== 0 ? `${parseFloat(stats.ctrTrend) > 0 ? '+' : ''}${stats.ctrTrend}%` : 'Stable'}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold">{stats.avgCTR}%</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    Predicted CTR
                    <InfoTooltip
                      title="What is Predicted CTR?"
                      description="Click-Through Rate - estimated percentage of people who will click your ad. Industry average: 0.5%-5%."
                      example="2.5% CTR = out of 1,000 people who see your ad, about 25 will click."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engagement Score */}
            <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-purple-500/10 p-2">
                      <Users className="size-4 text-purple-500" />
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 text-xs ${stats.engagementTrend > 0 ? 'text-green-500' : stats.engagementTrend < 0 ? 'text-red-500' : 'text-gray-500'}`}>
                    {stats.engagementTrend > 0 ? <TrendingUp className="size-3" /> : stats.engagementTrend < 0 ? <TrendingDown className="size-3" /> : null}
                    {stats.engagementTrend !== 0 ? `${stats.engagementTrend > 0 ? '+' : ''}${stats.engagementTrend}` : 'Stable'}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold">{stats.avgEngagement}</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    Engagement Score
                    <InfoTooltip
                      title="What is Engagement Score?"
                      description="Measures likelihood of interactions (likes, comments, shares). Higher = more viral potential."
                      example="82/100 means highly engaging with strong organic interaction potential."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ads Analyzed */}
            <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-orange-500/10 p-2">
                      <Sparkles className="size-4 text-orange-500" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-blue-500">
                    <TrendingUp className="size-3" />
                    +{stats.totalAds}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold">{stats.totalAds}</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    Ads Analyzed
                    <InfoTooltip
                      title="Total Ads Analyzed"
                      description="Number of ad creatives analyzed. More data = better insights."
                      example="Analyzing 10+ ads helps identify patterns in what works best."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Virality Score */}
            <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-pink-500/10 p-2">
                      <Zap className="size-4 text-pink-500" />
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 text-xs ${stats.avgViralityScore > 50 ? 'text-green-500' : 'text-yellow-500'}`}>
                    {stats.avgViralityScore > 50 ? <TrendingUp className="size-3" /> : <Target className="size-3" />}
                    {stats.avgViralityScore > 50 ? '+High' : 'Moderate'}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold">{stats.avgViralityScore}%</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    Average Virality Score
                    <InfoTooltip
                      title="What is Virality Score?"
                      description="Predicts likelihood of organic sharing. Scores above 50% indicate high viral potential."
                      example="75% virality = strong shareability factors like humor, emotion, or controversy."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ROI Potential */}
            <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-yellow-500/10 p-2">
                      <DollarSign className="size-4 text-yellow-500" />
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 text-xs ${
                    stats.latestROI === 'high' ? 'text-green-500' : 
                    stats.latestROI === 'medium' ? 'text-yellow-500' : 'text-red-500'
                  }`}>
                    {stats.latestROI === 'high' ? <TrendingUp className="size-3" /> : 
                     stats.latestROI === 'medium' ? <Target className="size-3" /> : <TrendingDown className="size-3" />}
                    {stats.latestROI === 'high' ? '+Excellent' : stats.latestROI === 'medium' ? 'Good' : 'Needs Work'}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold capitalize">{stats.latestROI}</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    ROI Potential
                    <InfoTooltip
                      title="What is ROI Potential?"
                      description="Return on Investment potential (High/Medium/Low) based on predicted performance and offer strength."
                      example="High ROI means ad likely to generate profitable returns on ad spend."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Charts Section */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="flex items-center">
                  <CardTitle>Sentiment Distribution</CardTitle>
                  <InfoTooltip
                    title="Sentiment Breakdown"
                    description="Shows how your ads are emotionally perceived. Positive sentiment drives better engagement."
                    example="68% positive means most viewers have favorable emotional reactions."
                  />
                </div>
                <CardDescription>
                  Overall sentiment breakdown across all analyzed ads
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sentimentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--popover))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="flex items-center">
                  <CardTitle>Color Psychology Analysis</CardTitle>
                  <InfoTooltip
                    title="Color Impact"
                    description="Different colors trigger different emotions. Red=urgency, Blue=trust, Green=growth."
                    example="Using 52% red creates strong urgency and drives action."
                  />
                </div>
                <CardDescription>
                  Dominant colors and their emotional impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                {colorData.length > 0 ? (
                  <div className="space-y-4">
                    {colorData.map((color) => (
                      <div key={color.name} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div
                              className="size-4 rounded"
                              style={{ backgroundColor: color.hex }}
                            />
                            <span className="font-medium">{color.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{color.emotion}</span>
                            <span className="font-semibold">{color.percentage}%</span>
                          </div>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-secondary">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${color.percentage}%`,
                              backgroundColor: color.hex,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground">No color data available</p>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Top Performers Section with Unique Stats */}
          {topAds.length > 0 && (
            <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Trophy className="size-5 text-primary" />
                  <CardTitle>Top Performing Ads</CardTitle>
                  <InfoTooltip
                    title="Performance Ranking"
                    description="Ads ranked by AI score. Higher scores = better predicted performance."
                    example="8.8 score = top 10% of analyzed creatives."
                  />
                </div>
                <CardDescription>
                  Highest-scoring ad creatives based on AI analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topAds.map((ad, index) => {
                    // Calculate unique sentiment for each ad based on its score
                    const score = ad.adScore || ad.sentimentScore || 0
                    const sentiment = score >= 7 ? 'Positive' : score >= 5 ? 'Neutral' : 'Negative'
                    const sentimentColor = sentiment === 'Positive' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                                          sentiment === 'Neutral' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' : 
                                          'bg-red-500/10 text-red-500 border-red-500/20'
                    
                    return (
                      <div
                        key={ad.id}
                        className="flex items-center gap-4 rounded-lg border border-primary/20 bg-card/50 p-4 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-pink-500 text-sm font-bold text-white">
                          {index + 1}
                        </div>
                        <div className="size-20 shrink-0 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs">
                          AD
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{ad.fileName}</h4>
                          <div className="flex items-center gap-4 text-sm">
                            <Badge className={`text-xs border ${sentimentColor}`}>
                              {sentiment}
                            </Badge>
                            <span className="text-gray-400">
                              CTR: {ad.predictedCTR ? ad.predictedCTR.toFixed(1) : '0.0'}%
                            </span>
                            <span className="text-gray-400">
                              Engagement: {ad.engagementScore || 0}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-orange-500">
                            {score.toFixed(1)}
                          </div>
                          <div className="text-xs text-gray-400">Overall Score</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Recommendations Section */}
          {recommendations.length > 0 && (
            <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lightbulb className="size-5 text-primary" />
                  <CardTitle>AI-Powered Recommendations</CardTitle>
                  <InfoTooltip
                    title="Smart Suggestions"
                    description="AI recommendations based on your ads + viral campaigns in your industry."
                    example="Implementing these can improve CTR by 15-30%."
                  />
                </div>
                <CardDescription>
                  Actionable insights to improve your ad performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-primary/20 bg-card/50 p-4 hover:border-primary/40 transition-colors"
                    >
                      <Sparkles className="size-5 shrink-0 text-primary mt-0.5" />
                      <p className="flex-1 text-sm">{rec}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="shrink-0 border-primary/20 hover:bg-primary/10 hover:border-primary/40"
                        onClick={() => handleImplement(rec, 'image')}
                      >
                        <Wand2 className="mr-2 size-3" />
                        Implement
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Viral Ads Section */}
          {showViralAds && analyses.length > 0 && (analyses[0] as any).viral_ads && (
            <ViralAdReference viralAds={(analyses[0] as any).viral_ads} />
          )}

          {/* Toggle Button for Viral Ads */}
          {analyses.length > 0 && (analyses[0] as any).viral_ads && (
            <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50">
              <CardContent className="pt-6">
                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50"
                  size="lg"
                  onClick={() => setShowViralAds(!showViralAds)}
                >
                  <TrendingUp className="mr-2 size-5" />
                  {showViralAds ? 'Hide' : 'View'} Viral Ads in Your Category
                  <Sparkles className="ml-2 size-5" />
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <ImplementModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        recommendation={selectedRecommendation}
        adType={selectedAdType}
        tools={selectedTools}
      />
    </main>
  )
}
