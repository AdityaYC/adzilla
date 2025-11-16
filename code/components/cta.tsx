import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-24 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,120,0,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,159,64,0.08),transparent_60%)]" />
      
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-muted/40 via-background to-muted/40 px-8 py-20 text-center shadow-2xl shadow-primary/10 backdrop-blur-sm sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,120,0,0.12),transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,159,64,0.12),transparent_50%)]" />
          
          <div className="pointer-events-none absolute left-0 top-1/3 h-px w-full animate-laser-flow bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="pointer-events-none absolute left-0 top-2/3 h-px w-full animate-laser-flow bg-gradient-to-r from-transparent via-accent/50 to-transparent" style={{ animationDelay: '1.5s' }} />
          
          <div className="relative">
            <div className="animate-popup mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              <Sparkles className="size-4" />
              <span>Start Free Today</span>
            </div>
            
            <h2 className="animate-fade-in-up text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl" style={{ animationDelay: '0.1s' }}>
              Ready to transform your <span className="gradient-text">ad strategy?</span>
            </h2>
            <p className="animate-fade-in mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground" style={{ animationDelay: '0.2s' }}>
              Join thousands of marketers using AdSensei to create high-performing ad campaigns
            </p>
            <div className="animate-bounce-in mt-10 flex items-center justify-center gap-4" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" asChild className="animate-pulse-glow bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/50 transition-all">
                <Link href="/upload">
                  Start Analyzing Free
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/30 bg-muted/50 hover:border-primary/50 hover:bg-primary/10 transition-all">
                <Link href="/dashboard">
                  View Demo
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="size-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="size-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
