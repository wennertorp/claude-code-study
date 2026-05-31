import { XCircle, CheckCircle } from 'lucide-react'
import { CopyButton } from './CopyButton'

interface ComparisonBlockProps {
  bad: { label?: string; text: string }
  good: { label?: string; text: string }
  showCopyOnGood?: boolean
}

export function ComparisonBlock({
  bad,
  good,
  showCopyOnGood = true,
}: ComparisonBlockProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      <div className="rounded-xl border border-red-500/25 bg-red-500/5 p-4">
        <div className="flex items-center gap-2 mb-3">
          <XCircle size={14} className="text-red-400" />
          <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
            {bad.label ?? 'Undvik'}
          </span>
        </div>
        <p className="font-mono text-sm text-red-200/80 leading-relaxed">{bad.text}</p>
      </div>

      <div className="rounded-xl border border-teal-500/25 bg-teal-500/5 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <CheckCircle size={14} className="text-teal-400" />
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
              {good.label ?? 'Bättre'}
            </span>
          </div>
          {showCopyOnGood && <CopyButton text={good.text} />}
        </div>
        <p className="font-mono text-sm text-teal-200/80 leading-relaxed">{good.text}</p>
      </div>
    </div>
  )
}
