import { ArrowRight } from 'lucide-react'

export function WorkflowStages() {
  const stages = [
    { id: 1, name: 'Input Processing', status: 'complete' },
    { id: 2, name: 'Prompt Engineering', status: 'active' },
    { id: 3, name: 'Output Generation', status: 'pending' }
  ]

  return (
    <div className="flex items-center justify-between mb-6">
      {stages.map((stage, index) => (
        <div key={stage.id} className="flex items-center">
          <div className={`flex flex-col items-center ${
            index < stages.length - 1 ? 'flex-1' : ''
          }`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              stage.status === 'complete' ? 'bg-green-500' :
              stage.status === 'active' ? 'bg-blue-500' :
              'bg-gray-700'
            }`}>
              {stage.id}
            </div>
            <span className="text-xs mt-1">{stage.name}</span>
          </div>
          {index < stages.length - 1 && (
            <ArrowRight className="h-4 w-4 mx-2" />
          )}
        </div>
      ))}
    </div>
  )
}
