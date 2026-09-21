import React from 'react'
import { GraduationCap, MapPin, Calendar, BookOpen, Award, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { EDUCATION_DATA } from '@/data/portfolioData'

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#060911]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="amber" className="text-xs px-3 py-1 font-semibold">
            Academic Background
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-brand">Computer Science Foundations</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            High academic standing at one of India's premier technological institutes, backed by intensive study of algorithmic problem-solving and computer systems.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="border border-slate-800 bg-slate-900/60 backdrop-blur-xl hover:border-amber-500/30 transition-all p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {EDUCATION_DATA.institution}
                  </h3>
                  <p className="text-sm sm:text-base text-amber-300/90 font-medium mt-0.5">
                    {EDUCATION_DATA.degree}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{EDUCATION_DATA.location}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{EDUCATION_DATA.period}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="sm:text-right self-start">
                <div className="inline-flex flex-col sm:items-end px-4 py-2 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-200">
                  <span className="text-[11px] uppercase tracking-wider text-amber-400/80 font-semibold">
                    Cumulative GPA
                  </span>
                  <span className="text-2xl font-black text-white font-mono">
                    8.37 <span className="text-sm font-normal text-slate-400">/ 10.0</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Core Coursework Grid */}
            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Core Computer Science & Engineering Principles:
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
                {EDUCATION_DATA.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-2 text-xs text-slate-300 hover:border-slate-700 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
