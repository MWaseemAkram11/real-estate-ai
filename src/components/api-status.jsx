import { Activity } from 'lucide-react'

export function APIStatus() {
  const integrations = [
    { name: 'Funda API', status: 'active' },
    { name: 'SEO Tools', status: 'active' },
    { name: 'Google Ads', status: 'pending' },
    { name: 'Meta Ads', status: 'active' },
    { name: 'LinkedIn Ads', status: 'inactive' }
  ]

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-sm font-medium mb-3 flex items-center">
        <Activity className="h-4 w-4 mr-2" />
        API Integrations
      </h3>
      <div className="space-y-2">
        {integrations.map((integration) => (
          <div key={integration.name} className="flex items-center justify-between">
            <span className="text-sm">{integration.name}</span>
            <span className={`inline-block w-2 h-2 rounded-full ${
              integration.status === 'active' ? 'bg-green-500' :
              integration.status === 'pending' ? 'bg-yellow-500' :
              'bg-red-500'
            }`} />
          </div>
        ))}
      </div>
    </div>
  )
}