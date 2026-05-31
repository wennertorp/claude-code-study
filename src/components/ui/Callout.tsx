import { Info, AlertTriangle, Lightbulb, XCircle } from 'lucide-react'
import type { CalloutVariant } from '../../types'

interface CalloutProps {
  variant: CalloutVariant
  title?: string
  children: React.ReactNode
}

const config: Record<CalloutVariant, {
  icon: React.ElementType
  bg: string
  border: string
  iconColor: string
  titleColor: string
  defaultTitle: string
}> = {
  info: {
    icon: Info,
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
    titleColor: 'text-blue-300',
    defaultTitle: 'Notera',
  },
  warning: {
    icon: AlertTriangle,
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    iconColor: 'text-orange-400',
    titleColor: 'text-orange-300',
    defaultTitle: 'Risk',
  },
  tip: {
    icon: Lightbulb,
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/30',
    iconColor: 'text-teal-400',
    titleColor: 'text-teal-300',
    defaultTitle: 'Bra prompt',
  },
  avoid: {
    icon: XCircle,
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    iconColor: 'text-red-400',
    titleColor: 'text-red-300',
    defaultTitle: 'Undvik',
  },
}

export function Callout({ variant, title, children }: CalloutProps) {
  const c = config[variant]
  const Icon = c.icon
  const displayTitle = title ?? c.defaultTitle

  return (
    <div className={`flex gap-3 rounded-xl border p-4 my-4 ${c.bg} ${c.border}`}>
      <Icon size={20} className={`flex-shrink-0 mt-0.5 ${c.iconColor}`} />
      <div>
        <p className={`text-sm font-semibold mb-1 ${c.titleColor}`}>{displayTitle}</p>
        <div className="text-sm text-slate-300 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
