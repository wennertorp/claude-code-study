import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CopyButtonProps {
  text: string
  className?: string
}

export function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md transition-all duration-200 ${
        copied
          ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
          : 'bg-slate-700/60 text-slate-400 border border-slate-600/40 hover:bg-slate-700 hover:text-slate-200'
      } ${className}`}
      title="Kopiera prompt"
    >
      {copied ? (
        <>
          <Check size={12} />
          Kopierad
        </>
      ) : (
        <>
          <Copy size={12} />
          Kopiera
        </>
      )}
    </button>
  )
}
