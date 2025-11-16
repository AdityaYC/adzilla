import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, TrendingUp } from 'lucide-react'

const topAds = [
  {
    id: 1,
    name: 'Summer Sale Banner',
    score: 9.2,
    sentiment: 'Positive',
    predictedCTR: '5.8%',
    image: '/summer-sale-ad.png',
  },
  {
    id: 2,
    name: 'Product Launch Hero',
    score: 8.9,
    sentiment: 'Positive',
    predictedCTR: '5.2%',
    image: '/product-launch-ad.png',
  },
  {
    id: 3,
    name: 'Holiday Campaign',
    score: 8.7,
    sentiment: 'Positive',
    predictedCTR: '4.9%',
    image: '/holiday-campaign-ad.jpg',
  },
]

export function TopPerformers() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Trophy className="size-5 text-primary" />
          <CardTitle>Top Performing Ads</CardTitle>
        </div>
        <CardDescription>
          Highest-scoring ad creatives based on AI analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topAds.map((ad, index) => (
            <div
              key={ad.id}
              className="flex items-center gap-4 rounded-lg border border-border bg-card/50 p-4"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {index + 1}
              </div>
              <img
                src={ad.image || "/placeholder.svg"}
                alt={ad.name}
                className="size-20 rounded-lg border border-border object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold">{ad.name}</h4>
                <div className="mt-1 flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {ad.sentiment}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    CTR: {ad.predictedCTR}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-2xl font-bold text-primary">
                  {ad.score}
                  <TrendingUp className="size-4" />
                </div>
                <div className="text-xs text-muted-foreground">Overall Score</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
