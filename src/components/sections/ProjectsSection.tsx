import React, { useState } from 'react'
import {
  ExternalLink,
  Layers,
  Cpu,
  Database,
  ShieldCheck,
  Sparkles,
  Server,
  ArrowRight,
  Code2,
} from 'lucide-react'
import { Github } from '@/components/ui/Icons'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Modal } from '@/components/ui/Modal'
import { PROJECTS, Project } from '@/data/portfolioData'
import { BudgetTrackerWidget } from './BudgetTrackerWidget'

export const ProjectsSection: React.FC = () => {
  const [selectedArchitecture, setSelectedArchitecture] = useState<Project | null>(null)
  const [filter, setFilter] = useState<'All' | 'Systems & AI' | 'Full-Stack'>('All')

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'All') return true
    return p.category === filter
  })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#060911]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <Badge variant="default" className="text-xs px-3 py-1 font-semibold mb-2">
              Featured Engineering
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production Projects & <span className="gradient-brand">Architecture</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Systems engineered with end-to-end reliability, containerized sandboxes, relational indexing, and modern reactive frontends.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            {(['All', 'Systems & AI', 'Full-Stack'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-all group overflow-hidden"
            >
              {/* Card top banner */}
              <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

              <CardHeader className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant={project.id === 'judgex' ? 'cyan' : 'emerald'}>
                    {project.category}
                  </Badge>
                  <span className="text-xs font-mono text-slate-400">{project.timeline}</span>
                </div>

                <CardTitle className="text-2xl sm:text-3xl text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-slate-300 font-medium mt-1">
                  {project.subtitle}
                </CardDescription>

                <p className="text-sm text-slate-400 leading-relaxed pt-3">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="p-6 sm:p-8 pt-0 flex-1 flex flex-col justify-between space-y-6">
                {/* Highlights List */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Core Technical Accomplishments:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-indigo-400 font-bold shrink-0 mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* If Budget Tracker, render the interactive widget! */}
                {project.id === 'budget-tracker' && (
                  <div className="pt-2">
                    <BudgetTrackerWidget />
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Technology Stack:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 sm:p-8 pt-0 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedArchitecture(project)}
                  className="text-xs gap-1.5 hover:border-indigo-500/50 hover:text-indigo-300 cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Architecture Deep-Dive</span>
                </Button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-medium text-white shadow-md shadow-indigo-600/30 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Architecture Deep-Dive Modal */}
      {selectedArchitecture && (
        <Modal
          isOpen={!!selectedArchitecture}
          onClose={() => setSelectedArchitecture(null)}
          title={`${selectedArchitecture.title} — System Architecture`}
          description={selectedArchitecture.architecture.overview}
          maxWidth="4xl"
        >
          <div className="space-y-6">
            {/* Key Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {selectedArchitecture.architecture.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-xs text-slate-400">{m.label}</div>
                  <div className="text-lg font-bold text-white mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Architecture Layers */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Architectural Breakdown:
              </h4>
              <div className="space-y-3">
                {selectedArchitecture.architecture.layers.map((layer, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/30 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="font-semibold text-white text-sm">{layer.name}</h5>
                      <span className="text-xs font-mono text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/20">
                        {layer.tech}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-800">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedArchitecture(null)}
                className="cursor-pointer"
              >
                Close Architecture View
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}
