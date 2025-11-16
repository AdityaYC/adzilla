'use client'

import { useState } from 'react'
import { Info } from 'lucide-react'

interface InfoTooltipProps {
  title: string
  description: string
  example: string
}

export function InfoTooltip({ title, description, example }: InfoTooltipProps) {
  const [show, setShow] = useState(false)

  return (
    <div className="relative inline-block ml-2">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="inline-flex items-center justify-center"
        type="button"
      >
        <Info size={16} className="text-gray-400 hover:text-blue-400 transition-colors" />
      </button>
      {show && (
        <div className="absolute z-50 w-80 p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-xl -top-2 left-8">
          <h4 className="font-bold text-white mb-2">{title}</h4>
          <p className="text-sm text-gray-300 mb-2">{description}</p>
          <div className="text-xs text-gray-400 bg-gray-900 p-2 rounded">
            <strong>Example:</strong> {example}
          </div>
          <div className="absolute w-3 h-3 bg-gray-800 border-l border-t border-gray-700 transform rotate-45 -left-1.5 top-4"></div>
        </div>
      )}
    </div>
  )
}
