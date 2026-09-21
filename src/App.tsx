import React, { useState } from 'react'
import { ToastProvider } from '@/components/ui/Toast'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { JudgeXSimulator } from '@/components/sections/JudgeXSimulator'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SkillsMatrix } from '@/components/sections/SkillsMatrix'
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline'
import { EducationSection } from '@/components/sections/EducationSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { ResumeModal } from '@/components/sections/ResumeModal'
import { CommandMenu } from '@/components/ui/CommandMenu'

export const AppContent: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Dynamic Background Noise / Grid Overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Floating Header */}
      <Navbar
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCommand={() => setIsCommandMenuOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <HeroSection onOpenResume={() => setIsResumeModalOpen(true)} />
        <JudgeXSimulator />
        <ProjectsSection />
        <SkillsMatrix />
        <ExperienceTimeline />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Modals and Overlays */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <CommandMenu
        isOpen={isCommandMenuOpen}
        onClose={() => setIsCommandMenuOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />
    </div>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  )
}
