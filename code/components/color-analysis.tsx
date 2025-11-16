import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const colors = [
  { name: 'Blue', percentage: 35, hex: '#4169E1', emotion: 'Trust, Calm' },
  { name: 'Red', percentage: 25, hex: '#DC143C', emotion: 'Energy, Urgency' },
  { name: 'Yellow', percentage: 20, hex: '#FFD700', emotion: 'Optimism, Warmth' },
  { name: 'Green', percentage: 15, hex: '#228B22', emotion: 'Growth, Health' },
  { name: 'Other', percentage: 5, hex: '#808080', emotion: 'Various' },
]

export function ColorAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Color Psychology Analysis</CardTitle>
        <CardDescription>
          Dominant colors and their emotional impact
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {colors.map((color) => (
            <div key={color.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className="size-4 rounded"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="font-medium">{color.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{color.emotion}</span>
                  <span className="font-semibold">{color.percentage}%</span>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${color.percentage}%`,
                    backgroundColor: color.hex,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
