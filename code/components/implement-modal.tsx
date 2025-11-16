'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ExternalLink, Wand2, Video, Image as ImageIcon } from 'lucide-react'

interface Tool {
  name: string
  description: string
  url: string
}

interface ImplementModalProps {
  isOpen: boolean
  onClose: () => void
  recommendation: string
  adType: 'image' | 'video' | 'text'
  tools?: Tool[]
}

export function ImplementModal({ isOpen, onClose, recommendation, adType, tools = [] }: ImplementModalProps) {
  if (adType === 'video') {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Video className="size-5 text-primary" />
              Video Editing Tools
            </DialogTitle>
            <DialogDescription>
              Recommended tools to implement: "{recommendation}"
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group rounded-lg border border-primary/20 bg-gradient-to-br from-card to-card/50 p-4 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{tool.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      Visit Website
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-accent"
                    onClick={() => window.open(tool.url, '_blank')}
                  >
                    <ExternalLink className="mr-2 size-3" />
                    Open
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  // For images/text - AI implementation
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wand2 className="size-5 text-primary" />
            AI Auto-Implementation
          </DialogTitle>
          <DialogDescription>
            Automatically apply changes with AI
          </DialogDescription>
        </DialogHeader>

        <div className="py-6 space-y-4">
          <div className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-6">
            <div className="flex items-start gap-3 mb-4">
              <ImageIcon className="size-5 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Recommendation</h4>
                <p className="text-sm text-muted-foreground">{recommendation}</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-accent/20 bg-accent/5 p-6">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Wand2 className="size-4 text-accent" />
              AI Implementation Options
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="size-2 rounded-full bg-accent mt-2" />
                <div>
                  <p className="font-medium text-sm">Auto-Edit Image</p>
                  <p className="text-xs text-muted-foreground">AI will automatically apply the recommended changes to your image</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-2 rounded-full bg-accent mt-2" />
                <div>
                  <p className="font-medium text-sm">Generate Variations</p>
                  <p className="text-xs text-muted-foreground">Create multiple versions with different implementations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-2 rounded-full bg-accent mt-2" />
                <div>
                  <p className="font-medium text-sm">Smart Suggestions</p>
                  <p className="text-xs text-muted-foreground">Get step-by-step guidance to implement manually</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4">
            <p className="text-sm text-yellow-700 dark:text-yellow-400">
              <strong>Coming Soon!</strong> This feature will use AI to automatically implement the recommendations on your images and text posts.
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button className="bg-gradient-to-r from-primary to-accent" disabled>
            <Wand2 className="mr-2 size-4" />
            Apply Changes (Coming Soon)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
