'use client'

export function StatsSection() {
  const stats = [
    { value: '98%', label: 'Accuracy Rate', gradient: 'from-primary to-accent' },
    { value: '50k+', label: 'Ads Analyzed', gradient: 'from-accent to-primary' },
    { value: '2.5x', label: 'Average ROI Increase', gradient: 'from-primary via-accent to-primary' },
    { value: '500+', label: 'Happy Customers', gradient: 'from-accent to-primary' },
  ]

  return (
    <section className="relative overflow-hidden border-y border-border bg-background px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/5 to-background" />
      <div className="pointer-events-none absolute left-0 top-1/2 size-96 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 size-96 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="animate-popup text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-6xl font-bold text-transparent transition-transform hover:scale-110 sm:text-7xl`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
