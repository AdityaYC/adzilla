'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Eye, Zap } from 'lucide-react'

const adExamples = [
  {
    id: 1,
    image: '/modern-pink-fashion-ad.jpg',
    category: 'Fashion',
    sentiment: 'Positive',
    score: 94,
    views: '2.4M',
  },
  {
    id: 2,
    image: '/purple-tech-product-ad.jpg',
    category: 'Tech',
    sentiment: 'Innovative',
    score: 91,
    views: '3.1M',
  },
  {
    id: 3,
    image: '/minimalist-white-cosmetics-ad.jpg',
    category: 'Beauty',
    sentiment: 'Elegant',
    score: 88,
    views: '1.8M',
  },
  {
    id: 4,
    image: '/vibrant-food-delivery-ad.jpg',
    category: 'Food',
    sentiment: 'Excited',
    score: 96,
    views: '4.2M',
  },
  {
    id: 5,
    image: '/luxury-purple-watch-ad.jpg',
    category: 'Luxury',
    sentiment: 'Aspirational',
    score: 93,
    views: '2.9M',
  },
  {
    id: 6,
    image: '/playful-app-interface-ad.jpg',
    category: 'App',
    sentiment: 'Fun',
    score: 89,
    views: '3.5M',
  },
  {
    id: 7,
    image: '/clean-fitness-ad.jpg',
    category: 'Fitness',
    sentiment: 'Motivational',
    score: 92,
    views: '2.1M',
  },
  {
    id: 8,
    image: '/modern-real-estate-ad.jpg',
    category: 'Real Estate',
    sentiment: 'Trustworthy',
    score: 87,
    views: '1.5M',
  },
  {
    id: 9,
    image: '/trendy-clothing-ad.jpg',
    category: 'Apparel',
    sentiment: 'Trendy',
    score: 95,
    views: '3.8M',
  },
  {
    id: 10,
    image: '/elegant-jewelry-ad.jpg',
    category: 'Jewelry',
    sentiment: 'Sophisticated',
    score: 90,
    views: '2.6M',
  },
  {
    id: 11,
    image: '/creative-agency-ad.jpg',
    category: 'Agency',
    sentiment: 'Creative',
    score: 94,
    views: '2.3M',
  },
  {
    id: 12,
    image: '/outdoor-adventure-ad.jpg',
    category: 'Travel',
    sentiment: 'Adventurous',
    score: 91,
    views: '3.7M',
  },
]

export function AdScatterGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="examples" className="relative overflow-hidden border-t border-border px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="animate-popup mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Zap className="size-4" />
            <span>Real Results</span>
          </div>
          <h2 className="animate-fade-in-up text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            Analyzed Ad <span className="gradient-text">Examples</span>
          </h2>
          <p className="animate-fade-in mt-4 text-pretty text-lg text-muted-foreground" style={{ animationDelay: '0.1s' }}>
            See how AdSensei analyzes real ad creatives across industries
          </p>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
          {adExamples.map((ad, index) => (
            <div
              key={ad.id}
              className="animate-popup mb-6 break-inside-avoid"
              style={{ animationDelay: `${index * 0.05}s` }}
              onMouseEnter={() => setHoveredId(ad.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={ad.image || "/placeholder.svg"}
                    alt={`${ad.category} ad example`}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${hoveredId === ad.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute inset-0 bg-primary/10" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <Badge variant="secondary" className="animate-slide-in-right bg-primary text-primary-foreground">
                          {ad.category}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className="animate-slide-in-right border-primary/50 bg-background/20 text-foreground backdrop-blur-sm"
                          style={{ animationDelay: '0.1s' }}
                        >
                          {ad.sentiment}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="animate-slide-in-right flex items-center gap-2 text-sm text-foreground" style={{ animationDelay: '0.2s' }}>
                          <TrendingUp className="size-4 text-primary" />
                          <span className="font-semibold">Score: {ad.score}/100</span>
                        </div>
                        <div className="animate-slide-in-right flex items-center gap-2 text-sm text-muted-foreground" style={{ animationDelay: '0.3s' }}>
                          <Eye className="size-4" />
                          <span>{ad.views} views</span>
                        </div>
                      </div>
                      
                      <p className="animate-slide-in-right mt-3 text-xs text-muted-foreground" style={{ animationDelay: '0.4s' }}>
                        AI-analyzed for sentiment and engagement
                      </p>
                    </div>
                  </div>

                  <div className="absolute right-3 top-3">
                    <div className="animate-pulse-glow flex size-12 items-center justify-center rounded-full border-2 border-primary bg-background/80 backdrop-blur-sm">
                      <span className="text-sm font-bold gradient-text">{ad.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
