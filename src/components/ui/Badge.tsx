import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'emerald' | 'cyan' | 'amber' | 'purple'
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors border'

  const variants = {
    default: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/20',
    outline: 'bg-transparent text-slate-300 border-slate-700/80 hover:border-slate-600',
    secondary: 'bg-slate-800/80 text-slate-300 border-slate-700/50 hover:bg-slate-800',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/20',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/20 hover:bg-amber-500/20',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20 hover:bg-purple-500/20',
  }

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  )
}
