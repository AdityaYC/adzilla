import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { AdScatterGrid } from '@/components/ad-scatter-grid'
import { StatsSection } from '@/components/stats-section'
import { HowItWorks } from '@/components/how-it-works'
import { CTA } from '@/components/cta'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <StatsSection />
      <Features />
      <AdScatterGrid />
      <HowItWorks />
      <CTA />
    </main>
  )
}
