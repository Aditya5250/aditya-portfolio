import React from 'react'
import { Printer, Copy, ExternalLink, Mail, Phone } from 'lucide-react'
import { Github, Linkedin } from '@/components/ui/Icons'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCES, PROJECTS, LEADERSHIP_DATA } from '@/data/portfolioData'
import { useToast } from '@/components/ui/Toast'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast()

  const handlePrint = () => {
    window.print()
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email)
    toast({
      title: 'Email Copied',
      description: `${PERSONAL_INFO.email} is copied to clipboard.`,
      type: 'success',
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Curriculum Vitae — Aditya Raj"
      description="Official formatted resume preview"
      maxWidth="4xl"
    >
      <div className="space-y-6">
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-800 flex-wrap">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              className="text-xs gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleCopyEmail}
              className="text-xs gap-1.5 cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Email</span>
            </Button>
          </div>

          <span className="text-xs text-slate-400">
            Updated for Software Engineering Roles
          </span>
        </div>

        {/* Formatted Resume Document */}
        <div className="p-6 sm:p-10 rounded-xl bg-[#080d1a] border border-slate-700/80 text-slate-200 font-sans space-y-6 shadow-inner">
          {/* Header */}
          <div className="text-center pb-4 border-b border-slate-700 space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-300">
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-cyan-300">
                {PERSONAL_INFO.phone}
              </a>
              <span>|</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-300">
                {PERSONAL_INFO.email}
              </a>
              <span>|</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-300"
              >
                linkedin.com/in/araaz5935
              </a>
              <span>|</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-300"
              >
                github.com/Aditya5250
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider border-b border-slate-800 pb-1">
              Education
            </h2>
            <div className="flex flex-wrap items-baseline justify-between text-sm">
              <span className="font-semibold text-white">{EDUCATION_DATA.institution}</span>
              <span className="text-xs text-slate-400">{EDUCATION_DATA.location}</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between text-xs text-slate-300">
              <span>{EDUCATION_DATA.degree} — <strong className="text-emerald-400">{EDUCATION_DATA.grade}</strong></span>
              <span>{EDUCATION_DATA.period}</span>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider border-b border-slate-800 pb-1">
              Work Experience
            </h2>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-wrap items-baseline justify-between text-sm font-semibold text-white">
                  <span>{exp.company} | {exp.role}</span>
                </div>
                <div className="text-xs text-indigo-300 font-medium">
                  JudgeX – AI-Powered Online Coding Judge (Live | GitHub)
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  React.js, Node.js, Express.js, MongoDB, Gemini AI, Docker, AWS, Vercel
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider border-b border-slate-800 pb-1">
              Projects
            </h2>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-baseline justify-between text-sm font-semibold text-white">
                <span>Budget Tracker Web Application</span>
                <span className="text-xs text-slate-400">Live | GitHub</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                React, Node.js, Express, PostgreSQL, JWT
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300">
                <li>Designed and developed a full-stack financial management application using React, Node.js, Express, and PostgreSQL, implementing RESTful backend services for secure transaction management.</li>
                <li>Developed REST APIs for transaction workflows and implemented JWT authentication with user-level authorization to enforce secure access to application data.</li>
                <li>Optimized PostgreSQL performance through schema indexing and query refinement for frequently accessed transaction data, improving database query efficiency.</li>
                <li>Developed state-driven frontend workflows to handle asynchronous operations reliably and mitigate race-condition issues during concurrent UI updates.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider border-b border-slate-800 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs text-slate-300 leading-relaxed">
              <p><strong className="text-white">Languages:</strong> C++, Python, JavaScript (ES6+), SQL</p>
              <p><strong className="text-white">Core CS:</strong> Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, System Design</p>
              <p><strong className="text-white">Backend & APIs:</strong> Node.js, Express.js, REST APIs, JWT Authentication, RBAC, API Integration</p>
              <p><strong className="text-white">Frontend:</strong> React.js, Vite, Tailwind CSS, Responsive Design</p>
              <p><strong className="text-white">Databases:</strong> PostgreSQL, MongoDB, SQL, Database Design, Schema Indexing</p>
              <p><strong className="text-white">Cloud & DevOps:</strong> AWS EC2, AWS ECR, Docker, Vercel</p>
              <p><strong className="text-white">Tools:</strong> Git, GitHub, Linux, VS Code, Postman, Chrome DevTools, Thunder Client</p>
              <p><strong className="text-white">Engineering:</strong> Debugging & Troubleshooting, API Testing, Problem Solving, Software Development</p>
            </div>
          </div>

          {/* Leadership & Extracurricular Activities */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider border-b border-slate-800 pb-1">
              Leadership & Extracurricular Activities
            </h2>
            {LEADERSHIP_DATA.map((lead) => (
              <div key={lead.id} className="space-y-1.5">
                <div className="flex flex-wrap items-baseline justify-between text-sm">
                  <span className="font-semibold text-white">{lead.organization}</span>
                  <span className="text-xs text-slate-400">{lead.location}</span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between text-xs text-slate-300">
                  <span className="font-medium text-emerald-300">{lead.role}</span>
                  <span>{lead.period}</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300">
                  {lead.highlights.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  )
}
