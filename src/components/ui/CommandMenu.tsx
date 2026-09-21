import React, { useState, useEffect } from 'react'
import { Search, Code2, Briefcase, Award, GraduationCap, Mail, FileText, Terminal, X } from 'lucide-react'
import { Github, Linkedin } from '@/components/ui/Icons'
import { PERSONAL_INFO } from '@/data/portfolioData'
import { useToast } from './Toast'

interface CommandMenuProps {
  isOpen: boolean
  onClose: () => void
  onOpenResume: () => void
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [search, setSearch] = useState('')
  const { toast } = useToast()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const navigationItems = [
    {
      id: 'judgex-sim',
      title: 'Run JudgeX Sandbox Simulator',
      subtitle: 'Simulate C++ Docker execution & Gemini hints',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      action: () => {
        document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'projects',
      title: 'View Projects (JudgeX & Budget Tracker)',
      subtitle: 'Architecture deep-dives and source repos',
      icon: <Code2 className="w-4 h-4 text-indigo-400" />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'skills',
      title: 'Technical Skills Matrix',
      subtitle: 'Languages, Core CS, Docker, AWS, PostgreSQL',
      icon: <Award className="w-4 h-4 text-cyan-400" />,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'experience',
      title: 'Experience & NCC Leadership',
      subtitle: 'AlgoUniversity SDE & NCC Sergeant Operations',
      icon: <Briefcase className="w-4 h-4 text-purple-400" />,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'education',
      title: 'Education: BIT Mesra',
      subtitle: 'B.Tech in Mechanical Engineering (CGPA 8.37)',
      icon: <GraduationCap className="w-4 h-4 text-amber-400" />,
      action: () => {
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'resume',
      title: 'View Full Resume Modal',
      subtitle: 'Interactive formatted PDF layout',
      icon: <FileText className="w-4 h-4 text-blue-400" />,
      action: () => {
        onClose()
        onOpenResume()
      },
    },
    {
      id: 'copy-email',
      title: `Copy Email (${PERSONAL_INFO.email})`,
      subtitle: 'Click to copy to clipboard',
      icon: <Mail className="w-4 h-4 text-rose-400" />,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email)
        toast({
          title: 'Email Copied!',
          description: `${PERSONAL_INFO.email} is ready to paste.`,
          type: 'success',
        })
        onClose()
      },
    },
    {
      id: 'github',
      title: 'Visit GitHub Profile',
      subtitle: 'github.com/Aditya5250',
      icon: <Github className="w-4 h-4 text-slate-300" />,
      action: () => {
        window.open(PERSONAL_INFO.github, '_blank')
        onClose()
      },
    },
    {
      id: 'linkedin',
      title: 'Visit LinkedIn Profile',
      subtitle: 'linkedin.com/in/araaz5935',
      icon: <Linkedin className="w-4 h-4 text-sky-400" />,
      action: () => {
        window.open(PERSONAL_INFO.linkedin, '_blank')
        onClose()
      },
    },
  ]

  const filteredItems = navigationItems.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xl rounded-2xl bg-[#0d121f] border border-slate-700/80 shadow-2xl overflow-hidden z-10 animate-in zoom-in-95">
        {/* Search header */}
        <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-900/60">
          <Search className="w-5 h-5 text-slate-400 mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Type a command, project, or skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none text-sm"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="p-2 max-h-80 overflow-y-auto custom-scrollbar">
          {filteredItems.length === 0 ? (
            <p className="text-center text-xs text-slate-500 py-6">No matching actions found</p>
          ) : (
            filteredItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={item.action}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-indigo-600/15 hover:border-indigo-500/20 border border-transparent transition-all group cursor-pointer"
              >
                <div className="p-2 rounded-lg bg-slate-800/80 group-hover:bg-indigo-600/30 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200 group-hover:text-white">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-400">{item.subtitle}</div>
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-slate-800/80 bg-slate-950/60 flex items-center justify-between text-xs text-slate-500">
          <span>Navigation Quick Menu</span>
          <span className="flex items-center gap-1.5">
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">ESC</kbd> to exit
          </span>
        </div>
      </div>
    </div>
  )
}
