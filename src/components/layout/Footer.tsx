import React from 'react'
import { ArrowUp, Mail, Phone, Code2 } from 'lucide-react'
import { Github, Linkedin } from '@/components/ui/Icons'
import { PERSONAL_INFO } from '@/data/portfolioData'

interface FooterProps {
  onOpenResume: () => void
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-800/80 bg-[#05070e] text-slate-400 py-12 px-4 sm:px-6 lg:px-8 mt-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center font-mono font-bold text-white text-sm">
                AR
              </div>
              <span className="text-lg font-bold text-white tracking-tight">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {PERSONAL_INFO.title} • {PERSONAL_INFO.institute}. Passionate about systems programming, isolated sandboxes, and modern reactive full-stack web applications.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:text-sky-400 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-rose-500/50 hover:text-rose-400 flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 flex items-center justify-center transition-all"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#simulator" className="hover:text-cyan-400 transition-colors">
                  JudgeX Sandbox Simulator
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Projects & Architecture
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  Technical Skills Matrix
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">
                  Work & NCC Leadership
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">
                  BIT Mesra Education
                </a>
              </li>
            </ul>
          </div>

          {/* Direct actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Connect & View</h4>
            <div className="space-y-2 text-sm">
              <button
                type="button"
                onClick={onOpenResume}
                className="block text-indigo-400 hover:text-indigo-300 font-medium transition-colors text-left cursor-pointer"
              >
                📄 Interactive Resume Viewer
              </button>
              <a
                href="#contact"
                className="block text-slate-400 hover:text-slate-200 transition-colors"
              >
                💬 Send a Direct Message
              </a>
              <p className="text-xs text-slate-500 pt-1">
                Based in Ranchi, India • Available for Remote & Onsite roles worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1 text-slate-500">
            <span>© {new Date().getFullYear()} Aditya Raj. Engineered with React, TypeScript & TailwindCSS.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
