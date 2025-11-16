'use client'

import { Upload, Sparkles, LineChart, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Ads',
    description: 'Upload single or multiple ad creatives in various formats (images, videos, text).',
  },
  {
    icon: Sparkles,
    title: 'AI Analysis',
    description: 'Our AI engine processes sentiment, colors, composition, and engagement factors.',
  },
  {
    icon: LineChart,
    title: 'Get Insights',
    description: 'Receive comprehensive analytics with visualizations and performance predictions.',
  },
  {
    icon: CheckCircle,
    title: 'Optimize & Launch',
    description: 'Implement recommendations and launch high-performing campaigns with confidence.',
  },
]

export function HowItWorks() {
  return (
    <section className="relative border-t border-border px-6 py-24 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-1/2 size-96 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="animate-popup mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Sparkles className="size-4" />
            <span>Simple Process</span>
          </div>
          <h2 className="animate-fade-in-up text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            How <span className="gradient-text">AdSensei</span> Works
          </h2>
          <p className="animate-fade-in mt-4 text-pretty text-lg text-muted-foreground" style={{ animationDelay: '0.1s' }}>
            From upload to optimization in four simple steps
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="animate-popup relative" style={{ animationDelay: `${index * 0.1}s` }}>
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full overflow-hidden bg-secondary lg:block">
                    <div className="h-full w-1/2 animate-laser-flow bg-gradient-to-r from-transparent via-primary to-transparent" style={{ animationDelay: `${index * 0.5}s` }} />
                  </div>
                )}
                <div className="text-center">
                  <div className="relative mx-auto mb-4 inline-flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/40 transition-transform hover:scale-110 hover:animate-pulse-glow">
                    <Icon className="size-8 text-black" />
                    <div className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-primary to-accent text-xs font-bold text-black">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
