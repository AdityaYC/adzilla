import { UploadInterface } from '@/components/upload-interface'

export default function UploadPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-laser-flow" />
        <div className="absolute left-0 top-2/3 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-laser-flow" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="absolute right-1/4 top-20 size-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-20 left-1/4 size-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center animate-fade-in-up">
            <h1 className="text-balance text-5xl font-bold tracking-tight gradient-text">
              Upload Ad Creatives
            </h1>
            <p className="mt-4 text-pretty text-xl text-muted-foreground">
              Upload your ad images for AI-powered analysis and actionable insights
            </p>
          </div>
          <UploadInterface />
        </div>
      </div>
    </main>
  )
}
