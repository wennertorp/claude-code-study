import { CopyButton } from './CopyButton'
import type { PromptCard as PromptCardType } from '../../types'

interface PromptCardProps {
  prompt: PromptCardType
}

export function PromptCard({ prompt }: PromptCardProps) {
  return (
    <div className="card group hover:border-teal-500/40 transition-colors duration-200">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span className="badge bg-teal-500/15 text-teal-300 border border-teal-500/25 mr-2">
            {prompt.category}
          </span>
          <span className="text-sm font-semibold text-slate-100">{prompt.categoryLabel}</span>
        </div>
        <CopyButton text={prompt.prompt} />
      </div>
      {prompt.description && (
        <p className="text-xs text-slate-500 mb-3">{prompt.description}</p>
      )}
      <div className="prompt-block text-sm">
        {prompt.prompt}
      </div>
    </div>
  )
}
