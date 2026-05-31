import { useState } from 'react'
import { MessageSquare, ExternalLink } from 'lucide-react'
import type { PollQuestion as PollQuestionType } from '../../types'

interface PollQuestionProps {
  poll: PollQuestionType
}

export function PollQuestion({ poll }: PollQuestionProps) {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="mt-12 border border-teal-500/25 bg-teal-500/5 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare size={16} className="text-teal-400 flex-shrink-0" />
        <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
          Reflektionsfråga
        </span>
      </div>

      <p className="text-lg font-semibold text-white mb-1">{poll.question}</p>
      <p className="text-sm text-slate-500 mb-4">Fundera själv eller diskutera med kollegor.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {poll.options.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option === selected ? null : option)}
            className={`text-left text-sm px-4 py-2.5 rounded-lg border transition-all duration-150 ${
              selected === option
                ? 'bg-teal-500/20 border-teal-500/60 text-teal-200 font-medium'
                : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:border-teal-500/30 hover:text-slate-100'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {poll.externalUrl && (
        <a
          href={poll.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-sm text-teal-400 hover:text-teal-300 transition-colors"
        >
          <ExternalLink size={14} />
          Öppna i omröstningsverktyg
        </a>
      )}
    </div>
  )
}
