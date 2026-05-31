import { BookOpen, BookOpenCheck } from 'lucide-react'
import { useSpeakerMode } from '../../contexts/SpeakerModeContext'

export function SpeakerToggle() {
  const { isSpeakerMode, toggle } = useSpeakerMode()

  return (
    <button
      onClick={toggle}
      title={isSpeakerMode ? 'Dölj presentatörsnoter' : 'Visa presentatörsnoter'}
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold border shadow-lg transition-all duration-200 ${
        isSpeakerMode
          ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-300 hover:bg-yellow-500/30'
          : 'bg-slate-800/80 border-slate-700/60 text-slate-500 hover:text-slate-300 hover:border-slate-600 backdrop-blur'
      }`}
    >
      {isSpeakerMode ? (
        <>
          <BookOpenCheck size={13} />
          <span className="hidden sm:inline">Stöd på</span>
        </>
      ) : (
        <>
          <BookOpen size={13} />
          <span className="hidden sm:inline">Presentatör</span>
        </>
      )}
    </button>
  )
}
