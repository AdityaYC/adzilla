'use client'

import { Brain, Palette, Target, TrendingUp, Sparkles, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: Brain,
    title: 'AI Sentiment Analysis',
    description: 'Understand the emotional impact of your ads with advanced natural language processing and visual sentiment detection.',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Palette,
    title: 'Color Psychology Insights',
    description: 'Discover how color choices influence viewer behavior and emotions with our comprehensive color analysis engine.',
    gradient: 'from-accent to-primary',
  },
  {
    icon: Target,
    title: 'Engagement Predictions',
    description: 'Get data-driven predictions on ad performance before you launch, saving time and budget on testing.',
    gradient: 'from-primary via-accent to-primary',
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'Receive actionable recommendations to improve CTR, conversions, and overall campaign effectiveness.',
    gradient: 'from-accent to-primary',
  },
  {
    icon: Sparkles,
    title: 'Batch Processing',
    description: 'Analyze multiple ad creatives simultaneously and compare insights to identify top performers instantly.',
    gradient: 'from-primary to-accent',
  },
  {
    icon: BarChart3,
    title: 'Visual Analytics',
    description: 'Explore comprehensive dashboards with charts, trends, and comparisons for data-driven decision making.',
    gradient: 'from-accent via-primary to-accent',
  },
]

export function Features() {
  return (
    <section id="features" className="relative border-t border-border px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="pointer-events-none absolute left-1/4 top-0 size-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 size-96 rounded-full bg-accent/10 blur-[120px]" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="animate-popup mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Sparkles className="size-4" />
            <span>Powerful Features</span>
          </div>
          <h2 className="animate-fade-in-up text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            Everything you need to <span className="gradient-text">optimize your ads</span>
          </h2>
          <p className="animate-fade-in mt-4 text-pretty text-lg text-muted-foreground" style={{ animationDelay: '0.1s' }}>
            Powerful AI-driven features that transform how you analyze and improve advertising performance.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={feature.title} 
                className="animate-popup group border-border bg-card backdrop-blur transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`mb-4 inline-flex size-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg shadow-primary/30 transition-transform group-hover:scale-110 group-hover:animate-pulse-glow`}>
                    <Icon className="size-7 text-black" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
