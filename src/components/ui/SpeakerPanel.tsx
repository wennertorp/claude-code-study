import { Lightbulb, MessageSquare, Terminal } from 'lucide-react'
import { speakerNotes } from '../../data/speakerNotes'

interface SpeakerPanelProps {
  sectionId: string
}

export function SpeakerPanel({ sectionId }: SpeakerPanelProps) {
  const note = speakerNotes[sectionId]
  if (!note) return null

  return (
    <div className="mt-10 border border-slate-700/50 bg-slate-800/30 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb size={14} className="text-teal-400" />
        <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
          Praktiska insikter
        </span>
      </div>

      <div className="mb-4">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
          Lärandemål
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">{note.purpose}</p>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Tänk på detta
          </span>
        </div>
        <ul className="space-y-2">
          {note.talkingPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed">
              <span className="text-teal-600 mt-0.5 flex-shrink-0">·</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {note.pollHint && (
        <div className="border-t border-slate-700/40 pt-3 mt-3">
          <div className="flex items-center gap-1.5 mb-1">
            <MessageSquare size={11} className="text-slate-600" />
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Om reflektionsfrågan
            </span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed italic">{note.pollHint}</p>
        </div>
      )}

      {note.demoHint && (
        <div className="border-t border-slate-700/40 pt-3 mt-3">
          <div className="flex items-center gap-1.5 mb-1">
            <Terminal size={11} className="text-slate-600" />
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Tips för övningen
            </span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed italic">{note.demoHint}</p>
        </div>
      )}
    </div>
  )
}
