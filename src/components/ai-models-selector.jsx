'use client'

import { Check, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function AIModelSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedModel, setSelectedModel] = useState({ id: 'gpt4', name: 'GPT-4', provider: 'OpenAI' })

  const models = [
    { id: 'gpt4', name: 'GPT-4', provider: 'OpenAI' },
    { id: 'claude', name: 'Claude 2', provider: 'Anthropic' },
    { id: 'palm', name: 'PaLM', provider: 'Google' },
    { id: 'llama', name: 'Llama 2', provider: 'Meta' }
  ]

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700"
      >
        <div className="flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          <span>{selectedModel.name}</span>
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute w-full mt-2 bg-gray-800 rounded-md shadow-lg border border-gray-700">
          {models.map((model) => (
            <button
              key={model.id}
              className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-700"
              onClick={() => {
                setSelectedModel(model)
                setIsOpen(false)
              }}
            >
              <Check className={`h-4 w-4 mr-2 ${selectedModel.id === model.id ? 'visible' : 'invisible'}`} />
              <span>{model.name}</span>
              <span className="ml-auto text-xs text-gray-400">{model.provider}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
