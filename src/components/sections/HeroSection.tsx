import React from 'react'
import {
  Terminal,
  FileText,
  Copy,
  ExternalLink,
  Mail,
  Phone,
  Shield,
  Layers,
  Cpu,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { Github, Linkedin } from '@/components/ui/Icons'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { PERSONAL_INFO } from '@/data/portfolioData'
import { useToast } from '@/components/ui/Toast'

interface HeroSectionProps {
  onOpenResume: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const { toast } = useToast()

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email)
    toast({
      title: 'Email Copied to Clipboard!',
      description: `${PERSONAL_INFO.email} is ready to paste.`,
      type: 'success',
    })
  }

  return (
    <section
      id="hero"
      className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-radial-gradient"
    >
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 shadow-lg shadow-emerald-950/20 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-emerald-300 tracking-wide uppercase">
              {PERSONAL_INFO.status}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-slate-300">BIT Mesra (CGPA 8.37)</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Engineering Resilient <br />
              <span className="gradient-brand">Full-Stack Architectures</span> <br />
              <span className="text-slate-300 font-light">& Isolated Sandboxes</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed pt-2">
              Hi, I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. A full-stack software engineer specialized in C++, React, Node.js, and Docker-containerized execution systems. Builder of <span className="text-indigo-400 font-medium">JudgeX</span>.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Button
              variant="glow"
              size="lg"
              onClick={() => {
                document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-cyan-200 group-hover:scale-110 transition-transform" />
              <span>Try Code Sandbox Simulator</span>
              <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="cursor-pointer"
            >
              <span>Explore Projects</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={onOpenResume}
              className="gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>View Resume</span>
            </Button>
          </div>

          {/* Social and Fast Contact Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-rose-400" />
              <span>{PERSONAL_INFO.email}</span>
              <Copy className="w-3 h-3 text-slate-500 ml-1" />
            </button>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-slate-200" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>

          {/* Quick-Stats Grid */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md hover:border-indigo-500/30 transition-all group text-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-1">{stat.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
