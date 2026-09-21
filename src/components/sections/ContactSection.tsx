import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, ExternalLink } from 'lucide-react'
import { Github, Linkedin } from '@/components/ui/Icons'
import confetti from 'canvas-confetti'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { PERSONAL_INFO } from '@/data/portfolioData'
import { useToast } from '@/components/ui/Toast'

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('Full-Time SDE Opportunity')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setName('')
      setEmail('')
      setMessage('')

      // Confetti celebration
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.7 },
      })

      toast({
        title: 'Message Dispatched!',
        description: 'Thank you for reaching out! Aditya will respond promptly.',
        type: 'success',
      })
    }, 1000)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email)
    toast({
      title: 'Email Copied',
      description: `${PERSONAL_INFO.email} is ready in your clipboard.`,
      type: 'success',
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#070b16]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="emerald" className="text-xs px-3 py-1 font-semibold">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="gradient-brand">Exceptional</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in discussing software engineering roles, system architecture, or full-stack opportunities? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Card className="p-6 border border-slate-800 bg-slate-900/60 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-4">Direct Channels</h3>
              <div className="space-y-4">
                {/* Email card */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Email</div>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="text-xs sm:text-sm font-semibold text-white hover:text-rose-400 transition-colors"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                      title="Copy email"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Phone card */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Phone & WhatsApp</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors font-mono"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location card */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Location</div>
                      <div className="text-xs sm:text-sm font-semibold text-white">
                        {PERSONAL_INFO.location}
                      </div>
                      <div className="text-[11px] text-slate-500">Birla Institute of Technology, Mesra</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social profiles */}
              <div className="pt-6 mt-6 border-t border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Social & Code
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-sky-500/40 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <Linkedin className="w-4 h-4 text-sky-400" />
                      LinkedIn
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-600 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <Github className="w-4 h-4 text-slate-200" />
                      GitHub
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 border border-slate-800 bg-slate-900/60 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Have a project or opportunity? Send a note directly to Aditya's inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject / Opportunity Type
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="Full-Time SDE Opportunity">Full-Time SDE Opportunity</option>
                    <option value="Summer / Fall Internship">Summer / Fall Internship</option>
                    <option value="Technical Collaboration">Technical Collaboration / Project</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Hello Aditya, we came across your work on JudgeX and would love to discuss..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full text-sm font-semibold gap-2 mt-2 cursor-pointer"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-spin' : ''}`} />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
