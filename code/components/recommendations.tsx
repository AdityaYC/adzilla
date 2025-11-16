import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb, CheckCircle2 } from 'lucide-react'

const recommendations = [
  {
    title: 'Optimize Color Contrast',
    description: 'Increase contrast ratio to 4.5:1 for better accessibility and engagement.',
    priority: 'High',
  },
  {
    title: 'Add Emotional Triggers',
    description: 'Include words like "limited", "exclusive", or "free" to boost sentiment scores.',
    priority: 'Medium',
  },
  {
    title: 'Simplify Visual Hierarchy',
    description: 'Reduce visual clutter to improve focus on key messaging and CTA.',
    priority: 'High',
  },
  {
    title: 'Test Alternative Headlines',
    description: 'A/B test with more action-oriented headlines for better CTR.',
    priority: 'Medium',
  },
]

export function Recommendations() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Lightbulb className="size-5 text-primary" />
          <CardTitle>AI Recommendations</CardTitle>
        </div>
        <CardDescription>
          Actionable insights to improve your ad performance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-lg border border-border bg-card/50 p-4"
            >
              <CheckCircle2 className="size-5 shrink-0 text-primary" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{rec.title}</h4>
                  <span
                    className={`text-xs font-medium ${
                      rec.priority === 'High'
                        ? 'text-red-500'
                        : 'text-yellow-500'
                    }`}
                  >
                    {rec.priority}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {rec.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
