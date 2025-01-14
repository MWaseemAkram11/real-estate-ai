'use client'

import { Search, PenTool, BrainCircuit, MessageSquare, FileText, Mail, Calendar, Table, GitBranch, HelpCircle, Layout, Download, Bold, Italic, Link, Image, Code, MoreHorizontal, Smile } from 'lucide-react'

export function AIChat() {
  const sections = {
    suggested: [
      { icon: "✨", label: "New Year's resolution", color: "text-purple-400" },
      { icon: "🔍", label: "Ask a question", color: "text-blue-400" },
      { icon: "📝", label: "Draft anything", color: "text-purple-400" },
      { icon: "💡", label: "Brainstorm ideas", color: "text-green-400" },
      { icon: "❓", label: "What can AI do?", color: "text-gray-400" },
    ],
    think: [
      { icon: "📊", label: "Summarize", color: "text-green-400" },
      { icon: "</>", label: "Get help with code", color: "text-blue-400" },
    ],
    draft: [
      { icon: "📄", label: "Draft an outline", color: "text-purple-400" },
      { icon: "✉️", label: "Draft an email", color: "text-purple-400" },
      { icon: "📅", label: "Draft a meeting agenda", color: "text-purple-400" },
    ],
    write: [
      { icon: "📊", label: "Make a table", color: "text-purple-400" },
      { icon: "📈", label: "Make a flowchart", color: "text-purple-400" },
    ],
    more: [
      { icon: "❓", label: "Get AI support", color: "text-gray-400" },
      { icon: "📑", label: "Browse templates", color: "text-gray-400" },
      { icon: "⬇️", label: "Import", color: "text-gray-400" },
    ]
  }

  const formatButtons = [
    { icon: Bold, label: "Bold" },
    { icon: Italic, label: "Italic" },
    { icon: Link, label: "Link" },
    { icon: Image, label: "Image" },
    { icon: Code, label: "Code" },
  ]

  return (
    <div className="flex-1 flex flex-col bg-[#1a1a1a] text-gray-200">
      {/* Welcome Section */}
      <div className="p-8 flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
          <MessageSquare className="w-6 h-6" />
        </div>
        <h2 className="text-xl mb-2">Hi! How can I help you today?</h2>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 max-w-2xl mx-auto w-full">
        {/* Suggested Section */}
        <div className="mb-8">
          <h3 className="text-sm text-gray-400 mb-2">Suggested</h3>
          <div className="space-y-1">
            {sections.suggested.map((item) => (
              <button
                key={item.label}
                className="w-full text-left px-3 py-1.5 rounded hover:bg-gray-800 flex items-center gap-2"
              >
                <span className="text-lg">{item.icon}</span>
                <span className={item.color}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Think, ask, chat Section */}
        <div className="mb-8">
          <h3 className="text-sm text-gray-400 mb-2">Think, ask, chat</h3>
          <div className="space-y-1">
            {sections.think.map((item) => (
              <button
                key={item.label}
                className="w-full text-left px-3 py-1.5 rounded hover:bg-gray-800 flex items-center gap-2"
              >
                <span className="text-lg">{item.icon}</span>
                <span className={item.color}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Draft Section */}
        <div className="mb-8">
          <h3 className="text-sm text-gray-400 mb-2">Draft</h3>
          <div className="space-y-1">
            {sections.draft.map((item) => (
              <button
                key={item.label}
                className="w-full text-left px-3 py-1.5 rounded hover:bg-gray-800 flex items-center gap-2"
              >
                <span className="text-lg">{item.icon}</span>
                <span className={item.color}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Write Section */}
        <div className="mb-8">
          <h3 className="text-sm text-gray-400 mb-2">Write</h3>
          <div className="space-y-1">
            {sections.write.map((item) => (
              <button
                key={item.label}
                className="w-full text-left px-3 py-1.5 rounded hover:bg-gray-800 flex items-center gap-2"
              >
                <span className="text-lg">{item.icon}</span>
                <span className={item.color}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* More Section */}
        <div className="mb-8">
          <h3 className="text-sm text-gray-400 mb-2">More</h3>
          <div className="space-y-1">
            {sections.more.map((item) => (
              <button
                key={item.label}
                className="w-full text-left px-3 py-1.5 rounded hover:bg-gray-800 flex items-center gap-2"
              >
                <span className="text-lg">{item.icon}</span>
                <span className={item.color}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="p-4 border-t border-gray-800">
        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask anything or select..."
              className="w-full bg-gray-800 rounded-lg pl-4 pr-32 py-3 focus:outline-none focus:ring-1 focus:ring-gray-700"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {formatButtons.map((button) => (
                <button
                  key={button.label}
                  className="p-1 hover:bg-gray-700 rounded"
                  title={button.label}
                >
                  <button.icon className="w-4 h-4 text-gray-400" />
                </button>
              ))}
              <span className="w-px h-4 bg-gray-700 mx-1" />
              <button className="p-1 hover:bg-gray-700 rounded" title="More options">
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-1 hover:bg-gray-700 rounded" title="Emoji">
                <Smile className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}