import React, { useState, useMemo } from 'react'
import {
  Search,
  Code,
  Cpu,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  CheckCircle,
  Tag,
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { SKILL_CATEGORIES } from '@/data/portfolioData'

export const SkillsMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categoryIcons: Record<string, React.ReactNode> = {
    Languages: <Code className="w-4 h-4 text-indigo-400" />,
    'Core Computer Science': <Cpu className="w-4 h-4 text-cyan-400" />,
    'Frontend & UI Engineering': <Layout className="w-4 h-4 text-pink-400" />,
    'Backend & APIs': <Server className="w-4 h-4 text-emerald-400" />,
    'Databases & Storage': <Database className="w-4 h-4 text-amber-400" />,
    'Cloud, DevOps & Tools': <Cloud className="w-4 h-4 text-purple-400" />,
  }

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((cat) => {
      const matchesCategory = selectedCategory === 'All' || cat.category === selectedCategory
      if (!matchesCategory) return null

      const matchingSkills = cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.tag.toLowerCase().includes(searchTerm.toLowerCase())
      )

      if (searchTerm && matchingSkills.length === 0) return null

      return {
        ...cat,
        skills: matchingSkills,
      }
    }).filter(Boolean) as typeof SKILL_CATEGORIES
  }, [searchTerm, selectedCategory])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#060911]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="cyan" className="text-xs px-3 py-1 font-semibold">
            Technical Arsenal
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="gradient-cyan-indigo">Skills & Foundations</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Proficiencies forged through competitive programming in C++, full-stack microservices, isolated sandbox systems, and relational optimization.
          </p>

          {/* Search bar & filter pill bar */}
          <div className="pt-6 max-w-xl mx-auto space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skills (e.g. Docker, C++, PostgreSQL, React, JWT)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors shadow-inner"
              />
            </div>

            {/* Category pills */}
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              {['All', ...SKILL_CATEGORIES.map((c) => c.category)].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                      : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup) => (
            <Card
              key={catGroup.category}
              className="border border-slate-800/80 bg-slate-900/50 backdrop-blur-xl hover:border-slate-700 transition-all flex flex-col p-6"
            >
              {/* Category title */}
              <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-slate-800/80">
                  {categoryIcons[catGroup.category] || <Wrench className="w-4 h-4 text-slate-400" />}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{catGroup.category}</h3>
                  <p className="text-[11px] text-slate-400">{catGroup.description}</p>
                </div>
              </div>

              {/* Skills list inside category */}
              <div className="space-y-3 flex-1">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-indigo-500/30 transition-colors group"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          skill.level === 'Advanced'
                            ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                            : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {skill.description}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-500">
                      <Tag className="w-3 h-3" />
                      <span>{skill.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <p className="text-sm">No skills found matching "{searchTerm}"</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className="mt-2 text-xs text-indigo-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
