import { Code, Save } from 'lucide-react'

export function PromptTemplate() {
  const templates = [
    { id: 1, name: 'Market Analysis', version: '2.1' },
    { id: 2, name: 'Property Valuation', version: '1.3' },
    { id: 3, name: 'Ad Copy Generation', version: '3.0' }
  ]

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium flex items-center">
          <Code className="h-4 w-4 mr-2" />
          Prompt Templates
        </h3>
        <button className="text-xs bg-gray-700 px-2 py-1 rounded-md hover:bg-gray-600">
          <Save className="h-3 w-3" />
        </button>
      </div>
      <div className="space-y-2">
        {templates.map((template) => (
          <div
            key={template.id}
            className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-md cursor-pointer"
          >
            <span className="text-sm">{template.name}</span>
            <span className="text-xs text-gray-400">v{template.version}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
