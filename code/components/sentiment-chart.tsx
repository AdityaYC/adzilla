'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { name: 'Positive', value: 65, fill: 'hsl(var(--chart-1))' },
  { name: 'Neutral', value: 25, fill: 'hsl(var(--chart-2))' },
  { name: 'Negative', value: 10, fill: 'hsl(var(--chart-5))' },
]

export function SentimentChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sentiment Distribution</CardTitle>
        <CardDescription>
          Overall sentiment breakdown across all analyzed ads
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--popover))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
