'use client'

import { Home, Inbox, Calendar, FileText, Settings, PenTool, Briefcase, MessageSquare, Database } from 'lucide-react'
import { useState } from 'react'
import { AIModelSelector } from '../components/ai-models-selector'
import { APIStatus } from '../components/api-status'
import { PromptTemplate } from '../components/prompt-template'
import { WorkflowStages } from '../components/workflow-stages'
import { AIChat } from '../components/ai-chat'

export default function Workspace() {
  const [activeSection, setActiveSection] = useState('home')

  const sidebarItems = [
    { icon: Home, label: 'Home', id: 'home' },
    { icon: Inbox, label: 'Inbox', id: 'inbox' },
    { icon: Briefcase, label: 'Projects', id: 'projects' },
    { icon: FileText, label: 'Documents', id: 'documents' },
    { icon: MessageSquare, label: 'AI Chat', id: 'ai-chat' },
    { icon: Database, label: 'API Hub', id: 'api-hub' },
    { icon: Calendar, label: 'Calendar', id: 'calendar' },
    { icon: Settings, label: 'Settings', id: 'settings' }
  ]

  const suggestedActions = [
    { icon: "✨", label: "Start New Project", action: "new-project" },
    { icon: "🔍", label: "Market Analysis", action: "analysis" },
    { icon: "📝", label: "Create Strategic Plan", action: "plan" },
    { icon: "🤖", label: "Connect with AI Agent", action: "ai-connect" }
  ]

  return (
    <div className="flex h-screen bg-[#1a1a1a] text-gray-200">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-800 p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold mb-4">Real Estate Workspace</h1>
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full bg-gray-800 rounded-md py-2 px-4 text-sm"
            />
          </div>
        </div>
        
        <nav>
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center space-x-2 w-full p-2 rounded-md mb-1 hover:bg-gray-800 ${
                activeSection === item.id ? 'bg-gray-800' : ''
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {activeSection === 'ai-chat' ? (
          <AIChat />
        ) : (
          <>
            {/* Top Bar */}
            <div className="border-b border-gray-800 p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Project Workspace</h2>
                <AIModelSelector />
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 overflow-auto">
              <div className="max-w-4xl mx-auto">
                <WorkflowStages />
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="col-span-2">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <PenTool className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Welcome to your workspace</h3>
                      <p className="text-gray-400">Manage your real estate projects with AI assistance</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {suggestedActions.map((action) => (
                        <button
                          key={action.action}
                          className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-left"
                        >
                          <span className="text-2xl mb-2 block">{action.icon}</span>
                          <span className="font-medium">{action.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <APIStatus />
                    <PromptTemplate />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Input */}
            <div className="border-t border-gray-800 p-4">
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type a message or use / for commands..."
                    className="w-full bg-gray-800 rounded-lg py-3 px-4 pr-12"
                  />
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                    <MessageSquare className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}