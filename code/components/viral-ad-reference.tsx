'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ExternalLink, Youtube, Search, Lightbulb, TrendingUp, Users, Clock, Sparkles, Share2, Target } from 'lucide-react'

interface ViralAd {
  campaign_name: string
  brand: string
  year: string
  platform: string
  results: {
    impressions: string
    engagement_rate: string
    ctr: string
    notable_metrics: string
  }
  where_to_find: {
    search_terms: string
    official_link: string
  }
  visual_description: string
  success_analysis: {
    emotional_trigger: string
    psychological_principle: string
    audience_resonance?: string
    unique_hook: string
    timing_context?: string
    execution_excellence?: string
    shareability_factor: string
  }
  key_takeaways: {
    replicate: string[]
    avoid: string[]
    implementation_ideas: string[]
  }
}

interface ViralAdReferenceProps {
  viralAds: ViralAd[]
}

export function ViralAdReference({ viralAds }: ViralAdReferenceProps) {
  const [selectedAd, setSelectedAd] = useState<ViralAd | null>(null)

  if (!viralAds || viralAds.length === 0) {
    return null
  }

  const getGoogleSearchUrl = (searchTerms: string) => {
    return `https://www.google.com/search?q=${encodeURIComponent(searchTerms)}`
  }

  const getYoutubeSearchUrl = (searchTerms: string) => {
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(searchTerms)}`
  }

  return (
    <>
      <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="size-5 text-primary" />
            <CardTitle>🔥 Successful Ads in Your Category</CardTitle>
          </div>
          <CardDescription>
            Learn from what's already working - real viral campaigns analyzed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {viralAds.map((ad, index) => (
              <div
                key={index}
                className="rounded-lg border border-primary/20 bg-gradient-to-br from-card to-card/50 p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        #{index + 1}
                      </Badge>
                      <h3 className="font-semibold text-lg">{ad.campaign_name}</h3>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {ad.brand}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="rounded-lg bg-primary/5 p-3">
                    <div className="text-xs text-muted-foreground mb-1">Platform</div>
                    <div className="font-semibold">{ad.platform}</div>
                  </div>
                  <div className="rounded-lg bg-primary/5 p-3">
                    <div className="text-xs text-muted-foreground mb-1">CTR</div>
                    <div className="font-semibold text-primary">{ad.results.ctr}</div>
                  </div>
                  <div className="rounded-lg bg-primary/5 p-3">
                    <div className="text-xs text-muted-foreground mb-1">Engagement</div>
                    <div className="font-semibold text-primary">{ad.results.engagement_rate}</div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {ad.visual_description}
                </p>

                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/10"
                    onClick={() => window.open(getGoogleSearchUrl(ad.where_to_find.search_terms), '_blank')}
                  >
                    <Search className="mr-2 size-3" />
                    Search Google
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/10"
                    onClick={() => window.open(getYoutubeSearchUrl(ad.where_to_find.search_terms), '_blank')}
                  >
                    <Youtube className="mr-2 size-3" />
                    Search YouTube
                  </Button>

                  {ad.where_to_find.official_link && ad.where_to_find.official_link !== 'Not available' && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/20 hover:bg-primary/10"
                      onClick={() => window.open(ad.where_to_find.official_link, '_blank')}
                    >
                      <ExternalLink className="mr-2 size-3" />
                      Official Link
                    </Button>
                  )}

                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-accent"
                    onClick={() => setSelectedAd(ad)}
                  >
                    <Lightbulb className="mr-2 size-3" />
                    Why It Worked
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analysis Modal */}
      <Dialog open={!!selectedAd} onOpenChange={() => setSelectedAd(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Why "{selectedAd?.campaign_name}" Was Successful
            </DialogTitle>
            <DialogDescription>
              Deep dive into the psychology and strategy behind this viral campaign
            </DialogDescription>
          </DialogHeader>

          {selectedAd && (
            <div className="space-y-6 py-4">
              {/* Success Analysis */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Target className="size-5 text-primary" />
                  Success Analysis
                </h3>

                <div className="grid gap-4">
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Sparkles className="size-4 text-primary" />
                      Emotional Trigger
                    </h4>
                    <p className="text-sm text-muted-foreground">{selectedAd.success_analysis.emotional_trigger}</p>
                  </div>

                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="size-4 text-primary" />
                      Psychological Principle
                    </h4>
                    <p className="text-sm text-muted-foreground">{selectedAd.success_analysis.psychological_principle}</p>
                  </div>

                  {selectedAd.success_analysis.audience_resonance && (
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Users className="size-4 text-primary" />
                        Audience Resonance
                      </h4>
                      <p className="text-sm text-muted-foreground">{selectedAd.success_analysis.audience_resonance}</p>
                    </div>
                  )}

                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Lightbulb className="size-4 text-primary" />
                      Unique Hook
                    </h4>
                    <p className="text-sm text-muted-foreground">{selectedAd.success_analysis.unique_hook}</p>
                  </div>

                  {selectedAd.success_analysis.timing_context && (
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Clock className="size-4 text-primary" />
                        Timing & Context
                      </h4>
                      <p className="text-sm text-muted-foreground">{selectedAd.success_analysis.timing_context}</p>
                    </div>
                  )}

                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Share2 className="size-4 text-primary" />
                      Shareability Factor
                    </h4>
                    <p className="text-sm text-muted-foreground">{selectedAd.success_analysis.shareability_factor}</p>
                  </div>
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Key Takeaways for You</h3>

                <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
                  <h4 className="font-semibold mb-3 text-green-700 dark:text-green-400">
                    ✅ What to Replicate
                  </h4>
                  <ul className="space-y-2">
                    {selectedAd.key_takeaways.replicate.map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4">
                  <h4 className="font-semibold mb-3 text-yellow-700 dark:text-yellow-400">
                    ⚠️ What to Avoid
                  </h4>
                  <ul className="space-y-2">
                    {selectedAd.key_takeaways.avoid.map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-yellow-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
                  <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-400">
                    💡 Implementation Ideas
                  </h4>
                  <ul className="space-y-2">
                    {selectedAd.key_takeaways.implementation_ideas.map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
