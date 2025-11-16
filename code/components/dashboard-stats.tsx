import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, TrendingDown, Target, Sparkles } from 'lucide-react'

const stats = [
  {
    label: 'Average Sentiment Score',
    value: '8.4',
    change: '+12%',
    trend: 'up',
    icon: Sparkles,
  },
  {
    label: 'Predicted CTR',
    value: '4.2%',
    change: '+0.8%',
    trend: 'up',
    icon: Target,
  },
  {
    label: 'Engagement Score',
    value: '87',
    change: '-3%',
    trend: 'down',
    icon: TrendingUp,
  },
  {
    label: 'Ads Analyzed',
    value: '24',
    change: '+24',
    trend: 'up',
    icon: TrendingUp,
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown
        return (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Icon className="size-4 text-primary" />
                  </div>
                </div>
                <div className={`flex items-center gap-1 text-xs ${
                  stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  <TrendIcon className="size-3" />
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
