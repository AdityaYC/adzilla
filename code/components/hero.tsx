'use client'

import { Button } from '@/components/ui/button'
import { Sparkles, ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        {mounted && (
          <>
            <div className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-laser-flow" style={{ animationDelay: '0s' }} />
            <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-laser-flow" style={{ animationDelay: '1s' }} />
            <div className="absolute left-0 top-3/4 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-laser-flow" style={{ animationDelay: '2s' }} />
          </>
        )}
      </div>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="absolute right-0 top-0 size-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 size-96 rounded-full bg-accent/20 blur-[120px]" />
      
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-accent animate-pulse-glow" />
          <span className="text-xl font-bold">AdZilla</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#examples" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Examples
          </Link>
          <Link href="/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Dashboard
          </Link>
          <Button size="sm" asChild className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all">
            <Link href="/upload">
              Get Started
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex animate-popup items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Sparkles className="size-4" />
            <span>AI-Powered Ad Analytics</span>
            <Zap className="size-4" />
          </div>
          
          <h1 className="animate-fade-in-up text-balance text-6xl font-bold tracking-tight text-foreground sm:text-8xl" style={{ animationDelay: '0.1s' }}>
            Transform Your Ad
            <br />
            <span className="gradient-text animate-float">
              Creatives with AI
            </span>
          </h1>
          
          <p className="animate-fade-in-up mt-8 text-pretty text-xl leading-relaxed text-muted-foreground" style={{ animationDelay: '0.2s' }}>
            Analyze sentiment, color psychology, and engagement patterns. Get actionable 
            insights to maximize your advertising ROI with cutting-edge AI technology.
          </p>
          
          <div className="animate-bounce-in mt-12 flex items-center justify-center gap-4" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" asChild className="animate-pulse-glow bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/50 transition-all">
              <Link href="/upload">
                Start Analyzing
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary/30 bg-card hover:bg-primary/10 hover:border-primary/50 transition-all">
              <Link href="/dashboard">
                View Demo
              </Link>
            </Button>
          </div>

          {mounted && (
            <div className="mt-20 grid grid-cols-3 gap-6">
              {[
                { label: 'Ads Analyzed', value: '10K+', delay: '0.4s' },
                { label: 'Accuracy Rate', value: '98%', delay: '0.5s' },
                { label: 'Time Saved', value: '70%', delay: '0.6s' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="animate-popup rounded-2xl border border-primary/20 bg-card/50 p-6 backdrop-blur-sm hover:border-primary/40 transition-all"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="gradient-text text-4xl font-bold">{stat.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
