import React, { useState } from 'react'
import {
  Briefcase,
  Shield,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  Terminal,
  Users,
  Compass,
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { EXPERIENCES, LEADERSHIP_DATA } from '@/data/portfolioData'

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'sde' | 'leadership'>('all')

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#070b16]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="purple" className="text-xs px-3 py-1 font-semibold">
            Track Record & Impact
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="gradient-brand">Command Leadership</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Combining rigorous software engineering discipline with battlefield-ready operational command from the National Cadet Corps.
          </p>

          {/* Interactive filter toggle */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Experiences
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('sde')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'sde'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              Software Engineering
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('leadership')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'leadership'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              NCC Leadership & Logistics
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-emerald-500 before:hidden md:before:block">
          {/* SDE Externship Item */}
          {(activeTab === 'all' || activeTab === 'sde') &&
            EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative md:pl-16">
                {/* Timeline node icon */}
                <div className="hidden md:flex absolute left-4 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-slate-950 border-2 border-indigo-500 items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/20 z-10">
                  <Briefcase className="w-4 h-4" />
                </div>

                <Card className="border border-slate-800 bg-slate-900/60 backdrop-blur-xl hover:border-indigo-500/30 transition-all">
                  <CardHeader className="p-6 pb-3">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide">
                            {exp.company}
                          </span>
                          <span className="text-slate-600">•</span>
                          <span className="text-xs text-slate-400">{exp.type}</span>
                        </div>
                        <CardTitle className="text-xl sm:text-2xl text-white mt-1">
                          {exp.role}
                        </CardTitle>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.location}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.period}</span>
                        </span>
                      </div>
                    </div>

                    {exp.badge && (
                      <Badge variant="cyan" className="text-[11px] self-start mt-1">
                        {exp.badge}
                      </Badge>
                    )}
                  </CardHeader>

                  <CardContent className="p-6 pt-2 space-y-4">
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">
                      {exp.description}
                    </p>

                    <div className="space-y-2.5">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Key Responsibilities & Impact:
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                        {exp.achievements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-800">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Technologies Deployed:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}

          {/* Leadership & NCC Item */}
          {(activeTab === 'all' || activeTab === 'leadership') &&
            LEADERSHIP_DATA.map((lead) => (
              <div key={lead.id} className="relative md:pl-16">
                {/* Timeline node icon */}
                <div className="hidden md:flex absolute left-4 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-slate-950 border-2 border-emerald-500 items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/20 z-10">
                  <Shield className="w-4 h-4" />
                </div>

                <Card className="border border-slate-800 bg-slate-900/60 backdrop-blur-xl hover:border-emerald-500/30 transition-all">
                  <CardHeader className="p-6 pb-3">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                            {lead.organization}
                          </span>
                          <span className="text-slate-600">•</span>
                          <span className="text-xs text-slate-400">{lead.location}</span>
                        </div>
                        <CardTitle className="text-xl sm:text-2xl text-white mt-1">
                          {lead.role}
                        </CardTitle>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <Badge variant="emerald" className="text-xs font-bold">
                          {lead.certificate}
                        </Badge>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{lead.period}</span>
                        </span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 pt-2 space-y-4">
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Operational & Command Highlights:
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                        {lead.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-800">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Core Leadership Competencies:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {lead.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-xs font-medium text-emerald-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
