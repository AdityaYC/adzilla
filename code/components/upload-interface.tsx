'use client'

import { useState, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Upload, FileImage, X, Loader2, Sparkles, Zap, TrendingUp, Eye, Target } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { addAnalysis, generateAnalysis } from '@/lib/analysis-store'

export function UploadInterface() {
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisProgress, setAnalysisProgress] = useState(0)
  const router = useRouter()

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const droppedFiles = Array.from(e.dataTransfer.files).filter(file =>
      file.type.startsWith('image/')
    )
    setFiles(prev => [...prev, ...droppedFiles])
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      setFiles(prev => [...prev, ...selectedFiles])
    }
  }, [])

  const removeFile = useCallback((index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }, [])

  const handleAnalyze = async () => {
    if (files.length === 0) return
    
    setIsAnalyzing(true)
    setAnalysisProgress(0)
    
    const steps = files.length * 4
    let currentStep = 0
    
    for (const file of files) {
      // Convert file to base64 for storage
      const reader = new FileReader()
      const imageData = await new Promise<string>((resolve) => {
        reader.onload = (e) => resolve(e.target?.result as string)
        reader.readAsDataURL(file)
      })
      
      // Simulate analysis steps
      await new Promise(resolve => setTimeout(resolve, 300))
      currentStep++
      setAnalysisProgress((currentStep / steps) * 100)
      
      await new Promise(resolve => setTimeout(resolve, 300))
      currentStep++
      setAnalysisProgress((currentStep / steps) * 100)
      
      await new Promise(resolve => setTimeout(resolve, 300))
      currentStep++
      setAnalysisProgress((currentStep / steps) * 100)
      
      const analysis = await generateAnalysis(file, imageData)
      addAnalysis(analysis)
      
      await new Promise(resolve => setTimeout(resolve, 300))
      currentStep++
      setAnalysisProgress((currentStep / steps) * 100)
    }
    
    router.push('/dashboard')
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <div className="animate-popup group rounded-xl border border-primary/20 bg-gradient-to-br from-card to-card/50 p-5 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors">
              <TrendingUp className="size-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold">Sentiment Analysis</div>
              <div className="text-xs text-muted-foreground">Measure emotional impact</div>
            </div>
          </div>
        </div>

        <div className="animate-popup group rounded-xl border border-primary/20 bg-gradient-to-br from-card to-card/50 p-5 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors">
              <Eye className="size-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold">Color Psychology</div>
              <div className="text-xs text-muted-foreground">Understand visual appeal</div>
            </div>
          </div>
        </div>

        <div className="animate-popup group rounded-xl border border-primary/20 bg-gradient-to-br from-card to-card/50 p-5 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors">
              <Target className="size-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold">AI Recommendations</div>
              <div className="text-xs text-muted-foreground">Get actionable insights</div>
            </div>
          </div>
        </div>
      </div>

      <Card className="animate-fade-in-up border-primary/20 bg-gradient-to-br from-card to-card/50 shadow-xl backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="size-5 text-primary animate-pulse-glow" />
            Upload Files
          </CardTitle>
          <CardDescription>
            Drag and drop your ad images or click to browse
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all ${
              isDragging
                ? 'border-primary bg-primary/20 shadow-lg shadow-primary/30'
                : 'border-border hover:border-primary/50 hover:bg-primary/5'
            }`}
          >
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              className="absolute inset-0 cursor-pointer opacity-0"
            />
            <div className={`transition-transform ${isDragging ? 'scale-110' : ''}`}>
              <Upload className="size-16 text-muted-foreground" />
            </div>
            <p className="mt-4 text-sm font-medium">
              Drop your ad images here or click to browse
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Supports JPG, PNG, GIF up to 10MB each
            </p>
            <div className="mt-6 flex gap-2">
              <div className="size-2 rounded-full bg-primary/40 animate-pulse" />
              <div className="size-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="size-2 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </CardContent>
      </Card>

      {files.length > 0 && (
        <Card className="animate-popup border-primary/20 bg-gradient-to-br from-card to-card/50 shadow-xl backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <FileImage className="size-5 text-primary" />
                  Selected Files ({files.length})
                </CardTitle>
                <CardDescription>
                  Review your uploads before analyzing
                </CardDescription>
              </div>
              <div className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Batch of {files.length}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4 transition-all hover:border-primary/40 hover:bg-card hover:shadow-md hover:shadow-primary/10"
                  style={{ animation: 'popup 0.3s ease-out', animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex size-14 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <FileImage className="size-6 text-primary" />
                  </div>
                  <div className="flex-1 truncate">
                    <p className="truncate font-medium">{file.name}</p>
                    <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                      <span className="size-1 rounded-full bg-muted-foreground/40" />
                      <span className="text-primary">Ready for analysis</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFile(index)}
                    className="hover:bg-destructive/10 hover:text-destructive transition-colors"
                  >
                    <X className="size-4" />
                  </Button>
                </div>
              ))}
            </div>
            
            {isAnalyzing && (
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Analysis Progress</span>
                  <span className="font-medium text-primary">{Math.round(analysisProgress)}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 animate-pulse-glow"
                    style={{ width: `${analysisProgress}%` }}
                  />
                </div>
              </div>
            )}

            <Button
              className="mt-6 w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all animate-pulse-glow"
              size="lg"
              onClick={handleAnalyze}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 size-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 size-5" />
                  Analyze {files.length} {files.length === 1 ? 'Ad' : 'Ads'}
                  <Zap className="ml-2 size-5" />
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
